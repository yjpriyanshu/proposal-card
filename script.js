/* ============================================================
   💌 Proposal Card — sab text yahin CONFIG mein hai.
   Personalise with URL:  ?name=Riya&from=Priyanshu
   Optional: &msg=Apna%20message   (final letter replace karta hai)
   Link maker:  ?make=1
   ============================================================ */
const Q = new URLSearchParams(location.search);
const clip = (s, n) => (s || '').replace(/\s+/g, ' ').trim().slice(0, n);
const CONFIG = {
  to:   clip(Q.get('name') || Q.get('to'), 28) || 'Jaan',
  from: clip(Q.get('from'), 28) || '',
  customMsg: (Q.get('msg') || '').trim().slice(0, 700),

  intro: {
    kicker: '⚠️ Confidential Delivery',
    stamp: 'SIRF {to} KE LIYE',
    title: 'Hello <span class="name">{to}</span> 👋',
    text: 'Ek bahut zaroori (aur thoda sa cute) message aaya hai. Pehle verify karo… kya tum sach mein {to} ho?',
    yes: 'Haan, main hi hoon 💁‍♀️',
    no: 'Nahi toh 🙄',
    noReply: 'Jhooth! Itna cute aur koi ho hi nahi sakta 😏 Chalo andar…',
  },

  loading: {
    title: 'Feelings load ho rahi hain…',
    steps: [
      [7,  'Dil ka WiFi connect ho raha hai 📶'],
      [19, 'Butterflies install ho rahi hain 🦋'],
      [33, 'Overthinking ka cache clear kiya 🧹'],
      [46, 'Ex ki files permanently delete 🗑️✅'],
      [58, 'Tumhari smile download ho rahi hai… file bahut heavy hai 😮‍💨'],
      [71, 'Error 404: Tumhare bina chain not found ❌'],
      [84, 'Himmat jutaai ja rahi hai… 🫣'],
      [99, 'Ruko… dil bahut zor se dhadak raha hai 💓'],
      [100,'Feelings 100% ready 💖'],
    ],
    next: 'Aage chalo ➜',
  },

  quotes: {
    kicker: 'Dil se churaayi lines',
    title: 'Pehle thoda flirt ho jaaye 😌',
    hint: 'React karo, next line aayegi 👇',
    lines: [
      ['☕', 'Tum chai ho aur main Parle-G… tumhare bina main bas ek sukha biscuit hoon 🍪'],
      ['📍', 'Tumhe dekh ke Google Maps bhi bol pada: "Aap apni manzil par pahunch chuke hain."'],
      ['🔋', 'Mera phone 1% pe bhi zinda reh leta hai… bas tumhara ek "Hi" aa jaaye 📱'],
      ['🍕', 'Pizza ka last slice bhi tumhe de dunga… aur ye mera sabse bada sacrifice hai 😤'],
      ['🌙', 'Raat ke 3 baje tak neend nahi aati… tumhari yaad ki galti hai ya reels ki, abhi investigation chal rahi hai 🕵️'],
    ],
    reacts: ['😂', '🥹', '🙄'],
    after: 'Aur haan, ye lines Google se nahi… dil se churaayi hain 🤭',
    next: 'Ab ek pop quiz 📝',
  },

  quiz: [
    { q: 'Duniya ka sabse cute insaan kaun hai? 🤔',
      opts: [['{to}', 1], ['{to} 💅', 1], ['Sirf aur sirf {to}', 1], ['Sharma ji ki beti', 0]],
      wrong: 'Galat! Sharma ji ki beti bhi tumse jealous hai 😤',
      right: 'Bilkul sahi! 100/100 🎉' },
    { q: 'Tum mujhe kitni pasand ho?',
      opts: [['Thoda sa 🤏', 0], ['Bahut zyada 😍', 1], ['Chand tak 🌙', 1], ['Pata nahi 🤷', 0]],
      wrong: ['Thoda?? Dil tod diya 😭 Dobara try karo', 'Pata nahi?? Exam se nikaal dunga 😤'],
      right: 'Correct! Chand se bhi aage 🚀' },
  ],

  game: {
    title: 'Mini Game: Dil Pakdo 💘',
    text: 'Udte hue 💖 ko tap karo. {n} pakdo toh next level!',
    target: 6,
    decoy: ['Arey ye toota hua hai, ye mera nahi 😭', 'Broken wala chhodo, pure wale pakdo 💔🙅', 'Ye wala ex ka hai, ignore karo 🙄'],
    done: 'Saare dil pakad liye! Waise mera wala toh pehle se tumhare paas hai 🫶',
    next: 'Ek surprise aur hai 🎁',
  },

  scratch: {
    title: 'Scratch karo, inaam jeeto 🎟️',
    text: 'Ungli se ghiso… andar kuch special hai ✨',
    cover: 'SCRATCH KARO ✨',
    prizeKicker: 'Congratulations! Tumne jeeta 🏆',
    prize: 'Lifetime FREE subscription: mera poora attention, unlimited chai dates ☕ aur bina maange hugs 🤗',
    tnc: '*T&C: Sirf {to} ke liye valid. No refund, no exchange 😌',
    skip: 'Seedha dikhao 🙈',
    next: 'Kuch dil ki baatein 💌',
  },

  reasons: {
    kicker: 'Ab thodi sacchi baatein 🥹',
    title: 'Tumhe HAAN kyun bolna chahiye:',
    list: [
      ['☀️', 'Tumhari ek smile se mera poora din set ho jaata hai'],
      ['👂', 'Main tumhari saari bakwaas bhi dhyaan se sunta hoon (ye bahut rare talent hai 😌)'],
      ['🤍', 'Tumhare saath chup rehna bhi comfortable lagta hai'],
      ['🫶', 'Bure din mein bhi tumhe kabhi akela feel nahi hone dunga, promise'],
      ['🧸', 'Aur tum HAAN bologi toh ye teddy khushi se naachega'],
    ],
    next: 'Ab asli sawaal… 🫣',
  },

  ask: {
    kicker: 'Ab asli sawaal… 💍',
    question: '<span class="name">{to}</span>, kya tum meri girlfriend banogi? 💖',
    yes: 'Haan 💖',
    no: 'Nahi 🙈',
    // NO button bhaagte waqt ye text badalta hai
    noTexts: ['Pakka? 🤨', 'Soch lo 🥺', 'Galat button 😤', 'Ek baar aur socho 😭', 'Ye button kharab hai 🔧',
              'Main ro dunga 😢', 'Pls na 🥹', 'Mummy ko bata dunga 😾', 'Itna attitude? 💅', 'Ab toh maan jao 🙏',
              'Last chance 😩', 'Error: NO not found 🚫'],
    captions: ['', 'Arey arey, wo button nahi 😳', 'Haath kaanp gaya kya? 😏', 'NO button tumse darr raha hai 😂',
               'Dekho HAAN kitna bada ho gaya 👀', 'Mera dil abhi bhi wait kar raha hai 💓', 'Ye game tum jeet nahi sakti 😎',
               'Bas karo, NO button thak gaya 🥵', 'Universe bhi HAAN bol raha hai ✨'],
    faces: ['🥺', '😳', '🥲', '😢', '😭', '😩', '🥹', '🙏', '😭', '🥺'],
    resign: 'NO button ne resign kar diya 😂 Ab sirf HAAN bacha hai',
    maxDodges: 12,
  },

  yay: {
    title: 'YAYYYY! 🎉',
    text: 'Mujhe pata tha 😌 Dil se dil ki setting ho gayi!',
    certTitle: '📜 Official Certificate',
    certTried: 'Ye proof hai ki <b>{to}</b> ne <b>{n} baar</b> NO dabane ki koshish ki… aur phir bhi <b>HAAN</b> bola 😂',
    certDirect: 'Ye proof hai ki <b>{to}</b> ne bina ek bhi baar NO try kiye seedha <b>HAAN</b> bola 😍 (itni jaldi? 😳)',
    certEnd: 'Screenshot le liya hai 📸 Ab mukarna allowed nahi. Legally binding hai, court mein milenge 😌',
    next: 'Ek aakhri cheez… 💌',
  },

  final: {
    kicker: 'Ek chhoti si chitthi',
    tap: 'Tap karke kholo 👆',
    envLabel: 'For {to}',
    dear: 'Dear {to},',
    letter:
`Pata nahi kab, kaise… par dheere dheere tum meri har subah ki pehli soch aur har raat ki aakhri dua ban gayi ho.

Tumhare saath hansi zyada sacchi lagti hai, aur chup rehna bhi baatein karne jaisa lagta hai.

Main perfect nahi hoon, par ek promise hai: tumhari har muskurahat ka khayal rakhunga, tumhare saare mood swings jhel lunga 😌, aur kisi bhi mushkil mein tumhara haath nahi chhodunga.

Toh bas itna kehna tha…
I love you. Aaj bhi, kal bhi, hamesha. 💖`,
    sigWithName: 'Sirf tumhara,\n{from}',
    sigNoName: 'Sirf tumhara 💌',
    replay: '🔁 Phir se',
    reply: '💌 Jawab bhejo',
    replyText: 'Haan 💖 Mera jawab bhi HAAN hai! – {to}',
  },
};

/* ---------------- helpers ---------------- */
const $ = (s, el = document) => el.querySelector(s);
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const t = (s, extra = {}) => String(s)
  .replace(/\{to\}/g, esc(CONFIG.to)).replace(/\{from\}/g, esc(CONFIG.from))
  .replace(/\{(\w+)\}/g, (m, k) => (k in extra ? esc(extra[k]) : m));
const rnd = (a, b) => a + Math.random() * (b - a);
const pick = a => a[Math.floor(Math.random() * a.length)];
const sleep = ms => new Promise(r => setTimeout(r, ms));
const stage = $('#stage');
document.title = '💌 ' + CONFIG.to + ', sirf tumhare liye';

let toastT;
function toast(msg, ms = 2400) {
  const el = $('#toast'); el.textContent = msg; el.classList.add('show');
  clearTimeout(toastT); toastT = setTimeout(() => el.classList.remove('show'), ms);
}
function vib(p) { try { navigator.vibrate && navigator.vibrate(p); } catch (e) {} }

/* ---------------- background sky ---------------- */
const sky = $('#sky');
function addFloaters(n, chars, cls = '') {
  for (let i = 0; i < n; i++) {
    const s = document.createElement('div');
    s.className = 'sp ' + cls;
    s.textContent = pick(chars);
    s.style.left = rnd(-5, 100) + 'vw';
    s.style.fontSize = rnd(12, 26) + 'px';
    s.style.setProperty('--dx', rnd(-60, 60) + 'px');
    s.style.setProperty('--r', rnd(-360, 360) + 'deg');
    s.style.animationDuration = rnd(9, 17) + 's';
    s.style.animationDelay = rnd(-16, 0) + 's';
    sky.appendChild(s);
  }
}
for (let i = 0; i < 28; i++) {
  const s = document.createElement('div'); s.className = 'tw';
  s.style.left = rnd(0, 100) + '%'; s.style.top = rnd(0, 100) + '%';
  s.style.animationDelay = rnd(-3, 0) + 's'; s.style.opacity = .4;
  const z = rnd(1.5, 3.2); s.style.width = s.style.height = z + 'px';
  sky.appendChild(s);
}
addFloaters(10, ['💗', '🧸', '✨', '🎀', '💌', '🍓', '🤍']);

/* ---------------- FX canvas: confetti + emoji bursts ---------------- */
const fx = $('#fx'), ctx = fx.getContext('2d');
let W = 0, H = 0, DPR = Math.min(2, window.devicePixelRatio || 1);
function resize() { W = innerWidth; H = innerHeight; fx.width = W * DPR; fx.height = H * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0); clampNo(); }
addEventListener('resize', resize);
const parts = [];
const spriteCache = {};
function sprite(ch) {
  if (spriteCache[ch]) return spriteCache[ch];
  const c = document.createElement('canvas'); c.width = c.height = 96;
  const g = c.getContext('2d'); g.font = '72px serif'; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.fillText(ch, 48, 54); return (spriteCache[ch] = c);
}
const CONF_COLORS = ['#ff3d7f', '#ffd27a', '#ff9a8b', '#c9a7ff', '#ffffff', '#7ee0c3'];
function confetti(n = 140, x = W / 2, y = H * 0.35) {
  for (let i = 0; i < n; i++) {
    const a = rnd(0, Math.PI * 2), sp = rnd(4, 14);
    parts.push({ k: 'c', x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - rnd(3, 8), g: .28, w: rnd(6, 11), h: rnd(9, 16),
      r: rnd(0, 6), vr: rnd(-.3, .3), c: pick(CONF_COLORS), life: rnd(110, 170), t: 0 });
  }
}
function burst(x, y, chars = ['💖', '💕', '✨'], n = 14, size = 30) {
  for (let i = 0; i < n; i++) {
    const a = rnd(0, Math.PI * 2), sp = rnd(2, 8);
    parts.push({ k: 'e', s: sprite(pick(chars)), x, y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 3, g: .12,
      z: rnd(size * .6, size * 1.2), r: rnd(-.5, .5), vr: rnd(-.08, .08), life: rnd(50, 80), t: 0 });
  }
}
function rain(chars, n = 30) {
  for (let i = 0; i < n; i++) parts.push({ k: 'e', s: sprite(pick(chars)), x: rnd(0, W), y: rnd(-H * .6, -20), vx: rnd(-.6, .6),
    vy: rnd(2, 4.5), g: .02, z: rnd(20, 38), r: rnd(-.5, .5), vr: rnd(-.04, .04), life: 260, t: 0 });
}
(function loop() {
  ctx.clearRect(0, 0, W, H);
  for (let i = parts.length - 1; i >= 0; i--) {
    const p = parts[i]; p.t++; p.vy += p.g; p.x += p.vx; p.y += p.vy; p.r += p.vr;
    if (p.k === 'c') { p.vx *= .985; p.vy *= .985; }
    const fade = Math.max(0, Math.min(1, (p.life - p.t) / 30));
    if (p.t > p.life || p.y > H + 60) { parts.splice(i, 1); continue; }
    ctx.save(); ctx.globalAlpha = fade; ctx.translate(p.x, p.y); ctx.rotate(p.r);
    if (p.k === 'c') { ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2 * Math.abs(Math.cos(p.t / 6)), p.w, p.h * Math.abs(Math.cos(p.t / 6)) + 1); }
    else ctx.drawImage(p.s, -p.z / 2, -p.z / 2, p.z, p.z);
    ctx.restore();
  }
  requestAnimationFrame(loop);
})();
const center = el => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };


/* ---------------- falling petals (canvas, capped) ---------------- */
const pc = $('#petals'), pg = pc.getContext('2d');
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const PCOL = [['#ffd6df', '#ff9fb4'], ['#ffe2d2', '#ffb08f'], ['#ffc2cf', '#ff7f9a'], ['#fff0ea', '#ffc6b3'], ['#ffb3c0', '#f2607d']];
const petals = [];
function newPetal(top) {
  const z = rnd(.45, 1);
  return { x: rnd(-20, innerWidth + 20), y: top ? rnd(-innerHeight, innerHeight) : rnd(-80, -20), z, s: rnd(7, 14) * z + 3,
    vy: (rnd(.5, 1.1) + z * .9) * (RM ? .4 : 1), ph: rnd(0, 6.3), sw: rnd(.6, 1.6), amp: rnd(.4, 1.3), rot: rnd(0, 6.3), vr: rnd(-.03, .03),
    flip: rnd(0, 6.3), vf: rnd(.02, .06), c: pick(PCOL) };
}
let petalMax = RM ? 12 : (innerWidth < 500 ? 30 : 40);
for (let i = 0; i < petalMax; i++) petals.push(newPetal(true));
petals.sort((a, b) => a.z - b.z);
function drawPetal(g, p) {
  g.save(); g.translate(p.x, p.y); g.rotate(p.rot); g.scale(Math.cos(p.flip) * .85 + .15 * Math.sign(Math.cos(p.flip) || 1), 1);
  g.globalAlpha = .45 + p.z * .5;
  const s = p.s, gr = g.createLinearGradient(0, -s, 0, s); gr.addColorStop(0, p.c[0]); gr.addColorStop(1, p.c[1]);
  g.fillStyle = gr; g.beginPath(); g.moveTo(0, s);
  g.bezierCurveTo(s * 1.05, s * .35, s * .8, -s * .85, s * .18, -s); g.quadraticCurveTo(0, -s * .72, -s * .18, -s);
  g.bezierCurveTo(-s * .8, -s * .85, -s * 1.05, s * .35, 0, s); g.fill(); g.restore();
}
(function petalLoop() {
  const w = innerWidth, h = innerHeight, d = Math.min(2, devicePixelRatio || 1);
  if (pc.width !== Math.round(w * d) || pc.height !== Math.round(h * d)) { pc.width = w * d; pc.height = h * d; }
  pg.setTransform(d, 0, 0, d, 0, 0); pg.clearRect(0, 0, w, h);
  for (const p of petals) {
    p.ph += .012 * p.sw; p.y += p.vy; p.x += Math.sin(p.ph) * p.amp + .25; p.rot += p.vr; p.flip += p.vf;
    if (p.y > h + 30 || p.x > w + 40) Object.assign(p, newPetal(false));
    drawPetal(pg, p);
  }
  requestAnimationFrame(petalLoop);
})();
function morePetals(n) { for (let i = 0; i < n && petals.length < 60; i++) petals.push(newPetal(false)); }

/* ---------------- heartbeat heart + teddy (SVG) ---------------- */
let hbId = 0;
function heartSVG(size = 64, ring = false) {
  const id = 'hg' + (++hbId);
  return `<span class="hb ${ring ? 'ring' : ''}" style="width:${size}px;height:${size}px">${ring ? '<span class="pulse-ring"></span>' : ''}
  <svg viewBox="0 0 100 92" width="${size}" height="${size}"><defs><radialGradient id="${id}" cx="35%" cy="30%" r="80%">
  <stop offset="0" stop-color="#ffd0d8"/><stop offset=".35" stop-color="#ff4d6d"/><stop offset="1" stop-color="#b3002d"/></radialGradient></defs>
  <path d="M50 88 C20 66 2 50 2 28 C2 13 14 2 28 2 C38 2 46 8 50 16 C54 8 62 2 72 2 C86 2 98 13 98 28 C98 50 80 66 50 88Z" fill="url(#${id})"/>
  <ellipse cx="28" cy="24" rx="10" ry="6" fill="#fff" opacity=".55" transform="rotate(-30 28 24)"/></svg></span>`;
}
function bearSVG() {
  return `<svg class="bear plead" viewBox="0 0 200 200" aria-hidden="true">
  <defs><radialGradient id="fur" cx="40%" cy="35%" r="75%"><stop offset="0" stop-color="#e2a57a"/><stop offset="1" stop-color="#a8673f"/></radialGradient>
  <radialGradient id="bh" cx="35%" cy="30%" r="80%"><stop offset="0" stop-color="#ffd0d8"/><stop offset=".4" stop-color="#ff4d6d"/><stop offset="1" stop-color="#b3002d"/></radialGradient></defs>
  <circle cx="48" cy="44" r="26" fill="url(#fur)"/><circle cx="152" cy="44" r="26" fill="url(#fur)"/>
  <circle cx="48" cy="44" r="14" fill="#f4b9a3"/><circle cx="152" cy="44" r="14" fill="#f4b9a3"/>
  <ellipse cx="100" cy="98" rx="74" ry="68" fill="url(#fur)"/>
  <ellipse cx="100" cy="122" rx="34" ry="26" fill="#f6dcc4"/>
  <ellipse cx="58" cy="118" rx="12" ry="7" fill="#ff8fa3" opacity=".7"/><ellipse cx="142" cy="118" rx="12" ry="7" fill="#ff8fa3" opacity=".7"/>
  <g class="brow-sad" stroke="#5a2e17" stroke-width="4" stroke-linecap="round" fill="none"><path d="M58 80 Q68 72 82 70"/><path d="M142 80 Q132 72 118 70"/></g>
  <g class="e-norm"><circle cx="72" cy="94" r="8" fill="#2b1408"/><circle cx="128" cy="94" r="8" fill="#2b1408"/><circle cx="75" cy="91" r="2.6" fill="#fff"/><circle cx="131" cy="91" r="2.6" fill="#fff"/></g>
  <g class="e-plead"><circle cx="72" cy="94" r="13" fill="#2b1408"/><circle cx="128" cy="94" r="13" fill="#2b1408"/>
    <circle cx="77" cy="88" r="5" fill="#fff"/><circle cx="133" cy="88" r="5" fill="#fff"/><circle cx="68" cy="99" r="2.2" fill="#fff"/><circle cx="124" cy="99" r="2.2" fill="#fff"/></g>
  <g class="e-happy" stroke="#2b1408" stroke-width="5" stroke-linecap="round" fill="none"><path d="M62 96 Q72 84 82 96"/><path d="M118 96 Q128 84 138 96"/></g>
  <ellipse cx="100" cy="112" rx="11" ry="8" fill="#3a1a0c"/><ellipse cx="97" cy="109" rx="3.5" ry="2" fill="#fff" opacity=".6"/>
  <path class="m-happy" d="M86 126 Q100 140 114 126" stroke="#3a1a0c" stroke-width="4" fill="none" stroke-linecap="round"/>
  <path class="m-sad" d="M88 134 Q100 124 112 134" stroke="#3a1a0c" stroke-width="4" fill="none" stroke-linecap="round"/>
  <g class="tears" fill="#8fd3ff"><path class="t1" d="M66 106 q-5 8 0 11 q5 -3 0 -11z"/><path class="t2" d="M134 106 q-5 8 0 11 q5 -3 0 -11z"/></g>
  <g class="hand-heart"><path d="M100 192 C80 178 70 168 70 156 C70 148 76 142 84 142 C90 142 96 146 100 152 C104 146 110 142 116 142 C124 142 130 148 130 156 C130 168 120 178 100 192Z" fill="url(#bh)"/>
  <circle cx="72" cy="166" r="13" fill="url(#fur)"/><circle cx="128" cy="166" r="13" fill="url(#fur)"/></g>
  </svg>`;
}

/* ---------------- sound (self-synthesised, off by default) ---------------- */
const Sound = {
  on: false, ac: null, master: null, timer: null, step: 0, next: 0,
  init() {
    if (this.ac) return;
    const AC = window.AudioContext || window.webkitAudioContext; if (!AC) return;
    this.ac = new AC();
    this.master = this.ac.createGain(); this.master.gain.value = .0;
    const lp = this.ac.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 3200;
    const dl = this.ac.createDelay(); dl.delayTime.value = .33; const fb = this.ac.createGain(); fb.gain.value = .32;
    const wet = this.ac.createGain(); wet.gain.value = .35;
    this.master.connect(lp); lp.connect(this.ac.destination); lp.connect(dl); dl.connect(fb); fb.connect(dl); dl.connect(wet); wet.connect(this.ac.destination);
  },
  note(f, when, dur = 1.4, vol = .22, type = 'sine') {
    const ac = this.ac, o = ac.createOscillator(), o2 = ac.createOscillator(), g = ac.createGain();
    o.type = type; o.frequency.value = f; o2.type = 'sine'; o2.frequency.value = f * 2.005;
    const g2 = ac.createGain(); g2.gain.value = .18;
    g.gain.setValueAtTime(0, when); g.gain.linearRampToValueAtTime(vol, when + .012); g.gain.exponentialRampToValueAtTime(.0008, when + dur);
    o.connect(g); o2.connect(g2); g2.connect(g); g.connect(this.master); o.start(when); o2.start(when); o.stop(when + dur + .05); o2.stop(when + dur + .05);
  },
  // music-box loop: C – G – Am – F
  chords: [[60, 64, 67, 72], [55, 59, 62, 67], [57, 60, 64, 69], [53, 57, 60, 65]],
  mel: [76, 79, 77, 76, 74, 76, 72, 74, 72, 71, 72, 74, 76, 72, 69, 72],
  hz: m => 440 * Math.pow(2, (m - 69) / 12),
  tick() {
    const ac = this.ac, spb = 60 / 76 / 2;
    while (this.next < ac.currentTime + .25) {
      const s = this.step, bar = Math.floor(s / 8) % 4, ch = this.chords[bar], i = s % 8;
      this.note(this.hz(ch[[0, 1, 2, 3, 2, 1, 2, 3][i]]), this.next, 1.6, .12);
      if (i === 0) this.note(this.hz(ch[0] - 12), this.next, 3.2, .1, 'triangle');
      if (i % 2 === 0) this.note(this.hz(this.mel[(Math.floor(s / 2)) % 16]), this.next, 1.2, .1);
      this.step++; this.next += spb;
    }
  },
  toggle() {
    this.init(); if (!this.ac) return;
    this.on = !this.on; this.ac.resume && this.ac.resume();
    const now = this.ac.currentTime;
    this.master.gain.cancelScheduledValues(now); this.master.gain.setTargetAtTime(this.on ? .55 : 0, now, .4);
    if (this.on && !this.timer) { this.next = now + .1; this.timer = setInterval(() => this.tick(), 90); }
    if (!this.on) { clearInterval(this.timer); this.timer = null; }
    $('#sound').textContent = this.on ? '🎵' : '🔇'; $('#sound').classList.toggle('on', this.on);
  },
  sfx(kind) {
    if (!this.on || !this.ac) return;
    const n = this.ac.currentTime + .01;
    const seq = { pop: [[84, .25]], boing: [[60, .4], [55, .5]], yes: [[72, .9], [76, .9], [79, 1.2], [84, 1.6]], ding: [[88, .6], [91, .8]] }[kind] || [];
    seq.forEach(([m, d], i) => this.note(this.hz(m), n + i * .09, d, .2, kind === 'boing' ? 'triangle' : 'sine'));
  },
};
$('#sound').addEventListener('click', () => Sound.toggle());

/* ---------------- screen engine ---------------- */
const SCREENS = [intro, loading, quotes, quiz, game, scratch, reasons, ask, yay, finale];
let cur = -1, curEl = null, noCount = 0;
function go(i) {
  cur = i;
  $('#progFill').style.width = Math.round((i / (SCREENS.length - 1)) * 100) + '%';
  const el = document.createElement('section'); el.className = 'scr in';
  const wrap = document.createElement('div'); wrap.className = 'wrap'; el.appendChild(wrap);
  if (curEl) { const old = curEl; old.classList.remove('in'); old.classList.add('out'); setTimeout(() => old.remove(), 460); }
  stage.appendChild(el); curEl = el;
  resetNo();
  SCREENS[i](wrap, el);
}
const next = () => { Sound.sfx('pop'); go(cur + 1); };
function mk(html) { const d = document.createElement('div'); d.innerHTML = html.trim(); return d.firstChild; }
function btn(label, cls, fn) { const b = mk(`<button class="btn ${cls}">${label}</button>`); b.addEventListener('click', fn); return b; }

/* 0 — intro / verify */
function intro(w) {
  const c = CONFIG.intro;
  w.innerHTML = `
    <div class="kicker">${t(c.kicker)}</div>
    <div class="env">💌</div>
    <div class="stamp">${t(c.stamp).toUpperCase()}</div>
    <h1>${t(c.title)}</h1>
    <p>${t(c.text)}</p>`;
  const row = mk('<div class="row"></div>');
  row.append(btn(t(c.yes), 'pri full', e => { burst(...center(e.currentTarget), ['💖', '✨']); next(); }));
  row.append(btn(t(c.no), 'ghost full', e => {
    e.currentTarget.classList.add('wrong'); toast(c.noReply); vib(80); Sound.sfx('boing');
    setTimeout(next, 1700);
  }));
  w.append(row);
}

/* 1 — loading feelings */
async function loading(w, el) {
  const c = CONFIG.loading;
  w.innerHTML = `
    <div class="mascot" id="lm">🫣</div>
    <h2 class="grad">${t(c.title)}</h2>
    <div class="loadbox">
      <div class="pct" id="pct">0%</div>
      <div class="bar" style="margin-top:12px"><i id="bi"></i></div>
    </div>
    <div class="log" id="log"></div>`;
  const pct = $('#pct', w), bi = $('#bi', w), log = $('#log', w);
  let shown = 0;
  for (const [p, txt] of c.steps) {
    if (!el.isConnected) return;
    const from = shown; const t0 = performance.now(); const dur = p === 100 ? 500 : (p === 99 ? 700 : 650);
    await new Promise(res => { (function f() { const k = Math.min(1, (performance.now() - t0) / dur);
      shown = Math.round(from + (p - from) * k); pct.textContent = shown + '%'; if (k < 1) requestAnimationFrame(f); else res(); })(); });
    bi.style.width = p + '%';
    const line = mk(`<div>${p === 100 ? '💖' : '✔︎'} ${t(txt)}</div>`); log.append(line);
    while (log.children.length > 4) log.firstChild.remove();
    if (p === 99) { $('#lm', w).textContent = '😳'; vib([40, 60, 40]); await sleep(1300); } else await sleep(260);
  }
  $('#lm', w).textContent = '🥰'; $('#lm', w).classList.add('pop');
  burst(W / 2, H * .3, ['💖', '💗', '✨'], 18);
  w.append(btn(t(c.next), 'pri', next));
}

/* 2 — funny quote deck */
function quotes(w) {
  const c = CONFIG.quotes;
  const tints = [['#e2405f', '#a5163f'], ['#f0705a', '#b52a43'], ['#d63a6e', '#8f1747'], ['#ff8a6b', '#c63a4a'], ['#c8234e', '#7e0f30']];
  w.innerHTML = `<div class="kicker">${t(c.kicker)}</div><h2>${t(c.title)}</h2><div class="deck" id="deck"></div>
    <div class="small" id="qh">${t(c.hint)}</div><div class="reacts" id="rx"></div>`;
  const deck = $('#deck', w);
  const cards = c.lines.map(([e, line], i) => {
    const q = mk(`<div class="qc"><div class="qn">LINE ${i + 1} / ${c.lines.length}</div><div class="qe">${e}</div><div class="qt">${t(line)}</div></div>`);
    q.style.background = `linear-gradient(160deg,${tints[i % tints.length][0]},${tints[i % tints.length][1]})`;
    return q;
  });
  cards.slice().reverse().forEach(q => deck.append(q));
  let idx = 0;
  const layout = () => cards.forEach((q, i) => {
    if (i < idx) return;
    const d = i - idx; q.style.zIndex = 100 - i;
    q.style.transform = `translateY(${d * 12}px) scale(${1 - d * .05}) rotate(${d ? (i % 2 ? 2.5 : -2.5) : 0}deg)`;
    q.style.opacity = d > 2 ? 0 : 1;
  });
  layout();
  const rx = $('#rx', w);
  c.reacts.forEach(e => {
    const b = mk(`<button aria-label="react">${e}</button>`);
    b.addEventListener('click', () => {
      if (idx >= cards.length) return;
      burst(...center(b), [e, e, '✨'], 12, 34); Sound.sfx('pop');
      cards[idx].classList.add('gone'); cards[idx].style.transform = ''; idx++; layout();
      if (idx === cards.length) {
        rx.remove(); $('#qh', w).remove();
        deck.append(mk(`<div class="qc" style="background:linear-gradient(160deg,#ff6f7d,#c21e47);animation:scrIn .6s both">
          <div class="qe">🤭</div><div class="qt">${t(c.after)}</div></div>`));
        w.append(btn(t(c.next), 'pri', next));
      }
    });
    rx.append(b);
  });
}

/* 3 — pop quiz */
function quiz(w) {
  let qi = 0, wrongIdx = 0;
  const render = () => {
    const q = CONFIG.quiz[qi];
    w.innerHTML = `<div class="kicker">Pop Quiz 📝 ${qi + 1}/${CONFIG.quiz.length}</div>
      <div class="mascot" style="font-size:64px">${qi ? '🤓' : '🧐'}</div>
      <h2>${t(q.q)}</h2><div class="opts" id="opts"></div><div class="caption" id="qc"></div>`;
    const opts = $('#opts', w);
    q.opts.forEach(([label, ok]) => {
      const b = mk(`<button class="opt">${t(label)}</button>`);
      b.addEventListener('click', () => {
        if (ok) {
          b.classList.add('right'); burst(...center(b), ['💯', '🎉', '💖'], 16); Sound.sfx('ding');
          $('#qc', w).textContent = q.right; opts.style.pointerEvents = 'none';
          setTimeout(() => { if (++qi < CONFIG.quiz.length) render(); else next(); }, 1300);
        } else {
          b.classList.remove('wrong'); void b.offsetWidth; b.classList.add('wrong'); vib(90); Sound.sfx('boing');
          const msg = Array.isArray(q.wrong) ? q.wrong[label.startsWith('Pata') ? 1 : 0] : q.wrong;
          toast(msg); wrongIdx++;
        }
      });
      opts.append(b);
    });
  };
  render();
}

/* 4 — mini game: catch hearts */
function game(w, el) {
  const c = CONFIG.game; let score = 0, done = false;
  w.innerHTML = `<div class="kicker">Level 2 🎮</div><h2>${t(c.title)}</h2><p style="font-size:16px">${t(c.text, { n: c.target })}</p>
    <div class="score" id="sc">💖 0 / ${c.target}</div><div class="arena" id="ar"></div><div id="gn" style="min-height:56px"></div>`;
  const ar = $('#ar', w), sc = $('#sc', w); const hs = []; let spawned = 0;
  function spawn() {
    if (done || !el.isConnected) return;
    const bad = Math.random() < .22 && score > 0;
    const h = mk(`<button class="fh" aria-label="heart">${bad ? '💔' : pick(['💖', '💗', '💓', '💝'])}</button>`);
    const aw = ar.clientWidth, ah = ar.clientHeight;
    const o = { el: h, x: rnd(4, aw - 68), y: hs.length < 3 && score === 0 && !bad && spawned++ < 3 ? rnd(ah * .35, ah * .8) : ah + 10, vy: rnd(1.25, 1.9) * (ah / 400), ph: rnd(0, 6), amp: rnd(10, 30), bad };
    h.addEventListener('pointerdown', ev => {
      ev.preventDefault(); if (o.dead || done) return; o.dead = true; h.classList.add('hit');
      const [x, y] = center(h);
      if (bad) { toast(pick(c.decoy)); vib(60); Sound.sfx('boing'); burst(x, y, ['💔', '😭'], 6); }
      else {
        score++; sc.textContent = `💖 ${score} / ${c.target}`; Sound.sfx('pop'); vib(15); burst(x, y, ['💖', '✨', '💕'], 10, 26);
        if (score >= c.target) win();
      }
      setTimeout(() => h.remove(), 400);
    });
    ar.append(h); hs.push(o);
    setTimeout(spawn, rnd(480, 760));
  }
  let last = performance.now();
  (function tick(now) {
    if (!el.isConnected) return;
    const dt = Math.min(3, (now - last) / 16.7); last = now;
    for (let i = hs.length - 1; i >= 0; i--) {
      const o = hs[i]; if (o.dead) { hs.splice(i, 1); continue; }
      o.y -= o.vy * dt; o.ph += .04 * dt;
      o.el.style.transform = `translate(${o.x + Math.sin(o.ph) * o.amp}px,${o.y}px)`;
      if (o.y < -70) { o.el.remove(); hs.splice(i, 1); }
    }
    requestAnimationFrame(tick);
  })(last);
  spawn(); setTimeout(spawn, 300);
  function win() {
    done = true; confetti(120); Sound.sfx('yes'); vib([30, 40, 30]);
    hs.forEach(o => { o.el.classList.add('hit'); });
    ar.innerHTML = `<div style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;padding:20px;animation:scrIn .6s both">
      <div class="dance" style="font-size:70px">🏆</div><div class="h2" style="font-size:22px">${t(c.done)}</div></div>`;
    $('#gn', w).append(btn(t(c.next), 'pri', next));
  }
}

/* 5 — scratch card */
function scratch(w) {
  const c = CONFIG.scratch; let revealed = false;
  w.innerHTML = `<div class="kicker">Surprise 🎁</div><h2>${t(c.title)}</h2><p style="font-size:16px">${t(c.text)}</p>
    <div class="scratch" id="sc"><div class="prize"><div class="small" style="color:#b03a6a;font-weight:800">${t(c.prizeKicker)}</div>
      <div class="pe">🎟️</div><b>${t(c.prize)}</b><small>${t(c.tnc)}</small></div><canvas id="cv"></canvas></div>
    <div id="sn" style="min-height:56px;display:flex;justify-content:center"></div>`;
  const box = $('#sc', w), cv = $('#cv', w), g = cv.getContext('2d');
  requestAnimationFrame(() => {
    const r = box.getBoundingClientRect(), d = Math.min(2, devicePixelRatio || 1);
    cv.width = r.width * d; cv.height = r.height * d; g.scale(d, d);
    const gr = g.createLinearGradient(0, 0, r.width, r.height);
    gr.addColorStop(0, '#f6c66b'); gr.addColorStop(.35, '#fff1c7'); gr.addColorStop(.6, '#e9a94a'); gr.addColorStop(1, '#ffe2a0');
    g.fillStyle = gr; g.fillRect(0, 0, r.width, r.height);
    g.globalAlpha = .18; g.fillStyle = '#8a5a00';
    for (let i = 0; i < 220; i++) g.fillRect(rnd(0, r.width), rnd(0, r.height), 2, 2);
    g.globalAlpha = 1; g.font = '800 26px "Baloo 2", sans-serif'; g.textAlign = 'center'; g.fillStyle = '#7a3b00';
    g.fillText(t(c.cover).replace(/&amp;/g, '&'), r.width / 2, r.height / 2 + 4);
    g.font = '34px serif'; ['💖', '✨', '💖', '✨'].forEach((e, i) => g.fillText(e, [36, r.width - 36, r.width - 36, 36][i], [44, 44, r.height - 24, r.height - 24][i]));
    g.globalCompositeOperation = 'destination-out'; g.lineCap = g.lineJoin = 'round'; g.lineWidth = 46;
  });
  let drawing = false, lx = 0, ly = 0, strokes = 0;
  const pos = e => { const r = cv.getBoundingClientRect(); return [e.clientX - r.left, e.clientY - r.top]; };
  cv.addEventListener('pointerdown', e => { e.preventDefault(); drawing = true; [lx, ly] = pos(e); g.beginPath(); g.arc(lx, ly, 23, 0, 7); g.fill(); cv.setPointerCapture && cv.setPointerCapture(e.pointerId); });
  cv.addEventListener('pointermove', e => {
    if (!drawing || revealed) return; e.preventDefault(); const [x, y] = pos(e);
    g.beginPath(); g.moveTo(lx, ly); g.lineTo(x, y); g.stroke(); lx = x; ly = y;
    if (++strokes % 12 === 0) check();
  });
  const up = () => { drawing = false; check(); };
  cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  function check() {
    if (revealed) return;
    const d = g.getImageData(0, 0, cv.width, cv.height).data; let clear = 0, tot = 0;
    for (let i = 3; i < d.length; i += 64) { tot++; if (d[i] < 40) clear++; }
    if (clear / tot > .45) reveal();
  }
  function reveal() {
    if (revealed) return; revealed = true;
    cv.style.transition = 'opacity .6s'; cv.style.opacity = 0; setTimeout(() => cv.remove(), 650);
    confetti(140, ...center(box)); Sound.sfx('yes'); vib([20, 30, 20]);
    const sn = $('#sn', w); sn.innerHTML = ''; sn.append(btn(t(c.next), 'pri', next));
  }
  setTimeout(() => { if (!revealed && w.isConnected) $('#sn', w).append(btn(t(c.skip), 'ghost', reveal)); }, 6000);
}


/* 6 — sweet reasons list */
function reasons(w, el) {
  const c = CONFIG.reasons;
  w.innerHTML = `${heartSVG(58, true)}<div class="kicker">${t(c.kicker)}</div><h2>${t(c.title)}</h2>
    <ul class="reasons" id="rl">${c.list.map(([e, s]) => `<li><b>${e}</b><span>${t(s)}</span></li>`).join('')}</ul><div id="rn" style="min-height:56px"></div>`;
  const lis = [...w.querySelectorAll('.reasons li')];
  lis.forEach((li, i) => setTimeout(() => { if (!el.isConnected) return; li.classList.add('on'); Sound.sfx('pop');
    if (i === lis.length - 1) setTimeout(() => $('#rn', w).append(btn(t(c.next), 'pri', next)), 600); }, 500 + i * 1000));
}

/* 7 — the big question with runaway NO */
let noEl = null, yesEl = null;
function resetNo() { if (noEl) noEl.remove(); noEl = null; yesEl = null; }
function clampNo() {
  if (!noEl || !noEl.classList.contains('fly')) return;
  const m = 14, bw = noEl.offsetWidth, bh = noEl.offsetHeight;
  const x = Math.min(Math.max(m, parseFloat(noEl.style.left) || m), innerWidth - bw - m);
  const y = Math.min(Math.max(80, parseFloat(noEl.style.top) || 80), innerHeight - bh - m);
  noEl.style.left = x + 'px'; noEl.style.top = y + 'px';
}
function ask(w) {
  const c = CONFIG.ask; noCount = 0; let lastDodge = 0, yesArmed = false, resigned = false;
  w.innerHTML = `<div class="bearbox"><div class="glowhb">${heartSVG(170)}</div>${bearSVG()}</div>
    <div class="kicker">${t(c.kicker)}</div>
    <div class="ask">${t(c.question)}</div>
    <div class="yn" id="yn"></div><div class="caption" id="cap"></div>`;
  const yn = $('#yn', w), cap = $('#cap', w), bear = $('.bear', w);
  yesEl = btn(t(c.yes), 'pri', () => { if (!yesArmed) return; sayYes(); });
  yesEl.id = 'yes'; yesEl.style.minWidth = '128px';
  yesEl.addEventListener('pointerdown', () => { yesArmed = true; });
  yesEl.addEventListener('keydown', () => { yesArmed = true; });
  noEl = mk(`<button class="btn ghost" id="no">${t(c.no)}</button>`); noEl.style.minWidth = '128px';
  yn.append(yesEl, noEl);

  function sayYes() {
    vib([40, 50, 80]); Sound.sfx('yes');
    const [x, y] = center(yesEl); burst(x, y, ['💖', '💘', '💕', '✨'], 30, 36); confetti(200, x, y);
    bear.setAttribute('class', 'bear happy'); resetNo(); setTimeout(next, 650);
  }
  function dodge(ev) {
    if (ev) { ev.preventDefault(); ev.stopPropagation(); }
    if (resigned) return;
    const now = performance.now(); if (now - lastDodge < 220) return; lastDodge = now;
    noCount++;
    if (noCount >= c.maxDodges) return resign();
    Sound.sfx('boing'); vib(25);
    const r = noEl.getBoundingClientRect();
    if (!noEl.classList.contains('fly')) {        // lift out of the row, keep its exact spot, then fly
      noEl.style.left = r.left + 'px'; noEl.style.top = r.top + 'px';
      document.body.appendChild(noEl); noEl.classList.add('fly'); void noEl.offsetWidth;
    }
    noEl.textContent = c.noTexts[(noCount - 1) % c.noTexts.length];
    const s = Math.max(.62, 1 - noCount * .04);
    noEl.style.transform = `scale(${s}) rotate(${rnd(-12, 12)}deg)`;
    yesEl.style.transform = `scale(${Math.min(1.75, 1 + noCount * .07)})`;
    bear.setAttribute('class', 'bear ' + (noCount <= 2 ? 'sad' : noCount <= 5 ? 'cry' : 'cry plead'));
    cap.textContent = c.captions[Math.min(noCount, c.captions.length - 1)];
    // new spot: fully on-screen, never on top of YES, and far from the finger
    const bw = noEl.offsetWidth, bh = noEl.offsetHeight, m = 14, top = 80;
    const yr = yesEl.getBoundingClientRect(); const qr = $('.ask', w).getBoundingClientRect(); const pad = 18;
    const fx0 = ev && ev.clientX != null ? ev.clientX : r.left + r.width / 2, fy0 = ev && ev.clientY != null ? ev.clientY : r.top + r.height / 2;
    let best = null, bestD = -1;
    for (let k = 0; k < 40; k++) {
      const x = rnd(m, Math.max(m, innerWidth - bw - m)), y = rnd(top, Math.max(top, innerHeight - bh - m));
      const hits = q => x < q.right + pad && x + bw > q.left - pad && y < q.bottom + pad && y + bh > q.top - pad;
      if (hits(yr)) continue;
      const d = Math.hypot(x + bw / 2 - fx0, y + bh / 2 - fy0);
      if (d > 140 && (k > 28 || !hits(qr))) { best = [x, y]; break; }
      if (d > bestD) { bestD = d; best = [x, y]; }
    }
    if (!best) best = [m, top];
    noEl.style.left = best[0] + 'px'; noEl.style.top = best[1] + 'px';
    if (noCount === 5) toast('Psst… HAAN wala button bada ho gaya hai, wahi dabao 👀');
  }
  function resign() {
    resigned = true; toast(c.resign, 2800); Sound.sfx('ding');
    noEl.textContent = 'Haan 💖'; noEl.className = 'btn pri fly'; noEl.style.transform = 'scale(1)';
    bear.setAttribute('class', 'bear happy'); cap.textContent = 'Ab dono hi HAAN hain 😌';
    clampNo();
    const at = performance.now(); noEl.addEventListener('click', () => { if (performance.now() - at > 500) sayYes(); });
  }
  noEl.addEventListener('pointerdown', dodge);
  noEl.addEventListener('mouseenter', e => { if (matchMedia('(hover:hover)').matches) dodge(e); });
  noEl.addEventListener('click', e => { if (!resigned) dodge(e); });
  noEl.addEventListener('keydown', e => { if (!resigned && (e.key === 'Enter' || e.key === ' ')) dodge(e); });
}

/* 7 — celebration */
function yay(w, el) {
  const c = CONFIG.yay;
  const cert = noCount > 0 ? t(c.certTried, { n: noCount }) : t(c.certDirect);
  w.innerHTML = `<div class="bearbox"><div class="glowhb">${heartSVG(170)}</div>${bearSVG().replace('bear plead', 'bear happy')}</div><div class="big grad">${t(c.title)}</div><p>${t(c.text)}</p>
    <div class="cert"><div style="font-weight:800;color:#fff;margin-bottom:4px">${t(c.certTitle)}</div>${cert}<br><span class="small">${t(c.certEnd)}</span></div>`;
  w.append(btn(t(c.next), 'pri', next));
  confetti(160); setTimeout(() => rain(['💖', '💕', '🌸', '💗', '✨'], 40), 300); setTimeout(() => confetti(120, W * .2, H * .3), 900); setTimeout(() => confetti(120, W * .8, H * .3), 1300);
}

/* 8 — envelope → final proposal card */
function finale(w) {
  const c = CONFIG.final;
  w.innerHTML = `<div class="kicker">${t(c.kicker)}</div>
    <div class="envwrap" id="ev" role="button" aria-label="open letter">
      <div class="envback"></div><div class="letter">${t(c.envLabel)}</div><div class="envfront"></div><div class="flap"></div><div class="seal">❤️</div>
    </div>
    <div class="small tapme" id="tm" style="font-size:16px">${t(c.tap)}</div>`;
  const ev = $('#ev', w); let opened = false;
  ev.addEventListener('click', async () => {
    if (opened) return; opened = true; Sound.sfx('ding'); vib(30);
    ev.classList.add('open'); $('#tm', w).style.opacity = 0;
    burst(...center(ev), ['🌸', '💖', '✨', '🌹'], 26, 34);
    await sleep(1650);
    showCard(w);
  });
}
function showCard(w) {
  const c = CONFIG.final;
  morePetals(20);
  const text = CONFIG.customMsg || c.letter;
  const sig = CONFIG.from ? t(c.sigWithName) : t(c.sigNoName);
  w.classList.add('bare');
  w.innerHTML = `<div class="final" id="fc"><div class="orn">${heartSVG(54, true)}</div><div class="to">${t(c.dear)}</div>
    <div class="body" id="tb"><span class="cur"></span></div><div class="sig" id="sg" style="white-space:pre-line">${sig}</div></div>
    <div class="row endbtns" id="eb"></div>`;
  const tb = $('#tb', w), cur = tb.firstChild; let i = 0, skip = false; const full = text;
  $('#fc', w).addEventListener('click', () => { skip = true; });
  rain(['🌸', '💖', '🌹', '✨'], 26);
  (async function type() {
    await sleep(900);
    const node = document.createTextNode(''); tb.insertBefore(node, cur);
    while (i < full.length) {
      if (skip) { node.data = full; break; }
      const ch = full[i]; const cp = full.codePointAt(i); const step = cp > 0xffff ? 2 : 1;
      node.data += full.substr(i, step); i += step;
      await sleep(ch === '\n' ? 260 : /[.,…!?:]/.test(ch) ? 190 : 32);
    }
    $('#sg', w).classList.add('show');
    setTimeout(() => cur.remove(), 1500);
    confetti(90, W / 2, H * .25);
    const eb = $('#eb', w); eb.classList.add('show');
    eb.append(btn(t(c.replay), 'ghost', () => { location.reload(); }));
    const replyUrl = 'https://wa.me/?text=' + encodeURIComponent(c.replyText.replace(/\{to\}/g, CONFIG.to));
    const a = mk(`<a class="btn pri" href="${replyUrl}" target="_blank" rel="noopener">${t(c.reply)}</a>`); a.style.textDecoration = 'none'; a.style.color = '#fff';
    eb.append(a);
  })();
}

/* ---------------- link maker (?make=1) ---------------- */
function maker() {
  $('#progFill').style.width = '0';
  const el = document.createElement('section'); el.className = 'scr in';
  el.innerHTML = `<div class="wrap"><div class="kicker">Link Maker 🔗</div><h2>Apna personalised link banao</h2>
    <div class="card" style="display:flex;flex-direction:column;gap:14px">
      <div class="field"><label>Jiske liye hai (naam)</label><input id="mn" maxlength="28" placeholder="e.g. Riya"></div>
      <div class="field"><label>Tumhara naam (signature)</label><input id="mf" maxlength="28" placeholder="e.g. Priyanshu"></div>
      <div class="field"><label>Apna message (optional, khaali chhodo toh default)</label><textarea id="mm" maxlength="700" placeholder="Last card pe ye dikhega…"></textarea></div>
      <div class="out" id="mo"></div>
      <div class="row"><button class="btn ghost" id="mc">📋 Copy</button><a class="btn pri" id="mw" target="_blank" rel="noopener" style="color:#fff;text-decoration:none">WhatsApp pe bhejo</a></div>
      <a class="small" id="mp" target="_blank" rel="noopener" style="color:var(--gold)">👀 Preview dekho</a>
    </div></div>`;
  stage.appendChild(el);
  const upd = () => {
    const u = new URL(location.origin + location.pathname);
    const n = $('#mn').value.trim(), f = $('#mf').value.trim(), m = $('#mm').value.trim();
    if (n) u.searchParams.set('name', n); if (f) u.searchParams.set('from', f); if (m) u.searchParams.set('msg', m);
    const s = u.toString(); $('#mo').textContent = s; $('#mp').href = s;
    $('#mw').href = 'https://wa.me/?text=' + encodeURIComponent('Ek special message hai tumhare liye 💌 ' + s);
    return s;
  };
  ['mn', 'mf', 'mm'].forEach(id => $('#' + id).addEventListener('input', upd)); upd();
  $('#mc').addEventListener('click', async () => {
    const s = upd(); try { await navigator.clipboard.writeText(s); toast('Link copy ho gaya ✅'); } catch (e) { toast('Link upar se copy kar lo 👆'); }
  });
}

resize();
if (Q.has('make')) maker(); else go(0);
