// ─── Cigga Go — H5 PvE Game Engine (Full Social Simulation Rewrite) ──────────

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
    seeResults: '查看最终结果',
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
    rulesGrandSlamDesc: '大满贯 — 同品牌 ×3，各不同规格 → 总分 ×2',
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
    // New i18n
    roundSplash: (n) => `第 ${n} 轮`,
    passDirection: (dir) => dir === 'left' ? '向左传牌' : '向右传牌',
    cardsFrom: (name) => `手牌从 ${name} 传来`,
    thinking: '想想...',
    picked_ai: '选好了!',
    ready: '准备...',
    grab: '抢！',
    tooSlow: (name) => `太慢了！被${name}抢走了`,
    quickHands: '手速不错！',
    inspectPrompt: '要验货吗？点击一张可疑的牌，或跳过',
    skip: '跳过',
    busted: '果然是假的！哈哈哈',
    wronglyAccused: '冤枉好人了...',
    suspicious: '你那张看着可疑...',
    inspectResult: (real) => real ? '是真的！你被罚3分' : '抓到了！假烟退回！',
    discarded: '弃牌',
    allCollections: '所有玩家的收集',
    shareWith: '请谁喝酒？',
    fineWho: '罚谁？',
    cheers: (name) => `你和${name}干杯！各+4`,
    fined: (name) => `罚了${name}！最高combo减半`,
    swapPrompt: '选择交换对象',
    retrievePrompt: '从弃牌堆选一张',
    usedItem: (name, item) => `${name} 用了 ${item}`,
    coinFlipResult: (win) => win ? '正面！+10' : '反面！-5',
    immuneUsed: (name) => `${name} 免疫了一张假烟`,
    fakeKing: '假烟王',
    comboMaster: 'Combo达人',
    roundMVP: '最高单轮',
    cardMaster: '烟卡大王',
    fakeBuster: '假烟终结者',
    comboGod: 'Combo之神',
    speedDemon: '手速王',
    grandSlamAchieve: '大满贯成就',
    standings: '排名',
    roundSummaryTitle: '本轮战报',
    ate: (n) => `吃了${n}张`,
    combos: (n) => `${n}个combo`,
    pts: (n) => `${n}分`,
    revealTitle: '翻牌时间',
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
    seeResults: 'See Final Results',
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
    rulesGrandSlamDesc: 'Grand Slam — Same brand ×3, each different format → TOTAL ×2',
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
    // New i18n
    roundSplash: (n) => `Round ${n}`,
    passDirection: (dir) => dir === 'left' ? 'Passing Left' : 'Passing Right',
    cardsFrom: (name) => `Cards passed from ${name}`,
    thinking: 'thinking...',
    picked_ai: 'picked!',
    ready: 'Ready...',
    grab: 'GRAB!',
    tooSlow: (name) => `Too slow! ${name} grabbed it!`,
    quickHands: 'Quick hands!',
    inspectPrompt: 'Inspect a card? Tap a suspicious one, or skip',
    skip: 'Skip',
    busted: 'Busted! Hahaha',
    wronglyAccused: 'Wrongly accused...',
    suspicious: 'That card looks suspicious...',
    inspectResult: (real) => real ? "It's real! You lose 3 pts" : 'Caught! Fake returned!',
    discarded: 'Discarded',
    allCollections: "All Players' Collections",
    shareWith: 'Share a drink with?',
    fineWho: 'Fine who?',
    cheers: (name) => `Cheers with ${name}! +4 each`,
    fined: (name) => `Fined ${name}! Highest combo halved`,
    swapPrompt: 'Choose swap target',
    retrievePrompt: 'Pick from discard pile',
    usedItem: (name, item) => `${name} used ${item}`,
    coinFlipResult: (win) => win ? 'Heads! +10' : 'Tails! -5',
    immuneUsed: (name) => `${name} is immune to one fake`,
    fakeKing: 'Fake King',
    comboMaster: 'Combo Master',
    roundMVP: 'Round MVP',
    cardMaster: 'Card Master',
    fakeBuster: 'Fake Buster',
    comboGod: 'Combo God',
    speedDemon: 'Speed Demon',
    grandSlamAchieve: 'Grand Slam!',
    standings: 'Standings',
    roundSummaryTitle: 'Round Report',
    ate: (n) => `ate ${n}`,
    combos: (n) => `${n} combos`,
    pts: (n) => `${n} pts`,
    revealTitle: 'Reveal Time',
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
  // Only re-render if in menu or rules
  if (state.phase === 'MENU' || state.phase === 'RULES') {
    renderLangToggle();
    if (state.phase === 'MENU') renderMenu();
    else renderRules();
  } else {
    renderLangToggle();
  }
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

// ─── AI Speech Data ──────────────────────────────────────────────────────────

const AI_SPEECH = {
  ZH: {
    draft: ['嘿嘿...', '这张不错', '让我想想...', '送你一条好烟~', '这手牌不行啊', '有意思...', '我全都要！', '难选啊...'],
    discardReact: ['你居然扔了这个？！', '这牌你不要我要啊', '可惜了...', '明智的选择'],
    counterfeitReact: ['谁给我传的假烟！？', '我就知道不对劲！', '又是假中华...', '被坑了！'],
    scoreReact: ['不错不错', '就这？', '厉害！', '运气好而已', '下轮翻盘！'],
    inspect: '你那张看着可疑...',
    busted: '果然是假的！哈哈哈',
    wronglyAccused: '冤枉好人了...',
  },
  EN: {
    draft: ['Hmm...', 'Nice one', 'Let me think...', "Here's a treat~", 'Slim pickings...', 'Interesting...', 'I want them all!', 'Tough choice...'],
    discardReact: ['You tossed THAT?!', "I would've kept that!", 'What a waste...', 'Smart move'],
    counterfeitReact: ['Who passed me this fake?!', 'I knew something was off!', 'Another fake...', 'Got played!'],
    scoreReact: ['Not bad', "That's it?", 'Impressive!', 'Just lucky', "I'll get you next round!"],
    inspect: 'That card looks suspicious...',
    busted: 'Busted! Hahaha',
    wronglyAccused: 'Wrongly accused...',
  },
};

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

const AI_COLORS = ['#4a9', '#e84', '#68c', '#c6a', '#8b5', '#d68', '#5ac'];

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

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
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

  result.baseTotal = packs.reduce((sum, c) => sum + c.base_score, 0);

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

  let oldFriendsValue = COMBO_VALUES.old_friends;
  if (itemCard && itemCard.effect === 'old_friends_plus15') {
    oldFriendsValue = COMBO_VALUES.old_friends + 5;
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

  const formats = new Set(packs.map(c => c.format));
  if (formats.has('常规') && formats.has('细支') && formats.has('中支')) {
    result.formatClash = true;
    result.formatClashBonus = COMBO_VALUES.format_clash;
  }

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

  const brandFormats = {};
  for (const c of packs) {
    if (!brandFormats[c.brand]) brandFormats[c.brand] = new Set();
    brandFormats[c.brand].add(c.format);
  }
  result.grandSlam = Object.entries(brandFormats).some(
    ([brand, fmts]) => (brandCounts[brand] || 0) >= 3 && fmts.size >= 3
  );

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
  // Extended state for tracking
  discards: [],        // per round: what each player discarded
  grabResults: [],     // per round: { winner, card }
  inspections: [],     // per round: { inspector, target, cardIdx, wasFake }
  roundComboResults: [], // per round: combo results for all players
  totalFakesAvoided: null, // per player
  totalComboBonuses: null, // per player
  grabWins: null,        // per player
  grandSlams: null,      // per player
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

// ─── Helper: Player Names ─────────────────────────────────────────────────────

function getPlayerName(idx) {
  if (idx === 0) return t().you;
  const nameIdx = state.aiNameIndices[idx - 1];
  return LANG === 'EN' ? AI_NAMES_EN[nameIdx] : AI_NAMES_ZH[nameIdx];
}

function getPlayerAvatar(idx) {
  if (idx === 0) return '😎';
  const colorIdx = (idx - 1) % AI_COLORS.length;
  return '🤖';
}

// ─── Card Rendering ──────────────────────────────────────────────────────────

function renderCardHTML(card, options = {}) {
  const { small = false, revealed = false } = options;
  const sizeClass = small ? 'card--small' : '';

  if (card.type === 'item') {
    return `<div class="card ${sizeClass} card--item">
      <div class="card__item-icon">🎴</div>
      <div class="card__item-name">${cardName(card)}</div>
      <div class="card__item-effect">${cardEffect(card)}</div>
    </div>`;
  } else if (card.type === 'counterfeit' && revealed) {
    return `<div class="card ${sizeClass} card--counterfeit-revealed">
      <div class="card__fake-stamp">${t().fakeStamp}</div>
      <div class="card__info">
        <div class="card__brand">${card.brand}</div>
        <div class="card__meta">${localOrigin(card.origin)} · ${localFormat(card.format)}</div>
        <div class="card__score score--negative">-5</div>
      </div>
    </div>`;
  } else {
    const imgUrl = card.image_url || '';
    const displayName = (LANG === 'EN' && card.name_en) ? card.name_en : card.brand;
    return `<div class="card ${sizeClass}">
      ${imgUrl ? `<img class="card__img" src="${imgUrl}" loading="lazy" alt="${card.brand}" onerror="this.style.display='none'">` : ''}
      <div class="card__info">
        <div class="card__brand">${displayName}</div>
        <div class="card__meta">${localOrigin(card.origin)} · ${localFormat(card.format)}</div>
        <div class="card__score">${card.type === 'counterfeit' ? card.base_score : '+' + card.base_score}</div>
      </div>
      <div class="card__rarity">${'★'.repeat(card.rarity)}</div>
    </div>`;
  }
}

function createCardElement(card, options = {}) {
  const { small = false, revealed = false, clickable = false } = options;
  const div = document.createElement('div');
  div.innerHTML = renderCardHTML(card, { small, revealed });
  const cardEl = div.firstElementChild;
  if (clickable) cardEl.classList.add('card--clickable');
  return cardEl;
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

function showToast(message, type = 'info', duration = 2000) {
  const container = getToastContainer();
  const toast = document.createElement('div');
  toast.className = `toast toast--${type}`;
  toast.textContent = message;
  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast--exiting');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// ─── AI Speech Bubble System ─────────────────────────────────────────────────

const bubbleQueue = [];
let bubbleProcessing = false;

function showBubble(playerIdx, text, duration = 2500) {
  return new Promise(resolve => {
    const aiEl = document.querySelector(`.ai-player[data-player="${playerIdx}"]`);
    if (!aiEl) { resolve(); return; }

    // Remove existing bubble
    const existing = aiEl.querySelector('.ai-bubble');
    if (existing) existing.remove();

    const bubble = document.createElement('div');
    bubble.className = 'ai-bubble';
    bubble.textContent = text;
    aiEl.appendChild(bubble);

    setTimeout(() => {
      bubble.classList.add('ai-bubble--exit');
      setTimeout(() => {
        bubble.remove();
        resolve();
      }, 300);
    }, duration);
  });
}

function showTypingBubble(playerIdx) {
  const aiEl = document.querySelector(`.ai-player[data-player="${playerIdx}"]`);
  if (!aiEl) return;
  const existing = aiEl.querySelector('.ai-bubble');
  if (existing) existing.remove();
  const bubble = document.createElement('div');
  bubble.className = 'ai-bubble';
  bubble.innerHTML = '<span class="ai-bubble__dots"><span></span><span></span><span></span></span>';
  aiEl.appendChild(bubble);
}

function clearBubble(playerIdx) {
  const aiEl = document.querySelector(`.ai-player[data-player="${playerIdx}"]`);
  if (!aiEl) return;
  const existing = aiEl.querySelector('.ai-bubble');
  if (existing) {
    existing.classList.add('ai-bubble--exit');
    setTimeout(() => existing.remove(), 300);
  }
}

// ─── Animation Utilities ─────────────────────────────────────────────────────

function flyCard(fromEl, toEl, duration = 400) {
  return new Promise(resolve => {
    if (!fromEl || !toEl) { resolve(); return; }
    const fromRect = fromEl.getBoundingClientRect();
    const toRect = toEl.getBoundingClientRect();

    const clone = fromEl.cloneNode(true);
    clone.className = fromEl.className + ' card--flying';
    clone.style.left = fromRect.left + 'px';
    clone.style.top = fromRect.top + 'px';
    clone.style.width = fromRect.width + 'px';
    clone.style.height = fromRect.height + 'px';
    clone.style.transition = `all ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1)`;
    document.body.appendChild(clone);

    fromEl.style.opacity = '0';

    requestAnimationFrame(() => {
      clone.style.left = (toRect.left + toRect.width / 2 - fromRect.width / 2) + 'px';
      clone.style.top = (toRect.top + toRect.height / 2 - fromRect.height / 2) + 'px';
      clone.style.transform = 'scale(0.6)';
      clone.style.opacity = '0.7';
    });

    setTimeout(() => {
      clone.remove();
      resolve();
    }, duration);
  });
}

function shakeElement(el) {
  if (!el) return;
  el.classList.add('shake');
  setTimeout(() => el.classList.remove('shake'), 500);
}

function pulseScreen(color = 'rgba(192, 57, 43, 0.3)') {
  const pulse = document.createElement('div');
  pulse.className = 'screen-pulse';
  pulse.style.background = color;
  document.body.appendChild(pulse);
  setTimeout(() => pulse.remove(), 400);
}

function rollNumber(el, from, to, duration = 800) {
  return new Promise(resolve => {
    const start = performance.now();
    function tick(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(from + (to - from) * eased);
      el.textContent = current;
      if (progress < 1) requestAnimationFrame(tick);
      else resolve();
    }
    requestAnimationFrame(tick);
  });
}

function flipCard(el) {
  return new Promise(resolve => {
    el.classList.add('card--flipping');
    setTimeout(() => {
      el.classList.remove('card--flipping');
      resolve();
    }, 600);
  });
}

function slideIn(el, direction = 'left') {
  el.classList.add(`slide-in-${direction}`);
}

function slideOut(el, direction = 'left') {
  return new Promise(resolve => {
    el.classList.add(`slide-out-${direction}`);
    setTimeout(resolve, 300);
  });
}

// ─── Tooltip Helper ──────────────────────────────────────────────────────────

let _tooltipTimer = null;
let _activeTooltip = null;

function setupCardTooltip(cardEl, card) {
  if (!window.matchMedia('(hover: hover)').matches) return;
  if (card.type === 'item') return;

  cardEl.style.position = 'relative';

  cardEl.addEventListener('mouseenter', () => {
    _tooltipTimer = setTimeout(() => {
      if (_activeTooltip) _activeTooltip.remove();
      const tooltip = document.createElement('div');
      tooltip.className = 'card-tooltip';
      const nameCn = card.name_cn || card.brand || '';
      const nameEn = card.name_en || '';
      const nameDisplay = nameCn + (nameEn ? ` (${nameEn})` : '');
      tooltip.innerHTML = `
        <div class="card-tooltip__name">${nameDisplay}</div>
        <div class="card-tooltip__row"><span class="card-tooltip__label">Origin</span><span class="card-tooltip__value">${card.origin || ''} (${localOrigin(card.origin || '')})</span></div>
        <div class="card-tooltip__row"><span class="card-tooltip__label">Format</span><span class="card-tooltip__value">${localFormat(card.format || '')}</span></div>
        <div class="card-tooltip__row"><span class="card-tooltip__label">Rarity</span><span class="card-tooltip__stars">${'★'.repeat(card.rarity || 0)}</span></div>
        <div class="card-tooltip__row"><span class="card-tooltip__label">Base</span><span class="card-tooltip__value">${card.type === 'counterfeit' ? '-5' : '+' + card.base_score}</span></div>
      `;
      cardEl.appendChild(tooltip);
      _activeTooltip = tooltip;
      requestAnimationFrame(() => tooltip.classList.add('card-tooltip--visible'));
    }, 500);
  });

  cardEl.addEventListener('mouseleave', () => {
    clearTimeout(_tooltipTimer);
    if (_activeTooltip) { _activeTooltip.remove(); _activeTooltip = null; }
  });
}

// ─── Combo Reference Popup ───────────────────────────────────────────────────

function renderComboReference() {
  const existing = document.getElementById('combo-overlay');
  if (existing) { existing.remove(); return; }

  const s = t();
  const overlay = document.createElement('div');
  overlay.id = 'combo-overlay';
  overlay.className = 'combo-overlay';
  overlay.innerHTML = `
    <div class="combo-popup">
      <div class="combo-popup__header">
        <span class="combo-popup__title">${s.comboReference}</span>
        <button class="combo-popup__close" id="combo-close">${s.close}</button>
      </div>
      <table class="rules__combo-table">
        <tr><td></td><td>${s.rulesPairDesc}</td></tr>
        <tr><td></td><td>${s.rulesThreeDesc}</td></tr>
        <tr><td></td><td>${s.rulesHometownDesc}</td></tr>
        <tr><td></td><td>${s.rulesOldFriendsDesc}</td></tr>
        <tr><td></td><td>${s.rulesFormatClashDesc}</td></tr>
        <tr><td></td><td>${s.rulesMixedBagDesc}</td></tr>
        <tr><td></td><td>${s.rulesGrandSlamDesc}</td></tr>
      </table>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById('combo-close').addEventListener('click', () => overlay.remove());
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
}

// ─── Grand Slam Celebration ──────────────────────────────────────────────────

function triggerGrandSlamCelebration() {
  return new Promise(resolve => {
    const blackout = document.createElement('div');
    blackout.className = 'gs-blackout';
    document.body.appendChild(blackout);

    setTimeout(() => {
      const burst = document.createElement('div');
      burst.className = 'gs-burst';
      document.body.appendChild(burst);

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

        const particleContainer = document.createElement('div');
        particleContainer.className = 'gs-particles';
        document.body.appendChild(particleContainer);

        for (let i = 0; i < 60; i++) {
          const p = document.createElement('div');
          p.className = 'gs-particle';
          const hue = 35 + Math.random() * 25;
          const size = 3 + Math.random() * 6;
          const startX = Math.random() * 100;
          const drift = (Math.random() - 0.5) * 40;
          const fallDuration = 1.5 + Math.random() * 1.5;
          const delay = Math.random() * 0.8;
          p.style.cssText = `left:${startX}%;width:${size}px;height:${size}px;background:hsl(${hue},100%,${55 + Math.random() * 30}%);--drift:${drift}px;animation:gs-fall ${fallDuration}s ease-in ${delay}s both;`;
          particleContainer.appendChild(p);
        }

        const app = document.getElementById('app');
        if (app && app.firstElementChild) {
          app.firstElementChild.classList.add('screen--shake-heavy');
          setTimeout(() => app.firstElementChild.classList.remove('screen--shake-heavy'), 500);
        }

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
            resolve();
          }, 500);
        }, 2000);
      }, 300);
    }, 200);
  });
}

// ─── Coin Flip Animation ─────────────────────────────────────────────────────

function showCoinFlip(isWin) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'coin-flip-overlay';
    const coin = document.createElement('div');
    coin.className = 'coin coin--spinning';
    coin.textContent = '?';
    overlay.appendChild(coin);
    document.body.appendChild(overlay);

    let flips = 0;
    const flipInterval = setInterval(() => {
      flips++;
      if (flips >= 6) {
        clearInterval(flipInterval);
        coin.classList.remove('coin--spinning');
        coin.textContent = isWin ? '+10' : '-5';
        coin.style.background = isWin ? 'linear-gradient(135deg, #ffd700, #b8860b)' : 'linear-gradient(135deg, #c0392b, #8b1a1a)';

        const resultText = document.createElement('div');
        resultText.className = `coin__result ${isWin ? 'coin__result--win' : 'coin__result--lose'}`;
        resultText.textContent = t().coinFlipResult(isWin);
        overlay.appendChild(resultText);

        setTimeout(() => {
          overlay.remove();
          resolve();
        }, 1500);
      }
    }, 300);
  });
}

// ═══════════════════════════════════════════════════════════════════════════════
// ─── ASYNC STATE MACHINE — GAME FLOW ─────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

async function startGameFlow(numPlayers) {
  state.numPlayers = numPlayers;
  state.round = 0;
  state.totalScores = new Array(numPlayers).fill(0);
  state.roundScores = [];
  state.strategies = [];
  state.grabResults = [];
  state.inspections = [];
  state.roundComboResults = [];
  state.totalFakesAvoided = new Array(numPlayers).fill(0);
  state.totalComboBonuses = new Array(numPlayers).fill(0);
  state.grabWins = new Array(numPlayers).fill(0);
  state.grandSlams = new Array(numPlayers).fill(0);

  const indices = shuffle([0, 1, 2, 3, 4, 5, 6]).slice(0, numPlayers - 1);
  state.aiNameIndices = indices;
  state.aiNames = indices.map(i => AI_NAMES_ZH[i]);

  for (let i = 1; i < numPlayers; i++) {
    state.strategies.push(STRATEGY_LIST[i % STRATEGY_LIST.length]);
  }

  for (let round = 0; round < 3; round++) {
    state.round = round;
    state.passLeft = [true, false, true][round];

    await showRoundSplash();
    await draftPhase();
    await finalChoicePhase();
    await revealPhase();
    await inspectionPhase();
    await itemResolutionPhase();
    await scoringPhase();
    await grabPhase();
    await roundSummaryPhase();
  }

  await gameOverPhase();
}

// ─── Phase 1: MENU ───────────────────────────────────────────────────────────

function renderMenu() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="screen screen--menu screen--entering">
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
    btn.addEventListener('click', () => {
      state.phase = 'PLAYING';
      startGameFlow(n);
    });
    btns.appendChild(btn);
  }

  const rulesBtn = document.createElement('button');
  rulesBtn.className = 'btn btn--menu btn--rules-menu';
  rulesBtn.textContent = t().howToPlay;
  rulesBtn.addEventListener('click', () => {
    state.phase = 'RULES';
    renderRules();
  });
  btns.parentElement.appendChild(rulesBtn);
}

// ─── Phase 2: RULES ──────────────────────────────────────────────────────────

function renderRules() {
  const app = document.getElementById('app');
  const s = t();
  app.innerHTML = `
    <div class="screen screen--rules screen--entering">
      <div class="rules__title">${s.howToPlay}</div>
      <div class="rules__section"><h3>${s.rulesGoal}</h3><p>${s.rulesGoalText}</p></div>
      <div class="rules__section"><h3>${s.rulesEachRound}</h3>
        <ol><li>${s.rulesStep1}</li><li>${s.rulesStep2}</li><li>${s.rulesStep3}</li><li>${s.rulesStep4}</li><li>${s.rulesStep5}</li></ol>
        <p class="rules__pass-dir">${s.rulesPassDir}</p>
      </div>
      <div class="rules__section"><h3>${s.rulesBaseScores}</h3><p>${s.rulesBaseScoresText}</p></div>
      <div class="rules__section"><h3>${s.rulesCombos}</h3>
        <table class="rules__combo-table">
          <tr><td></td><td>${s.rulesPairDesc}</td></tr>
          <tr><td></td><td>${s.rulesThreeDesc}</td></tr>
          <tr><td></td><td>${s.rulesHometownDesc}</td></tr>
          <tr><td></td><td>${s.rulesOldFriendsDesc}</td></tr>
          <tr><td></td><td>${s.rulesFormatClashDesc}</td></tr>
          <tr><td></td><td>${s.rulesMixedBagDesc}</td></tr>
          <tr><td></td><td>${s.rulesGrandSlamDesc}</td></tr>
        </table>
      </div>
      <div class="rules__section"><h3>${s.rulesItems}</h3><p>${s.rulesItemsText}</p></div>
      <div class="rules__section"><h3>${s.rulesCounterfeit}</h3><p>${s.rulesCounterfeitText}</p></div>
      <div class="rules__section"><h3>${s.rulesTips}</h3>
        <ul><li>${s.rulesTip1}</li><li>${s.rulesTip2}</li><li>${s.rulesTip3}</li></ul>
      </div>
      <button class="btn btn--confirm btn--back" id="back-btn">${s.back}</button>
    </div>
  `;
  document.getElementById('back-btn').addEventListener('click', () => {
    state.phase = 'MENU';
    renderMenu();
    renderLangToggle();
  });
}

// ─── Phase 3: ROUND SPLASH ──────────────────────────────────────────────────

async function showRoundSplash() {
  const app = document.getElementById('app');
  const dirText = state.passLeft ? t().passDirection('left') : t().passDirection('right');
  const arrowClass = state.passLeft ? 'splash__arrow--left' : '';

  app.innerHTML = `
    <div class="screen screen--splash screen--entering">
      <div class="splash__round">${t().roundSplash(state.round + 1)}</div>
      <div class="splash__direction">${dirText}</div>
      <div class="splash__arrow ${arrowClass}">${state.passLeft ? '←' : '→'}</div>
    </div>
  `;

  await sleep(2000);
}

// ─── Phase 4: DRAFT ──────────────────────────────────────────────────────────

async function draftPhase() {
  // Deal cards
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
  state.selectedCardIndex = -1;

  // Draft loop
  for (let pick = 0; pick < state.maxPicks; pick++) {
    state.pickNumber = pick;
    await draftPick();
  }
}

async function draftPick() {
  return new Promise(async (resolve) => {
    const app = document.getElementById('app');
    const keepCount = state.kept[0].length;
    const maxKeep = KEEP_PER_ROUND[state.numPlayers];
    const directionText = state.passLeft ? t().passLeft : t().passRight;

    // Determine who passed us cards
    const passFromIdx = state.passLeft
      ? (0 - 1 + state.numPlayers) % state.numPlayers
      : (0 + 1) % state.numPlayers;

    app.innerHTML = `
      <div class="screen screen--game screen--entering">
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
          <button class="btn btn--confirm btn--disabled" id="confirm-btn">${t().pickThis}</button>
        </div>
      </div>
    `;

    // Show toast about where cards came from (after first pick)
    if (state.pickNumber > 0) {
      showToast(t().cardsFrom(getPlayerName(passFromIdx)), 'blue', 1500);
    }

    // Render AI bar
    const aiBar = document.getElementById('ai-bar');
    for (let p = 1; p < state.numPlayers; p++) {
      const aiDiv = document.createElement('div');
      aiDiv.className = 'ai-player';
      aiDiv.setAttribute('data-player', p);
      aiDiv.innerHTML = `<span class="ai-avatar">${getPlayerAvatar(p)}</span><span class="ai-name">${getPlayerName(p)}</span><span class="ai-count">${t().cards(state.kept[p].length)}</span>`;
      aiBar.appendChild(aiDiv);
    }

    // AI thinking animation
    const aiThinkPromises = [];
    for (let p = 1; p < state.numPlayers; p++) {
      const delay = randInt(500, 1500);
      const aiEl = document.querySelector(`.ai-player[data-player="${p}"]`);
      if (aiEl) aiEl.classList.add('ai-player--thinking');
      showTypingBubble(p);

      aiThinkPromises.push(sleep(delay).then(() => {
        clearBubble(p);
        if (aiEl) {
          aiEl.classList.remove('ai-player--thinking');
          aiEl.classList.add('ai-player--done');
        }
        // Random speech ~30% chance
        if (Math.random() < 0.3) {
          const speech = AI_SPEECH[LANG];
          showBubble(p, pick(speech.draft), 2000);
        } else {
          showBubble(p, t().picked_ai, 1000);
        }
      }));
    }

    // Render hand with staggered entrance
    const handArea = document.getElementById('hand-area');
    const slideDir = state.passLeft ? 'left' : 'right';
    state.selectedCardIndex = -1;

    for (let i = 0; i < state.hands[0].length; i++) {
      const card = state.hands[0][i];
      const hasItem = state.kept[0].some(c => c.type === 'item');
      const isDisabledItem = card.type === 'item' && hasItem;
      const cardEl = createCardElement(card, { clickable: !isDisabledItem });
      if (isDisabledItem) cardEl.classList.add('card--disabled');
      cardEl.classList.add('card--entering');
      cardEl.style.animationDelay = `${i * 60}ms`;
      cardEl.setAttribute('data-index', i);
      setupCardTooltip(cardEl, card);

      if (!isDisabledItem) {
        cardEl.addEventListener('click', () => {
          state.selectedCardIndex = i;
          // Toggle selection visually - NO re-render
          handArea.querySelectorAll('.card').forEach((el, idx) => {
            el.classList.toggle('card--selected', idx === i);
          });
          const confirmBtn = document.getElementById('confirm-btn');
          if (confirmBtn) confirmBtn.classList.remove('btn--disabled');
        });
      }

      handArea.appendChild(cardEl);
    }

    // Render kept cards
    const keptArea = document.getElementById('kept-area');
    for (const card of state.kept[0]) {
      const keptEl = createCardElement(card, { small: true });
      setupCardTooltip(keptEl, card);
      keptArea.appendChild(keptEl);
    }

    // Help button
    document.getElementById('help-btn').addEventListener('click', renderComboReference);

    // Confirm button
    document.getElementById('confirm-btn').addEventListener('click', async () => {
      if (state.selectedCardIndex < 0) return;
      const humanIdx = state.selectedCardIndex;

      // Fly animation
      const selectedEl = handArea.children[humanIdx];
      if (selectedEl && keptArea) {
        await flyCard(selectedEl, keptArea, 400);
      }

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

      // Wait for all AI thinking to finish
      await Promise.all(aiThinkPromises);

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

      state.selectedCardIndex = -1;
      resolve();
    });
  });
}

// ─── Phase 5: FINAL CHOICE ──────────────────────────────────────────────────

async function finalChoicePhase() {
  return new Promise(resolve => {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="screen screen--final screen--entering">
        <div class="final__title">${t().finalChoice}</div>
        <div class="final__subtitle">${t().finalSubtitle}</div>
        <div class="final__cards" id="final-cards"></div>
      </div>
    `;

    const container = document.getElementById('final-cards');
    let finalClickUsed = false;

    for (let i = 0; i < 2 && i < state.hands[0].length; i++) {
      const card = state.hands[0][i];
      const cardEl = createCardElement(card);
      cardEl.classList.add('card--large', 'card--clickable');
      cardEl.classList.add(i === 0 ? 'card--float-left' : 'card--float-right');
      setupCardTooltip(cardEl, card);

      cardEl.addEventListener('click', async () => {
        if (finalClickUsed) return;
        finalClickUsed = true;

        const cards = container.children;
        for (let j = 0; j < cards.length; j++) {
          cards[j].style.animation = 'none';
          cards[j].classList.remove('card--clickable');
          if (j === i) cards[j].classList.add('card--chosen');
          else cards[j].classList.add('card--rejected');
        }

        await sleep(600);

        // Store discards
        const discardIdx = i === 0 ? 1 : 0;
        if (!state.discards[state.round]) state.discards[state.round] = [];
        state.discards[state.round][0] = state.hands[0][discardIdx];

        // Human final choice
        state.kept[0].push(state.hands[0][i]);

        // AI final choices
        for (let p = 1; p < state.numPlayers; p++) {
          const strategy = state.strategies[p - 1];
          const idx = strategy.finalChoice(state.hands[p], state.kept[p]);
          const keepIdx = Math.max(0, Math.min(idx, 1));
          const discIdx = keepIdx === 0 ? 1 : 0;
          state.kept[p].push(state.hands[p][keepIdx]);
          if (!state.discards[state.round]) state.discards[state.round] = [];
          state.discards[state.round][p] = state.hands[p][discIdx];
        }

        // Show discards
        await sleep(300);
        await showDiscardReveal();
        resolve();
      });
      container.appendChild(cardEl);
    }
  });
}

async function showDiscardReveal() {
  const app = document.getElementById('app');
  const roundDiscards = state.discards[state.round] || [];

  let html = `<div class="screen screen--reveal screen--entering">
    <div class="reveal__title">${t().discarded}</div>
    <div class="discard-reveal">
      <div class="discard-reveal__title">${t().discarded}</div>`;

  for (let p = 0; p < state.numPlayers; p++) {
    const card = roundDiscards[p];
    if (!card) continue;
    const displayName = card.type === 'counterfeit' ? card.brand + ' (!)' : (card.brand || cardName(card));
    html += `<div class="discard-reveal__player">
      <span class="discard-reveal__player-name">${getPlayerName(p)}</span>
      <span class="discard-reveal__card">${displayName}</span>
    </div>`;
  }

  html += `</div>
    <button class="btn btn--next" id="continue-btn" style="margin:12px 20px">${LANG === 'ZH' ? '继续' : 'Continue'}</button>
  </div>`;

  app.innerHTML = html;

  // AI reactions
  for (let p = 1; p < state.numPlayers; p++) {
    if (Math.random() < 0.4) {
      await sleep(randInt(300, 800));
      const speech = AI_SPEECH[LANG];
      showToast(`${getPlayerName(p)}: ${pick(speech.discardReact)}`, 'info', 2000);
    }
  }

  await new Promise(resolve => {
    document.getElementById('continue-btn').addEventListener('click', resolve);
  });
}

// ─── Phase 6: REVEAL ─────────────────────────────────────────────────────────

async function revealPhase() {
  const app = document.getElementById('app');

  app.innerHTML = `
    <div class="screen screen--reveal screen--entering">
      <div class="reveal__title">${t().revealTitle}</div>
      <div id="reveal-players"></div>
      <button class="btn btn--next" id="reveal-continue" style="margin:12px 20px;opacity:0;pointer-events:none">${LANG === 'ZH' ? '继续' : 'Continue'}</button>
    </div>
  `;

  const container = document.getElementById('reveal-players');

  // Render each player's collection
  for (let p = 0; p < state.numPlayers; p++) {
    const playerDiv = document.createElement('div');
    playerDiv.className = 'reveal__player';
    playerDiv.innerHTML = `<div class="reveal__player-name ${p === 0 ? 'reveal__player-name--human' : ''}">${getPlayerAvatar(p)} ${getPlayerName(p)}</div><div class="reveal__player-cards" id="reveal-cards-${p}"></div>`;
    container.appendChild(playerDiv);

    const cardsContainer = document.getElementById(`reveal-cards-${p}`);

    // Flip cards one by one
    for (let c = 0; c < state.kept[p].length; c++) {
      const card = state.kept[p][c];
      const isCounterfeit = card.type === 'counterfeit';

      // Start face-down
      const cardEl = document.createElement('div');
      cardEl.className = 'card card--small card--facedown';
      cardEl.style.opacity = '0';
      cardsContainer.appendChild(cardEl);

      await sleep(200);
      cardEl.style.opacity = '1';
      cardEl.classList.add('card--flipping');

      await sleep(300);
      // Replace with actual card
      const realCard = createCardElement(card, { small: true, revealed: isCounterfeit });
      cardsContainer.replaceChild(realCard, cardEl);

      if (isCounterfeit) {
        shakeElement(realCard);
        pulseScreen('rgba(192, 57, 43, 0.3)');
        // Add FAKE stamp
        const stamp = document.createElement('div');
        stamp.className = 'card__fake-stamp-large';
        stamp.textContent = t().fakeStamp;
        realCard.style.position = 'relative';
        realCard.appendChild(stamp);

        // AI reaction
        if (p > 0) {
          const speech = AI_SPEECH[LANG];
          showToast(`${getPlayerName(p)}: ${pick(speech.counterfeitReact)}`, 'red', 2500);
        }
        await sleep(400);
      }
    }

    await sleep(200);
  }

  // Show continue button
  const continueBtn = document.getElementById('reveal-continue');
  continueBtn.style.opacity = '1';
  continueBtn.style.pointerEvents = 'auto';

  await new Promise(resolve => {
    continueBtn.addEventListener('click', resolve);
  });
}

// ─── Phase 7: INSPECTION ─────────────────────────────────────────────────────

async function inspectionPhase() {
  if (!state.inspections[state.round]) state.inspections[state.round] = [];

  // AI inspections first (~20% chance per AI)
  for (let p = 1; p < state.numPlayers; p++) {
    if (Math.random() < 0.2) {
      // AI inspects a random player card
      const playerCards = state.kept[0];
      if (playerCards.length === 0) continue;
      const cardIdx = randInt(0, playerCards.length - 1);
      const card = playerCards[cardIdx];
      const wasFake = card.type === 'counterfeit';

      showToast(`${getPlayerName(p)}: ${t().suspicious}`, 'red', 2000);
      await sleep(1500);

      if (wasFake) {
        showToast(t().inspectResult(false), 'gold', 2500);
        // Move card back to whoever passed it (simplified: just remove penalty since it's already counted)
        state.inspections[state.round].push({ inspector: p, target: 0, cardIdx, wasFake: true });
        state.totalFakesAvoided[0]++;
      } else {
        showToast(t().inspectResult(true), 'red', 2500);
        // Inspector loses 3 points
        state.totalScores[p] -= 3;
        state.inspections[state.round].push({ inspector: p, target: 0, cardIdx, wasFake: false });
      }
      await sleep(1500);
    }
  }

  // Player inspection
  return new Promise(resolve => {
    const app = document.getElementById('app');

    // Check if any AI has cards worth inspecting
    const hasTargets = state.kept.slice(1).some(k => k.length > 0);
    if (!hasTargets) { resolve(); return; }

    app.innerHTML = `
      <div class="screen screen--inspection screen--entering">
        <div class="inspection__prompt">${t().inspectPrompt}</div>
        <div class="inspection__cards" id="inspect-cards"></div>
        <button class="btn btn--skip" id="skip-inspect">${t().skip}</button>
      </div>
    `;

    const container = document.getElementById('inspect-cards');

    // Show AI cards that player can inspect
    for (let p = 1; p < state.numPlayers; p++) {
      for (let c = 0; c < state.kept[p].length; c++) {
        const card = state.kept[p][c];
        if (card.type === 'item') continue;

        const wrapper = document.createElement('div');
        wrapper.style.display = 'flex';
        wrapper.style.flexDirection = 'column';
        wrapper.style.alignItems = 'center';
        wrapper.style.gap = '4px';

        const cardEl = createCardElement(card, { small: true, clickable: true });
        cardEl.addEventListener('click', async () => {
          const wasFake = card.type === 'counterfeit';
          state.inspections[state.round].push({ inspector: 0, target: p, cardIdx: c, wasFake });

          if (wasFake) {
            shakeElement(cardEl);
            pulseScreen('rgba(200, 165, 92, 0.3)');
            showToast(t().busted, 'gold', 2500);
            state.totalFakesAvoided[0]++;
            // The fake card penalty will be offset in scoring
          } else {
            showToast(t().wronglyAccused + ' -3', 'red', 2500);
            state.totalScores[0] -= 3;
          }

          await sleep(2000);
          resolve();
        });

        const label = document.createElement('div');
        label.className = 'inspection__player-label';
        label.textContent = getPlayerName(p);

        wrapper.appendChild(cardEl);
        wrapper.appendChild(label);
        container.appendChild(wrapper);
      }
    }

    document.getElementById('skip-inspect').addEventListener('click', resolve);
  });
}

// ─── Phase 8: ITEM RESOLUTION ────────────────────────────────────────────────

async function itemResolutionPhase() {
  for (let p = 0; p < state.numPlayers; p++) {
    const itemCard = state.kept[p].find(c => c.type === 'item');
    if (!itemCard) continue;

    if (p === 0) {
      // Player's item - interactive
      await resolvePlayerItem(itemCard);
    } else {
      // AI item - auto with display
      await resolveAIItem(p, itemCard);
    }
  }
}

async function resolvePlayerItem(itemCard) {
  const effect = itemCard.effect;

  if (effect === 'both_plus4') {
    // Moutai: pick AI to share drink
    const target = await showTargetPicker(t().shareWith);
    if (target >= 0) {
      state.totalScores[target] += 4;
      // Player bonus is handled in combo detection
      showToast(t().cheers(getPlayerName(target)), 'gold', 2500);
      await sleep(2000);
    }
  } else if (effect === 'halve_highest_combo') {
    // Smoking ban: pick AI to fine
    const target = await showTargetPicker(t().fineWho);
    if (target >= 0) {
      showToast(t().fined(getPlayerName(target)), 'red', 2500);
      await sleep(2000);
    }
  } else if (effect === 'coin_flip') {
    const isWin = Math.random() < 0.5;
    await showCoinFlip(isWin);
  } else if (effect === 'highest_combo_plus5') {
    showToast(t().usedItem(t().you, cardName(itemCard)) + ' +5', 'gold', 2000);
    await sleep(1500);
  } else if (effect === 'immune_counterfeit') {
    showToast(t().immuneUsed(t().you), 'blue', 2000);
    await sleep(1500);
  } else if (effect === 'swap_card' || effect === 'retrieve_discard' || effect === 'old_friends_plus15') {
    showToast(t().usedItem(t().you, cardName(itemCard)), 'gold', 2000);
    await sleep(1500);
  }
}

async function resolveAIItem(playerIdx, itemCard) {
  const effect = itemCard.effect;
  const name = getPlayerName(playerIdx);

  if (effect === 'coin_flip') {
    const isWin = Math.random() < 0.5;
    showToast(t().usedItem(name, cardName(itemCard)), 'blue', 1500);
    await sleep(1000);
    await showCoinFlip(isWin);
  } else if (effect === 'both_plus4') {
    // AI picks random other player
    const targets = [];
    for (let i = 0; i < state.numPlayers; i++) {
      if (i !== playerIdx) targets.push(i);
    }
    const target = pick(targets);
    state.totalScores[target] += 4;
    state.totalScores[playerIdx] += 4;
    showToast(t().usedItem(name, cardName(itemCard)), 'blue', 2000);
    await sleep(1500);
  } else if (effect === 'immune_counterfeit') {
    showToast(t().immuneUsed(name), 'blue', 2000);
    await sleep(1500);
  } else {
    showToast(t().usedItem(name, cardName(itemCard)), 'blue', 2000);
    await sleep(1500);
  }
}

async function showTargetPicker(prompt) {
  return new Promise(resolve => {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="screen screen--items screen--entering">
        <div class="item-res__title">${prompt}</div>
        <div class="item-res__targets" id="target-list"></div>
      </div>
    `;

    const container = document.getElementById('target-list');
    for (let p = 1; p < state.numPlayers; p++) {
      const target = document.createElement('div');
      target.className = 'item-res__target';
      target.innerHTML = `<div class="item-res__target-avatar">${getPlayerAvatar(p)}</div><div class="item-res__target-name">${getPlayerName(p)}</div>`;
      target.addEventListener('click', () => resolve(p));
      container.appendChild(target);
    }
  });
}

// ─── Phase 9: SCORING ────────────────────────────────────────────────────────

async function scoringPhase() {
  state.comboResults = [];
  const scores = [];

  for (let p = 0; p < state.numPlayers; p++) {
    const itemCard = state.kept[p].find(c => c.type === 'item') || null;
    const result = detectCombos(state.kept[p], itemCard);
    state.comboResults.push(result);
    scores.push(result.total);
    state.totalScores[p] += result.total;

    // Track stats
    const comboCount = Object.keys(result.brandCombos).length + Object.keys(result.originCombos).length
      + (result.formatClash ? 1 : 0) + (result.mixedBag ? 1 : 0);
    state.totalComboBonuses[p] += result.brandBonus + result.originBonus + result.formatClashBonus + result.mixedBagBonus;
    if (result.grandSlam) state.grandSlams[p]++;
  }

  state.roundScores.push(scores);
  state.roundComboResults.push(state.comboResults);

  await animateScoring();
}

async function animateScoring() {
  const app = document.getElementById('app');
  const result = state.comboResults[0];
  const humanCards = state.kept[0];

  // Build combo items
  const comboItems = [];
  for (const [brand, type] of Object.entries(result.brandCombos)) {
    const val = type === 'three' ? COMBO_VALUES.three : COMBO_VALUES.pair;
    const label = type === 'three' ? t().three : t().pair;
    comboItems.push({ type: 'brand', label: `${brand} ${label}`, value: val, glowClass: 'card--glow-gold', matchFn: c => c.brand === brand });
  }
  for (const [origin, type] of Object.entries(result.originCombos)) {
    const val = type === 'old_friends' ? COMBO_VALUES.old_friends : COMBO_VALUES.hometown;
    const label = type === 'old_friends' ? t().oldFriends : t().hometown;
    comboItems.push({ type: 'origin', label: `${localOrigin(origin)} ${label}`, value: val, glowClass: 'card--glow-blue', matchFn: c => c.origin === origin });
  }
  if (result.formatClash) {
    comboItems.push({ type: 'format', label: t().formatClash, value: COMBO_VALUES.format_clash, glowClass: 'card--glow-green', matchFn: () => true });
  }
  if (result.mixedBag) {
    comboItems.push({ type: 'mixed', label: t().mixedBag, value: COMBO_VALUES.mixed_bag, glowClass: 'card--glow-purple', matchFn: () => true });
  }

  // Build score bar data
  const roundIdx = state.roundScores.length - 1;
  const roundScores = state.roundScores[roundIdx];
  const maxScore = Math.max(...roundScores, 1);

  app.innerHTML = `
    <div class="screen screen--scoring screen--entering">
      <div class="scoring__title">${t().roundScoring(state.round + 1)}</div>
      <div class="scoring__cards" id="scoring-cards"></div>
      <div class="scoring__breakdown" id="scoring-breakdown">
        <div class="scoring__base scoring__base--entering">${t().base} ${result.baseTotal}</div>
        <div id="combo-reveal-area"></div>
        <div class="scoring__total" id="scoring-total" style="opacity:0">${t().roundScore} <strong id="score-counter">0</strong></div>
      </div>
      <div class="score-bars" id="score-bars"></div>
      <div id="ai-reactions"></div>
    </div>
  `;

  // Render player's cards
  const scoringCards = document.getElementById('scoring-cards');
  for (const card of humanCards) {
    const isCounterfeit = card.type === 'counterfeit';
    const cardEl = createCardElement(card, { small: true, revealed: isCounterfeit });
    cardEl.classList.add('card--entering');
    setupCardTooltip(cardEl, card);
    scoringCards.appendChild(cardEl);
  }

  // Score bars
  const barsContainer = document.getElementById('score-bars');
  for (let p = 0; p < state.numPlayers; p++) {
    const barDiv = document.createElement('div');
    barDiv.className = 'score-bar';
    const heightPct = (roundScores[p] / maxScore) * 80;
    barDiv.innerHTML = `
      <div class="score-bar__value" id="bar-value-${p}">0</div>
      <div class="score-bar__fill ${p === 0 ? 'score-bar__fill--human' : ''}" id="bar-fill-${p}" style="height: 0%"></div>
      <div class="score-bar__label">${getPlayerName(p)}</div>
    `;
    barsContainer.appendChild(barDiv);
  }

  await sleep(600);

  // Animate combos sequentially
  const comboArea = document.getElementById('combo-reveal-area');
  const cardEls = Array.from(scoringCards.children);

  for (let i = 0; i < comboItems.length; i++) {
    const combo = comboItems[i];
    await sleep(800);

    // Highlight matching cards
    for (const cardEl of cardEls) {
      // Check if this card matches the combo
      const cardIdx = cardEls.indexOf(cardEl);
      if (cardIdx >= 0 && cardIdx < humanCards.length) {
        const card = humanCards[cardIdx];
        if (card.type === 'pack' && combo.matchFn(card)) {
          cardEl.classList.add(combo.glowClass);
        }
      }
    }

    // Show combo line
    const comboLine = document.createElement('div');
    comboLine.className = `combo-item combo--${combo.type} combo-item--entering`;
    comboLine.innerHTML = `<span class="combo-label">${combo.label}</span><span class="combo-value">+${combo.value}</span>`;
    comboArea.appendChild(comboLine);

    await sleep(200);

    // Remove glow after brief pause
    setTimeout(() => {
      for (const cardEl of cardEls) {
        cardEl.classList.remove(combo.glowClass);
      }
    }, 600);
  }

  // Item bonus
  if (result.itemEffect) {
    await sleep(500);
    const itemCard = humanCards.find(c => c.type === 'item');
    const itemName = itemCard ? cardName(itemCard) : t().item;
    const sign = result.itemBonus >= 0 ? '+' : '';
    const comboLine = document.createElement('div');
    comboLine.className = 'combo-item combo--item combo-item--entering';
    comboLine.innerHTML = `<span class="combo-label">${itemName}</span><span class="combo-value">${sign}${result.itemBonus}</span>`;
    comboArea.appendChild(comboLine);
  }

  // Counterfeit penalty
  if (result.counterfeitPenalty > 0) {
    await sleep(500);
    // Flash counterfeit cards red
    for (let i = 0; i < humanCards.length; i++) {
      if (humanCards[i].type === 'counterfeit') {
        cardEls[i].classList.add('card--glow-red');
      }
    }
    const comboLine = document.createElement('div');
    comboLine.className = 'combo-item combo--fake combo-item--entering';
    comboLine.innerHTML = `<span class="combo-label">${t().counterfeitAlert}</span><span class="combo-value">-${result.counterfeitPenalty}</span>`;
    comboArea.appendChild(comboLine);
  }

  // Grand Slam
  if (result.grandSlam) {
    await sleep(800);
    await triggerGrandSlamCelebration();

    // Turn all cards gold
    for (const cardEl of cardEls) {
      cardEl.classList.add('card--gold-all');
    }

    const gsLine = document.createElement('div');
    gsLine.className = 'combo-item combo--grandslam combo--grandslam-active combo-item--entering';
    gsLine.innerHTML = `<span class="combo-label">${t().grandSlam}!</span><span class="combo-value">x2</span>`;
    comboArea.appendChild(gsLine);
  }

  // Show total with counter
  await sleep(500);
  const totalEl = document.getElementById('scoring-total');
  totalEl.style.opacity = '1';
  totalEl.classList.add('scoring__total--entering');
  const counterEl = document.getElementById('score-counter');
  await rollNumber(counterEl, 0, result.total, 1000);

  // Animate bar chart
  for (let p = 0; p < state.numPlayers; p++) {
    const fill = document.getElementById(`bar-fill-${p}`);
    const val = document.getElementById(`bar-value-${p}`);
    const heightPct = Math.max((roundScores[p] / maxScore) * 80, 5);
    fill.style.height = heightPct + '%';
    rollNumber(val, 0, roundScores[p], 800);
  }

  // AI reactions
  await sleep(800);
  const speech = AI_SPEECH[LANG];
  for (let p = 1; p < state.numPlayers; p++) {
    if (Math.random() < 0.5) {
      showToast(`${getPlayerName(p)}: ${pick(speech.scoreReact)}`, 'info', 2000);
      await sleep(600);
    }
  }

  // Wait for user tap to continue (add button dynamically)
  const screen = app.querySelector('.screen--scoring');
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn btn--next';
  nextBtn.textContent = LANG === 'ZH' ? '继续' : 'Continue';
  nextBtn.style.margin = '12px 0';
  screen.appendChild(nextBtn);

  await new Promise(resolve => {
    nextBtn.addEventListener('click', resolve);
  });
}

// ─── Phase 10: GRAB ──────────────────────────────────────────────────────────

async function grabPhase() {
  if (state.remainingDeck.length === 0) {
    state.grabResults.push({ winner: -1, card: null });
    return;
  }

  const grabCard = state.remainingDeck[0];
  const app = document.getElementById('app');

  // Ready screen
  app.innerHTML = `
    <div class="screen screen--grab screen--entering">
      <div class="grab__countdown" id="grab-text">${t().ready}</div>
    </div>
  `;

  await sleep(1000);

  // Countdown
  const textEl = document.getElementById('grab-text');
  for (let n = 3; n >= 1; n--) {
    textEl.textContent = n;
    textEl.style.animation = 'none';
    void textEl.offsetWidth;
    textEl.style.animation = 'countPulse 0.8s ease-out';
    await sleep(800);
  }

  // Show card + GRAB text
  const screen = app.querySelector('.screen--grab');
  screen.innerHTML = '';

  const tapText = document.createElement('div');
  tapText.className = 'grab__tap-text';
  tapText.textContent = t().grab;

  const cardArea = document.createElement('div');
  cardArea.className = 'grab__card-area';
  const cardEl = createCardElement(grabCard, { clickable: true });
  cardEl.classList.add('card--large', 'card--flipping');
  cardArea.appendChild(cardEl);

  screen.appendChild(tapText);
  screen.appendChild(cardArea);

  // AI reaction times
  const aiTimes = [];
  for (let p = 1; p < state.numPlayers; p++) {
    aiTimes.push({ player: p, time: randInt(300, 900) });
  }
  const fastestAI = aiTimes.reduce((a, b) => a.time < b.time ? a : b);

  const grabStart = performance.now();
  let grabbed = false;

  const grabResult = await new Promise(resolve => {
    // Player tap handler
    const tapHandler = () => {
      if (grabbed) return;
      grabbed = true;
      const playerTime = performance.now() - grabStart;
      if (playerTime < fastestAI.time) {
        resolve({ winner: 0, card: grabCard });
      } else {
        resolve({ winner: fastestAI.player, card: grabCard });
      }
    };

    cardEl.addEventListener('click', tapHandler);
    screen.addEventListener('click', tapHandler);

    // AI timeout
    setTimeout(() => {
      if (!grabbed) {
        grabbed = true;
        resolve({ winner: fastestAI.player, card: grabCard });
      }
    }, fastestAI.time);
  });

  // Show result
  const resultDiv = document.createElement('div');
  resultDiv.className = 'grab__result';

  if (grabResult.winner === 0) {
    resultDiv.textContent = t().quickHands;
    resultDiv.style.color = 'var(--gold)';
    state.kept[0].push(grabCard);
    state.grabWins[0]++;
  } else {
    resultDiv.textContent = t().tooSlow(getPlayerName(grabResult.winner));
    state.kept[grabResult.winner].push(grabCard);
    state.grabWins[grabResult.winner]++;
  }

  screen.appendChild(resultDiv);

  // Add grab card score to round scores
  if (grabCard.type === 'pack') {
    state.totalScores[grabResult.winner] += grabCard.base_score;
  }

  state.grabResults.push(grabResult);

  await sleep(2000);
}

// ─── Phase 11: ROUND SUMMARY ────────────────────────────────────────────────

async function roundSummaryPhase() {
  const app = document.getElementById('app');
  const roundIdx = state.roundScores.length - 1;
  const roundScores = state.roundScores[roundIdx];

  // Build leaderboard
  let leaderboard = [];
  for (let p = 0; p < state.numPlayers; p++) {
    leaderboard.push({ idx: p, name: getPlayerName(p), roundScore: roundScores[p], totalScore: state.totalScores[p], isHuman: p === 0 });
  }
  leaderboard.sort((a, b) => b.totalScore - a.totalScore);

  // Fun stats
  const funStats = [];

  // Fake King: player who ate most counterfeits this round
  const fakesByPlayer = [];
  for (let p = 0; p < state.numPlayers; p++) {
    const fakeCount = state.kept[p].filter(c => c.type === 'counterfeit').length;
    fakesByPlayer.push({ p, count: fakeCount });
  }
  const fakeKing = fakesByPlayer.reduce((a, b) => a.count > b.count ? a : b);
  if (fakeKing.count > 0) {
    funStats.push({ icon: '💀', text: `${t().fakeKing}: ${getPlayerName(fakeKing.p)}`, value: t().ate(fakeKing.count) });
  }

  // Combo Master: most combos this round
  const comboCounts = [];
  for (let p = 0; p < state.numPlayers; p++) {
    const r = state.comboResults[p];
    const count = Object.keys(r.brandCombos).length + Object.keys(r.originCombos).length + (r.formatClash ? 1 : 0) + (r.mixedBag ? 1 : 0);
    comboCounts.push({ p, count });
  }
  const comboChamp = comboCounts.reduce((a, b) => a.count > b.count ? a : b);
  if (comboChamp.count > 0) {
    funStats.push({ icon: '🔥', text: `${t().comboMaster}: ${getPlayerName(comboChamp.p)}`, value: t().combos(comboChamp.count) });
  }

  // Round MVP: highest round score
  let mvpIdx = 0;
  for (let p = 1; p < state.numPlayers; p++) {
    if (roundScores[p] > roundScores[mvpIdx]) mvpIdx = p;
  }
  funStats.push({ icon: '🏆', text: `${t().roundMVP}: ${getPlayerName(mvpIdx)}`, value: t().pts(roundScores[mvpIdx]) });

  let lbHtml = leaderboard.map((p, i) => {
    const cls = p.isHuman ? 'lb-row lb-row--human' : 'lb-row';
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
    return `<div class="${cls}"><span class="lb-rank">${medal} #${i + 1}</span><span class="lb-name">${p.name}</span><span class="lb-round">+${p.roundScore}</span><span class="lb-total">${p.totalScore}</span></div>`;
  }).join('');

  let funStatsHtml = funStats.map(s => `<div class="fun-stat"><span class="fun-stat__icon">${s.icon}</span><span class="fun-stat__text">${s.text}</span><span class="fun-stat__value">${s.value}</span></div>`).join('');

  const isLastRound = state.round >= 2;
  const btnText = isLastRound ? t().seeResults : t().nextRound;

  app.innerHTML = `
    <div class="screen screen--scoring screen--entering" style="justify-content:flex-start;padding-top:30px">
      <div class="scoring__title">${t().roundSummaryTitle}</div>
      <div class="scoring__leaderboard">
        <div class="lb-header"><span class="lb-rank"></span><span class="lb-name">${t().player}</span><span class="lb-round">${t().roundLabel}</span><span class="lb-total">${t().total}</span></div>
        ${lbHtml}
      </div>
      <div class="fun-stats">${funStatsHtml}</div>
      <button class="btn btn--next" id="next-btn">${btnText}</button>
    </div>
  `;

  await new Promise(resolve => {
    document.getElementById('next-btn').addEventListener('click', resolve);
  });
}

// ─── Phase 12: GAME OVER ────────────────────────────────────────────────────

async function gameOverPhase() {
  const app = document.getElementById('app');

  let leaderboard = [];
  for (let p = 0; p < state.numPlayers; p++) {
    const rounds = state.roundScores.map(r => r[p]);
    leaderboard.push({ idx: p, name: getPlayerName(p), total: state.totalScores[p], rounds, isHuman: p === 0 });
  }
  leaderboard.sort((a, b) => b.total - a.total);

  const winner = leaderboard[0];
  const isHumanWin = winner.isHuman;

  // Podium
  const top3 = leaderboard.slice(0, 3);
  // Reorder for display: 2nd, 1st, 3rd
  const podiumOrder = top3.length >= 3 ? [top3[1], top3[0], top3[2]] : top3;

  let podiumHtml = '';
  const placeNums = top3.length >= 3 ? [2, 1, 3] : top3.map((_, i) => i + 1);
  for (let i = 0; i < podiumOrder.length; i++) {
    const p = podiumOrder[i];
    const place = placeNums[i];
    const medal = place === 1 ? '🥇' : place === 2 ? '🥈' : '🥉';
    podiumHtml += `
      <div class="podium__place podium__place--${place}">
        <div class="podium__avatar">${p.isHuman ? '😎' : '🤖'}</div>
        <div class="podium__name">${p.name}</div>
        <div class="podium__score">${p.total}</div>
        <div class="podium__bar podium__bar--${place}">${medal}</div>
      </div>
    `;
  }

  // Full table
  let tableHtml = leaderboard.map((p, i) => {
    const cls = p.isHuman ? 'go-row go-row--human' : 'go-row';
    const medal = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '';
    return `<div class="${cls}"><span class="go-rank">${medal} #${i + 1}</span><span class="go-name">${p.name}</span><span class="go-rounds">${p.rounds.join(' + ')}</span><span class="go-total">${p.total}</span></div>`;
  }).join('');

  // Achievements
  const badges = [];
  badges.push({ icon: '🏆', text: t().cardMaster, name: winner.name });

  // Fake Buster: most fakes avoided
  let bestFakeBuster = 0;
  for (let i = 1; i < state.numPlayers; i++) {
    if (state.totalFakesAvoided[i] > state.totalFakesAvoided[bestFakeBuster]) bestFakeBuster = i;
  }
  if (state.totalFakesAvoided[bestFakeBuster] > 0) {
    badges.push({ icon: '🔍', text: t().fakeBuster, name: getPlayerName(bestFakeBuster) });
  }

  // Combo God: most total combo bonus
  let bestCombo = 0;
  for (let i = 1; i < state.numPlayers; i++) {
    if (state.totalComboBonuses[i] > state.totalComboBonuses[bestCombo]) bestCombo = i;
  }
  if (state.totalComboBonuses[bestCombo] > 0) {
    badges.push({ icon: '🔥', text: t().comboGod, name: getPlayerName(bestCombo) });
  }

  // Speed Demon: most grabs
  let bestGrab = 0;
  for (let i = 1; i < state.numPlayers; i++) {
    if (state.grabWins[i] > state.grabWins[bestGrab]) bestGrab = i;
  }
  if (state.grabWins[bestGrab] > 0) {
    badges.push({ icon: '⚡', text: t().speedDemon, name: getPlayerName(bestGrab) });
  }

  // Grand Slam
  for (let i = 0; i < state.numPlayers; i++) {
    if (state.grandSlams[i] > 0) {
      badges.push({ icon: '🎯', text: t().grandSlamAchieve, name: getPlayerName(i) });
    }
  }

  let badgesHtml = badges.map((b, i) => `<div class="badge" style="animation-delay:${i * 200}ms"><span class="badge__icon">${b.icon}</span><span class="badge__text">${b.text}:</span><span class="badge__name">${b.name}</span></div>`).join('');

  app.innerHTML = `
    <div class="screen screen--gameover screen--entering">
      <div class="go__title">${isHumanWin ? t().youWon : t().xWins(winner.name)}</div>
      <div class="go__subtitle">${isHumanWin ? t().congrats : t().yourTotal + ' ' + state.totalScores[0]}</div>
      <div class="podium">${podiumHtml}</div>
      <div class="badges">${badgesHtml}</div>
      <div class="go__table">
        <div class="go-header"><span class="go-rank"></span><span class="go-name">${t().player}</span><span class="go-rounds">R1 + R2 + R3</span><span class="go-total">${t().total}</span></div>
        ${tableHtml}
      </div>
      <button class="btn btn--restart" id="restart-btn">${t().playAgain}</button>
    </div>
  `;

  await new Promise(resolve => {
    document.getElementById('restart-btn').addEventListener('click', () => {
      state.phase = 'MENU';
      state.discards = [];
      state.grabResults = [];
      state.inspections = [];
      state.roundComboResults = [];
      renderMenu();
      renderLangToggle();
      resolve();
    });
  });
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  state.phase = 'MENU';
  renderMenu();
  renderLangToggle();
});
