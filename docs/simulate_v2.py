#!/usr/bin/env python3
"""
Cigga Go — Balance Simulation v2
Uses real ciggies.app data with format (常规/细支/中支) instead of era.
Rarity derived from price tiers.
"""

import json
import random
import argparse
import os
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from statistics import mean, median, stdev
from typing import Optional

# ─── Rarity from price ──────────────────────────────────────────────────────

def price_to_rarity(price):
    """Assign rarity based on retail price."""
    if price is None or price <= 15:
        return 2  # ★★
    elif price <= 40:
        return 3  # ★★★
    elif price <= 80:
        return 4  # ★★★★
    else:
        return 5  # ★★★★★

RARITY_SCORES = {1: 1, 2: 2, 3: 3, 4: 5, 5: 7}

# ─── Balance Parameters ─────────────────────────────────────────────────────

COMBO_VALUES = {
    "pair": 5,            # 同品牌 2 张
    "three": 12,          # 同品牌 3 张
    "hometown": 3,        # 同产地 2 张
    "old_friends": 8,     # 同产地 3 张
    "format_clash": 4,    # 粗细搭配：集齐3种规格（小甜头）
    "mixed_bag": 8,       # 杂货铺：6张全不同品牌+产地
    "grand_slam_mult": 2, # 大满贯倍率
}

GRAND_SLAM_MIN_CARDS = 2  # 同品牌+同产地+同规格
MIXED_BAG_MIN_CARDS = 6

COUNTERFEIT_CARDS = [
    {"id": "fake_chunghwa", "brand": "中华", "origin": "上海", "format": "常规", "rarity": 5},
    {"id": "fake_panda", "brand": "熊猫", "origin": "上海", "format": "常规", "rarity": 5},
    {"id": "fake_furongwang", "brand": "芙蓉王", "origin": "湖南", "format": "常规", "rarity": 4},
    {"id": "fake_1916", "brand": "黄鹤楼", "origin": "湖北", "format": "细支", "rarity": 5},
    {"id": "fake_nj95", "brand": "南京", "origin": "江苏", "format": "常规", "rarity": 4},
]

ITEM_CARDS = [
    {"id": "item_zippo", "name": "Zippo", "effect": "highest_combo_plus5"},
    {"id": "item_moutai", "name": "茅台酒", "effect": "both_plus4"},
    {"id": "item_mahjong", "name": "麻将桌", "effect": "old_friends_plus15"},
    {"id": "item_casino", "name": "澳门赌场", "effect": "coin_flip"},
    {"id": "item_certificate", "name": "假烟鉴定书", "effect": "immune_counterfeit"},
    {"id": "item_blackmarket", "name": "黑市通行证", "effect": "retrieve_discard"},
    {"id": "item_smuggling", "name": "走私渠道", "effect": "swap_card"},
    {"id": "item_fine", "name": "控烟办罚单", "effect": "halve_highest_combo"},
]

CARDS_PER_PLAYER = {3: 7, 4: 9, 5: 8, 6: 8, 7: 7, 8: 7}
KEEP_PER_ROUND = {3: 6, 4: 8, 5: 7, 6: 7, 7: 6, 8: 6}


@dataclass
class Card:
    id: str
    brand: str
    origin: str
    format: str
    rarity: int
    base_score: int
    card_type: str  # "pack", "counterfeit", "item"
    item_effect: str = ""

    def __repr__(self):
        if self.card_type == "counterfeit":
            return f"[FAKE {self.brand}]"
        if self.card_type == "item":
            return f"[ITEM {self.id}]"
        return f"{self.brand}({self.origin}/{self.format}/★{self.rarity})"


def load_cards(json_path: str) -> list[Card]:
    """Load cards from selected_cards_final.json."""
    with open(json_path) as f:
        data = json.load(f)

    cards = []
    for c in data:
        rarity = price_to_rarity(c.get("price"))
        cards.append(Card(
            id=str(c.get("sku", "")),
            brand=c["brand"],
            origin=c["origin"],
            format=c["format"],
            rarity=rarity,
            base_score=RARITY_SCORES[rarity],
            card_type="pack",
        ))
    return cards


def build_deck(pack_cards: list[Card]) -> list[Card]:
    """Build full deck: packs + counterfeits + items."""
    deck = list(pack_cards)

    for cf in COUNTERFEIT_CARDS:
        deck.append(Card(
            id=cf["id"], brand=cf["brand"], origin=cf["origin"],
            format=cf["format"], rarity=cf["rarity"], base_score=-5,
            card_type="counterfeit",
        ))

    for item in ITEM_CARDS:
        deck.append(Card(
            id=item["id"], brand="", origin="", format="",
            rarity=0, base_score=0, card_type="item",
            item_effect=item["effect"],
        ))

    return deck


# ─── Combo Detection ────────────────────────────────────────────────────────

@dataclass
class ComboResult:
    base_total: int = 0
    brand_combos: dict = field(default_factory=dict)
    brand_bonus: int = 0
    origin_combos: dict = field(default_factory=dict)
    origin_bonus: int = 0
    format_clash: bool = False
    format_clash_bonus: int = 0
    mixed_bag: bool = False
    mixed_bag_bonus: int = 0
    grand_slam: bool = False
    item_bonus: int = 0
    counterfeit_penalty: int = 0
    total: int = 0


def detect_combos(cards: list[Card], item_card: Optional[Card] = None,
                  moutai_partner_bonus: int = 0) -> ComboResult:
    """Detect all combos and compute total score."""
    result = ComboResult()

    packs = [c for c in cards if c.card_type == "pack"]
    counterfeit_count = sum(1 for c in cards if c.card_type == "counterfeit")

    # Base scores
    result.base_total = sum(c.base_score for c in packs)

    # Brand combos
    brand_counts = Counter(c.brand for c in packs)
    for brand, count in brand_counts.items():
        if count >= 3:
            result.brand_combos[brand] = "three"
            result.brand_bonus += COMBO_VALUES["three"]
        elif count == 2:
            result.brand_combos[brand] = "pair"
            result.brand_bonus += COMBO_VALUES["pair"]

    # Origin combos
    old_friends_value = COMBO_VALUES["old_friends"]
    if item_card and item_card.item_effect == "old_friends_plus15":
        old_friends_value = COMBO_VALUES["old_friends"] + 5

    origin_counts = Counter(c.origin for c in packs)
    for origin, count in origin_counts.items():
        if count >= 3:
            result.origin_combos[origin] = "old_friends"
            result.origin_bonus += old_friends_value
        elif count == 2:
            result.origin_combos[origin] = "hometown"
            result.origin_bonus += COMBO_VALUES["hometown"]

    # Format Clash: must have ALL 3 formats (常规 + 细支 + 中支)
    formats = set(c.format for c in packs)
    if "常规" in formats and "细支" in formats and "中支" in formats:
        result.format_clash = True
        result.format_clash_bonus = COMBO_VALUES["format_clash"]

    # Mixed Bag
    if len(packs) >= MIXED_BAG_MIN_CARDS:
        brands_seen = set()
        origins_seen = set()
        unique_count = 0
        for c in packs:
            if c.brand not in brands_seen and c.origin not in origins_seen:
                brands_seen.add(c.brand)
                origins_seen.add(c.origin)
                unique_count += 1
        if unique_count >= MIXED_BAG_MIN_CARDS:
            result.mixed_bag = True
            result.mixed_bag_bonus = COMBO_VALUES["mixed_bag"]

    # Item bonuses
    if item_card:
        if item_card.item_effect == "highest_combo_plus5":
            all_combo_values = []
            for combo_type in result.brand_combos.values():
                all_combo_values.append(COMBO_VALUES["three"] if combo_type == "three" else COMBO_VALUES["pair"])
            for combo_type in result.origin_combos.values():
                all_combo_values.append(old_friends_value if combo_type == "old_friends" else COMBO_VALUES["hometown"])
            if result.format_clash:
                all_combo_values.append(COMBO_VALUES["format_clash"])
            if result.mixed_bag:
                all_combo_values.append(COMBO_VALUES["mixed_bag"])
            if all_combo_values:
                result.item_bonus = 5
        elif item_card.item_effect == "coin_flip":
            result.item_bonus = 10 if random.random() < 0.5 else -5
        elif item_card.item_effect == "both_plus4":
            result.item_bonus = 4
        elif item_card.item_effect == "immune_counterfeit":
            if counterfeit_count > 0:
                counterfeit_count = max(0, counterfeit_count - 1)

    result.item_bonus += moutai_partner_bonus

    # Grand Slam: same brand 3+ cards with all 3 different formats
    brand_formats = defaultdict(set)
    for c in packs:
        brand_formats[c.brand].add(c.format)
    brand_counts_check = Counter(c.brand for c in packs)
    result.grand_slam = any(
        brand_counts_check[brand] >= 3 and len(fmts) >= 3
        for brand, fmts in brand_formats.items()
    )

    # Calculate total
    subtotal = (result.base_total + result.brand_bonus + result.origin_bonus
                + result.format_clash_bonus + result.mixed_bag_bonus + result.item_bonus)

    if result.grand_slam:
        subtotal *= COMBO_VALUES["grand_slam_mult"]

    result.counterfeit_penalty = counterfeit_count * 5
    result.total = subtotal - result.counterfeit_penalty

    return result


# ─── Strategies ──────────────────────────────────────────────────────────────

class Strategy:
    name = "base"
    def pick_card(self, hand, kept):
        raise NotImplementedError
    def final_choice(self, last_two, kept):
        return 0


class RandomStrategy(Strategy):
    name = "Random"
    def pick_card(self, hand, kept):
        return random.randint(0, len(hand) - 1)
    def final_choice(self, last_two, kept):
        return random.randint(0, 1)


class HighScoreStrategy(Strategy):
    name = "HighScore"
    def pick_card(self, hand, kept):
        best_idx, best_score = 0, -999
        for i, c in enumerate(hand):
            score = c.base_score
            if c.card_type == "counterfeit":
                score = -100
            elif c.card_type == "item":
                score = 3
            if score > best_score:
                best_score = score
                best_idx = i
        return best_idx
    def final_choice(self, last_two, kept):
        s0 = last_two[0].base_score if last_two[0].card_type != "counterfeit" else -100
        s1 = last_two[1].base_score if last_two[1].card_type != "counterfeit" else -100
        return 0 if s0 >= s1 else 1


class BrandComboStrategy(Strategy):
    name = "BrandCombo"
    def pick_card(self, hand, kept):
        kept_brands = Counter(c.brand for c in kept if c.card_type == "pack")
        best_idx, best_value = 0, -999
        for i, c in enumerate(hand):
            if c.card_type == "counterfeit":
                value = -100
            elif c.card_type == "item":
                value = 2
            else:
                existing = kept_brands.get(c.brand, 0)
                value = (30 if existing >= 2 else 20 if existing == 1 else 0) + c.base_score
            if value > best_value:
                best_value = value
                best_idx = i
        return best_idx
    def final_choice(self, last_two, kept):
        kept_brands = Counter(c.brand for c in kept if c.card_type == "pack")
        scores = []
        for c in last_two:
            if c.card_type == "counterfeit":
                scores.append(-100)
            elif c.card_type == "item":
                scores.append(2)
            else:
                scores.append(kept_brands.get(c.brand, 0) * 10 + c.base_score)
        return 0 if scores[0] >= scores[1] else 1


class RegionComboStrategy(Strategy):
    name = "RegionCombo"
    def pick_card(self, hand, kept):
        kept_origins = Counter(c.origin for c in kept if c.card_type == "pack")
        best_idx, best_value = 0, -999
        for i, c in enumerate(hand):
            if c.card_type == "counterfeit":
                value = -100
            elif c.card_type == "item":
                value = 2
            else:
                existing = kept_origins.get(c.origin, 0)
                value = (25 if existing >= 2 else 15 if existing == 1 else 0) + c.base_score
            if value > best_value:
                best_value = value
                best_idx = i
        return best_idx
    def final_choice(self, last_two, kept):
        kept_origins = Counter(c.origin for c in kept if c.card_type == "pack")
        scores = []
        for c in last_two:
            if c.card_type == "counterfeit":
                scores.append(-100)
            elif c.card_type == "item":
                scores.append(2)
            else:
                scores.append(kept_origins.get(c.origin, 0) * 10 + c.base_score)
        return 0 if scores[0] >= scores[1] else 1


class BalancedStrategy(Strategy):
    name = "Balanced"

    def _card_value(self, card, kept):
        if card.card_type == "counterfeit":
            return -100
        if card.card_type == "item":
            return 5 if card.item_effect in ("coin_flip", "highest_combo_plus5", "both_plus4") else 3

        kept_packs = [c for c in kept if c.card_type == "pack"]
        kept_brands = Counter(c.brand for c in kept_packs)
        kept_origins = Counter(c.origin for c in kept_packs)

        value = card.base_score
        # Brand synergy
        bc = kept_brands.get(card.brand, 0)
        value += 20 if bc >= 2 else 10 if bc == 1 else 0
        # Origin synergy
        oc = kept_origins.get(card.origin, 0)
        value += 12 if oc >= 2 else 5 if oc == 1 else 0
        # Format clash potential (need all 3 formats)
        kept_formats = set(c.format for c in kept_packs)
        if card.format not in kept_formats and len(kept_formats) == 2:
            value += 8  # completing the set of 3
        elif card.format not in kept_formats and len(kept_formats) == 1:
            value += 4
        # Grand slam potential: same brand, 3+ cards, all different formats
        brand_cards = [c for c in kept_packs if c.brand == card.brand]
        if len(brand_cards) >= 2:
            brand_fmts = set(c.format for c in brand_cards)
            brand_fmts.add(card.format)
            if len(brand_fmts) >= 3:
                value += 30  # completing grand slam
            elif len(brand_fmts) == 2:
                value += 15
        elif len(brand_cards) == 1:
            if brand_cards[0].format != card.format:
                value += 10  # different format = grand slam potential
        return value

    def pick_card(self, hand, kept):
        best_idx, best_value = 0, -999
        for i, c in enumerate(hand):
            v = self._card_value(c, kept)
            if v > best_value:
                best_value = v
                best_idx = i
        return best_idx

    def final_choice(self, last_two, kept):
        v0 = self._card_value(last_two[0], kept)
        v1 = self._card_value(last_two[1], kept)
        return 0 if v0 >= v1 else 1


STRATEGIES = {
    "random": RandomStrategy,
    "highscore": HighScoreStrategy,
    "brand": BrandComboStrategy,
    "region": RegionComboStrategy,
    "balanced": BalancedStrategy,
}

STRATEGY_ROTATION = [
    RandomStrategy, HighScoreStrategy, BrandComboStrategy,
    RegionComboStrategy, BalancedStrategy,
]


# ─── Game Engine ─────────────────────────────────────────────────────────────

def simulate_round(deck, num_players, strategies, pass_left, stats):
    cards_per = CARDS_PER_PLAYER[num_players]

    random.shuffle(deck)
    total_needed = cards_per * num_players
    if total_needed > len(deck):
        total_needed = len(deck)

    hands = []
    for i in range(num_players):
        start = i * cards_per
        end = start + cards_per
        if end > len(deck):
            break
        hands.append(list(deck[start:end]))

    if len(hands) < num_players:
        return [0] * num_players

    remaining_deck = deck[total_needed:]
    kept = [[] for _ in range(num_players)]

    num_picks = cards_per - 2
    for pick_round in range(num_picks):
        picks = []
        for p in range(num_players):
            idx = strategies[p].pick_card(hands[p], kept[p])
            idx = max(0, min(idx, len(hands[p]) - 1))
            picks.append(idx)

        new_hands = [None] * num_players
        for p in range(num_players):
            chosen = hands[p].pop(picks[p])
            has_item = any(c.card_type == "item" for c in kept[p])
            if chosen.card_type == "item" and has_item:
                hands[p].insert(picks[p], chosen)
                for alt_idx, alt_card in enumerate(hands[p]):
                    if alt_card.card_type != "item":
                        chosen = hands[p].pop(alt_idx)
                        break

            kept[p].append(chosen)
            next_player = (p + 1) % num_players if pass_left else (p - 1) % num_players
            new_hands[next_player] = hands[p]

        hands = new_hands

    for p in range(num_players):
        if len(hands[p]) >= 2:
            keep_idx = strategies[p].final_choice(hands[p], kept[p])
            keep_idx = max(0, min(keep_idx, 1))
            kept[p].append(hands[p][keep_idx])
        elif len(hands[p]) == 1:
            kept[p].append(hands[p][0])

    if remaining_deck:
        grab_card = remaining_deck[0]
        grabber = random.randint(0, num_players - 1)
        kept[grabber].append(grab_card)

    scores = []
    for p in range(num_players):
        player_cards = kept[p]
        item_card = next((c for c in player_cards if c.card_type == "item"), None)
        result = detect_combos(player_cards, item_card, 0)
        scores.append(result.total)

        for combo_type in result.brand_combos.values():
            stats["combo_pair" if combo_type == "pair" else "combo_three"] += 1
        for combo_type in result.origin_combos.values():
            stats["combo_hometown" if combo_type == "hometown" else "combo_old_friends"] += 1
        if result.format_clash:
            stats["combo_format_clash"] += 1
        if result.mixed_bag:
            stats["combo_mixed_bag"] += 1
        if result.grand_slam:
            stats["combo_grand_slam"] += 1
        if result.counterfeit_penalty > 0:
            stats["counterfeit_hits"] += result.counterfeit_penalty // 5
        stats["round_scores"].append(result.total)

    return scores


def simulate_game(pack_cards, num_players, strategies, stats):
    totals = [0] * num_players
    for round_num in range(3):
        deck = build_deck(pack_cards)
        round_scores = simulate_round(
            deck, num_players, strategies,
            [True, False, True][round_num], stats
        )
        for p in range(num_players):
            totals[p] += round_scores[p]
    return totals


def run_simulation(pack_cards, num_games, num_players, strategy_mode="mixed"):
    if strategy_mode == "mixed":
        player_strategies = [STRATEGY_ROTATION[i % len(STRATEGY_ROTATION)]() for i in range(num_players)]
    elif strategy_mode in STRATEGIES:
        player_strategies = [STRATEGIES[strategy_mode]() for _ in range(num_players)]
    else:
        player_strategies = [BalancedStrategy() for _ in range(num_players)]

    stats = {
        "combo_pair": 0, "combo_three": 0,
        "combo_hometown": 0, "combo_old_friends": 0,
        "combo_format_clash": 0, "combo_mixed_bag": 0,
        "combo_grand_slam": 0, "counterfeit_hits": 0,
        "round_scores": [],
    }

    strategy_scores = defaultdict(list)
    strategy_wins = Counter()

    for _ in range(num_games):
        totals = simulate_game(pack_cards, num_players, player_strategies, stats)
        for p in range(num_players):
            strategy_scores[player_strategies[p].name].append(totals[p])
        max_score = max(totals)
        winners = [p for p in range(num_players) if totals[p] == max_score]
        strategy_wins[player_strategies[random.choice(winners)].name] += 1

    return {
        "num_games": num_games,
        "num_players": num_players,
        "strategy_mode": strategy_mode,
        "strategies": [s.name for s in player_strategies],
        "strategy_scores": dict(strategy_scores),
        "strategy_wins": dict(strategy_wins),
        "stats": stats,
        "total_rounds": num_games * 3 * num_players,
    }


def print_report(results):
    print()
    print("=" * 60)
    print("  Cigga Go — Balance Simulation Report v2")
    print("=" * 60)
    print(f"  Games: {results['num_games']} | Players: {results['num_players']} | Mode: {results['strategy_mode']}")
    print(f"  Strategies: {', '.join(results['strategies'])}")
    print("=" * 60)

    print("\n── Strategy Performance ──────────────────────────────────")
    print(f"  {'Strategy':<14} {'Win%':>6}  {'Avg':>7}  {'Med':>7}  {'StDev':>7}  {'Min':>5}  {'Max':>5}")
    print(f"  {'─' * 13}  {'─' * 5}  {'─' * 6}  {'─' * 6}  {'─' * 6}  {'─' * 4}  {'─' * 4}")

    total_games = results["num_games"]
    for sname in dict.fromkeys(results["strategies"]):
        scores = results["strategy_scores"].get(sname, [])
        wins = results["strategy_wins"].get(sname, 0)
        if not scores:
            continue
        win_pct = wins / total_games * 100
        avg = mean(scores)
        med = median(scores)
        sd = stdev(scores) if len(scores) > 1 else 0
        lo, hi = min(scores), max(scores)
        print(f"  {sname:<14} {win_pct:5.1f}%  {avg:7.1f}  {med:7.1f}  {sd:7.1f}  {lo:5}  {hi:5}")

    stats = results["stats"]
    total_rounds = results["total_rounds"]
    print("\n── Combo Frequency (per player-round) ───────────────────")
    combos = [
        ("Pair (对子)", stats["combo_pair"]),
        ("Three-of-a-Kind (三条)", stats["combo_three"]),
        ("Hometown (同乡)", stats["combo_hometown"]),
        ("Old Friends (老乡见老乡)", stats["combo_old_friends"]),
        ("Format Clash (粗细搭配)", stats["combo_format_clash"]),
        ("Mixed Bag (杂货铺)", stats["combo_mixed_bag"]),
        ("Grand Slam (大满贯)", stats["combo_grand_slam"]),
    ]
    for name, count in combos:
        pct = count / total_rounds * 100 if total_rounds > 0 else 0
        bar = "█" * int(pct / 2)
        print(f"  {name:<28} {pct:5.1f}%  {bar}")

    hit_rate = stats["counterfeit_hits"] / (results["num_games"] * 3 * 5) * 100
    avg_per_round = stats["counterfeit_hits"] / (results["num_games"] * 3)
    print(f"\n── Counterfeit Stats ────────────────────────────────────")
    print(f"  Total hits:      {stats['counterfeit_hits']}")
    print(f"  Hit rate:        {hit_rate:.1f}%")
    print(f"  Avg per round:   {avg_per_round:.1f}")

    round_scores = stats["round_scores"]
    if round_scores:
        print(f"\n── Round Score Distribution ──────────────────────────────")
        print(f"  Min: {min(round_scores)} | Max: {max(round_scores)} | Avg: {mean(round_scores):.1f} | Med: {median(round_scores):.1f} | StDev: {stdev(round_scores):.1f}")

        print(f"\n  Score histogram:")
        buckets = defaultdict(int)
        for s in round_scores:
            bucket = (s // 10) * 10
            buckets[bucket] += 1
        for bucket in sorted(buckets.keys()):
            bar_len = int(buckets[bucket] / len(round_scores) * 100)
            bar = "█" * bar_len
            print(f"  {bucket:4d}-{bucket + 9:4d}: {bar} ({buckets[bucket]})")

    print(f"\n── Balance Check ────────────────────────────────────────")
    warnings = []
    for sname, wins in results["strategy_wins"].items():
        win_pct = wins / total_games * 100
        if win_pct > 40:
            warnings.append(f"⚠ {sname} has {win_pct:.1f}% win rate (>40%)")

    gs_pct = stats["combo_grand_slam"] / total_rounds * 100 if total_rounds > 0 else 0
    if gs_pct > 3:
        warnings.append(f"⚠ Grand Slam at {gs_pct:.1f}% — too easy (target: 0.5-2%)")
    elif gs_pct < 0.1:
        warnings.append(f"⚠ Grand Slam at {gs_pct:.2f}% — nearly impossible (target: 0.5-2%)")

    if warnings:
        for w in warnings:
            print(f"  {w}")
    else:
        print("  ✓ No obvious balance issues detected")

    print()
    print("=" * 60)


def main():
    parser = argparse.ArgumentParser(description="Cigga Go Balance Simulator v2")
    parser.add_argument("--games", type=int, default=1000)
    parser.add_argument("--players", type=int, default=5, choices=range(3, 8))
    parser.add_argument("--strategy", default="mixed",
                        choices=["mixed", "random", "highscore", "brand", "region", "balanced"])
    parser.add_argument("--seed", type=int, default=None)
    args = parser.parse_args()

    if args.seed is not None:
        random.seed(args.seed)

    script_dir = os.path.dirname(os.path.abspath(__file__))
    json_path = os.path.join(script_dir, "selected_cards_final.json")
    if not os.path.exists(json_path):
        print(f"Error: Cannot find {json_path}")
        return

    pack_cards = load_cards(json_path)
    print(f"Loaded {len(pack_cards)} cards")

    # Show format/rarity distribution
    from collections import Counter
    fmt_dist = Counter(c.format for c in pack_cards)
    rar_dist = Counter(c.rarity for c in pack_cards)
    print(f"  Format: {dict(fmt_dist)}")
    print(f"  Rarity: {dict(sorted(rar_dist.items()))}")
    print(f"Simulating {args.games} games with {args.players} players...")

    results = run_simulation(pack_cards, args.games, args.players, args.strategy)
    print_report(results)


if __name__ == "__main__":
    main()
