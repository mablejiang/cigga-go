# Cigga Go Physical Card Game — Game Design Document (GDD)

**Version:** 1.0.0
**Date:** 2026-03-22
**Based on:** CIGGATRO Digital Edition (ciggies.app)

---

## Table of Contents

1. [Design Vision](#1-design-vision)
2. [Core Parameters](#2-core-parameters)
3. [Social Design Overview](#3-social-design-overview)
4. [Collectibility Design Philosophy](#4-collectibility-design-philosophy)
5. [Core Mechanic: Card Drafting](#5-core-mechanic-card-drafting)
6. [Round Structure](#6-round-structure)
7. [Card System](#7-card-system)
8. [Combo System & Scoring](#8-combo-system--scoring)
9. [Counterfeit System (Social Core)](#9-counterfeit-system-social-core)
10. [Item Card System](#10-item-card-system)
11. [Numerical Balance](#11-numerical-balance)
12. [Card Face Design](#12-card-face-design)
13. [Collectibility & Craftsmanship](#13-collectibility--craftsmanship)
14. [Component List](#14-component-list)
15. [Expansion Design](#15-expansion-design)

---

## 1. Design Vision

### 1.1 One-Line Summary

**Cigga Go is a drafting-based party card game themed around Chinese cigarette culture. Players collect cigarette pack cards, build three-dimensional combos across brand, region, and format to score points, while watching out for counterfeits and leveraging item cards — balancing strategy and social interaction.**

### 1.2 Design Goals

- **Social first, strategy as the backbone**: Every mechanic should naturally spark conversation, laughter, or confrontation between players. Rules are a tool for generating social moments, not an end in themselves.
- **2-minute teach, 20-session depth**: A first-timer can play after reading the rules once, but brand synergies, hate-drafting, and counterfeit mind games provide substantial replay value.
- **The cards ARE the product**: The cultural value of real cigarette pack imagery, the emotional resonance of the flavor text, the collectible appeal of premium finishes — even without playing the game, this card set is worth owning.

### 1.3 Core Experience

A session of Cigga Go should feel like hanging out with friends over a smoke break:

- The first half is quiet card selection, like a seasoned smoker browsing brands — "This Liqun is solid", "I'll save the Yunyan for a Yunnan set"
- The second half is reveal and scoring, like cracking open a mystery box — "I got three-of-a-kind Furongwang!", "Who passed me this fake Chunghwa?!"
- After the game, the conversation isn't about rules — it's "Why didn't you hate-draft my Yuxi?" and "Next game I'm going for the Grand Slam"

### 1.4 Design Inspirations

| Source | What We Borrowed | What We Didn't |
|--------|-----------------|----------------|
| **Balatro** | Multi-dimensional combo concept (brand/region/format) | Complex multiplicative scoring, single-player roguelike loop |
| **Sushi Go Party** | Drafting mechanic, simultaneous action, 3-8 player support | Overly simple scoring (we added Grand Slam and counterfeits) |
| **Chinese Tobacco Culture** | Brand recognition, regional identity, face economy, social smoking rituals | Encouraging smoking (this is a cultural game, not a tobacco ad) |

---

## 2. Core Parameters

| Parameter | Value | Design Rationale |
|-----------|-------|-----------------|
| Player Count | 3-8 | Covers small gatherings to full tables. Drafting inherently scales with player count |
| Game Length | 10-25 minutes | Quick games 10-15 min (3-4 players), full table ~20-25 min |
| Age Rating | 14+ | Theme involves tobacco culture, not suitable for young children |
| Teach Time | 2-3 minutes | Hard ceiling for party games — beyond 5 minutes of teaching, players disengage |
| Replayability | High | Randomized deck subsets, drafting variance, and counterfeit mind games ensure variety |

---

## 3. Social Design Overview

This section consolidates the social design logic in one place. Every mechanic in Cigga Go has been scrutinized through the lens of "What kind of social moment does this create?" — if a mechanic doesn't generate social interaction, it should be simplified or removed. Subsequent sections will detail the specific rules for each mechanic.

### 3.1 Design Philosophy: Rules Serve Social Interaction

Cigga Go is not a strategy game that happens to have social elements — it is a **party game that uses strategic mechanics to drive social interaction**.

This distinction matters. It means:
- When "interesting rules" and "interesting social moments" conflict, **social wins**
- A mechanic that generates laughter and debate is more valuable than one that is "cleverly designed but makes everyone silently calculate scores"
- The complexity ceiling for rules is determined by "does it interrupt social rhythm," not "does it add strategic depth"

### 3.2 Social Moment Map

Social interaction in a Cigga Go session is not evenly distributed — it has **quiet periods** and **burst periods** that alternate like breathing, creating rhythm.

```
  Social Intensity
  ^
  #                                          ####  <- Counterfeit reveal / Grab / Grand Slam
  #                                     #########
  #                                ##############
  #            #######        #####################
  #       #############  ##########################
  #  ################################################
  +-------------------------------------------------------> Time
    Deal  Pick  Pass  Pick  Pass ... Final Choice  Reveal+Score  Grab
    <---- Quiet Strategy Phase ---->  <---- Social Burst Phase -->
```

**Quiet Strategy Phase (Pick + Pass):**
- Players focus on their hands, occasionally glancing at others' expressions
- Social interaction is whispered — "He picked so fast, must be a good card"
- This quiet period is **necessary** — it builds energy for the burst that follows

**Social Burst Phase (Reveal + Score + Grab):**
- All hidden information is simultaneously exposed, generating a wave of reactions
- "Who passed the counterfeit?", "Grand Slam!", "Grab that card!"
- Every round ends on a climax

This rhythm avoids two extremes: all-quiet (boring) and all-loud (exhausting).

### 3.3 Six Social Engines

Cigga Go has six distinct mechanics generating social interaction, each targeting a different type of social experience:

#### Engine 1: Hate-Drafting (Inherent to Drafting)

**Social type:** Psychological dueling, silent reads

The drafting mechanic naturally produces "reading people" social dynamics. You see a great card, but you know the next player is building the same set:

- "She took two Yunnan cards last round — do I hate-draft this Yuxi?"
- "He's picking so slowly — is he genuinely stuck or putting on an act?"

This social interaction is **quiet and continuous** — it won't generate screams or laughter, but it gives every card pick the texture of "playing against a person, not a system."

**Alternating pass direction** reinforces this: Round 1 you duel with your left neighbor, Round 2 it's the right neighbor, Round 3 back again. Different "opponents" each round spreads social engagement across the entire table. (See [Section 5](#5-core-mechanic-card-drafting) for drafting mechanics.)

#### Engine 2: Counterfeit Mind Games

**Social type:** Deception, discovery, accusation, laughter

Counterfeits are this game's **strongest social engine** because they generate interaction at every phase:

| Phase | Social Moment |
|-------|---------------|
| Picking | "This Chunghwa looks... wait, it's FAKE!" -> self-deprecating discovery moment |
| Passing | "Should I pass it to the next player?" -> moral dilemma of deception |
| Reveal | "Who gave me the counterfeit?!" -> table-wide suspect hunt |
| Inspection | "Your expression was suspicious — I'm inspecting!" -> direct confrontation |

The counterfeit's social value lies in **information asymmetry** — you know you passed the fake, but the recipient doesn't know it was you. This asymmetry naturally triggers suspicion, denial, and laughter.

(See [Section 9](#9-counterfeit-system-social-core) for detailed counterfeit mechanics.)

#### Engine 3: The Grab Round

**Social type:** Physical interaction, competition, instant reactions

After scoring each round, **1 card is flipped from the remaining deck** and all players simultaneously slap the table to grab it.

**Rules:**
- After scoring is complete, flip the top card of the remaining deck
- All players simultaneously reach to slap the card — **first to touch it claims it**
- The claimed card **counts toward this round's score** (potentially changing rankings)
- If a counterfeit is flipped — the first to grab it must eat the -5 points (punishing fast hands)

**Why this phase exists:**
- Drafting and scoring are "mental activities" — the Grab adds **physical interaction**, breaking the rhythm
- Everyone simultaneously reaching for a card is a natural "high-energy moment" with built-in laughter and chaos
- A counterfeit might appear, adding "should I even grab?" hesitation — fast hands might backfire
- From strategy to physicality to laughter, this 5-second phase pushes each round's finale to a climax

**Social scenarios:**
- A high-rarity card flips -> everyone lunges -> the winner cheers
- A counterfeit flips -> someone reflexively grabs it -> entire table erupts in laughter -> "You grabbed too fast!"
- Two people slap simultaneously -> "I got it first!" "No you didn't!" -> debate, but joyful debate

#### Engine 4: Item Card Social Effects

**Social type:** Cooperation, aggression, gambling, negotiation

More than half the item cards are designed with effects that **require interaction with other players**:

| Item | Social Action | Generated Dialogue |
|------|--------------|-------------------|
| Moutai Liquor | Choose someone to cooperate with, +4 each | "I'll pour you a drink" -> "Why did you choose them and not me?" |
| Smuggling Route | Force a card swap with another player | "I'm taking your Chunghwa" -> "I don't want to swap! But the rules say I must..." |
| Smoking Ban Fine | Target one player to weaken | "You scored highest this round so..." -> "Are we even friends?" |
| Macau Casino | Entire table watches a coin flip | "Heads heads heads!" -> table-wide countdown -> result revealed |

These item cards create **directed social interactions** — not a generic "everyone's playing," but "something specific happened between you and one particular person." This one-on-one interaction is deeper and more memorable.

(See [Section 10](#10-item-card-system) for the item card system.)

#### Engine 5: Final Choice Information Exposure

**Social type:** Information deduction, teasing

The "keep 1, discard 1" mechanic (with face-up discards) at the end of each round appears to be a simple rule, but it's a carefully designed social trigger:

- What you discard reveals "what you didn't want," which indirectly reveals "what you did want"
- "You threw away a Furongwang? Did you complete three-of-a-kind?!" -> pre-scoring intelligence analysis
- "You discarded a five-star card?!" -> maybe it was counterfeit -> speculation and discussion

Discard information is **public but requires interpretation** — it doesn't give you the answer directly, but gives you a clue. This "clue-based social interaction" is more interesting than simply revealing cards, because it leaves room for discussion.

#### Engine 6: Grand Slam as a Table-Wide Climax

**Social type:** Collective awe, legendary moments

The Grand Slam (x2) is numerically a scoring rule, but experientially it is a **social event**.

Because it's nearly impossible to achieve, the Grand Slam rarely appears in any given session. But the moment someone announces "I have a Grand Slam" during scoring:
- The entire table demands verification — "Show me! Is that real?"
- After confirmation comes a collective reaction — cheering, groaning, disbelief
- This moment becomes a "legend" — retold repeatedly, becoming fuel for the next session's conversation

The Grand Slam's social value isn't in the moment it appears, but in **every moment it might appear**. Every time someone stares at their hand and hesitates, others around the table wonder: "Are they going for the Grand Slam?"

(See [Section 8](#8-combo-system--scoring) for the combo system.)

### 3.4 Social vs. Rules Complexity Balance

Every element of Cigga Go has been evaluated through a social-rules balance lens:

| Element | Rules Complexity | Social Factor | Balance Assessment |
|---------|-----------------|---------------|-------------------|
| Drafting picks | Low (pick 1, pass) | Medium (reading opponents, hate-drafting) | Simple rules, social emerges naturally |
| Combo scoring | Medium (lookup table, addition) | Low (individual calculation) | Most complex rules, but confined to 1-2 min per round (see [Section 8](#8-combo-system--scoring)) |
| Grand Slam | Low (single multiplier) | **High** (table erupts) | Minimal rules (x2), maximum social payoff (see [Section 8](#8-combo-system--scoring)) |
| Counterfeit reveal | Low (-5 points) | **Very High** (accusations + laughter) | Best balance point — simplest mechanic generates strongest social (see [Section 9](#9-counterfeit-system-social-core)) |
| Inspection (optional) | Low (flip card + judge) | **Very High** (bluff + confrontation) | Optional rule — doesn't add to base teach time (see [Section 9](#9-counterfeit-system-social-core)) |
| Grab round | Low (slap card) | **Very High** (physical interaction + laughter) | Zero rules explanation cost, pure physical engagement |
| Final discard | Low (choose 1 of 2) | Medium (information exposure) | Simple rule triggers deductive social interaction |
| Item: Moutai | Low (choose player, +4 each) | **High** (who? why?) | One-sentence rule drives deep social dynamics (see [Section 10](#10-item-card-system)) |
| Item: Casino | Low (coin flip) | **High** (everyone watches) | Zero strategic burden, pure atmosphere mechanic (see [Section 10](#10-item-card-system)) |
| Item: Fine | Low (target player, weaken) | **High** (aggressive social) | Simple rule but strong emotional response (see [Section 10](#10-item-card-system)) |

**Key observation:**
- The mechanics with the highest social impact (counterfeits, grab, inspection) are precisely the ones with the simplest rules
- The most rule-complex element (combo scoring) has the lowest social factor — but it's compressed into 1-2 minutes per round, never long enough to interrupt the social flow
- No element is both "complex rules" and "zero social" — if such an element existed, it would signal a design problem

### 3.5 Social Rhythm Design

A full session of Cigga Go (3 rounds) has a social rhythm like three waves:

**Round 1: Icebreaker**
- Players are still learning the rules, picking slowly
- Social interaction comes from "discovery" — "I know this brand! My dad smokes this one"
- The first time counterfeits appear produces the strongest reaction ("There are FAKES?!") (see [Section 9](#9-counterfeit-system-social-core) for detailed counterfeit mechanics)
- The Grab round breaks the ice — the moment everyone reaches out, all awkwardness vanishes

**Round 2: Competition**
- Players develop strategies, hate-drafting awareness increases
- Social shifts from "discovery" to "conflict" — "Don't pass them that! They're building three-of-a-kind!"
- Aggressive item card usage increases ("Smoking Ban Fine for you! You scored highest last round") (see [Section 10](#10-item-card-system) for the item card system)
- Pass direction changes, creating new neighbor dynamics and fresh conversations

**Round 3: Showdown**
- Scores are close, every card matters
- Social interaction peaks — "Please don't hate-draft me", "I'm going for Grand Slam, no regrets" (see [Section 8](#8-combo-system--scoring) for the combo system)
- Scoring is the tensest, potential comebacks keep everyone on edge
- Final rankings revealed — winners celebrate, losers debrief ("It was that counterfeit in Round 2 that killed me")

### 3.6 Social Design Boundaries

Some "seemingly social" mechanics were intentionally excluded because they would **harm the experience**:

| Excluded Mechanic | Why |
|-------------------|-----|
| **Forced discussion / no-talking rounds** | Mandatory social interaction backfires — social moments should emerge naturally |
| **Vote to eliminate someone's cards** | The minority being voted on has a terrible experience |
| **Open trading / free market** | Free trading among 8 players would make game time spiral out of control |
| **Complex alliance mechanics** | Party games shouldn't require remembering "who allied with whom" |
| **Too many aggressive items** | 1-2 attack cards add spice; too many make people not want to play |

**Principle:** A good social mechanic makes people **want to keep playing**. If a mechanic makes someone feel "targeted" or "overwhelmed," it should be cut — no matter how clever it looks on paper.

---

## 4. Collectibility Design Philosophy

### 4.1 Why Collectibility Matters Alongside Gameplay

Cigga Go's cards are not merely game components — they are a miniature museum of Chinese tobacco culture. The real cigarette pack images on every card come from ciggies.app, and carry inherent cultural and collectible value.

This means Cigga Go serves two types of users:
- **Players**: Who use these cards for drafting, building combos, and social interaction
- **Collectors**: Who are drawn to the aesthetics of cigarette pack designs, the cultural memories they evoke, and the craftsmanship — making the set worth owning even without playing the game

These two goals are not in conflict — good game card design can serve both simultaneously. Brand names and scores on the card face serve gameplay function; pack imagery and flavor text serve the collector's emotional experience; and differentiated craftsmanship across rarity tiers unifies both goals in physical touch and feel.

### 4.2 Rarity Tier Philosophy

Cigga Go's rarity is determined by real-world price, with each tier receiving different physical craftsmanship treatment so players can feel the difference from their **fingertips**:

| Rarity | Price Range | Base Score | Gameplay Role | Physical Feel Goal |
|--------|-----------|-----------|--------------|-------------------|
| ★★ | <=15 yuan | 2 | Foundation cards (~22%), the building blocks of combos | Light and smooth, suited for rapid card fanning |
| ★★★ | 16-40 yuan | 3 | Core cards (~54%), versatile middle ground | Similar to ★★ but slightly thicker |
| ★★★★ | 41-80 yuan | 5 | Premium cards (~16%), high scores but fewer in pool | Frosted texture + silver foil; noticeably "different" the moment you pick one up |
| ★★★★★ | 81+ yuan | 7 | Legendary cards (~8%), very high base scores | Velvet lamination + holographic + limited-edition numbering; feels like a "premium card" from the fingertips alone |

**Core principle:** Cards of different rarities should be distinguishable by **touch and visual impact** — the moment you draw a Legendary card, your fingertips should tell you something special just happened.

**Historical card collector premium:** Historical/discontinued cards in the Collector's Limited Pack receive +1 rarity (e.g., a card that would be ★★ becomes ★★★), reflecting the scarcity premium of discontinued brands.

### 4.3 Cards as Cultural Artifacts

Every Cigga Go card carries more than game data — it carries a cultural memory:
- The pack imagery comes from real tobacco packaging designs, documenting decades of Chinese visual design evolution
- Flavor text (such as "State banquet standard" or "The working class choice") gives each card an emotional story
- The Format attribute (Regular/Slim/Middle) showcases the diversification trend in Chinese tobacco products

This cultural artifact positioning means Cigga Go cards will not be treated as disposable game components — they are worth browsing, discussing, and collecting.

(See [Section 13](#13-collectibility--craftsmanship) for detailed SKU-level craftsmanship specs and expansion pack collectibility design.)

---

## 5. Core Mechanic: Card Drafting

### 5.1 Why Drafting

Card drafting is the optimal mechanic for this project:

| Requirement | How Drafting Meets It |
|-------------|----------------------|
| 3-8 players | Simultaneous action, naturally elastic player count |
| 10-25 minutes | Zero downtime — every second involves a decision |
| Social interaction | "Reading" opponents — guessing what your neighbor wants, deciding whether to hate-draft |
| Strategic depth | Every pick is a multi-dimensional trade-off (what do I want vs. what am I leaving for the next player) |
| Simple to teach | "Pick one card, pass the rest" — a one-sentence rule |

### 5.2 How Drafting Creates Social Moments

Drafting is not a solitary exercise. Social interaction naturally emerges at these moments:

1. **Passing psychology**: "I know you're building a Yunnan set, but I also want this Yuxi..."
2. **Simultaneous reveal reactions**: "You also took a Furongwang? How am I supposed to build my pair now?"
3. **Counterfeit passing**: "Who passed me this fake Chunghwa?!" -> entire table laughs
4. **Hate-draft debates**: "Why didn't you block his card? Now he's got three-of-a-kind!"

### 5.3 Alternating Pass Direction

- Round 1: Pass **left**
- Round 2: Pass **right**
- Round 3: Pass **left**

**Why?** If you always pass left, your strategic interaction is limited to your two immediate neighbors. Alternating directions changes who your "threat target" is each round, spreading social engagement across the entire table. This is a proven design validated by Sushi Go.

---

## 6. Round Structure

### 6.1 Full Game Flow

```
+- Setup -------------------------------------------------------+
|  1. Based on player count, randomly draw cards from            |
|     the full pool for this session (see 6.2)                   |
|  2. Shuffle in counterfeit cards and item cards                |
|  3. Shuffle thoroughly                                         |
+----------------------------------------------------------------+
                          |
                          v
+- Round 1 (Pass Left) -----------------------------------------+
|  1. Deal: Each player receives N cards (see 6.2)              |
|  2. Pick: All players simultaneously pick 1 card,             |
|     place it face-down in front of them                        |
|  3. Pass: Hand remaining cards to the player on               |
|     your left                                                  |
|  4. Reveal: All players simultaneously flip their             |
|     picked card face-up                                        |
|  5. Repeat 2-4 until only 2 cards remain in hand              |
|  6. Final Choice: Keep 1, discard 1 (face-up)                 |
|  7. Score: Tally all collected cards for this round            |
|  8. Grab: Flip 1 card from remaining deck -- all              |
|     players slap to claim it                                   |
|  9. Clear: Return all cards to the pool                        |
+----------------------------------------------------------------+
                          |
                          v
          Round 2 (Pass Right) -> Round 3 (Pass Left)
                          |
                          v
             Cumulative total across 3 rounds wins
```

### 6.2 Player Count & Cards Dealt

| Players | Cards Dealt / Round | Cards Kept / Round | Cards Used / Round | Cards Used / Game |
|---------|--------------------|--------------------|-------------------|-------------------|
| 3 | 7 | 6 | 21 | 63 |
| 4 | 9 | 8 | 36 | 108 |
| 5 | 8 | 7 | 40 | 120 |
| 6 | 8 | 7 | 48 | 144 |
| 7 | 7 | 6 | 49 | 147 |
| 8 | 7 | 6 | 56 | 168 |

**Design notes:**
- 3-player games deal 7 cards and keep 6 (rather than 9/8), keeping a tighter pace consistent with 7-8 player games
- 4-6 player configurations remain unchanged, thoroughly validated through testing
- More players = fewer cards per person, ensuring round duration doesn't scale with player count
- The base set (147 cards) supports 3-7 player games; adding the International Expansion (+21 cards = 168) enables 8-player games

### 6.3 The "Final Choice" Design

At the end of each round, players have 2 cards remaining and must keep 1, discard 1. The discarded card is placed **face-up on the table**.

**Why face-up discards?**
- Information exposure: Everyone sees what you gave up, and can infer what you kept
- Social trigger: "You threw away a Soft Chunghwa?!" "Maybe it was counterfeit, who knows"
- Strategic value: Observing discards helps deduce what remains in the card pool

### 6.4 Time Breakdown per Round

Example with 6 players (8 cards each):

| Step | Duration | Notes |
|------|----------|-------|
| View + Pick (first pick slightly slower) | ~15 sec/pick x 7 picks | Simultaneous, ~2 minutes total |
| Final Choice | ~10 seconds | Binary choice |
| Scoring | ~1-2 minutes | Pure addition, players score independently with cross-checking |
| **Single round total** | **~4-5 minutes** | |
| **Three rounds total** | **~12-15 minutes** | With setup and table talk, ~18-22 minutes |

---

## 7. Card System

### 7.1 Card Type Overview

| Type | Count | Card Back Color | Function |
|------|-------|-----------------|----------|
| **Cigarette Pack Cards** | 134 | Red | Core cards — collect and combine for points |
| **Counterfeit Cards** | 5 | Red (identical to packs) | Negative-point traps, social bombs |
| **Item Cards** | 8 | Blue | Special effects, strategic variety |
| | **147 total** | | Base set total |

### 7.2 Cigarette Pack Attributes — Three-Dimensional System

Each cigarette pack card has **3 core dimensions + 2 numerical attributes**, all printed on the card face:

| Attribute | Description | Gameplay Impact |
|-----------|-------------|-----------------|
| **Brand** | Cigarette brand name (Chunghwa, Yuxi, etc.), 47 brands total | Matching criterion for Pair / Three-of-a-Kind combos |
| **Region** | Production province (Shanghai, Yunnan, etc.), 24 provinces total | Matching criterion for Hometown / Old Friends combos |
| **Format** | Regular / Slim / Middle | Format Clash combo + Grand Slam condition |
| **Rarity** | ★★ through ★★★★★ (determined by price) | Determines base score and card craftsmanship tier |
| **Base Score** | 2 / 3 / 5 / 7 | Scoring foundation |

**Core advantages of the three-dimensional design:**
- **Brand + Region** are the two most culturally recognizable dimensions — "Chunghwa is from Shanghai", "Furongwang is from Hunan" — even non-smokers have this awareness
- **Format** (Regular/Slim/Middle) corresponds to the physical thickness of the cigarette stick, making it intuitive and easy to understand
- Three dimensions produce rich combo possibilities without overwhelming players with cognitive load during card selection

### 7.3 Format Distribution

Format is the third dimension, reflecting the product diversification trend in China's tobacco industry in recent years.

| Format | Chinese | Cards in Pool | Share |
|--------|---------|--------------|-------|
| **Regular** | 常规 — traditional standard cigarette | 45 | 33.6% |
| **Slim** | 细支 — trendy slim cigarette | 45 | 33.6% |
| **Middle** | 中支 — between regular and slim | 44 | 32.8% |

**Design intent:** The three formats are distributed nearly evenly (45/45/44), ensuring the "Format Clash" combo (requiring all three formats) is achievable at a reasonable difficulty level.

### 7.4 Brand Distribution in the Card Pool

Brand distribution directly affects combo feasibility and is the foundation of numerical balance. The base set includes **47 domestic brands**.

**Core Brands (4-5 cards each) — Easy to build combos:**

| Brand | Region | Count | Design Intent |
|-------|--------|-------|---------------|
| Chunghwa (中华) | Shanghai | 5 | China's #1 brand, highest recognition |
| Yuxi (玉溪) | Yunnan | 5 | Yunnan's flagship |
| Furongwang (芙蓉王) | Hunan | 5 | Hunan's flagship |
| Huanghelou (黄鹤楼) | Hubei | 5 | Hubei's flagship |
| Liqun (利群) | Zhejiang | 5 | Zhejiang's flagship |
| Yunyan (云烟) | Yunnan | 5 | Yunnan's second brand |
| Septwolves (七匹狼) | Fujian | 5 | Fujian's flagship |

These brands have 4-5 cards each, meaning **three-of-a-kind is theoretically possible** but requires competing with other players during the draft. Core brands typically cover all three formats (Regular/Slim/Middle), creating Grand Slam possibilities.

**Secondary Brands (3-4 cards each) — Pairs achievable, three-of-a-kind needs luck:**

Jiaozi (Sichuan), Shuangxi (Guangdong), Baisha (Hunan), Huangshan (Anhui), Nanjing (Jiangsu), Goldleaf (Henan), Suyan (Jiangsu), Hongtashan (Yunnan), Double Happiness (Shanghai), Guiyan (Guizhou), and others.

**Rare Brands (2 cards each) — Pair is the ceiling:**

Panda (Shanghai), Grand Chongqiu (Yunnan), Hetianxia (Hunan), Huanghelou 1916 (Hubei), Nanjing 95 (Jiangsu), Lotus, and others.

These brands have only 2 cards, making a pair the best-case scenario. However, they tend to be high-rarity (★★★★-★★★★★) with substantial base scores per card.

**Design principle:** Core brands are numerous but low base score (★★-★★★). Rare brands are scarce but high base score (★★★★-★★★★★). This creates a strategic tension between combo-chasers and high-card collectors.

### 7.5 Region Distribution

Region distribution determines how achievable "Hometown" combos are. The base set covers **24 provinces**.

| Region | Cards in Pool | Brands Included | Design Intent |
|--------|--------------|-----------------|---------------|
| **Yunnan** | ~18 | Yuxi, Yunyan, Hongtashan, Grand Chongqiu | Largest region — easy to combo, but everyone's competing for it |
| **Shanghai** | ~16 | Chunghwa, Double Happiness, Panda, Mudan | Premium cigarette hub |
| **Hunan** | ~11 | Furongwang, Baisha, Hetianxia | Medium density |
| **Hubei** | ~9 | Huanghelou, Huanghelou 1916 | Brand-concentrated |
| **Jiangsu** | ~9 | Nanjing, Suyan, Nanjing 95 | Brand-concentrated |
| **Other provinces** | 2-7 each | Regional flagship brands | Sparse — hard to combo but low competition when you do |

**Design intent:** Yunnan and Shanghai are "safe picks" — plenty of cards make combos easy, but other players are likely competing for the same cards. Minor provinces are "risky picks" — fewer cards mean combo failure is likely, but success faces little competition.

### 7.6 International Brands: Positioning

International brands (Marlboro, Camel, Davidoff, Mevius, 555, Cohiba, Dunhill, etc.) are sold as a **separate expansion pack** with 21 cards.

**Reasons for exclusion from the base game:**
- The base game's thematic identity centers on Chinese tobacco culture
- International brands have no region combo relationship with domestic brands, diluting the combo system
- As an expansion, they offer independent collectible value and novelty
- Adding the International Expansion brings the total to 168 cards, unlocking 8-player games

---

## 8. Combo System & Scoring

### 8.1 Combo Overview

| Combo Name | Chinese | Condition | Bonus | Frequency | Design Intent |
|------------|---------|-----------|-------|-----------|---------------|
| **Pair** | 对子 | 2 cards, same brand | +5 | High | Basic combo — almost every round someone achieves this |
| **Three-of-a-Kind** | 三条 | 3 cards, same brand | +12 | Medium | Requires commitment, reward jumps non-linearly |
| **Hometown** | 同乡 | 2 cards, same region | +3 | High | Easier than brand combos (more same-region cards exist) |
| **Old Friends** | 老乡见老乡 | 3 cards, same region | +8 | Medium | Core of the steady-strategy approach |
| **Format Clash** | 粗细搭配 | At least 1x Regular + 1x Slim + 1x Middle | +4 | Medium | Encourages collecting all formats; even distribution makes it achievable |
| **Mixed Bag** | 杂货铺 | 6 cards, all different brands AND all different regions | +8 | Medium | Safety net for players whose combos got hate-drafted |
| **Grand Slam** | 大满贯 | Same brand 3+ cards with all 3 different formats (Regular + Slim + Middle) | Total x2 | Very Low | The ultimate climax moment of the entire game |

### 8.2 Combo Stacking Rules

**All additive combos stack freely.** The same group of cards can trigger multiple combos simultaneously.

**Example:** You collect 3 Furongwang cards (all from Hunan), one each in Regular, Slim, and Middle formats.

- Three-of-a-Kind (3 same brand): +12
- Old Friends (3 same region, Hunan): +8
- Format Clash (all three formats present): +4
- 3 cards with base score of 3 each (★★★): 9
- **This group's total: 9 + 12 + 8 + 4 = 33 points**

Since these 3 Furongwang cards are the same brand and cover all 3 formats, Grand Slam triggers -> **33 x 2 = 66 points**.

### 8.3 Grand Slam: Detailed Rules

**Trigger condition:** Among your collected cards, at least 3 cards share the same brand AND include all three formats: Regular, Slim, and Middle.

**Effect:** Your total score for this round is x2 (calculate all additive combos first, then double).

**Why x2 and not higher?**
- x2 already turns a "normal" score into a "dominant" one — sufficient excitement
- x3 or higher could make "Grand Slam player auto-wins," devaluing all other strategies
- Grand Slam carries risk — chasing it may mean sacrificing other combos, and failing to achieve it leaves you with a below-average score

**Why is it so hard to achieve?**

Take Chunghwa as an example. The Chunghwa cards in the pool are 5 cards:
- Chunghwa KS-5-Hard — Regular
- Chunghwa Tin 50 — Regular
- Chunghwa Slim — Slim
- Chunghwa Slim 6mg — Slim
- Chunghwa Double — Middle

Grand Slam requires same brand, 3+ cards, with all 3 formats covered. You need at least 1 Regular + 1 Slim + 1 Middle Chunghwa card. This requires those cards to be in the current round's pool, to pass through your hands, and for you to pick all of them. In a 5-player game, simulation shows Grand Slam probability of approximately 1.9%.

**Simulation-validated frequency:**

| Players | Grand Slam Probability | Target Range |
|---------|----------------------|-------------|
| 3 | 0.5% | 0.5-2% |
| 5 | 1.9% | 0.5-2% |
| 7 | 0.8% | 0.5-2% |

**Social impact:** Precisely because it's nearly impossible, when someone achieves it, the table spontaneously erupts. These "legendary moments" become the reason this particular game session is remembered — "that was the game where someone hit the Grand Slam."

### 8.4 Scoring Procedure

At the end of each round:

```
1. Sum the base scores of all your cigarette pack cards
2. Check all brand combos (Pair/Three-of-a-Kind) — add corresponding bonuses
3. Check all region combos (Hometown/Old Friends) — add corresponding bonuses
4. Check for Format Clash and Mixed Bag — add corresponding bonuses
5. Add any item card bonuses (if applicable)
6. Check for Grand Slam -> if triggered, multiply the above total by 2
7. Subtract counterfeit card penalties
8. Record your round score
```

**Key point:** The entire process requires no tools — mental math only. The only multiplication is the Grand Slam x2, which occurs in very few rounds.

### 8.5 Why "Mixed Bag" Matters

Mixed Bag (6 cards, all different brands AND all different regions -> +8) is a **safety net mechanic**.

In drafting games, "someone hate-drafted the cards you needed" is a regular occurrence. Without Mixed Bag, a disrupted player is stuck with random cards, scores poorly, and has a bad experience — especially painful for newcomers.

Mixed Bag gives "those who failed to build any combo" a viable score: as long as your cards are diverse enough (6 unique brand+region combinations), the +8 bonus provides about two-thirds of a Three-of-a-Kind bonus. This ensures every player has a viable strategy every round, reducing the frustration of "wasted rounds."

---

## 9. Counterfeit System (Social Core)

### 9.1 Design Philosophy

Counterfeits are this game's **most distinctive social mechanic**. They're not a traditional "penalty card" — they're a psychological warfare tool and a conversation generator.

### 9.2 Base Mechanic

- The card pool includes **5 counterfeit cards**
- Counterfeit cards have **identical card backs** to genuine cigarette pack cards (red) — indistinguishable from behind
- Counterfeit card faces **look like high-value cards** (featuring premium brand art, appearing to be ★★★★ or ★★★★★), but have a small "FAKE" watermark
- Counterfeit cards have a base score of **-5 points**

### 9.3 The Five Counterfeit Cards

| Counterfeit | Imitates Brand | Region | Disguised Rarity | Flavor Text |
|-------------|---------------|--------|-----------------|-------------|
| Fake Chunghwa Hard | Chunghwa | Shanghai | ★★★★★ | Beautiful packaging, but the tobacco is dark and uneven |
| Fake Panda Classic | Panda | Shanghai | ★★★★★ | The panda is printed crooked with a vacant stare |
| Fake Furong Wang Hard | Furongwang | Hunan | ★★★★ | Gold trim fading, rough seal |
| Fake Yellow Crane Tower 1916 | Huanghelou | Hubei | ★★★★★ | Security code rubs off instantly, blurry stamp |
| Fake Nanjing 95 | Nanjing | Jiangsu | ★★★★ | Wrong font spacing — veteran smokers spot it instantly |

### 9.4 Why Counterfeits Look Like Premium Cards

If counterfeits were instantly recognizable (e.g., completely different art style), they'd just be "bad cards" — you see it, you skip it, zero social value.

But when a counterfeit looks like "Soft Chunghwa" or "Hetianxia," social dynamics emerge:
- Your first reaction is "great card!" — then you notice the fake mark. This moment of realization is inherently funny
- When you deliberately pass it to the next player, they might make the same mistake — "Wait, this Chunghwa... hold on, it's FAKE!"
- During scoring, counterfeits are revealed and the table enters detective mode — "Who passed this to me?" — a spontaneous social deduction phase

### 9.5 Counterfeit Social Dynamics During Drafting

**Scenario 1: You spot a counterfeit and decide whether to take it**
- Absorb it yourself: You lose 5 points but protect downstream players (or you simply don't want the next player to be tricked by not looking carefully)
- Pass it along: The next player might fall for it, or they might notice and pass it further — the counterfeit creates sustained tension as it moves around the table

**Scenario 2: Multiple counterfeits in the same round**
- If 3 counterfeits appear in the same round, the card pool becomes a "minefield" — everyone picks nervously
- This randomness ensures every round has a different emotional texture

**Scenario 3: Counterfeit revealed during scoring**
- "Who passed me this fake?!" — this question sends the entire table into "reconstruct the draft + debate" mode
- The player to your left: "Wasn't me, I never saw it" -> Others: "Then it must have come from further up" -> Chaos, but joyful chaos

### 9.6 "Inspection" Mechanic (Optional Advanced Rule)

**When to use:** After players are familiar with the base rules and want more social bluffing. Not recommended for first-time play.

**Rules:**
- Each player has **1 "Inspection" opportunity per round**
- During any pick phase, you can point at **any player's most recently face-down card** and call "Inspection"
- The inspected player must **flip that card face-up** for everyone to see
- If it's a counterfeit -> The counterfeit is discarded (scores for no one). Inspection succeeds
- If it's genuine -> Inspection fails. The inspector takes **-3 points** this round (penalty for a false accusation)

**Social scenarios the Inspection mechanic creates:**

- **Reading expressions**: "You smiled when you picked that card — I'm calling Inspection" -> whole table tenses up
- **Bluffing**: Deliberately acting suspicious to bait someone into wasting their Inspection
- **Timing strategy**: Inspect early (less information but potential early catch) vs. inspect late (more behavioral data to work with)
- **Trust crises**: "You're inspecting ME? I thought we had an alliance for the Hunan set!"

### 9.7 Counterfeit Numerical Balance

The -5 point penalty was carefully calibrated:

- Too light (-2 points) -> Players don't care, no tension generated
- Too heavy (-15 points) -> A single counterfeit ruins an entire round, creating excessive frustration
- -5 points is approximately the value of one Pair combo, meaning "eating one counterfeit roughly equals missing one Pair" — painful but not devastating

---

## 10. Item Card System

### 10.1 Design Philosophy

Item cards are a radically simplified version of the original "Ashtray" system. They preserve the fun of "passive bonuses" and "strategic choices" while removing all complex trigger conditions and state tracking.

### 10.2 Core Rules

- Item cards are mixed into the drafting pool but use **blue card backs** — players can see how many items are in the round during the deal
- Picking an item card = one fewer cigarette pack -> real opportunity cost
- Item effects are written in one sentence on the card face — no rulebook consultation needed
- Each player may keep a maximum of **1 item card per round** (prevents hoarding items over packs as a degenerate strategy)

### 10.3 Item Card List

| Item Card | Effect | Social Factor | Design Intent |
|-----------|--------|---------------|---------------|
| **Zippo Lighter** | Your highest single combo this round gets +5 | Low (self-calculated) | Stable returns, suits conservative players |
| **Moutai Liquor** | Choose 1 other player — you and they each get +4 | **High** (who do you partner with?) | Forced social interaction — "I'll pour you a drink" -> creates temporary alliances |
| **Mahjong Table** | Your "Old Friends" combo increases from +8 to +13 | Medium | Strengthens the region combo strategy |
| **Macau Casino** | Flip a coin: heads +10, tails -5 | **High** (everyone watches) | Pure atmosphere card — tension + excitement |
| **Counterfeit Certificate** | Nullifies the -5 penalty from 1 counterfeit card | Medium | Counter-card, gives players an out against counterfeits |
| **Black Market Pass** | Take back 1 card from this round's discard pile (from the Final Choice phase) | Medium-High (others will scrutinize what you take) | Creates "treasure in the trash" surprise moments |
| **Smuggling Route** | Before scoring, you may swap 1 of your cards with 1 card from another player (both revealed) | **High** (negotiation, threats, deals) | The most social item card |
| **Smoking Ban Fine** | Choose 1 player — their highest combo this round is halved (round down) | **High** (aggressive) | Disrupts the leader, prevents runaway victories |

### 10.4 Strategic Layer of Item Cards

Item cards add a new dimension to drafting: **Should I take one? Which one?**

- Taking an item = one fewer pack = harder to build combos -> items must provide sufficient return to justify the cost
- Zippo's +5 roughly equals one ★★★ pack's base score -> slightly positive returns
- Moutai's mutual +4 = +8 total value -> exceeds one card's worth, but requires social negotiation
- Macau Casino's expected value = 0.5x10 + 0.5x(-5) = +2.5 -> low EV but high variance, pure gambling card

### 10.5 Why Blue Card Backs

Item cards use a different card back color (blue), meaning **everyone knows how many items are in play during the deal**.

This is intentional transparent information:
- "There are 2 items this round!" -> everyone starts thinking about whether to compete for them
- If items were hidden (same-color backs), players might accidentally draft unwanted items, reducing strategic agency
- Blue card backs also visually enrich the table — not everything is red

---

## 11. Numerical Balance

### 11.1 Design Philosophy

**Combo points > Base points** — strategy should matter more than luck.

A good numerical system should let a player who "cleverly picks cheap cards to build combos" outperform a player who "mindlessly grabs the highest base scores."

### 11.2 Base Scores & Rarity

| Rarity | Price Range | Base Score | Card Count | Role |
|--------|-----------|-----------|------------|------|
| ★★ | <=15 yuan | **2** | 30 (~22%) | Weak individually but affordable and plentiful — the building blocks of combos |
| ★★★ | 16-40 yuan | **3** | 72 (~54%) | Core cards, versatile middle ground, works with any strategy |
| ★★★★ | 41-80 yuan | **5** | 21 (~16%) | High score but few in pool. A Pair (5+5+5=15) yields solid returns |
| ★★★★★ | 81+ yuan | **7** | 11 (~8%) | Very high base score, but typically only 1 card per brand exists in the pool — brand Pairs are nearly impossible |

### 11.3 Strategy Return Comparison (7 cards kept per round)

| Strategy | Typical Composition | Estimated Score | Difficulty | Suited For |
|----------|--------------------| ---------------|------------|------------|
| **Loose high-scores** | 7x ★★★ with no combos | 7x3 = **21** | Low | Beginners |
| **Single Pair** | 1 brand Pair + 5 loose | 2+2+5 + 5x3 = **24** | Low | Beginners |
| **Double Pair** | 2 brand Pairs + 3 loose | (2+2+5)x2 + 3x3 = **27** | Medium | Intermediate |
| **Three-of-a-Kind** | 1 Three-of-a-Kind + 4 loose | 2+2+2+12 + 4x3 = **30** | Medium | Intermediate |
| **Region set** | 3 same region + brand Pair + loose | 3+3+3+8 + (incl. 2 same brand +5) + 2x3 = **31** | Medium-High | Intermediate |
| **Three-of-a-Kind + Region stack** | 3 same brand + same region + 4 loose | 2+2+2+12+8 + 4x3 = **38** | High | Advanced |
| **Grand Slam** | Above + all 3 formats | ~42 x 2 = **~84** | Extreme | Risk-takers |
| **Total failure (ate a counterfeit)** | No combos + counterfeit | ~18 - 5 = **13** | -- | Unlucky players |

**Score gradient:** 13 -> 21 -> 24 -> 27 -> 30 -> 38 -> 84

### 11.4 Simulation Results

Based on 10,000-game simulation data:

**Average round score:**

| Players | Average Score |
|---------|--------------|
| 3 | 31 |
| 5 | 40 |
| 7 | 31 |

**Strategy balance (5 players):**

| Winning Strategy | Share |
|-----------------|-------|
| BrandCombo (brand combo focus) | 39.8% |
| RegionCombo (region combo focus) | 29.7% |
| Balanced | 20.8% |
| HighScore (loose high cards) | 9.7% |

**Strategy balance (7 players):**

| Winning Strategy | Share |
|-----------------|-------|
| BrandCombo | 28.0% |
| RegionCombo | 25.8% |
| HighScore | 25.1% |
| Balanced | 20.2% |

**Analysis:** Brand combo strategy is slightly dominant overall, but region combo and balanced strategies are competitive. At 7 players, all four strategies approach equilibrium, indicating no single dominant strategy at full tables. The pure high-score strategy is weakest at 5 players but recovers at 7 players as the card pool becomes more dispersed.

### 11.5 Counterfeit Impact on Balance

5 counterfeits in a 134-card pack pool represent about 3.4% (or 3.4% of the total 147-card pool including counterfeits). In a 6-player, 8-cards-per-round game, ~48 cards enter the draft per round, with an expected ~1.6 counterfeits.

This means:
- Most rounds have 1-2 counterfeits circulating — enough to create tension
- "Half the cards are counterfeit" extremes won't occur
- Some rounds may have 0 counterfeits (all counterfeits remain in the unused pool) — this uncertainty is itself part of the fun

### 11.6 Item Card Impact on Balance

8 items in 147 total cards represent about 5.4%. Each round may see 0-3 items.

The strongest items (Smoking Ban Fine, Smuggling Route) have **relative** effects — they don't simply add to your score but change the gap between players. This zero-sum dynamic is healthy in multiplayer social games — it prevents the leader from running away with the game and maintains suspense.

---

## 12. Card Face Design

### 12.1 Design Principles

Each card must serve two purposes simultaneously:
1. **Functional**: When players fan out their hand, they can instantly see key information (brand, region, format, score)
2. **Emotional**: Flipping each new card brings a small delight (flavor text, cultural association of the pack art)

Functionality takes priority — if a player needs to hold a card up close to identify the brand or score, the game's rhythm breaks.

### 12.2 Cigarette Pack Card Layout

```
+-----------------------------+
| *****            Shanghai   |  <- Top-left: Rarity stars (color-coded)
|                             |     Top-right: Region (large text + color block)
|      +------------------+   |
|      |                  |   |
|      | Cigarette Pack   |   |
|      |   Photo          |   |
|      | (ciggies.app)    |   |
|      |                  |   |
|      +------------------+   |
|                             |
|  CHUNGHWA                   |  <- Brand name (largest text on card)
|  Hard Pack - Classic        |  <- Specific variant name
| ----------------------------+
|  Regular         *****      |  <- Bottom-left: Format  Bottom-right: Rarity icon
|                             |
|  "State banquet standard."  |  <- Flavor text + base score (large bold)
|                         7   |
+-----------------------------+
```

### 12.3 Key Design Details

**Base score:** Printed in large bold font in the bottom-right corner. When fanning a hand of cards (only the right edge of each card is visible), all scores can be read at a glance.

**Region color blocks:** Each region has a fixed-color block (Yunnan = red, Shanghai = gold, Hunan = orange, Hubei = yellow, Jiangsu = purple, Zhejiang = green, etc.). Without reading text, matching colors = same region. This is highly efficient when fanning cards — "I see 3 red blocks — Yunnan three-of-a-kind is locked in."

**Brand name:** The largest text on the card face. Since brand Pairs / Three-of-a-Kind are the core combo, the brand must be identifiable at any distance.

**Format indicator:** Bottom-left corner marks "Regular", "Slim", or "Middle" with corresponding icons (Regular = thick line, Slim = thin line, Middle = medium line), identifiable when fanning cards.

**Flavor text:** Placed at the very bottom, never interfering with quick functional identification. But when a player flips a new card, they naturally see it — "State banquet standard," "The working class choice" — these lines carry the game's emotional value.

**Image data:** Each card's cigarette pack photo and product link come from ciggies.app (image_url and sku_url fields in cards.json), ensuring card face image authenticity and authority.

### 12.4 Counterfeit Card Layout

Counterfeit cards have **nearly identical layouts** to genuine cigarette pack cards, with these differences:

- The base score position shows **"-5"** (in red)
- A small **"FAKE" watermark** appears somewhere on the card face
- Below the brand name, **"Counterfeit"** is printed in small text

**Design intent:** Counterfeits should require a "second look" to identify — the first glance sees "Chunghwa ★★★★★" and gets excited; the second glance catches the fake mark. This discovery process itself is the fun.

### 12.5 Item Card Layout

```
+-----------------------------+
|          * ITEM *           |  <- Clear item card identification
|                             |
|      +------------------+   |
|      |                  |   |
|      |  Item Art        |   |
|      |  (Moutai bottle) |   |
|      |                  |   |
|      +------------------+   |
|                             |
|  MOUTAI LIQUOR              |  <- Item name
| ----------------------------+
|                             |
|  Choose 1 player.           |  <- Effect (one sentence)
|  You and they each get +4.  |
|                             |
|  "A thousand cups are not   |  <- Flavor text
|   enough between friends."  |
+-----------------------------+
```

### 12.6 Card Back Design

| Card Type | Back Color | Back Design |
|-----------|-----------|-------------|
| Cigarette Packs + Counterfeits | **Red** | Traditional Chinese cloud pattern + Cigga Go logo |
| Item Cards | **Blue** | Same cloud pattern in blue tones + "ITEM" text |

Packs and counterfeits sharing the same card back is intentional — if counterfeits had a different back, they would lose all social value.

---

## 13. Collectibility & Craftsmanship

### 13.1 Design Philosophy

For the overarching philosophy on why collectibility matters alongside gameplay, the craftsmanship philosophy behind rarity tiers, and the positioning of cards as cultural artifacts, see [Section 4: Collectibility Design Philosophy](#4-collectibility-design-philosophy). This section focuses on concrete SKU-level craftsmanship specifications.

### 13.2 Craftsmanship Tiers

#### Base Tier: ★★ and ★★★ Cards (102 cards)

- **Material:** Standard 310gsm coated paper + matte lamination
- **Process:** Standard four-color printing
- **Feel:** Smooth, light, suitable for rapid card fanning
- **Design intent:** Cost-effective. These are the most-used cards in the game and need durability

#### Premium Tier: ★★★★ Cards (21 cards)

- **Material:** 350gsm specialty paper + frosted lamination
- **Process:** Silver foil border + spot UV (cigarette pack image area with raised gloss)
- **Feel:** Noticeably thicker than base cards, frosted texture
- **Specific SKU suggestions:**

| Card | Special Process | Rationale |
|------|----------------|-----------|
| Nanjing 95 | Gold foil on the "95" characters | Echoes the "Imperial" prestige of the name |
| Nanjing Jinling Twelve Beauties | Embossed pack image area | The figurative artwork suits dimensional treatment |
| Lotus (Hehua) | Spot UV on pack image area | Lotus art pops under gloss |
| Golden Leaf Tianye | Gold foil leaf pattern | The name literally means "golden leaf" |
| Cordyceps | Frosted + textured varnish (mimics herbal medicine feel) | Thematic resonance |

#### Legendary Tier: ★★★★★ Cards (11 cards)

- **Material:** 400gsm cotton-blend specialty paper + velvet lamination
- **Process:** Gold foil border + holographic pack image + limited-edition numbering (e.g., "003/500")
- **Feel:** Thick, velvet touch — you know it's a premium card from the fingertips alone
- **Specific SKU suggestions:**

| Card | Special Process | Rationale |
|------|----------------|-----------|
| Chunghwa Hard Pack | Gold foil border + classic red-gold holographic | China's tobacco icon — must be collector-grade |
| Chunghwa Tin 50 | Metallic-feel lamination | Echoes the metal tin packaging |
| Panda Classic | **Embossed relief** (panda motif raised) | National treasure tier — you can feel the panda with your fingertips |
| Grand Chongqiu | Gold foil + laser gradient border | Pinnacle of Yunnan tobacco |
| Hetianxia | Gold foil + hidden watermark (auspicious cloud pattern visible only at certain angles) | Echoes the grandeur of "Harmony Under Heaven" |
| Huanghelou 1916 | Antique copper foil + distressed edges | Century-old classic — historical gravitas |

### 13.3 Expansion Pack Collectible Value

| Expansion | Contents | Craft Feature | Collector Positioning |
|-----------|----------|---------------|----------------------|
| **International Expansion** | 21 international brand cards | Uniform silver foil, simulating airport duty-free luxury | Collection completion + unlocks 8 players |
| **Collector's Limited Pack** | 12 historical/discontinued brands | All distressed/aged finish + rarity +1 collector premium | Nostalgia collection, extreme scarcity |
| **Yunnan Regional Pack** | 12 Yunnan deep-dive cards | Yunnan-themed red tone craftsmanship | Regional collection + strengthens region combo |
| **Hubei Regional Pack** | 12 Hubei deep-dive cards | Yellow Crane Tower themed craftsmanship | Regional collection + strengthens region combo |
| **Shanghai Regional Pack** | 10 Shanghai deep-dive cards | Shanghai-style gold tone craftsmanship | Regional collection + strengthens region combo |

---

## 14. Component List

### 14.1 Base Game Box Contents

| Component | Quantity | Description |
|-----------|----------|-------------|
| Cigarette Pack Cards | 134 | 47 brands, 24 provinces, 3 formats, spanning ★★ through ★★★★★ rarities |
| Counterfeit Cards | 5 | Red card backs, shuffled into the pack pool |
| Item Cards | 8 | Blue card backs |
| Scoring Reference Cards | 4 | Double-sided, listing all combos and point values |
| Coin | 1 | For the Macau Casino item card |
| Rulebook | 1 | Base rules + advanced rules (Inspection mechanic) |
| Score Pad | 1 pad | Three-round scoring sheets |
| **Total** | **147 cards + accessories** | Supports 3-7 player games |

### 14.2 Packaging

- Box design echoes a cigarette pack's flip-top structure (flip-top card box)
- Interior uses cigarette-box-style dividers (pack card zone / item card zone / accessories zone)
- Box face features Cigga Go logo + "Chinese Cigarette Museum" subtitle

---

## 15. Expansion Design

### 15.1 Product Roadmap

```
Base Game (147 cards, supports 3-7 players)
  +-- International Expansion (+21 cards, unlocks 8-player games)
  +-- Collector's Limited Pack (+12 historical/discontinued brands, rarity +1)
  +-- Regional Series
  |     +-- Yunnan Pack (+12 cards)
  |     +-- Hubei Pack (+12 cards)
  |     +-- Shanghai Pack (+10 cards)
  +-- Seasonal Limited (collaborations / holiday themes)
```

### 15.2 International Expansion

21 international brand cards (Marlboro, Camel, 555, Davidoff, Mevius, ESSE, Cohiba, Dunhill, etc.) from 6 countries/regions. Adding this brings the total to 168 cards, supporting 8 players x 7 cards/round x 3 rounds = 168 cards.

**Dedicated combos:**

| Combo | Condition | Bonus | Design Intent |
|-------|-----------|-------|---------------|
| **Duty Free** | 3 international brand cards | +12 | International equivalent of the region combo |
| **East Meets West** | 1 Chinese ★★★★★ card + 1 international brand card | +8 | Encourages cross-collection mixing |

### 15.3 Collector's Limited Pack

12 historical/discontinued brand cards with **+1 rarity collector premium**.

Includes brands such as: Flying Horse (extremely rare — only 1 SKU on ciggies.app), Shanghai (brand), Ashima, Lesser Panda, Stone Forest, Snow Lotus, and others.

**Design intent:** These brands carry the cultural memory of China's tobacco history, many of which are discontinued or extremely hard to find. The +1 rarity premium makes a card that would normally be ★★ into ★★★ (base score 3), increasing both gameplay value and collector motivation.

### 15.4 Regional Pack Series

Each regional pack increases that province's card density, making the RegionCombo strategy stronger for that game session.

| Expansion | Cards | Effect |
|-----------|-------|--------|
| Yunnan Pack | 12 | Yunnan card density greatly increased, Hometown/Old Friends much easier |
| Hubei Pack | 12 | Hubei card density greatly increased, Huanghelou series expanded |
| Shanghai Pack | 10 | Shanghai card density greatly increased, Chunghwa/Panda series expanded |

**Design philosophy:** Adding a regional pack makes that province's region combo easier to achieve, but it also means more players will compete for the same region — the strategic dynamics shift accordingly. Each game session can choose to include 0-2 regional packs to adjust the experience.

### 15.5 Design Reservations

The following mechanics are **not implemented in the base game** but are designed with expansion space in mind:

- **Team Mode (2v2 / 3v3)**: Can extend through the "Moutai Liquor" item card direction
- **Boss Challenge Mode**: Cooperative variant rules against Boss cards
- **Collector's Album**: Physical album organized by brand/region/format, with rewards for completing pages
- **Tournament Rules**: Multi-round elimination format for live events

---

## Appendix

### A. Data Sources

All cigarette pack images and brand data sourced from [ciggies.app](https://ciggies.app). Authorization from @0x_ultra required for usage. Each card's image_url and sku_url are recorded in cards.json for traceability.

### B. Digital to Physical: Design Transformation Record

This appendix documents the key design transformation decisions made when adapting Cigga Go from the digital edition (single-player roguelike) to the physical card game edition (multiplayer party game). These decisions form the foundation of the physical edition's design and are preserved here as a design provenance and reference document.

#### B.1 Single-Player -> Multiplayer

**Decision:** Competitive drafting (all players act simultaneously, highest total score wins)

**Why not cooperative?**
- Cooperative play (team vs. boss) requires more complex rules to simulate boss behavior, increasing teach time
- The tobacco theme has a natural competitive dimension — "whose cigarette is better" is an everyday topic in Chinese smoking culture

**Why not turn-based (one player at a time)?**
- With 8 players taking individual turns, you'd wait for 7 others before your turn, inflating game time to 40+ minutes
- Simultaneous action is the only viable approach for high player counts + short play time

#### B.2 Complex Multiplication -> Pure Addition (+ One Multiplier: Grand Slam)

**Decision:** All combos grant flat bonus points. Only the "Grand Slam" (same brand 3+ cards covering all 3 formats) triggers a x2 total score multiplier.

**Why?**

The digital formula is `base score x rarity multiplier x brand combo x region combo`, nested multiplication. This works fine with automatic computation, but with 8 players scoring simultaneously at a table:

- Addition: 1 second mental math -> "2+3+3+5=13"
- Multiplication: 10 seconds mental math -> "13 times 1.5 times 1.3 equals... hold on"
- Everyone waits for the slowest calculator before the game can continue

**Why keep the Grand Slam x2?**

A game needs its "explosive moment." If everything is pure addition, the gap between highest and lowest scores stays small, lacking climax. The Grand Slam's x2 is the game's "nuclear option" — extremely hard to achieve, but when it lands, the entire table erupts.

And with only one multiplication point, calculation stays simple: finish all addition as normal, check for Grand Slam, double if yes, done.

#### B.3 Four Dimensions -> Three Dimensions

**Decision:** Remove "Era" dimension, replace with "Format" (Regular/Slim/Middle)

**Why?**
- Era information lacks recognition for non-smokers — "Is this pack from the 00s or 10s?" Most people can't tell
- Format (Regular/Slim/Middle) is a physical characteristic of the cigarette stick, visually intuitive and easy to understand
- The three formats are distributed nearly evenly (45/45/44), providing a more reasonable design space for Grand Slam
- Reducing one dimension lowers cognitive load during card selection while maintaining sufficient combo depth

#### B.4 Roguelike Deck-Building -> Fixed Three-Round Format

**Decision:** Remove the shop, deck construction, and run structure. Replace with 3 independent drafting rounds.

**Why?**

The roguelike's core joy is "gradually getting stronger during a run," but this requires:
- Persistent state tracking (your deck, your upgrades, current stage)
- Progressive difficulty curve
- 30-60 minutes of time investment

All of these conflict with a "10-25 minute party game." The three-round format preserves the learning curve of "getting to know the card pool" (round 1: explore, round 2: strategize, round 3: go all-in), but requires zero cross-round state tracking.

#### B.5 Ashtray System -> Item Cards

**Decision:** No standalone ashtray system. Instead, 8 item cards are shuffled into the drafting pool.

**Why?**

The digital edition has 50 ashtrays, each with different trigger conditions and bonuses. Physical implementation problems:
- 50 different effects means players constantly consult the rulebook
- Passive effects must be remembered and applied at every scoring phase
- Separate ashtray slots add components and rules

Condensing the best effects into 8 item cards mixed into the draft solves everything:
- Effects are one sentence on the card face — no rulebook needed
- Picking an item card means one fewer cigarette pack — real opportunity cost
- No additional components or rules required

See [Section 10: Item Card System](#10-item-card-system) for details.

### C. Reference Game Benchmarks

| Game | Mechanic Reference | How Cigga Go Differs |
|------|-------------------|---------------------|
| Sushi Go Party | Drafting + simultaneous action + 3-8 players | Cigga Go has counterfeit mind games and multi-dimensional combos |
| 7 Wonders | Drafting + multi-axis scoring | Cigga Go is lighter weight, no resource management |
| Coup | Bluff + social deduction | Inspection mechanic borrows Coup's tension from bluffing |
| Splendor | Set collection + engine building | Cigga Go is faster, more social, no engine building |

### D. Version History

| Version | Date | Changes |
|---------|------|---------|
| 0.1.0 | 2026-03-21 | Initial GDD, core framework established |
| 1.0.0 | 2026-03-22 | Final release: three-dimensional system (Brand+Region+Format, Era removed), updated combo values, 3-player 7/6 deal, Grand Slam redefined, complete expansion pack system |

---

*"Collecting is destiny. Every pack is a gamble."*

**Cigga Go** — A Chinese Cigarette Museum Production
