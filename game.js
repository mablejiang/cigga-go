// ─── Cigga Go — H5 PvE Game Engine ─────────────────────────────────────────

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
const AI_NAMES = ['老王', '小李', '张姐', '赵哥', '阿福', '大刘', '陈叔'];

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
  state.aiNames = shuffle(AI_NAMES).slice(0, numPlayers - 1);

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

  // Human picks
  const humanChosen = state.hands[0].splice(humanIdx, 1)[0];
  const humanHasItem = state.kept[0].some(c => c.type === 'item');
  if (humanChosen.type === 'item' && humanHasItem) {
    // Can't keep second item — put it back and pick first non-item
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
  return idx === 0 ? '你' : state.aiNames[idx - 1];
}

function renderCard(card, options = {}) {
  const { selected = false, small = false, revealed = false, clickable = false, index = -1 } = options;
  const div = document.createElement('div');
  div.className = `card ${small ? 'card--small' : ''} ${selected ? 'card--selected' : ''} ${clickable ? 'card--clickable' : ''}`;

  if (card.type === 'item') {
    div.classList.add('card--item');
    div.innerHTML = `
      <div class="card__item-icon">🎴</div>
      <div class="card__item-name">${card.name_cn}</div>
      <div class="card__item-effect">${card.effect_cn || card.effect}</div>
    `;
  } else if (card.type === 'counterfeit' && revealed) {
    div.classList.add('card--counterfeit-revealed');
    div.innerHTML = `
      <div class="card__fake-stamp">假</div>
      <div class="card__info">
        <div class="card__brand">${card.brand}</div>
        <div class="card__meta">${card.origin} · ${card.format}</div>
        <div class="card__score score--negative">-5</div>
      </div>
    `;
  } else {
    // Pack or unrevealed counterfeit — look the same
    const imgUrl = card.image_url || '';
    div.innerHTML = `
      ${imgUrl ? `<img class="card__img" src="${imgUrl}" loading="lazy" alt="${card.brand}" onerror="this.style.display='none'">` : ''}
      <div class="card__info">
        <div class="card__brand">${card.brand}</div>
        <div class="card__meta">${card.origin} · ${card.format}</div>
        <div class="card__score">${card.type === 'counterfeit' ? card.base_score : '+' + card.base_score}</div>
      </div>
      <div class="card__rarity">${'★'.repeat(card.rarity)}</div>
    `;
  }

  if (clickable && index >= 0) {
    div.addEventListener('click', () => {
      state.selectedCardIndex = index;
      renderGame();
    });
  }

  return div;
}

function renderMenu() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="screen screen--menu">
      <div class="menu__title">Cigga Go</div>
      <div class="menu__subtitle">烟卡GO — 轮抽卡牌游戏</div>
      <div class="menu__desc">选择人数开始游戏</div>
      <div class="menu__buttons" id="menu-buttons"></div>
    </div>
  `;
  const btns = document.getElementById('menu-buttons');
  for (let n = 3; n <= 7; n++) {
    const btn = document.createElement('button');
    btn.className = 'btn btn--menu';
    btn.textContent = `${n} 人`;
    btn.addEventListener('click', () => startGame(n));
    btns.appendChild(btn);
  }
}

function renderPicking() {
  const app = document.getElementById('app');
  const keepCount = state.kept[0].length;
  const maxKeep = KEEP_PER_ROUND[state.numPlayers];
  const directionText = state.passLeft ? '← 左传' : '右传 →';

  app.innerHTML = `
    <div class="screen screen--game">
      <div class="game__topbar">
        <span>第${state.round + 1}轮</span>
        <span>已选 ${keepCount}/${maxKeep}</span>
        <span>${directionText}</span>
      </div>
      <div class="game__ai-bar" id="ai-bar"></div>
      <div class="game__section-label">你的手牌 <span class="hint">（点击选牌，再点确认）</span></div>
      <div class="game__hand" id="hand-area"></div>
      <div class="game__section-label">已收集</div>
      <div class="game__kept" id="kept-area"></div>
      <div class="game__actions">
        <button class="btn btn--confirm ${state.selectedCardIndex >= 0 ? '' : 'btn--disabled'}" id="confirm-btn">
          选这张
        </button>
      </div>
    </div>
  `;

  // AI bar
  const aiBar = document.getElementById('ai-bar');
  for (let p = 1; p < state.numPlayers; p++) {
    const aiDiv = document.createElement('div');
    aiDiv.className = 'ai-player';
    aiDiv.innerHTML = `<span class="ai-avatar">🤖</span><span class="ai-name">${getPlayerName(p)}</span><span class="ai-count">${state.kept[p].length}张</span>`;
    aiBar.appendChild(aiDiv);
  }

  // Hand
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
    handArea.appendChild(cardEl);
  }

  // Kept
  const keptArea = document.getElementById('kept-area');
  for (const card of state.kept[0]) {
    keptArea.appendChild(renderCard(card, { small: true }));
  }

  // Confirm button
  document.getElementById('confirm-btn').addEventListener('click', () => {
    if (state.selectedCardIndex >= 0) confirmPick();
  });
}

function renderFinalTwo() {
  const app = document.getElementById('app');
  app.innerHTML = `
    <div class="screen screen--final">
      <div class="final__title">最后抉择</div>
      <div class="final__subtitle">选一张保留，另一张弃掉</div>
      <div class="final__cards" id="final-cards"></div>
    </div>
  `;
  const container = document.getElementById('final-cards');
  for (let i = 0; i < 2 && i < state.hands[0].length; i++) {
    const card = state.hands[0][i];
    const cardEl = renderCard(card, { clickable: true, index: i });
    cardEl.classList.add('card--large');
    cardEl.addEventListener('click', () => confirmFinalChoice(i));
    container.appendChild(cardEl);
  }
}

function renderScoring() {
  const app = document.getElementById('app');
  const result = state.comboResults[0];
  const humanCards = state.kept[0];

  let comboHtml = '';

  // Brand combos
  for (const [brand, type] of Object.entries(result.brandCombos)) {
    const label = type === 'three' ? '三条' : '对子';
    const val = type === 'three' ? COMBO_VALUES.three : COMBO_VALUES.pair;
    comboHtml += `<div class="combo-item combo--brand"><span class="combo-label">${brand} ${label}</span><span class="combo-value">+${val}</span></div>`;
  }
  // Origin combos
  for (const [origin, type] of Object.entries(result.originCombos)) {
    const label = type === 'old_friends' ? '老乡见老乡' : '同乡';
    const val = type === 'old_friends' ? COMBO_VALUES.old_friends : COMBO_VALUES.hometown;
    comboHtml += `<div class="combo-item combo--origin"><span class="combo-label">${origin} ${label}</span><span class="combo-value">+${val}</span></div>`;
  }
  if (result.formatClash) {
    comboHtml += `<div class="combo-item combo--format"><span class="combo-label">粗细搭配</span><span class="combo-value">+${COMBO_VALUES.format_clash}</span></div>`;
  }
  if (result.mixedBag) {
    comboHtml += `<div class="combo-item combo--mixed"><span class="combo-label">杂货铺</span><span class="combo-value">+${COMBO_VALUES.mixed_bag}</span></div>`;
  }
  if (result.grandSlam) {
    comboHtml += `<div class="combo-item combo--grandslam"><span class="combo-label">🎯 大满贯!</span><span class="combo-value">×2</span></div>`;
  }
  if (result.itemEffect) {
    const itemCard = humanCards.find(c => c.type === 'item');
    const itemName = itemCard ? itemCard.name_cn : '道具';
    const sign = result.itemBonus >= 0 ? '+' : '';
    comboHtml += `<div class="combo-item combo--item"><span class="combo-label">🎴 ${itemName}</span><span class="combo-value">${sign}${result.itemBonus}</span></div>`;
  }
  if (result.counterfeitPenalty > 0) {
    comboHtml += `<div class="combo-item combo--fake"><span class="combo-label">❌ 假烟!</span><span class="combo-value">-${result.counterfeitPenalty}</span></div>`;
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
      <div class="scoring__title">第${state.round + 1}轮 计分</div>
      <div class="scoring__cards" id="scoring-cards"></div>
      <div class="scoring__breakdown">
        <div class="scoring__base">基础分: ${result.baseTotal}</div>
        ${comboHtml}
        <div class="scoring__total">本轮得分: <strong>${result.total}</strong></div>
      </div>
      <div class="scoring__leaderboard">
        <div class="lb-header"><span class="lb-rank"></span><span class="lb-name">玩家</span><span class="lb-round">本轮</span><span class="lb-total">总分</span></div>
        ${lbHtml}
      </div>
      <button class="btn btn--next" id="next-btn">${state.round < 2 ? '下一轮' : '查看结果'}</button>
    </div>
  `;

  // Render player's kept cards with counterfeit reveal
  const scoringCards = document.getElementById('scoring-cards');
  for (const card of humanCards) {
    scoringCards.appendChild(renderCard(card, {
      small: true,
      revealed: card.type === 'counterfeit',
    }));
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
      <div class="go__title">${isHumanWin ? '🎉 你赢了!' : `🏆 ${winner.name} 获胜!`}</div>
      <div class="go__subtitle">${isHumanWin ? '恭喜你，烟卡大王！' : `你的总分: ${state.totalScores[0]}`}</div>
      <div class="go__table">
        <div class="go-header"><span class="go-rank"></span><span class="go-name">玩家</span><span class="go-rounds">R1 + R2 + R3</span><span class="go-total">总分</span></div>
        ${tableHtml}
      </div>
      <button class="btn btn--restart" id="restart-btn">再来一局</button>
    </div>
  `;

  document.getElementById('restart-btn').addEventListener('click', restartGame);
}

function renderGame() {
  switch (state.phase) {
    case 'MENU': renderMenu(); break;
    case 'PICKING': renderPicking(); break;
    case 'FINAL_TWO': renderFinalTwo(); break;
    case 'SCORING': renderScoring(); break;
    case 'GAME_OVER': renderGameOver(); break;
    default: renderMenu();
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  renderGame();
});
