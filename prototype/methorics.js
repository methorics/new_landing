/* ============================================================
   METHORICS — макет интерфейса · общий скрипт
   Без внешних зависимостей (работает офлайн, кроме веб-шрифтов)
   ============================================================ */
const MET = {};

/* ---------- логотип (инлайн, для чёткости) ---------- */
MET.logoSVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
  <defs>
    <linearGradient id="mn" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2A4E7E"/><stop offset="1" stop-color="#1F3A5F"/></linearGradient>
    <linearGradient id="mg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#C7A04A"/><stop offset="1" stop-color="#A8812A"/></linearGradient>
  </defs>
  <g stroke="#2E6DA4" stroke-width="3.4" stroke-linecap="round" fill="none">
    <line x1="18" y1="80" x2="18" y2="24"/><line x1="18" y1="24" x2="50" y2="58"/>
    <line x1="50" y1="58" x2="82" y2="24"/><line x1="82" y1="24" x2="82" y2="80"/></g>
  <g fill="#5B8FBF"><circle cx="18" cy="52" r="3.2"/><circle cx="34" cy="41" r="3.2"/><circle cx="66" cy="41" r="3.2"/><circle cx="82" cy="52" r="3.2"/></g>
  <circle cx="18" cy="80" r="7.2" fill="url(#mn)"/><circle cx="18" cy="24" r="7.2" fill="url(#mn)"/>
  <circle cx="82" cy="24" r="7.2" fill="url(#mn)"/><circle cx="82" cy="80" r="7.2" fill="url(#mn)"/>
  <circle cx="50" cy="58" r="8.4" fill="url(#mg)"/><circle cx="50" cy="58" r="3.2" fill="#FBF3DC"/>
</svg>`;

/* ---------- иконки (24×24, stroke=currentColor) ---------- */
MET.icons = {
  shield:'<path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z"/>',
  net:'<circle cx="6" cy="6" r="2.2"/><circle cx="18" cy="7" r="2.2"/><circle cx="12" cy="17" r="2.2"/><path d="M7.7 7.2l3 8M16.4 8.4l-3.6 7"/>',
  doc:'<path d="M7 3h7l4 4v14H7z"/><path d="M14 3v4h4M9 12h7M9 16h5"/>',
  scan:'<circle cx="11" cy="11" r="6"/><path d="M20 20l-4-4"/>',
  mic:'<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v3"/>',
  send:'<path d="M4 12l16-8-7 16-2-6z"/>',
  alert:'<path d="M12 4l9 16H3z"/><path d="M12 10v4M12 17v.5"/>',
  check:'<path d="M5 12l4 4 10-10"/>',
  lock:'<rect x="5" y="11" width="14" height="9" rx="2"/><path d="M8 11V8a4 4 0 0 1 8 0v3"/>',
  key:'<circle cx="8" cy="8" r="4"/><path d="M11 11l8 8M16 16l2-2M18 14l2-2"/>',
  user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 4-6 8-6s8 2 8 6"/>',
  users:'<circle cx="9" cy="8" r="3.2"/><path d="M3 20c0-3.5 3-5 6-5s6 1.5 6 5"/><path d="M16 5a3 3 0 0 1 0 6M17 20c0-2.5-1-4-2.5-5"/>',
  building:'<rect x="5" y="3" width="14" height="18" rx="1"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3"/>',
  ai:'<rect x="6" y="6" width="12" height="12" rx="3"/><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3"/><circle cx="10" cy="11" r="1.1"/><circle cx="14" cy="11" r="1.1"/>',
  clock:'<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/>',
  gavel:'<path d="M5 19h8M14 6l4 4M10 10l4-4-3-3-4 4zM13 9l-7 7-2-2 7-7z"/>',
  copy:'<rect x="8" y="8" width="11" height="11" rx="2"/><path d="M5 16V5h11"/>',
  eye:'<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  cpu:'<rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 3v3M14 3v3M10 18v3M14 18v3M3 10h3M3 14h3M18 10h3M18 14h3"/>',
  flag:'<path d="M5 21V4M5 4h11l-2 4 2 4H5"/>',
  target:'<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3.5"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  bolt:'<path d="M13 3L5 13h5l-1 8 8-11h-5z"/>',
  flame:'<path d="M12 3c3 4 5 6 5 9a5 5 0 0 1-10 0c0-1.5.7-3 2-4 0 1.5 1 2 1.5 2 .5-2-.5-4 1.5-7z"/>',
  spark:'<path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z"/>',
  chart:'<path d="M4 20V4M4 20h16M8 17v-5M12 17V8M16 17v-8"/>',
  arrow:'<path d="M5 12h13M13 6l6 6-6 6"/>',
  download:'<path d="M12 4v10M8 11l4 4 4-4M5 19h14"/>',
  hand:'<path d="M7 11V5a1.5 1.5 0 0 1 3 0v6M10 9V4a1.5 1.5 0 0 1 3 0v5M13 9V5a1.5 1.5 0 0 1 3 0v8c0 4-2 7-6 7-3 0-4-2-6-5l-1.5-3a1.6 1.6 0 0 1 2.7-1.6L7 13"/>',
  refresh:'<path d="M4 12a8 8 0 0 1 14-5l2 2M20 5v4h-4M20 12a8 8 0 0 1-14 5l-2-2M4 19v-4h4"/>',
  link:'<path d="M9 12h6M10 8h-2a4 4 0 0 0 0 8h2M14 8h2a4 4 0 0 1 0 8h-2"/>'
};
MET.ic = (n, cls='') => `<svg class="${cls}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${MET.icons[n]||''}</svg>`;

/* ---------- профили развёртывания ---------- */
MET.profiles = {
  A:{name:'A · Полностью локальный', pill:'Полностью локально', cls:'', note:'Данные не покидают устройство'},
  B:{name:'B · Local-first гибрид', pill:'Local-first · данные локально', cls:'', note:'В облако — только обезличенные признаки'},
  C:{name:'C · Self-hosted', pill:'Ваш контур · self-hosted', cls:'', note:'Бэкенд в периметре организации'},
  D:{name:'D · TEE-облако', pill:'TEE · криптогарантия', cls:'', note:'Аттестация доверенной среды'},
  E:{name:'E · Демо (облако)', pill:'Демо · облако (DPA)', cls:'cloud', note:'Без чувствительных загрузок'}
};
MET.qs = k => new URLSearchParams(location.search).get(k);
MET.profile = () => MET.profiles[MET.qs('profile')] ? MET.qs('profile') : 'B';

/* ---------- topbar ---------- */
MET.buildTopbar = function(opts={}){
  const el = document.querySelector('[data-topbar]'); if(!el) return;
  const pk = MET.profile(); const pr = MET.profiles[pk];
  const back = opts.back ? `<a class="btn btn-ghost btn-sm" href="${opts.back}">${MET.ic('arrow')} Назад</a>` : '';
  el.className='topbar';
  el.innerHTML = `
    <a class="brand" href="index.html"><span class="brand-mark">${MET.logoSVG}</span>
      <span class="brand-word"><b>Methorics</b><span>Защита прав</span></span></a>
    ${opts.crumb?`<span class="faint small" style="border-left:1px solid var(--line);padding-left:16px">${opts.crumb}</span>`:''}
    <div class="spacer"></div>
    ${back}
    <span class="privacy-pill ${pr.cls}" title="${pr.note}"><span class="dot"></span>${MET.ic('lock')} ${pr.pill}</span>
    <span class="profile-tag">${MET.ic('shield')} Профиль ${pk}</span>
    <span class="avatar">ИС</span>`;
};

/* ---------- данные: карта прав (Среда + граница) ---------- */
MET.graph = {
  view:[760,440],
  boundary:'M70 70 C70 40, 470 30, 470 70 L470 350 C470 380, 70 385, 70 350 Z',
  nodes:[
    {id:'work', label:'Произведение', type:'Литературное произв. (©)', state:'warn', x:255,y:150,
      status:'Не депонировано', vuln:'Приоритет не зафиксирован', why:'Дата создания не подтверждена доказуемо — слабое место при споре.'},
    {id:'brand', label:'Бренд / название', type:'Обозначение', state:'crit', x:160,y:300,
      status:'Не зарегистрировано', vuln:'Открыто для сквоттинга', why:'Нет регистрации ТЗ — третье лицо может зарегистрировать первым.'},
    {id:'logo', label:'Логотип', type:'Произв. дизайна (©)', state:'ok', x:330,y:300,
      status:'Депонировано', vuln:'—', why:'Есть фиксация и договор о передаче прав.'},
    {id:'domain', label:'Домен', type:'Идентификатор', state:'warn', x:300,y:95,
      status:'1 регистратор', vuln:'Единая точка отказа', why:'Зависимость от одного регистратора без резерва.'},
    {id:'knowhow', label:'Ноу-хау', type:'Секрет производства', state:'warn', x:120,y:200,
      status:'Без режима', vuln:'NDA не оформлены', why:'Нет режима коммерческой тайны и соглашений с доступом.'},
    {id:'contract', label:'Договор', type:'Формальность', state:'ok', x:415,y:200,
      status:'Подписан', vuln:'—', why:'Договор о передаче прав с дизайнером — метон, держит границу.'},
    // Среда
    {id:'platform', label:'Платформа', type:'Среда · публикация', state:'env', x:600,y:120, env:true,
      status:'Внешняя', vuln:'Зависимость доступа', why:'Контент опубликован на внешней площадке — вне контроля.'},
    {id:'rival', label:'Конкурент', type:'Среда · актор', state:'env', x:640,y:300, env:true,
      status:'Внешний', vuln:'Параллельная заявка', why:'Потенциальный источник антиметонов (атак на права).'},
    {id:'public', label:'Маркетплейс', type:'Среда · витрина', state:'env', x:500,y:385, env:true,
      status:'Внешняя', vuln:'Abuse такедаунов', why:'Публичная витрина — поверхность для копирования и abuse.'}
  ],
  edges:[
    {a:'work',b:'logo'},{a:'work',b:'domain'},{a:'brand',b:'logo'},
    {a:'contract',b:'logo'},{a:'work',b:'knowhow'},{a:'brand',b:'work'},
    {a:'work',b:'platform',weak:true},{a:'brand',b:'rival',weak:true},{a:'logo',b:'public',weak:true}
  ]
};
MET.stateColor = {ok:'#2E7D5B', warn:'#B5872A', crit:'#BC3E2C', env:'#9AA7BA'};
MET.stateFill  = {ok:'#E7F3EC', warn:'#FBF1D8', crit:'#FAE7E2', env:'#EEF2F7'};

MET.renderGraph = function(host, opts={}){
  const g = MET.graph; const affected = new Set(opts.affected||[]);
  const node = id => g.nodes.find(n=>n.id===id);
  const wrap = document.createElement('div'); wrap.className='graph-wrap';
  let svg = `<svg viewBox="0 0 ${g.view[0]} ${g.view[1]}">`;
  svg += `<path class="boundary" d="${g.boundary}"/>`;
  svg += `<text class="boundary-lab" x="80" y="60">Граница идентичности правообладателя</text>`;
  g.edges.forEach(e=>{const A=node(e.a),B=node(e.b);
    svg+=`<line class="g-edge ${e.weak?'weak':''}" x1="${A.x}" y1="${A.y}" x2="${B.x}" y2="${B.y}"/>`;});
  g.nodes.forEach(n=>{
    const col=MET.stateColor[n.state], fill=MET.stateFill[n.state];
    const hot = affected.has(n.id);
    const r = n.env?13:18;
    svg+=`<g class="g-node" data-id="${n.id}" transform="translate(${n.x},${n.y})">
      <circle class="ring" r="${r+7}" fill="none" stroke="${col}" stroke-width="2" opacity="${hot?'1':'0'}" ${hot?'stroke-dasharray="3 3"':''}/>
      ${hot?`<circle r="${r+13}" fill="${col}" opacity=".10"><animate attributeName="r" values="${r+10};${r+18};${r+10}" dur="1.8s" repeatCount="indefinite"/></circle>`:''}
      <circle class="body" r="${r}" fill="${fill}" stroke="${col}" stroke-width="2.2"/>
      ${n.env?'':`<g stroke="${col}" stroke-width="1.6" fill="none" transform="translate(-7,-7)"><svg width="14" height="14" viewBox="0 0 24 24">${MET.icons[MET.nodeIcon(n.id)]||''}</svg></g>`}
      ${n.env?`<text text-anchor="middle" dy="4" font-size="12" fill="${col}">⌁</text>`:''}
      <text text-anchor="middle" y="${r+15}">${n.label}</text>
    </g>`;
  });
  svg+=`</svg>`;
  wrap.innerHTML = svg + `<div class="env-label">Среда</div>
    <div class="graph-legend">
      <span><i class="dot-state s-ok"></i>устойчиво</span>
      <span><i class="dot-state s-warn"></i>уязвимо</span>
      <span><i class="dot-state s-crit"></i>критично</span>
      <span style="color:var(--gold)">— — граница</span>
    </div>
    <div class="node-pop" id="nodePop"></div>`;
  host.innerHTML=''; host.appendChild(wrap);

  const pop = wrap.querySelector('#nodePop');
  wrap.querySelectorAll('.g-node').forEach(ng=>{
    ng.addEventListener('click', ev=>{
      const n = node(ng.dataset.id);
      wrap.querySelectorAll('.g-node').forEach(x=>x.classList.remove('sel'));
      ng.classList.add('sel');
      const col=MET.stateColor[n.state];
      pop.innerHTML = `<h4>${n.label}</h4><div class="tiny faint" style="margin-bottom:6px">${n.type}</div>
        <div class="row"><span class="muted">Статус</span><b>${n.status}</b></div>
        <div class="row"><span class="muted">Уязвимость</span><b style="color:${col}">${n.vuln}</b></div>
        <div class="why">${n.why}</div>`;
      const px=Math.min(Math.max(n.x/g.view[0]*wrap.clientWidth-124,8), wrap.clientWidth-256);
      const py=Math.min(n.y/g.view[1]*wrap.clientHeight+20, wrap.clientHeight-150);
      pop.style.left=px+'px'; pop.style.top=py+'px'; pop.classList.add('on');
      if(opts.onSelect) opts.onSelect(n);
    });
  });
  wrap.addEventListener('click', ev=>{ if(!ev.target.closest('.g-node') && !ev.target.closest('.node-pop')){pop.classList.remove('on');wrap.querySelectorAll('.g-node').forEach(x=>x.classList.remove('sel'));}});
};
MET.nodeIcon = id => ({work:'doc',brand:'spark',logo:'layers',domain:'link',knowhow:'eye',contract:'check'}[id]||'net');

/* ---------- каталог шоковых сценариев (§8) ---------- */
MET.scenarios = [
  {id:'access', cat:'Потеря доступа', icon:'key', rel:'med', title:'Блокировка платформы / утеря ключей',
    desc:'Зависимость активов от внешних точек; время восстановления', affected:['platform','domain','work']},
  {id:'plagiarism', cat:'Плагиат / копирование', icon:'copy', rel:'high', title:'Несанкционированное копирование произведения',
    desc:'Скорость обнаружения, доказуемость авторства, приоритет', affected:['work','public','logo']},
  {id:'troll', cat:'Патентные тролли', icon:'gavel', rel:'low', title:'Претензия от непрактикующего держателя патента',
    desc:'Поверхность нарушения, стоимость защиты, прайор-арт', affected:['knowhow']},
  {id:'competitor', cat:'Конкуренты', icon:'target', rel:'high', title:'Параллельная заявка / выход на рынок',
    desc:'Гонка приоритета, обход формулы, перекрытие защиты', affected:['brand','rival','work']},
  {id:'leak', cat:'Утечки / ноу-хау', icon:'eye', rel:'med', title:'Инсайдер / нарушение NDA',
    desc:'Контроль доступа, договорная защита, режим секрета', affected:['knowhow','contract']},
  {id:'priority', cat:'Споры о приоритете', icon:'clock', rel:'high', title:'Оспаривание первенства произведения',
    desc:'Доказуемость даты, цепочка фиксации', affected:['work','logo']},
  {id:'dispute', cat:'Юридические споры', icon:'gavel', rel:'med', title:'Претензия о нарушении в ваш адрес',
    desc:'Экспозиция, сила позиции, цена/исход', affected:['logo','work']},
  {id:'asset', cat:'Атаки на активы', icon:'shield', rel:'high', title:'Сквоттинг бренда / угон домена',
    desc:'Уязвимость идентификаторов, реакция', affected:['brand','domain','public']},
  {id:'ai', cat:'ИИ-специфичные', icon:'cpu', rel:'high', title:'Скрейпинг для обучения / имитация стиля',
    desc:'Доказуемость opt-out, мета-инструкция Methorics', affected:['work','public','platform']},
  {id:'contract', cat:'Контракты / лицензии', icon:'doc', rel:'med', title:'Сбой лицензии / обратная уступка прав',
    desc:'Утечка прав через формулировки договоров', affected:['contract','logo']},
  {id:'succession', cat:'Преемственность', icon:'users', rel:'low', title:'Утрата автора / наследование IP',
    desc:'Непрерывность владения, риск «осиротевших» прав', affected:['work','knowhow','brand']}
];

/* ---------- движок симуляции (мок) ---------- */
MET.sims = {
  priority:{grade:'D',state:'crit',vtitle:'Высокая экспозиция',
    vdesc:'При оспаривании первенства произведения граница не держит: дата создания не зафиксирована доказуемо, цепочка приоритета прерывается.',
    metrics:[
      {label:'P(неблагопр. исхода)',num:'68%',state:'crit',sub:'спор о приоритете', tip:'Оценка из структурной модели: приоритет не зафиксирован + публичная поверхность.'},
      {label:'Ожидаемый ущерб',num:'€18–40k',state:'warn',sub:'судебные + потеря прав', tip:'Диапазон по Монте-Карло над исходами для текущей позы.'},
      {label:'Время до реакции',num:'14 дн.',state:'warn',sub:'обнаружение → ответ', tip:'Нет мониторинга — обнаружение запаздывает.'},
      {label:'Точки отказа (SPOF)',num:'2',state:'crit',sub:'приоритет, домен', tip:'Узлы, падение которых рушит каскад.'}],
    attack:[
      {t:'T0',move:'Третье лицо заявляет более раннее авторство',res:'breach',note:'Нечем доказать вашу дату'},
      {t:'T+3д',move:'Запрос доказательств приоритета',res:'fail',note:'Депонирование отсутствует'},
      {t:'T+7д',move:'Логотип — есть фиксация',res:'hold',note:'Договор + депозит держат'},
      {t:'T+14д',move:'Эскалация в спор',res:'fail',note:'Позиция слабая без таймстемпа'}],
    radar:{labels:['Приоритет','Формальности','Мониторинг','Доказуемость','Контракты','Резерв'],
      before:[.2,.5,.15,.25,.8,.3], after:[.85,.7,.6,.85,.8,.55]},
    recs:[
      {vuln:'Приоритет не зафиксирован',title:'Зафиксировать дату создания',desc:'Депонирование / доверенный таймстемп произведения и черновиков.',effort:'низкое',impact:'высокий',service:'Депонирование и таймстемпинг'},
      {vuln:'Нет мониторинга',title:'Включить мониторинг копий',desc:'Отслеживание появления произведения в Среде для ранней реакции.',effort:'низкое',impact:'средний'},
      {vuln:'Домен — SPOF',title:'Резервировать идентификаторы',desc:'Второй регистратор / блокировка передачи домена.',effort:'среднее',impact:'средний'}],
    upsell:{title:'Услуга: доказательная база приоритета',desc:'Подрядчик оформит депонирование и соберёт доказательную цепочку даты создания.',cta:'Передать подрядчику'}},

  plagiarism:{grade:'C',state:'warn',vtitle:'Средняя экспозиция',
    vdesc:'Копирование обнаруживается поздно; авторство доказуемо частично. Логотип защищён, текст произведения — нет.',
    metrics:[
      {label:'P(распростр. копии)',num:'54%',state:'warn',sub:'до обнаружения',tip:'Публичная витрина + нет мониторинга.'},
      {label:'Ожидаемый ущерб',num:'€6–22k',state:'warn',sub:'упущенная выгода',tip:'Оценка по Монте-Карло.'},
      {label:'Время до обнаружения',num:'21 дн.',state:'crit',sub:'без мониторинга',tip:'Ручное обнаружение — медленное.'},
      {label:'Доказуемость',num:'Частичн.',state:'warn',sub:'есть пробелы',tip:'Приоритет текста не зафиксирован.'}],
    attack:[
      {t:'T0',move:'Копия выложена на маркетплейсе',res:'breach',note:'Поверхность открыта'},
      {t:'T+21д',move:'Случайное обнаружение',res:'fail',note:'Мониторинга нет'},
      {t:'T+24д',move:'Фиксация факта',res:'hold',note:'Логотип помогает идентификации'},
      {t:'T+30д',move:'Досудебная претензия (C&D)',res:'hold',note:'Возможна при доказанном приоритете'}],
    radar:{labels:['Приоритет','Мониторинг','Доказуемость','Реакция','Контракты','Резерв'],
      before:[.3,.15,.45,.4,.8,.4], after:[.8,.75,.85,.8,.8,.55]},
    recs:[
      {vuln:'Поздняя реакция',title:'Мониторинг копий и приоритет',desc:'Автоотслеживание + фиксация даты — сокращает обнаружение до дней.',effort:'низкое',impact:'высокий',service:'Мониторинг нарушений'},
      {vuln:'Пробел доказуемости',title:'Депонировать произведение',desc:'Доверенный таймстемп текста.',effort:'низкое',impact:'высокий',service:'Депонирование'},
      {vuln:'Реакция вручную',title:'Шаблон досудебной претензии',desc:'Готовый C&D-сценарий с фиксацией.',effort:'низкое',impact:'средний'}],
    upsell:{title:'Услуга: фиксация + C&D',desc:'Подрядчик зафиксирует приоритет и подготовит досудебную претензию.',cta:'Передать подрядчику'}},

  ai:{grade:'C',state:'warn',vtitle:'Средняя экспозиция (ИИ-вектор)',
    vdesc:'Произведение в открытом доступе пригодно для скрейпинга и имитации стиля. Отказ от обучения не оформлен как доказуемое уведомление.',
    metrics:[
      {label:'Доказуемость opt-out',num:'Низкая',state:'crit',sub:'не оформлен',tip:'Нет машиночитаемого сигнала и фиксации уведомления.'},
      {label:'Поверхность скрейпинга',num:'Высокая',state:'warn',sub:'2 площадки',tip:'Контент публичен на платформе и витрине.'},
      {label:'Юр. рычаг',num:'Огранич.',state:'warn',sub:'уведомление ≠ команда',tip:'Прокладка как notice/доказательство, не самоисполнимая команда.'},
      {label:'Время на оформление',num:'3 дн.',state:'ok',sub:'быстрая защита',tip:'Машиночитаемый opt-out ставится быстро.'}],
    attack:[
      {t:'T0',move:'Краулер собирает контент',res:'breach',note:'Поверхность открыта'},
      {t:'T+1',move:'Проверка opt-out / robots / meta',res:'fail',note:'Сигнал не выставлен'},
      {t:'T+30д',move:'Имитация стиля в выдаче модели',res:'fail',note:'Нет зафиксированного уведомления'},
      {t:'T+31д',move:'Доказательство отказа',res:'hold',note:'Возможно при оформленном notice'}],
    radar:{labels:['Opt-out','Уведомление','Фиксация','Поверхность','Доказуемость','Реакция'],
      before:[.15,.2,.25,.35,.3,.4], after:[.85,.85,.8,.5,.8,.75]},
    recs:[
      {vuln:'Opt-out не оформлен',title:'Выставить машиночитаемый отказ',desc:'robots/meta/headers + публикация уведомления для ИИ-систем (ред. 1.1).',effort:'низкое',impact:'высокий',service:'Машиночитаемый opt-out'},
      {vuln:'Уведомление не зафиксировано',title:'Зафиксировать notice как доказательство',desc:'Таймстемп факта размещения уведомления (не как команды, а как evidence).',effort:'низкое',impact:'средний',service:'Фиксация уведомления'},
      {vuln:'Широкая поверхность',title:'Сузить публичную поверхность',desc:'Контроль того, что и где выставлено в открытый доступ.',effort:'среднее',impact:'средний'}],
    upsell:{title:'Услуга: пакет ИИ-защиты',desc:'Подрядчик настроит opt-out-сигналы и оформит фиксацию уведомления Methorics.',cta:'Передать подрядчику'}}
};
MET.simFor = function(id){
  if(MET.sims[id]) return MET.sims[id];
  const sc = MET.scenarios.find(s=>s.id===id) || MET.scenarios[0];
  // generic fallback
  return {grade:'C',state:'warn',vtitle:'Умеренная экспозиция',
    vdesc:`Сценарий «${sc.title}»: затронуты узлы границы — есть уязвимые места, требующие усиления.`,
    metrics:[
      {label:'P(неблагопр. исхода)',num:'47%',state:'warn',sub:sc.cat,tip:'Оценка из структурной модели.'},
      {label:'Ожидаемый ущерб',num:'€5–18k',state:'warn',sub:'диапазон',tip:'Монте-Карло над исходами.'},
      {label:'Время до реакции',num:'12 дн.',state:'warn',sub:'обнаружение→ответ',tip:'Зависит от мониторинга.'},
      {label:'Точки отказа',num:String(sc.affected.length),state:'warn',sub:'затронуто узлов',tip:'Узлы границы под нагрузкой.'}],
    attack:[
      {t:'T0',move:'Инициирующее событие Среды',res:'breach',note:'Поверхность открыта'},
      {t:'T+5д',move:'Распространение по графу',res:'fail',note:'Каскад на связанные активы'},
      {t:'T+8д',move:'Сработавшая защита',res:'hold',note:'Оформленные формальности держат'},
      {t:'T+12д',move:'Реакция/эскалация',res:'hold',note:'Возможна при готовом плане'}],
    radar:{labels:['Формальности','Мониторинг','Доказуемость','Реакция','Контракты','Резерв'],
      before:[.4,.3,.4,.4,.7,.4], after:[.75,.7,.75,.75,.8,.6]},
    recs:[
      {vuln:'Слабая фиксация',title:'Усилить формальности затронутых активов',desc:'Закрыть пробелы регистрации/депонирования.',effort:'среднее',impact:'высокий',service:'Оформление формальностей'},
      {vuln:'Поздняя реакция',title:'Включить мониторинг',desc:'Раннее обнаружение событий Среды.',effort:'низкое',impact:'средний'}],
    upsell:{title:'Услуга: усиление границы',desc:'Подрядчик закроет выявленные слабые места.',cta:'Передать подрядчику'}};
};

/* ---------- радар (SVG до/после) ---------- */
MET.radar = function(data, showAfter=true){
  const N=data.labels.length, cx=150, cy=140, R=98, V=300;
  const pt=(i,r)=>{const a=-Math.PI/2 + i*2*Math.PI/N; return [cx+Math.cos(a)*R*r, cy+Math.sin(a)*R*r];};
  let s=`<svg viewBox="0 0 ${V} 290" style="width:100%;height:auto">`;
  [.25,.5,.75,1].forEach(g=>{let p=data.labels.map((_,i)=>pt(i,g).join(',')).join(' ');
    s+=`<polygon points="${p}" fill="none" stroke="#E1E7F0" stroke-width="1"/>`;});
  data.labels.forEach((_,i)=>{const[x,y]=pt(i,1); s+=`<line x1="${cx}" y1="${cy}" x2="${x}" y2="${y}" stroke="#EDF1F7"/>`;});
  const poly=(vals,fill,stroke)=>{let p=vals.map((v,i)=>pt(i,v).join(',')).join(' ');
    return `<polygon points="${p}" fill="${fill}" stroke="${stroke}" stroke-width="2"/>`;};
  s+=poly(data.before,'rgba(188,62,44,.10)','#BC3E2C');
  if(showAfter) s+=poly(data.after,'rgba(46,109,164,.16)','#2E6DA4');
  data.labels.forEach((l,i)=>{const[x,y]=pt(i,1.16);
    s+=`<text x="${x}" y="${y}" text-anchor="middle" dy="3" font-size="10" fill="#54617A" font-family="var(--font-ui)">${l}</text>`;});
  s+=`</svg>`;
  return s;
};

/* ---------- утилита: анимировать meter ---------- */
MET.fillMeter = (el,pct)=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{el.style.width=pct+'%';});});};

/* ---------- инициализация по странице ---------- */
document.addEventListener('DOMContentLoaded', ()=>{
  const page = document.body.dataset.page;
  if(MET['init_'+page]) MET['init_'+page]();
});
