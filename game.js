// ─── Cigga Go — H5 PvE Game Engine ─────────────────────────────────────────

// ─── i18n System ─────────────────────────────────────────────────────────────

let LANG = localStorage.getItem('cigga_lang') || 'EN';

const I18N = {
  ZH: {
    aiNames: ['老王', '小李', '张姐', '赵哥', '阿福', '大刘', '陈叔'],
    you: '你',
    passLeft: '← 左传',
    passRight: '右传 →',
    round: (n) => `第${n}轮`,
    picked: (x, y) => `已选 ${x}/${y}`,
    yourHand: '你的手牌',
    handHint: '（点击选牌，再点确认）',
    collected: '已收集',
    pickThis: '选这张',
    cards: (n) => `${n}张`,
    finalChoice: '最后抉择',
    finalSubtitle: '选一张保留，另一张弃掉',
    three: '三条',
    pair: '对子',
    oldFriends: '老乡见老乡',
    hometown: '同乡',
    formatClash: '粗细搭配',
    mixedBag: '杂货铺',
    grandSlam: '大满贯',
    item: '道具',
    counterfeitAlert: '假烟!',
    fakeStamp: '假',
    base: '基础分:',
    roundScore: '本轮得分:',
    player: '玩家',
    roundLabel: '本轮',
    total: '总分',
    nextRound: '下一轮',
    seeResults: '查看结果',
    youWon: '你赢了!',
    xWins: (name) => `${name} 获胜!`,
    congrats: '恭喜你，烟卡大王！',
    yourTotal: '你的总分:',
    playAgain: '再来一局',
    menuTitle: 'Cigga Go',
    menuSubtitle: '烟卡GO — 轮抽卡牌游戏',
    menuDesc: '选择人数开始游戏',
    xPlayers: (n) => `${n} 人`,
    roundScoring: (n) => `第${n}轮 计分`,
    formatRegular: '常规',
    formatSlim: '细支',
    formatMiddle: '中支',
    howToPlay: '游戏规则',
    back: '返回',
    rulesGoal: '目标',
    rulesGoalText: '通过3轮卡牌轮抽，收集烟盒卡并凑combo，总分最高者获胜。',
    rulesEachRound: '每轮流程',
    rulesStep1: '每人发一手牌',
    rulesStep2: '选1张扣下 → 剩余传给下家',
    rulesStep3: '所有人同时翻开选的牌',
    rulesStep4: '重复直到剩2张 → 留1张弃1张',
    rulesStep5: '计算本轮得分！',
    rulesPassDir: '传牌方向交替：第1轮 ←，第2轮 →，第3轮 ←',
    rulesBaseScores: '基础分',
    rulesBaseScoresText: '★★ = 2分 | ★★★ = 3分 | ★★★★ = 5分 | ★★★★★ = 7分',
    rulesCombos: 'COMBO（可叠加！）',
    rulesPairDesc: '对子 — 同品牌 ×2 → +5',
    rulesThreeDesc: '三条 — 同品牌 ×3 → +12',
    rulesHometownDesc: '同乡 — 同产地 ×2 → +3',
    rulesOldFriendsDesc: '老乡见老乡 — 同产地 ×3 → +8',
    rulesFormatClashDesc: '粗细搭配 — 集齐3种规格（常规+细支+中支）→ +4',
    rulesMixedBagDesc: '杂货铺 — 6张牌品牌和产地全不同 → +8',
    rulesGrandSlamDesc: '大满贯 — 同品牌 ×3，各不同规格 → 总分 ×2 🎯',
    rulesItems: '道具牌',
    rulesItemsText: '像普通牌一样选取，每轮最多保留1张，各有特殊效果。',
    rulesCounterfeit: '假烟卡',
    rulesCounterfeitText: '看着像高分卡，实际 -5 分！你可以传给下家坑人…',
    rulesTips: '小贴士',
    rulesTip1: 'Combo比高分散牌强。一对★★胜过一张★★★★★',
    rulesTip2: '盯着邻居收集什么，截他的牌！',
    rulesTip3: '假烟别慌，牌堆里只有5张',
    comboReference: 'Combo 速查',
    close: '关闭',
  },
  EN: {
    aiNames: ['Lao Wang', 'Xiao Li', 'Sister Zhang', 'Brother Zhao', 'Ah Fu', 'Big Liu', 'Uncle Chen'],
    you: 'You',
    passLeft: '← Pass Left',
    passRight: 'Pass Right →',
    round: (n) => `Round ${n}`,
    picked: (x, y) => `Picked ${x}/${y}`,
    yourHand: 'Your Hand',
    handHint: '(Tap to select, then confirm)',
    collected: 'Collected',
    pickThis: 'Pick This',
    cards: (n) => `${n} cards`,
    finalChoice: 'Final Choice',
    finalSubtitle: 'Keep one, discard the other',
    three: 'Three of a Kind',
    pair: 'Pair',
    oldFriends: 'Old Friends',
    hometown: 'Hometown',
    formatClash: 'Format Clash',
    mixedBag: 'Mixed Bag',
    grandSlam: 'Grand Slam',
    item: 'Item',
    counterfeitAlert: 'Counterfeit!',
    fakeStamp: 'FAKE',
    base: 'Base:',
    roundScore: 'Round Score:',
    player: 'Player',
    roundLabel: 'Round',
    total: 'Total',
    nextRound: 'Next Round',
    seeResults: 'See Results',
    youWon: 'You Won!',
    xWins: (name) => `${name} Wins!`,
    congrats: 'Congratulations, Card Master!',
    yourTotal: 'Your total:',
    playAgain: 'Play Again',
    menuTitle: 'Cigga Go',
    menuSubtitle: 'Card Drafting Game',
    menuDesc: 'Choose number of players',
    xPlayers: (n) => `${n} Players`,
    roundScoring: (n) => `Round ${n} Scoring`,
    formatRegular: 'Regular',
    formatSlim: 'Slim',
    formatMiddle: 'Middle',
    howToPlay: 'How to Play',
    back: 'Back',
    rulesGoal: 'GOAL',
    rulesGoalText: 'Score the most points across 3 rounds by collecting cigarette pack cards and building combos.',
    rulesEachRound: 'EACH ROUND',
    rulesStep1: 'Everyone gets dealt a hand of cards',
    rulesStep2: 'Pick 1 card to keep → pass the rest to your neighbor',
    rulesStep3: 'Everyone reveals their picks simultaneously',
    rulesStep4: 'Repeat until 2 cards remain → keep 1, discard 1',
    rulesStep5: 'Score your collection!',
    rulesPassDir: 'Pass direction alternates: Round 1 ←, Round 2 →, Round 3 ←',
    rulesBaseScores: 'CARD SCORES',
    rulesBaseScoresText: '★★ = 2 pts | ★★★ = 3 pts | ★★★★ = 5 pts | ★★★★★ = 7 pts',
    rulesCombos: 'COMBOS (these stack!)',
    rulesPairDesc: 'Pair — Same brand ×2 → +5',
    rulesThreeDesc: 'Three of a Kind — Same brand ×3 → +12',
    rulesHometownDesc: 'Hometown — Same origin ×2 → +3',
    rulesOldFriendsDesc: 'Old Friends — Same origin ×3 → +8',
    rulesFormatClashDesc: 'Format Clash — All 3 formats (Regular+Slim+Middle) → +4',
    rulesMixedBagDesc: 'Mixed Bag — 6 cards, all different brand & origin → +8',
    rulesGrandSlamDesc: 'Grand Slam — Same brand ×3, each different format → TOTAL ×2 🎯',
    rulesItems: 'ITEM CARDS',
    rulesItemsText: 'Pick one like any other card. Max 1 per round. Each has a unique ability.',
    rulesCounterfeit: 'COUNTERFEIT CARDS',
    rulesCounterfeitText: 'Look real but cost you -5 points! Pass them to your rivals...',
    rulesTips: 'TIPS',
    rulesTip1: 'Combos > high base scores. A pair of ★★ beats a lone ★★★★★',
    rulesTip2: 'Watch what your neighbors collect — steal what they need!',
    rulesTip3: "Don't panic over counterfeits — they're rare",
    comboReference: 'Combo Reference',
    close: 'Close',
  }
};

const PROVINCE_MAP = {
  '上海': 'Shanghai', '云南': 'Yunnan', '湖北': 'Hubei', '湖南': 'Hunan',
  '浙江': 'Zhejiang', '江苏': 'Jiangsu', '四川': 'Sichuan', '福建': 'Fujian',
  '河南': 'Henan', '山东': 'Shandong', '广东': 'Guangdong', '贵州': 'Guizhou',
  '江西': 'Jiangxi', '内蒙古': 'Inner Mongolia', '安徽': 'Anhui', '北京': 'Beijing',
  '甘肃': 'Gansu', '重庆': 'Chongqing', '辽宁': 'Liaoning', '吉林': 'Jilin',
  '河北': 'Hebei', '广西': 'Guangxi', '黑龙江': 'Heilongjiang', '陕西': 'Shaanxi',
};

const FORMAT_MAP = {
  '常规': 'Regular',
  '细支': 'Slim',
  '中支': 'Middle',
};

function t() { return I18N[LANG]; }

function setLang(lang) {
  LANG = lang;
  localStorage.setItem('cigga_lang', lang);
  renderGame();
}

function localOrigin(origin) {
  return LANG === 'EN' ? (PROVINCE_MAP[origin] || origin) : origin;
}

function localFormat(format) {
  return LANG === 'EN' ? (FORMAT_MAP[format] || format) : format;
}

function cardName(card) {
  if (LANG === 'EN' && card.name_en) return card.name_en;
  return card.name_cn || card.brand;
}

function cardEffect(card) {
  if (LANG === 'EN' && card.effect_en) return card.effect_en;
  return card.effect_cn || card.effect;
}

// ─── Language Toggle ─────────────────────────────────────────────────────────

function renderLangToggle() {
  let toggle = document.getElementById('lang-toggle');
  if (!toggle) {
    toggle = document.createElement('button');
    toggle.id = 'lang-toggle';
    toggle.className = 'lang-toggle';
    document.body.appendChild(toggle);
  }
  toggle.textContent = LANG === 'EN' ? 'CN' : 'EN';
  toggle.onclick = () => setLang(LANG === 'EN' ? 'ZH' : 'EN');
}

// ─── Constants ────────────────────────────────────────────────────────────────

const COMBO_VALUES = {
  pair: 5,
  three: 12,
  hometown: 3,
  old_friends: 8,
  format_clash: 4,
  mixed_bag: 8,
  grand_slam_mult: 2,
};

const CARDS_PER_PLAYER = { 3: 7, 4: 9, 5: 8, 6: 8, 7: 7, 8: 7 };
const KEEP_PER_ROUND = { 3: 6, 4: 8, 5: 7, 6: 7, 7: 6, 8: 6 };
const MIXED_BAG_MIN = 6;
const AI_NAMES_ZH = ['老王', '小李', '张姐', '赵哥', '阿福', '大刘', '陈叔'];
const AI_NAMES_EN = ['Lao Wang', 'Xiao Li', 'Sister Zhang', 'Brother Zhao', 'Ah Fu', 'Big Liu', 'Uncle Chen'];

// ─── Utilities ────────────────────────────────────────────────────────────────

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function countBy(arr, fn) {
  const counts = {};
  for (const item of arr) {
    const key = fn(item);
    counts[key] = (counts[key] || 0) + 1;
  }
  return counts;
}

// ─── Combo Detection (ported from simulate_v2.py) ─────────────────────────────

function detectCombos(cards, itemCard = null) {
  const packs = cards.filter(c => c.type === 'pack');
  let counterfeitCount = cards.filter(c => c.type === 'counterfeit').length;

  const result = {
    baseTotal: 0,
    brandCombos: {},
    brandBonus: 0,
    originCombos: {},
    originBonus: 0,
    formatClash: false,
    formatClashBonus: 0,
    mixedBag: false,
    mixedBagBonus: 0,
    grandSlam: false,
    itemBonus: 0,
    itemEffect: null,
    counterfeitPenalty: 0,
    total: 0,
  };

  // Base scores
  result.baseTotal = packs.reduce((sum, c) => sum + c.base_score, 0);

  // Brand combos
  const brandCounts = countBy(packs, c => c.brand);
  for (const [brand, count] of Object.entries(brandCounts)) {
    if (count >= 3) {
      result.brandCombos[brand] = 'three';
      result.brandBonus += COMBO_VALUES.three;
    } else if (count === 2) {
      result.brandCombos[brand] = 'pair';
      result.brandBonus += COMBO_VALUES.pair;
    }
  }

  // Origin combos
  let oldFriendsValue = COMBO_VALUES.old_friends;
  if (itemCard && itemCard.effect === 'old_friends_plus15') {
    oldFriendsValue = COMBO_VALUES.old_friends + 5; // 8+5=13
  }

  const originCounts = countBy(packs, c => c.origin);
  for (const [origin, count] of Object.entries(originCounts)) {
    if (count >= 3) {
      result.originCombos[origin] = 'old_friends';
      result.originBonus += oldFriendsValue;
    } else if (count === 2) {
      result.originCombos[origin] = 'hometown';
      result.originBonus += COMBO_VALUES.hometown;
    }
  }

  // Format Clash
  const formats = new Set(packs.map(c => c.format));
  if (formats.has('常规') && formats.has('细支') && formats.has('中支')) {
    result.formatClash = true;
    result.formatClashBonus = COMBO_VALUES.format_clash;
  }

  // Mixed Bag (greedy algorithm — exact port)
  if (packs.length >= MIXED_BAG_MIN) {
    const brandsSeen = new Set();
    const originsSeen = new Set();
    let uniqueCount = 0;
    for (const c of packs) {
      if (!brandsSeen.has(c.brand) && !originsSeen.has(c.origin)) {
        brandsSeen.add(c.brand);
        originsSeen.add(c.origin);
        uniqueCount++;
      }
    }
    if (uniqueCount >= MIXED_BAG_MIN) {
      result.mixedBag = true;
      result.mixedBagBonus = COMBO_VALUES.mixed_bag;
    }
  }

  // Item bonuses
  if (itemCard) {
    result.itemEffect = itemCard.effect;
    if (itemCard.effect === 'highest_combo_plus5') {
      const allComboValues = [];
      for (const ct of Object.values(result.brandCombos)) {
        allComboValues.push(ct === 'three' ? COMBO_VALUES.three : COMBO_VALUES.pair);
      }
      for (const ct of Object.values(result.originCombos)) {
        allComboValues.push(ct === 'old_friends' ? oldFriendsValue : COMBO_VALUES.hometown);
      }
      if (result.formatClash) allComboValues.push(COMBO_VALUES.format_clash);
      if (result.mixedBag) allComboValues.push(COMBO_VALUES.mixed_bag);
      if (allComboValues.length > 0) result.itemBonus = 5;
    } else if (itemCard.effect === 'coin_flip') {
      result.itemBonus = Math.random() < 0.5 ? 10 : -5;
    } else if (itemCard.effect === 'both_plus4') {
      result.itemBonus = 4;
    } else if (itemCard.effect === 'immune_counterfeit') {
      if (counterfeitCount > 0) counterfeitCount = Math.max(0, counterfeitCount - 1);
    }
  }

  // Grand Slam: same brand 3+ cards with all 3 different formats
  const brandFormats = {};
  for (const c of packs) {
    if (!brandFormats[c.brand]) brandFormats[c.brand] = new Set();
    brandFormats[c.brand].add(c.format);
  }
  result.grandSlam = Object.entries(brandFormats).some(
    ([brand, fmts]) => (brandCounts[brand] || 0) >= 3 && fmts.size >= 3
  );

  // Calculate total
  let subtotal = result.baseTotal + result.brandBonus + result.originBonus
    + result.formatClashBonus + result.mixedBagBonus + result.itemBonus;

  if (result.grandSlam) {
    subtotal *= COMBO_VALUES.grand_slam_mult;
  }

  result.counterfeitPenalty = counterfeitCount * 5;
  result.total = subtotal - result.counterfeitPenalty;

  return result;
}

// ─── AI Strategies (ported from simulate_v2.py) ───────────────────────────────

const Strategies = {
  Random: {
    name: 'Random',
    pickCard(hand, kept) {
      return Math.floor(Math.random() * hand.length);
    },
    finalChoice(lastTwo, kept) {
      return Math.floor(Math.random() * 2);
    }
  },

  HighScore: {
    name: 'HighScore',
    pickCard(hand, kept) {
      let bestIdx = 0, bestScore = -999;
      for (let i = 0; i < hand.length; i++) {
        const c = hand[i];
        let score = c.base_score;
        if (c.type === 'counterfeit') score = -100;
        else if (c.type === 'item') score = 3;
        if (score > bestScore) { bestScore = score; bestIdx = i; }
      }
      return bestIdx;
    },
    finalChoice(lastTwo, kept) {
      const s0 = lastTwo[0].type !== 'counterfeit' ? lastTwo[0].base_score : -100;
      const s1 = lastTwo[1].type !== 'counterfeit' ? lastTwo[1].base_score : -100;
      return s0 >= s1 ? 0 : 1;
    }
  },

  BrandCombo: {
    name: 'BrandCombo',
    pickCard(hand, kept) {
      const keptBrands = countBy(kept.filter(c => c.type === 'pack'), c => c.brand);
      let bestIdx = 0, bestVal = -999;
      for (let i = 0; i < hand.length; i++) {
        const c = hand[i];
        let val;
        if (c.type === 'counterfeit') val = -100;
        else if (c.type === 'item') val = 2;
        else {
          const existing = keptBrands[c.brand] || 0;
          val = (existing >= 2 ? 30 : existing === 1 ? 20 : 0) + c.base_score;
        }
        if (val > bestVal) { bestVal = val; bestIdx = i; }
      }
      return bestIdx;
    },
    finalChoice(lastTwo, kept) {
      const keptBrands = countBy(kept.filter(c => c.type === 'pack'), c => c.brand);
      const scores = lastTwo.map(c => {
        if (c.type === 'counterfeit') return -100;
        if (c.type === 'item') return 2;
        return (keptBrands[c.brand] || 0) * 10 + c.base_score;
      });
      return scores[0] >= scores[1] ? 0 : 1;
    }
  },

  RegionCombo: {
    name: 'RegionCombo',
    pickCard(hand, kept) {
      const keptOrigins = countBy(kept.filter(c => c.type === 'pack'), c => c.origin);
      let bestIdx = 0, bestVal = -999;
      for (let i = 0; i < hand.length; i++) {
        const c = hand[i];
        let val;
        if (c.type === 'counterfeit') val = -100;
        else if (c.type === 'item') val = 2;
        else {
          const existing = keptOrigins[c.origin] || 0;
          val = (existing >= 2 ? 25 : existing === 1 ? 15 : 0) + c.base_score;
        }
        if (val > bestVal) { bestVal = val; bestIdx = i; }
      }
      return bestIdx;
    },
    finalChoice(lastTwo, kept) {
      const keptOrigins = countBy(kept.filter(c => c.type === 'pack'), c => c.origin);
      const scores = lastTwo.map(c => {
        if (c.type === 'counterfeit') return -100;
        if (c.type === 'item') return 2;
        return (keptOrigins[c.origin] || 0) * 10 + c.base_score;
      });
      return scores[0] >= scores[1] ? 0 : 1;
    }
  },

  Balanced: {
    name: 'Balanced',
    _cardValue(card, kept) {
      if (card.type === 'counterfeit') return -100;
      if (card.type === 'item') {
        return ['coin_flip', 'highest_combo_plus5', 'both_plus4'].includes(card.effect) ? 5 : 3;
      }
      const keptPacks = kept.filter(c => c.type === 'pack');
      const keptBrands = countBy(keptPacks, c => c.brand);
      const keptOrigins = countBy(keptPacks, c => c.origin);

      let value = card.base_score;
      const bc = keptBrands[card.brand] || 0;
      value += bc >= 2 ? 20 : bc === 1 ? 10 : 0;
      const oc = keptOrigins[card.origin] || 0;
      value += oc >= 2 ? 12 : oc === 1 ? 5 : 0;

      const keptFormats = new Set(keptPacks.map(c => c.format));
      if (!keptFormats.has(card.format) && keptFormats.size === 2) value += 8;
      else if (!keptFormats.has(card.format) && keptFormats.size === 1) value += 4;

      const brandCards = keptPacks.filter(c => c.brand === card.brand);
      if (brandCards.length >= 2) {
        const brandFmts = new Set(brandCards.map(c => c.format));
        brandFmts.add(card.format);
        if (brandFmts.size >= 3) value += 30;
        else if (brandFmts.size === 2) value += 15;
      } else if (brandCards.length === 1) {
        if (brandCards[0].format !== card.format) value += 10;
      }
      return value;
    },
    pickCard(hand, kept) {
      let bestIdx = 0, bestVal = -999;
      for (let i = 0; i < hand.length; i++) {
        const v = this._cardValue(hand[i], kept);
        if (v > bestVal) { bestVal = v; bestIdx = i; }
      }
      return bestIdx;
    },
    finalChoice(lastTwo, kept) {
      const v0 = this._cardValue(lastTwo[0], kept);
      const v1 = this._cardValue(lastTwo[1], kept);
      return v0 >= v1 ? 0 : 1;
    }
  }
};

const STRATEGY_LIST = [Strategies.Random, Strategies.HighScore, Strategies.BrandCombo, Strategies.RegionCombo, Strategies.Balanced];

// ─── Game State ───────────────────────────────────────────────────────────────

const state = {
  phase: 'MENU',
  numPlayers: 5,
  round: 0,
  pickNumber: 0,
  maxPicks: 0,
  passLeft: true,
  hands: [],
  kept: [],
  roundScores: [],
  totalScores: [],
  strategies: [],
  selectedCardIndex: -1,
  remainingDeck: [],
  aiNames: [],
  aiNameIndices: [],
  comboResults: [],
};

// ─── Deck Building ────────────────────────────────────────────────────────────

function buildDeck() {
  const deck = [];
  for (const c of CARD_DATA.pack_cards) {
    deck.push({ ...c });
  }
  for (const c of CARD_DATA.counterfeit_cards) {
    deck.push({ ...c, base_score: -5 });
  }
  for (const c of CARD_DATA.item_cards) {
    deck.push({ ...c, brand: '', origin: '', format: '', rarity: 0, base_score: 0 });
  }
  return deck;
}

// ─── Game Flow ────────────────────────────────────────────────────────────────

function startGame(numPlayers) {
  state.numPlayers = numPlayers;
  state.round = 0;
  state.totalScores = new Array(numPlayers).fill(0);
  state.roundScores = [];
  state.strategies = [];

  // Store indices so we can look up names in either language dynamically
  const indices = shuffle([0, 1, 2, 3, 4, 5, 6]).slice(0, numPlayers - 1);
  state.aiNameIndices = indices;
  state.aiNames = indices.map(i => AI_NAMES_ZH[i]);

  for (let i = 1; i < numPlayers; i++) {
    state.strategies.push(STRATEGY_LIST[i % STRATEGY_LIST.length]);
  }

  state.phase = 'DEALING';
  startRound();
}

function startRound() {
  const deck = shuffle(buildDeck());
  const cardsPerPlayer = CARDS_PER_PLAYER[state.numPlayers];

  state.hands = [];
  const totalNeeded = cardsPerPlayer * state.numPlayers;
  for (let i = 0; i < state.numPlayers; i++) {
    state.hands.push(deck.slice(i * cardsPerPlayer, (i + 1) * cardsPerPlayer));
  }
  state.remainingDeck = deck.slice(totalNeeded);
  state.kept = Array.from({ length: state.numPlayers }, () => []);
  state.pickNumber = 0;
  state.maxPicks = cardsPerPlayer - 2;
  state.passLeft = [true, false, true][state.round];
  state.selectedCardIndex = -1;
  state.phase = 'PICKING';

  renderGame();
}

function confirmPick() {
  if (state.selectedCardIndex < 0) return;
  const humanIdx = state.selectedCardIndex;

  // Get the selected card element and kept area for fly animation
  const handArea = document.getElementById('hand-area');
  const keptArea = document.getElementById('kept-area');
  const selectedEl = handArea ? handArea.children[humanIdx] : null;

  if (selectedEl && keptArea) {
    const cardRect = selectedEl.getBoundingClientRect();
    const keptRect = keptArea.getBoundingClientRect();

    // Create flying clone
    const clone = selectedEl.cloneNode(true);
    clone.className = 'card card--flying';
    clone.style.left = cardRect.left + 'px';
    clone.style.top = cardRect.top + 'px';
    clone.style.width = cardRect.width + 'px';
    clone.style.height = cardRect.height + 'px';
    document.body.appendChild(clone);

    // Target position: center of kept area
    const targetX = keptRect.left + keptRect.width / 2 - cardRect.width / 2;
    const targetY = keptRect.top + keptRect.height / 2 - cardRect.height / 2;

    // Trigger fly
    requestAnimationFrame(() => {
      clone.style.left = targetX + 'px';
      clone.style.top = targetY + 'px';
      clone.style.transform = 'scale(0.6)';
      clone.style.opacity = '0.7';
    });

    // Remove clone after animation and proceed
    setTimeout(() => {
      clone.remove();
      _doConfirmPick(humanIdx);
    }, 400);
  } else {
    _doConfirmPick(humanIdx);
  }
}

function _doConfirmPick(humanIdx) {
  // Human picks
  const humanChosen = state.hands[0].splice(humanIdx, 1)[0];
  const humanHasItem = state.kept[0].some(c => c.type === 'item');
  if (humanChosen.type === 'item' && humanHasItem) {
    state.hands[0].splice(humanIdx, 0, humanChosen);
    let altIdx = state.hands[0].findIndex(c => c.type !== 'item');
    if (altIdx === -1) altIdx = 0;
    state.kept[0].push(state.hands[0].splice(altIdx, 1)[0]);
  } else {
    state.kept[0].push(humanChosen);
  }

  // AI picks
  for (let p = 1; p < state.numPlayers; p++) {
    const strategy = state.strategies[p - 1];
    let idx = strategy.pickCard(state.hands[p], state.kept[p]);
    idx = Math.max(0, Math.min(idx, state.hands[p].length - 1));
    const chosen = state.hands[p].splice(idx, 1)[0];
    const hasItem = state.kept[p].some(c => c.type === 'item');
    if (chosen.type === 'item' && hasItem) {
      state.hands[p].splice(idx, 0, chosen);
      let altIdx = -1;
      for (let j = 0; j < state.hands[p].length; j++) {
        if (state.hands[p][j].type !== 'item') { altIdx = j; break; }
      }
      if (altIdx === -1) altIdx = 0;
      state.kept[p].push(state.hands[p].splice(altIdx, 1)[0]);
    } else {
      state.kept[p].push(chosen);
    }
  }

  // Pass hands
  const newHands = new Array(state.numPlayers);
  for (let p = 0; p < state.numPlayers; p++) {
    const next = state.passLeft
      ? (p + 1) % state.numPlayers
      : (p - 1 + state.numPlayers) % state.numPlayers;
    newHands[next] = state.hands[p];
  }
  state.hands = newHands;

  state.pickNumber++;
  state.selectedCardIndex = -1;

  if (state.pickNumber >= state.maxPicks) {
    state.phase = 'FINAL_TWO';
  }

  renderGame();
}

function confirmFinalChoice(choiceIdx) {
  // Human final choice
  state.kept[0].push(state.hands[0][choiceIdx]);

  // AI final choices
  for (let p = 1; p < state.numPlayers; p++) {
    const strategy = state.strategies[p - 1];
    const idx = strategy.finalChoice(state.hands[p], state.kept[p]);
    state.kept[p].push(state.hands[p][Math.max(0, Math.min(idx, 1))]);
  }

  // Grab round: random player gets top card from remaining deck
  if (state.remainingDeck.length > 0) {
    const grabber = Math.floor(Math.random() * state.numPlayers);
    state.kept[grabber].push(state.remainingDeck[0]);
  }

  // Score
  scoreRound();
}

function scoreRound() {
  state.phase = 'SCORING';
  state.comboResults = [];
  const scores = [];

  for (let p = 0; p < state.numPlayers; p++) {
    const itemCard = state.kept[p].find(c => c.type === 'item') || null;
    const result = detectCombos(state.kept[p], itemCard);
    state.comboResults.push(result);
    scores.push(result.total);
    state.totalScores[p] += result.total;
  }

  state.roundScores.push(scores);
  renderGame();
}

function nextRound() {
  state.round++;
  if (state.round >= 3) {
    state.phase = 'GAME_OVER';
    renderGame();
  } else {
    state.phase = 'DEALING';
    startRound();
  }
}

function restartGame() {
  state.phase = 'MENU';
  renderGame();
}

// ─── Rendering ────────────────────────────────────────────────────────────────

function getPlayerName(idx) {
  if (idx === 0) return t().you;
  const nameIdx = state.aiNameIndices[idx - 1];
  return LANG === 'EN' ? AI_NAMES_EN[nameIdx] : AI_NAMES_ZH[nameIdx];
}

function renderCard(card, options = {}) {
  const { selected = false, small = false, revealed = false, clickable = false, index = -1 } = options;
  const div = document.createElement('div');
  div.className = `card ${small ? 'card--small' : ''} ${selected ? 'card--selected' : ''} ${clickable ? 'card--clickable' : ''}`;

  if (card.type === 'item') {
    div.classList.add('card--item');
    div.innerHTML = `
      <div class="card__item-icon">🎴</div>
      <div class="card__item-name">${cardName(card)}</div>
      <div class="card__item-effect">${cardEffect(card)}</div>
    `;
  } else if (card.type === 'counterfeit' && revealed) {
    div.classList.add('card--counterfeit-revealed');
    div.innerHTML = `
      <div class="card__fake-stamp">${t().fakeStamp}</div>
      <div class="card__info">
        <div class="card__brand">${card.brand}</div>
        <div class="card__meta">${localOrigin(card.origin)} · ${localFormat(card.format)}</div>
        <div class="card__score score--negative">-5</div>
      </div>
    `;
  } else {
    // Pack or unrevealed counterfeit — look the same
    const imgUrl = card.image_url || '';
    const displayName = (LANG === 'EN' && card.name_en) ? card.name_en : card.brand;
    div.innerHTML = `
      ${imgUrl ? `<img class="card__img" src="${imgUrl}" loading="lazy" alt="${card.brand}" onerror="this.style.display='none'">` : ''}
      <div class="card__info">
        <div class="card__brand">${displayName}</div>
        <div class="card__meta">${localOrigin(card.origin)} · ${localFormat(card.format)}</div>
        <div class="card__score">${card.type === 'counterfeit' ? card.base_score : '+' + card.base_score}</div>
      </div>
      <div class="card__rarity">${'★'.repeat(card.rarity)}</div>
    `;
  }

  if (clickable && index >= 0) {
    div.addEventListener('click', () => {
      state.selectedCardIndex = index;
      // Update selection visually without full re-render
      const handArea = document.getElementById('hand-area');
      if (handArea) {
        handArea.querySelectorAll('.card').forEach((el, i) => {
          el.classList.toggle('card--selected', i === index);
        });
        const confirmBtn = document.getElementById('confirm-btn');
        if (confirmBtn) confirmBtn.classList.remove('btn--disabled');
      } else {
        renderGame();
      }
    });
  }

  return div;
}

function renderMenu() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="screen screen--menu">
      <div class="menu__title">${t().menuTitle}</div>
      <div class="menu__subtitle">${t().menuSubtitle}</div>
      <div class="menu__desc">${t().menuDesc}</div>
      <div class="menu__buttons" id="menu-buttons"></div>
    </div>
  `;
  const btns = document.getElementById('menu-buttons');
  for (let n = 3; n <= 7; n++) {
    const btn = document.createElement('button');
    btn.className = 'btn btn--menu';
    btn.textContent = t().xPlayers(n);
    btn.addEventListener('click', () => startGame(n));
    btns.appendChild(btn);
  }

  // How to Play button
  const rulesBtn = document.createElement('button');
  rulesBtn.className = 'btn btn--menu btn--rules-menu';
  rulesBtn.textContent = t().howToPlay;
  rulesBtn.addEventListener('click', () => {
    state.phase = 'RULES';
    renderGame();
  });
  btns.parentElement.appendChild(rulesBtn);
}

function renderPicking() {
  const app = document.getElementById('app');
  const keepCount = state.kept[0].length;
  const maxKeep = KEEP_PER_ROUND[state.numPlayers];
  const directionText = state.passLeft ? t().passLeft : t().passRight;

  app.innerHTML = `
    <div class="screen screen--game">
      <div class="game__topbar">
        <span>${t().round(state.round + 1)}</span>
        <span>${t().picked(keepCount, maxKeep)}</span>
        <span>${directionText}</span>
        <button class="btn--help" id="help-btn">?</button>
      </div>
      <div class="game__ai-bar" id="ai-bar"></div>
      <div class="game__section-label">${t().yourHand} <span class="hint">${t().handHint}</span></div>
      <div class="game__hand" id="hand-area"></div>
      <div class="game__section-label">${t().collected}</div>
      <div class="game__kept" id="kept-area"></div>
      <div class="game__actions">
        <button class="btn btn--confirm ${state.selectedCardIndex >= 0 ? '' : 'btn--disabled'}" id="confirm-btn">
          ${t().pickThis}
        </button>
      </div>
    </div>
  `;

  // AI bar
  const aiBar = document.getElementById('ai-bar');
  for (let p = 1; p < state.numPlayers; p++) {
    const aiDiv = document.createElement('div');
    aiDiv.className = 'ai-player';
    aiDiv.innerHTML = `<span class="ai-avatar">🤖</span><span class="ai-name">${getPlayerName(p)}</span><span class="ai-count">${t().cards(state.kept[p].length)}</span>`;
    aiBar.appendChild(aiDiv);
  }

  // Hand — with staggered entrance animation
  const handArea = document.getElementById('hand-area');
  for (let i = 0; i < state.hands[0].length; i++) {
    const card = state.hands[0][i];
    const hasItem = state.kept[0].some(c => c.type === 'item');
    const isDisabledItem = card.type === 'item' && hasItem;
    const cardEl = renderCard(card, {
      selected: i === state.selectedCardIndex,
      clickable: !isDisabledItem,
      index: i,
    });
    if (isDisabledItem) cardEl.classList.add('card--disabled');
    // Stagger card entrance
    cardEl.classList.add('card--entering');
    cardEl.style.animationDelay = `${i * 60}ms`;
    // Tooltip on hover
    setupCardTooltip(cardEl, card);
    handArea.appendChild(cardEl);
  }

  // Kept
  const keptArea = document.getElementById('kept-area');
  for (const card of state.kept[0]) {
    const keptEl = renderCard(card, { small: true });
    setupCardTooltip(keptEl, card);
    keptArea.appendChild(keptEl);
  }

  // Confirm button
  document.getElementById('confirm-btn').addEventListener('click', () => {
    if (state.selectedCardIndex >= 0) confirmPick();
  });

  // Help button
  document.getElementById('help-btn').addEventListener('click', renderComboReference);
}

function renderFinalTwo() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="screen screen--final">
      <div class="final__title">${t().finalChoice}</div>
      <div class="final__subtitle">${t().finalSubtitle}</div>
      <div class="final__cards" id="final-cards"></div>
    </div>
  `;
  const container = document.getElementById('final-cards');
  let finalClickUsed = false;
  for (let i = 0; i < 2 && i < state.hands[0].length; i++) {
    const card = state.hands[0][i];
    const cardEl = renderCard(card, { clickable: false });
    cardEl.classList.add('card--large', 'card--clickable');
    // Entrance from opposite sides + float
    cardEl.classList.add(i === 0 ? 'card--float-left' : 'card--float-right');
    // Tooltip
    setupCardTooltip(cardEl, card);

    cardEl.addEventListener('click', () => {
      if (finalClickUsed) return;
      finalClickUsed = true;
      // Animate chosen/rejected before transitioning
      const cards = container.children;
      for (let j = 0; j < cards.length; j++) {
        // Remove float animations to avoid conflict
        cards[j].style.animation = 'none';
        cards[j].classList.remove('card--clickable');
        if (j === i) {
          cards[j].classList.add('card--chosen');
        } else {
          cards[j].classList.add('card--rejected');
        }
      }
      // Delay before transitioning to scoring
      setTimeout(() => confirmFinalChoice(i), 600);
    });
    container.appendChild(cardEl);
  }
}

function renderScoring() {
  const app = document.getElementById('app');
  const result = state.comboResults[0];
  const humanCards = state.kept[0];

  // Build combo items as data for staggered reveal
  const comboItems = [];

  // Brand combos
  for (const [brand, type] of Object.entries(result.brandCombos)) {
    const label = type === 'three' ? t().three : t().pair;
    const val = type === 'three' ? COMBO_VALUES.three : COMBO_VALUES.pair;
    comboItems.push({ html: `<div class="combo-item combo--brand combo-item--entering"><span class="combo-label">${brand} ${label}</span><span class="combo-value">+${val}</span></div>`, toastMsg: `${brand} ${label}! +${val}`, toastType: 'combo' });
  }
  // Origin combos
  for (const [origin, type] of Object.entries(result.originCombos)) {
    const label = type === 'old_friends' ? t().oldFriends : t().hometown;
    const val = type === 'old_friends' ? COMBO_VALUES.old_friends : COMBO_VALUES.hometown;
    comboItems.push({ html: `<div class="combo-item combo--origin combo-item--entering"><span class="combo-label">${localOrigin(origin)} ${label}</span><span class="combo-value">+${val}</span></div>`, toastMsg: `${localOrigin(origin)} ${label}! +${val}`, toastType: 'combo' });
  }
  if (result.formatClash) {
    comboItems.push({ html: `<div class="combo-item combo--format combo-item--entering"><span class="combo-label">${t().formatClash}</span><span class="combo-value">+${COMBO_VALUES.format_clash}</span></div>`, toastMsg: `${t().formatClash}! +${COMBO_VALUES.format_clash}`, toastType: 'combo' });
  }
  if (result.mixedBag) {
    comboItems.push({ html: `<div class="combo-item combo--mixed combo-item--entering"><span class="combo-label">${t().mixedBag}</span><span class="combo-value">+${COMBO_VALUES.mixed_bag}</span></div>`, toastMsg: `${t().mixedBag}! +${COMBO_VALUES.mixed_bag}`, toastType: 'combo' });
  }
  if (result.grandSlam) {
    comboItems.push({ html: `<div class="combo-item combo--grandslam combo--grandslam-active combo-item--entering"><span class="combo-label">${t().grandSlam}!</span><span class="combo-value">×2</span></div>`, isGrandSlam: true });
  }
  if (result.itemEffect) {
    const itemCard = humanCards.find(c => c.type === 'item');
    const itemName = itemCard ? cardName(itemCard) : t().item;
    const sign = result.itemBonus >= 0 ? '+' : '';
    comboItems.push({ html: `<div class="combo-item combo--item combo-item--entering"><span class="combo-label">${itemName}</span><span class="combo-value">${sign}${result.itemBonus}</span></div>`, toastMsg: `${itemName}: ${sign}${result.itemBonus}`, toastType: 'info' });
  }
  if (result.counterfeitPenalty > 0) {
    comboItems.push({ html: `<div class="combo-item combo--fake combo-item--entering"><span class="combo-label">${t().counterfeitAlert}</span><span class="combo-value">-${result.counterfeitPenalty}</span></div>`, toastMsg: `${t().counterfeitAlert} -${result.counterfeitPenalty}`, toastType: 'warning' });
  }

  // Leaderboard
  const roundIdx = state.roundScores.length - 1;
  const roundScores = state.roundScores[roundIdx];
  let leaderboard = [];
  for (let p = 0; p < state.numPlayers; p++) {
    leaderboard.push({ name: getPlayerName(p), roundScore: roundScores[p], totalScore: state.totalScores[p], isHuman: p === 0 });
  }
  leaderboard.sort((a, b) => b.totalScore - a.totalScore);

  let lbHtml = leaderboard.map((p, i) => {
    const cls = p.isHuman ? 'lb-row lb-row--human' : 'lb-row';
    return `<div class="${cls}"><span class="lb-rank">#${i + 1}</span><span class="lb-name">${p.name}</span><span class="lb-round">+${p.roundScore}</span><span class="lb-total">${p.totalScore}</span></div>`;
  }).join('');

  app.innerHTML = `
    <div class="screen screen--scoring">
      <div class="scoring__title">${t().roundScoring(state.round + 1)}</div>
      <div class="scoring__cards" id="scoring-cards"></div>
      <div class="scoring__breakdown" id="scoring-breakdown">
        <div class="scoring__base scoring__base--entering">${t().base} ${result.baseTotal}</div>
        <div id="combo-reveal-area"></div>
        <div class="scoring__total scoring__total--entering" id="scoring-total" style="opacity:0">${t().roundScore} <strong id="score-counter">0</strong></div>
      </div>
      <div class="scoring__leaderboard">
        <div class="lb-header"><span class="lb-rank"></span><span class="lb-name">${t().player}</span><span class="lb-round">${t().roundLabel}</span><span class="lb-total">${t().total}</span></div>
        ${lbHtml}
      </div>
      <button class="btn btn--next" id="next-btn">${state.round < 2 ? t().nextRound : t().seeResults}</button>
    </div>
  `;

  // Render player's kept cards — counterfeit starts hidden, reveals later
  const scoringCards = document.getElementById('scoring-cards');
  const hasCounterfeit = humanCards.some(c => c.type === 'counterfeit');
  for (const card of humanCards) {
    if (card.type === 'counterfeit') {
      // Render as a normal-looking pack card first (unrevealed)
      const cardEl = renderCard(card, { small: true, revealed: false });
      cardEl.classList.add('card--entering');
      scoringCards.appendChild(cardEl);
      // Trigger the flip reveal after delay
      triggerCounterfeitReveal(cardEl, card);
    } else {
      const cardEl = renderCard(card, { small: true });
      cardEl.classList.add('card--entering');
      setupCardTooltip(cardEl, card);
      scoringCards.appendChild(cardEl);
    }
  }

  // Staggered combo reveal — NO toasts during combo list (they overlap and duplicate)
  const comboArea = document.getElementById('combo-reveal-area');
  const totalEl = document.getElementById('scoring-total');
  const counterEl = document.getElementById('score-counter');

  const baseDelay = 600;
  const comboInterval = 500;
  let grandSlamIdx = -1;

  // First pass: show all non-Grand-Slam combos sequentially
  const regularCombos = comboItems.filter(item => !item.isGrandSlam);
  const hasGrandSlam = comboItems.some(item => item.isGrandSlam);

  regularCombos.forEach((item, idx) => {
    setTimeout(() => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = item.html;
      const el = wrapper.firstElementChild;
      el.style.animationDelay = '0ms';
      comboArea.appendChild(el);
    }, baseDelay + idx * comboInterval);
  });

  // After regular combos: show total (pre-multiplier if Grand Slam)
  const preTotal = hasGrandSlam ? Math.round(result.total / 2) : result.total;
  const totalDelay = baseDelay + regularCombos.length * comboInterval + 300;

  setTimeout(() => {
    totalEl.style.opacity = '1';
    totalEl.classList.add('scoring__total--entering');
    animateCounter(counterEl, preTotal, 600);
  }, totalDelay);

  // If Grand Slam: after showing pre-total, trigger the full celebration sequence
  if (hasGrandSlam) {
    const slamDelay = totalDelay + 900; // let pre-total finish counting
    setTimeout(() => {
      triggerGrandSlamCelebration(() => {
        // After celebration ends, double the counter
        animateCounter(counterEl, result.total, 1000);
        // Add Grand Slam line to combo list
        const gsItem = comboItems.find(item => item.isGrandSlam);
        if (gsItem) {
          const wrapper = document.createElement('div');
          wrapper.innerHTML = gsItem.html;
          comboArea.appendChild(wrapper.firstElementChild);
        }
      });
    }, slamDelay);
  }

  document.getElementById('next-btn').addEventListener('click', nextRound);
}

function renderGameOver() {
  const app = document.getElementById('app');

  let leaderboard = [];
  for (let p = 0; p < state.numPlayers; p++) {
    const rounds = state.roundScores.map(r => r[p]);
    leaderboard.push({ name: getPlayerName(p), total: state.totalScores[p], rounds, isHuman: p === 0 });
  }
  leaderboard.sort((a, b) => b.total - a.total);

  const winner = leaderboard[0];
  const isHumanWin = winner.isHuman;

  let tableHtml = leaderboard.map((p, i) => {
    const cls = p.isHuman ? 'go-row go-row--human' : 'go-row';
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
    return `<div class="${cls}">
      <span class="go-rank">${medal} #${i + 1}</span>
      <span class="go-name">${p.name}</span>
      <span class="go-rounds">${p.rounds.join(' + ')}</span>
      <span class="go-total">${p.total}</span>
    </div>`;
  }).join('');

  app.innerHTML = `
    <div class="screen screen--gameover">
      <div class="go__title">${isHumanWin ? '🎉 ' + t().youWon : '🏆 ' + t().xWins(winner.name)}</div>
      <div class="go__subtitle">${isHumanWin ? t().congrats : t().yourTotal + ' ' + state.totalScores[0]}</div>
      <div class="go__table">
        <div class="go-header"><span class="go-rank"></span><span class="go-name">${t().player}</span><span class="go-rounds">R1 + R2 + R3</span><span class="go-total">${t().total}</span></div>
        ${tableHtml}
      </div>
      <button class="btn btn--restart" id="restart-btn">${t().playAgain}</button>
    </div>
  `;

  document.getElementById('restart-btn').addEventListener('click', restartGame);
}

function renderRules() {
  const app = document.getElementById('app');
  const s = t();
  app.innerHTML = `
    <div class="screen screen--rules">
      <div class="rules__title">${s.howToPlay}</div>

      <div class="rules__section">
        <h3>🎯 ${s.rulesGoal}</h3>
        <p>${s.rulesGoalText}</p>
      </div>

      <div class="rules__section">
        <h3>🃏 ${s.rulesEachRound}</h3>
        <ol>
          <li>${s.rulesStep1}</li>
          <li>${s.rulesStep2}</li>
          <li>${s.rulesStep3}</li>
          <li>${s.rulesStep4}</li>
          <li>${s.rulesStep5}</li>
        </ol>
        <p class="rules__pass-dir">↔️ ${s.rulesPassDir}</p>
      </div>

      <div class="rules__section">
        <h3>⭐ ${s.rulesBaseScores}</h3>
        <p>${s.rulesBaseScoresText}</p>
      </div>

      <div class="rules__section">
        <h3>🔥 ${s.rulesCombos}</h3>
        <table class="rules__combo-table">
          <tr><td>🎯</td><td>${s.rulesPairDesc}</td></tr>
          <tr><td>🎯</td><td>${s.rulesThreeDesc}</td></tr>
          <tr><td>📍</td><td>${s.rulesHometownDesc}</td></tr>
          <tr><td>📍</td><td>${s.rulesOldFriendsDesc}</td></tr>
          <tr><td>📏</td><td>${s.rulesFormatClashDesc}</td></tr>
          <tr><td>🎲</td><td>${s.rulesMixedBagDesc}</td></tr>
          <tr><td>🏆</td><td>${s.rulesGrandSlamDesc}</td></tr>
        </table>
      </div>

      <div class="rules__section">
        <h3>🎴 ${s.rulesItems}</h3>
        <p>${s.rulesItemsText}</p>
      </div>

      <div class="rules__section">
        <h3>❌ ${s.rulesCounterfeit}</h3>
        <p>${s.rulesCounterfeitText} 😈</p>
      </div>

      <div class="rules__section">
        <h3>💡 ${s.rulesTips}</h3>
        <ul>
          <li>${s.rulesTip1}</li>
          <li>${s.rulesTip2}</li>
          <li>${s.rulesTip3}</li>
        </ul>
      </div>

      <button class="btn btn--confirm btn--back" id="back-btn">${s.back}</button>
    </div>
  `;

  document.getElementById('back-btn').addEventListener('click', () => {
    state.phase = 'MENU';
    renderGame();
  });
}

function renderComboReference() {
  // Remove existing overlay if any
  const existing = document.getElementById('combo-overlay');
  if (existing) { existing.remove(); return; }

  const s = t();
  const overlay = document.createElement('div');
  overlay.id = 'combo-overlay';
  overlay.className = 'combo-overlay';
  overlay.innerHTML = `
    <div class="combo-popup">
      <div class="combo-popup__header">
        <span class="combo-popup__title">🔥 ${s.comboReference}</span>
        <button class="combo-popup__close" id="combo-close">${s.close}</button>
      </div>
      <table class="rules__combo-table">
        <tr><td>🎯</td><td>${s.rulesPairDesc}</td></tr>
        <tr><td>🎯</td><td>${s.rulesThreeDesc}</td></tr>
        <tr><td>📍</td><td>${s.rulesHometownDesc}</td></tr>
        <tr><td>📍</td><td>${s.rulesOldFriendsDesc}</td></tr>
        <tr><td>📏</td><td>${s.rulesFormatClashDesc}</td></tr>
        <tr><td>🎲</td><td>${s.rulesMixedBagDesc}</td></tr>
        <tr><td>🏆</td><td>${s.rulesGrandSlamDesc}</td></tr>
      </table>
    </div>
  `;

  document.body.appendChild(overlay);

  document.getElementById('combo-close').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) overlay.remove();
  });
}

// ─── Toast Notification System ──────────────────────────────────────────────

function getToastContainer() {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  return container;
}

function showToast(message, type = 'info') {
  const container = getToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast--exiting');
    setTimeout(() => toast.remove(), 300);
  }, 1500);
}

// ─── Screen Transition Helper ────────────────────────────────────────────────

let _transitionLock = false;

function transitionTo(renderFn) {
  if (_transitionLock) { renderFn(); renderLangToggle(); return; }
  const app = document.getElementById('app');
  const current = app.firstElementChild;

  if (!current) {
    renderFn();
    renderLangToggle();
    const newScreen = app.firstElementChild;
    if (newScreen) newScreen.classList.add('screen--entering');
    return;
  }

  _transitionLock = true;
  current.classList.add('screen--exiting');

  setTimeout(() => {
    renderFn();
    renderLangToggle();
    const newScreen = app.firstElementChild;
    if (newScreen) newScreen.classList.add('screen--entering');
    _transitionLock = false;
  }, 200);
}

// ─── Score Counter Animation ─────────────────────────────────────────────────

function animateCounter(element, target, duration = 800) {
  const start = performance.now();
  const initial = 0;

  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease-out cubic
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.round(initial + (target - initial) * eased);
    element.textContent = current;
    if (progress < 1) requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
}

// ─── Tooltip Helper ──────────────────────────────────────────────────────────

let _tooltipTimer = null;
let _activeTooltip = null;

function setupCardTooltip(cardEl, card) {
  // Only on desktop with hover
  if (!window.matchMedia('(hover: hover)').matches) return;
  if (card.type === 'item') return;

  cardEl.style.position = 'relative';

  cardEl.addEventListener('mouseenter', () => {
    _tooltipTimer = setTimeout(() => {
      if (_activeTooltip) _activeTooltip.remove();

      const tooltip = document.createElement('div');
      tooltip.className = 'card-tooltip';

      const displayBrand = card.brand || '';
      const nameEn = card.name_en || '';
      const nameCn = card.name_cn || card.brand || '';
      const nameDisplay = nameCn + (nameEn ? ` (${nameEn})` : '');

      tooltip.innerHTML = `
        <div class="card-tooltip__name">${nameDisplay}</div>
        <div class="card-tooltip__row"><span class="card-tooltip__label">Origin</span><span class="card-tooltip__value">${card.origin || ''} (${localOrigin(card.origin || '')})</span></div>
        <div class="card-tooltip__row"><span class="card-tooltip__label">Format</span><span class="card-tooltip__value">${localFormat(card.format || '')}</span></div>
        <div class="card-tooltip__row"><span class="card-tooltip__label">Rarity</span><span class="card-tooltip__stars">${'★'.repeat(card.rarity || 0)}</span></div>
        <div class="card-tooltip__row"><span class="card-tooltip__label">Base</span><span class="card-tooltip__value">${card.type === 'counterfeit' ? '-5' : '+' + card.base_score}</span></div>
        ${card.sku ? `<div class="card-tooltip__row"><span class="card-tooltip__label">SKU</span><span class="card-tooltip__value">${card.sku}</span></div>` : ''}
      `;

      cardEl.appendChild(tooltip);
      _activeTooltip = tooltip;

      // Force reflow then show
      requestAnimationFrame(() => tooltip.classList.add('card-tooltip--visible'));
    }, 500);
  });

  cardEl.addEventListener('mouseleave', () => {
    clearTimeout(_tooltipTimer);
    if (_activeTooltip) {
      _activeTooltip.remove();
      _activeTooltip = null;
    }
  });
}

// ─── Grand Slam Celebration ──────────────────────────────────────────────────

function triggerGrandSlamCelebration(onComplete) {
  // Phase 1: Screen goes dark (200ms)
  const blackout = document.createElement('div');
  blackout.className = 'gs-blackout';
  document.body.appendChild(blackout);

  setTimeout(() => {
    // Phase 2: Gold explosion burst from center (400ms)
    const burst = document.createElement('div');
    burst.className = 'gs-burst';
    document.body.appendChild(burst);

    // Phase 3: Giant text slams in (600ms)
    setTimeout(() => {
      const textContainer = document.createElement('div');
      textContainer.className = 'gs-text-container';

      const line1 = document.createElement('div');
      line1.className = 'gs-text-line1';
      line1.textContent = LANG === 'ZH' ? '大 满 贯' : 'GRAND SLAM';

      const line2 = document.createElement('div');
      line2.className = 'gs-text-line2';
      line2.textContent = '× 2';

      textContainer.appendChild(line1);
      textContainer.appendChild(line2);
      document.body.appendChild(textContainer);

      // Phase 4: Particle shower (fire immediately with text)
      const particleContainer = document.createElement('div');
      particleContainer.className = 'gs-particles';
      document.body.appendChild(particleContainer);

      for (let i = 0; i < 60; i++) {
        const p = document.createElement('div');
        p.className = 'gs-particle';
        const hue = 35 + Math.random() * 25; // gold to amber range
        const size = 3 + Math.random() * 6;
        const startX = Math.random() * 100;
        const drift = (Math.random() - 0.5) * 40;
        const fallDuration = 1.5 + Math.random() * 1.5;
        const delay = Math.random() * 0.8;
        p.style.cssText = `
          left: ${startX}%;
          width: ${size}px; height: ${size}px;
          background: hsl(${hue}, 100%, ${55 + Math.random() * 30}%);
          --drift: ${drift}px;
          animation: gs-fall ${fallDuration}s ease-in ${delay}s both;
        `;
        particleContainer.appendChild(p);
      }

      // Screen shake
      const app = document.getElementById('app');
      if (app && app.firstElementChild) {
        app.firstElementChild.classList.add('screen--shake-heavy');
        setTimeout(() => app.firstElementChild.classList.remove('screen--shake-heavy'), 500);
      }

      // Phase 5: Cleanup and callback (after 2.5s total display)
      setTimeout(() => {
        blackout.classList.add('gs-blackout--fade');
        burst.classList.add('gs-burst--fade');
        textContainer.classList.add('gs-text--fade');
        particleContainer.classList.add('gs-particles--fade');

        setTimeout(() => {
          blackout.remove();
          burst.remove();
          textContainer.remove();
          particleContainer.remove();
          if (onComplete) onComplete();
        }, 500);
      }, 2000);

    }, 300);
  }, 200);
}

// ─── Counterfeit Reveal Animation ────────────────────────────────────────────

function triggerCounterfeitReveal(cardEl, card) {
  // Initially show as normal pack card
  // After 1s, flip to reveal
  setTimeout(() => {
    cardEl.classList.add('card--counterfeit-flip');

    setTimeout(() => {
      // At the midpoint of flip, swap content to revealed
      cardEl.className = cardEl.className.replace('card--counterfeit-flip', '');
      cardEl.classList.add('card--counterfeit-revealed');
      cardEl.innerHTML = `
        <div class="card__fake-stamp">${t().fakeStamp}</div>
        <div class="card__info">
          <div class="card__brand">${card.brand}</div>
          <div class="card__meta">${localOrigin(card.origin)} · ${localFormat(card.format)}</div>
          <div class="card__score score--negative">-5</div>
        </div>
      `;

      showToast(LANG === 'ZH' ? '发现假烟! -5' : 'Fake detected! -5', 'warning');

      // Screen shake
      const app = document.getElementById('app');
      if (app && app.firstElementChild) {
        app.firstElementChild.classList.add('screen--shake');
        setTimeout(() => app.firstElementChild.classList.remove('screen--shake'), 300);
      }
    }, 300); // halfway through the 600ms flip
  }, 1000);
}

function renderGame() {
  const renderFn = () => {
    switch (state.phase) {
      case 'MENU': renderMenu(); break;
      case 'RULES': renderRules(); break;
      case 'PICKING': renderPicking(); break;
      case 'FINAL_TWO': renderFinalTwo(); break;
      case 'SCORING': renderScoring(); break;
      case 'GAME_OVER': renderGameOver(); break;
      default: renderMenu();
    }
  };

  transitionTo(renderFn);
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderGame();
});
