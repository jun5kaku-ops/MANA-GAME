/* =========================================================
   art.js — キャラクターの え と はいけい（ぜんぶ SVG）
   2次元の わかりやすさを たもったまま、ネオレトロな みため にする
   ========================================================= */
const SK='#2B2018';                 /* せんの いろ */
const W='#FFFFFF';
const ln=(w=3)=>`stroke="${SK}" stroke-width="${w}" stroke-linejoin="round" stroke-linecap="round"`;

/* --- きょうつう パーツ --- */
const eyes=(x1,x2,y,r=7)=>`<circle cx="${x1}" cy="${y}" r="${r}" fill="${SK}"/><circle cx="${x2}" cy="${y}" r="${r}" fill="${SK}"/>`+
  `<circle cx="${x1+2.2}" cy="${y-2.4}" r="${r*0.36}" fill="${W}"/><circle cx="${x2+2.2}" cy="${y-2.4}" r="${r*0.36}" fill="${W}"/>`;
const blush=(y=64,c='#FF8FAB')=>`<ellipse cx="26" cy="${y}" rx="8" ry="4.4" fill="${c}" opacity=".5"/><ellipse cx="74" cy="${y}" rx="8" ry="4.4" fill="${c}" opacity=".5"/>`;
const smile=(y=68,w=9)=>`<path d="M${50-w} ${y} Q50 ${y+8} ${50+w} ${y}" fill="none" ${ln(3.4)}/>`;
const shine=(x=34,y=30)=>`<ellipse cx="${x}" cy="${y}" rx="9" ry="6" fill="${W}" opacity=".28" transform="rotate(-25 ${x} ${y})"/>`;

/* --- みみ・つの --- */
function earPart(kind,c1,c2){
  switch(kind){
    case 'cat': return `<path d="M24 40 L17 11 L45 27 Z" fill="${c1}" ${ln()}/><path d="M76 40 L83 11 L55 27 Z" fill="${c1}" ${ln()}/>`+
      `<path d="M26 36 L22 19 L38 28 Z" fill="${c2}"/><path d="M74 36 L78 19 L62 28 Z" fill="${c2}"/>`;
    case 'round': return `<circle cx="22" cy="26" r="13" fill="${c1}" ${ln()}/><circle cx="78" cy="26" r="13" fill="${c1}" ${ln()}/>`+
      `<circle cx="22" cy="26" r="6" fill="${c2}"/><circle cx="78" cy="26" r="6" fill="${c2}"/>`;
    case 'long': return `<ellipse cx="33" cy="18" rx="8" ry="22" fill="${c1}" ${ln()}/><ellipse cx="67" cy="18" rx="8" ry="22" fill="${c1}" ${ln()}/>`+
      `<ellipse cx="33" cy="18" rx="3.6" ry="15" fill="${c2}"/><ellipse cx="67" cy="18" rx="3.6" ry="15" fill="${c2}"/>`;
    case 'fox': return `<path d="M20 42 L14 8 L46 26 Z" fill="${c1}" ${ln()}/><path d="M80 42 L86 8 L54 26 Z" fill="${c1}" ${ln()}/>`+
      `<path d="M23 36 L20 17 L36 27 Z" fill="${c2}"/><path d="M77 36 L80 17 L64 27 Z" fill="${c2}"/>`;
    case 'tuft': return `<path d="M26 34 Q18 10 36 22" fill="${c1}" ${ln()}/><path d="M74 34 Q82 10 64 22" fill="${c1}" ${ln()}/>`;
    case 'horn': return `<path d="M30 30 Q16 14 24 6 Q34 12 36 26" fill="${c2}" ${ln()}/><path d="M70 30 Q84 14 76 6 Q66 12 64 26" fill="${c2}" ${ln()}/>`;
    case 'antler': return `<path d="M32 28 L24 10 M24 10 L14 8 M24 10 L22 0" fill="none" ${ln(3.6)}/>`+
      `<path d="M68 28 L76 10 M76 10 L86 8 M76 10 L78 0" fill="none" ${ln(3.6)}/>`;
    case 'spike': return `<path d="M14 44 L4 30 L18 30 Z M26 30 L20 12 L34 22 Z M50 22 L50 2 L62 18 Z M74 30 L84 14 L82 30 Z M86 44 L96 32 L92 46 Z" fill="${c2}" ${ln(2.6)}/>`;
    case 'antenna': return `<path d="M50 22 L50 8" fill="none" ${ln(3.4)}/><circle cx="50" cy="6" r="6" fill="${c2}" ${ln(2.6)}/>`;
    default: return '';
  }
}

/* --- ぼうし・アクセサリー --- */
function acc(kind,c){
  switch(kind){
    case 'chef': return `<path d="M26 28 Q22 6 40 12 Q50 0 60 12 Q78 6 74 28 Z" fill="${W}" ${ln()}/><rect x="26" y="26" width="48" height="9" rx="4" fill="#F0E6D8" ${ln(2.6)}/>`;
    case 'cap': return `<path d="M22 30 Q50 4 78 30 Z" fill="${c||'#3B5FA8'}" ${ln()}/><rect x="18" y="28" width="64" height="9" rx="4" fill="${c||'#3B5FA8'}" ${ln(2.6)}/><circle cx="50" cy="20" r="5" fill="${'#FFD86B'}" ${ln(2.2)}/>`;
    case 'witch': return `<path d="M50 0 L72 30 L28 30 Z" fill="#5B4A8A" ${ln()}/><rect x="20" y="28" width="60" height="8" rx="4" fill="#3F3260" ${ln(2.4)}/><circle cx="50" cy="22" r="4" fill="#FFD86B"/>`;
    case 'crown': return `<path d="M28 26 L28 8 L39 18 L50 4 L61 18 L72 8 L72 26 Z" fill="#FFD22E" ${ln(2.8)}/><circle cx="50" cy="14" r="3" fill="#FF8FAB"/>`;
    case 'tiara': return `<path d="M30 24 Q50 8 70 24" fill="none" ${ln(3)}/><circle cx="50" cy="12" r="5" fill="#9BD4FF" ${ln(2.4)}/><circle cx="36" cy="18" r="3" fill="#FF8FAB"/><circle cx="64" cy="18" r="3" fill="#FF8FAB"/>`;
    case 'helmet': return `<circle cx="50" cy="52" r="42" fill="#BFE9FF" opacity=".45" ${ln(3)}/><path d="M14 44 Q50 24 86 44" fill="none" stroke="${W}" stroke-width="4" opacity=".8"/>`;
    case 'goggles': return `<rect x="18" y="40" width="64" height="16" rx="8" fill="#2B3A67" ${ln(2.8)}/><circle cx="34" cy="48" r="5" fill="#9BD4FF"/><circle cx="66" cy="48" r="5" fill="#9BD4FF"/>`;
    case 'glasses': return `<circle cx="34" cy="52" r="13" fill="none" ${ln(3)}/><circle cx="66" cy="52" r="13" fill="none" ${ln(3)}/><path d="M47 52 L53 52" ${ln(3)}/>`;
    case 'flower': return `<g transform="translate(72,22)"><circle r="5" fill="#FFD22E"/><circle cx="-8" r="6" fill="#FF8FAB"/><circle cx="8" r="6" fill="#FF8FAB"/><circle cy="-8" r="6" fill="#FF8FAB"/><circle cy="8" r="6" fill="#FF8FAB"/><circle r="4" fill="#FFD22E"/></g>`;
    case 'scarf': return `<path d="M22 78 Q50 92 78 78 L78 90 Q50 100 22 90 Z" fill="#E4572E" ${ln(2.8)}/>`;
    case 'wing': return `<path d="M12 44 Q-6 30 6 62 Q16 70 24 60 Z" fill="${W}" opacity=".85" ${ln(2.4)}/><path d="M88 44 Q106 30 94 62 Q84 70 76 60 Z" fill="${W}" opacity=".85" ${ln(2.4)}/>`;
    case 'apron': return `<path d="M30 82 L70 82 L74 100 L26 100 Z" fill="${W}" ${ln(2.6)}/>`;
    default: return '';
  }
}

/* --- テンプレート --- */
function furry(a){
  const c1=a.c1,c2=a.c2||'#FFF3E2';
  return earPart(a.ear,c1,c2)
    +`<ellipse cx="50" cy="56" rx="38" ry="35" fill="${c1}" ${ln(3.4)}/>`
    +(a.mask?`<ellipse cx="50" cy="66" rx="24" ry="20" fill="${c2}"/>`:'')
    +shine()
    +eyes(36,64,52,a.big?9:7)
    +(a.snout?`<ellipse cx="50" cy="70" rx="13" ry="9" fill="${c2}" ${ln(2.6)}/>`:'')
    +`<path d="M46 ${a.snout?66:66} L54 ${a.snout?66:66} L50 ${a.snout?72:71} Z" fill="${SK}"/>`
    +smile(a.snout?74:72,8)
    +(a.whisk?`<path d="M16 64 L30 66 M16 72 L30 71 M84 64 L70 66 M84 72 L70 71" fill="none" ${ln(2.2)}/>`:'')
    +blush(a.snout?80:78)
    +(a.beard?`<path d="M42 86 Q50 100 58 86" fill="${c2}" ${ln(2.6)}/>`:'')
    +(a.accs||[]).map(x=>acc(x,a.ac)).join('');
}
function bird(a){
  const c1=a.c1,c2=a.c2||'#FFD22E';
  return (a.crest?`<path d="M50 18 Q40 4 56 10 Q60 2 62 14" fill="${c1}" ${ln(2.6)}/>`:'')
    +`<ellipse cx="50" cy="56" rx="36" ry="34" fill="${c1}" ${ln(3.4)}/>`
    +(a.bib?`<ellipse cx="50" cy="66" rx="23" ry="22" fill="${W}"/>`:'')
    +shine()
    +(a.owl?`<circle cx="36" cy="52" r="15" fill="${W}" ${ln(2.6)}/><circle cx="64" cy="52" r="15" fill="${W}" ${ln(2.6)}/>`+eyes(36,64,52,8)
        :(a.dark?`<circle cx="36" cy="50" r="10" fill="${W}" ${ln(2.4)}/><circle cx="64" cy="50" r="10" fill="${W}" ${ln(2.4)}/>`:'')+eyes(36,64,50,7))
    +(a.flat?`<path d="M38 68 Q50 80 62 68 Q50 72 38 68 Z" fill="${c2}" ${ln(2.6)}/>`
           :`<path d="M50 62 L62 72 L50 80 L44 72 Z" fill="${c2}" ${ln(2.6)}/>`)
    +blush(76)
    +(a.accs||[]).map(x=>acc(x,a.ac)).join('');
}
function sea(a){
  const c1=a.c1,c2=a.c2||'#FFF3E2';
  if(a.kind==='octopus')
    return `<ellipse cx="50" cy="46" rx="34" ry="32" fill="${c1}" ${ln(3.4)}/>`
      +`<path d="M18 62 Q10 86 22 92 M34 74 Q28 94 40 96 M66 74 Q72 94 60 96 M82 62 Q90 86 78 92" fill="none" ${ln(5)} stroke="${c1}"/>`
      +`<path d="M18 62 Q10 86 22 92 M34 74 Q28 94 40 96 M66 74 Q72 94 60 96 M82 62 Q90 86 78 92" fill="none" ${ln(2)}/>`
      +shine(36,26)+eyes(38,62,44,8)+smile(58,8)+blush(54);
  if(a.kind==='crab')
    return `<path d="M10 56 Q2 36 16 34 Q26 40 22 58 Z" fill="${c1}" ${ln(2.8)}/><path d="M90 56 Q98 36 84 34 Q74 40 78 58 Z" fill="${c1}" ${ln(2.8)}/>`
      +`<ellipse cx="50" cy="60" rx="34" ry="26" fill="${c1}" ${ln(3.4)}/>`
      +`<path d="M38 36 L38 22 M62 36 L62 22" fill="none" ${ln(3)}/>`
      +`<circle cx="38" cy="18" r="8" fill="${W}" ${ln(2.6)}/><circle cx="62" cy="18" r="8" fill="${W}" ${ln(2.6)}/>`
      +`<circle cx="38" cy="18" r="3.6" fill="${SK}"/><circle cx="62" cy="18" r="3.6" fill="${SK}"/>`
      +smile(62,10)+blush(70);
  if(a.kind==='star'){
    const pts=[];for(let i=0;i<10;i++){const an=-Math.PI/2+i*Math.PI/5,r=i%2?18:44;pts.push((50+r*Math.cos(an)).toFixed(1)+' '+(52+r*Math.sin(an)).toFixed(1));}
    return `<path d="M${pts.join(' L')} Z" fill="${c1}" ${ln(3.4)}/>`+shine(38,34)+eyes(40,60,48,6)+smile(60,7)+blush(56);
  }
  if(a.kind==='turtle')
    return `<ellipse cx="50" cy="72" rx="40" ry="26" fill="${a.c2||'#8B5E3C'}" ${ln(3.4)}/>`
      +`<path d="M50 48 L50 96 M14 66 L86 66 M22 84 L78 84" fill="none" ${ln(2.4)}/>`
      +`<ellipse cx="50" cy="34" rx="26" ry="23" fill="${c1}" ${ln(3.4)}/>`
      +shine(38,22)+eyes(41,59,32,6)+smile(42,7)+blush(40)
      +`<g transform="translate(50,34) scale(0.52) translate(-50,-52)">${(a.accs||[]).map(x=>acc(x,a.ac)).join('')}</g>`;
  /* いるか・アザラシ・ラッコ など */
  return `<ellipse cx="50" cy="58" rx="36" ry="32" fill="${c1}" ${ln(3.4)}/>`
    +(a.fin?`<path d="M50 22 Q64 14 58 30 Z" fill="${c1}" ${ln(2.6)}/>`:'')
    +`<ellipse cx="50" cy="70" rx="26" ry="18" fill="${c2}"/>`
    +shine()+eyes(36,64,50,7)
    +`<path d="M40 74 Q50 84 60 74" fill="none" ${ln(3.2)}/>`
    +blush(62)+(a.whisk?`<path d="M22 70 L34 72 M78 70 L66 72" fill="none" ${ln(2.2)}/>`:'')
    +(a.accs||[]).map(x=>acc(x,a.ac)).join('');
}
function dino(a){
  const c1=a.c1,c2=a.c2||'#FFF3E2';
  return `<path d="M34 22 L40 10 L46 22 L52 8 L58 22 L64 12 L68 26" fill="${c2}" ${ln(2.6)}/>`
    +`<ellipse cx="50" cy="58" rx="37" ry="33" fill="${c1}" ${ln(3.4)}/>`
    +shine()+eyes(36,62,50,7)
    +`<ellipse cx="54" cy="72" rx="24" ry="14" fill="${c2}" ${ln(2.8)}/>`
    +`<circle cx="46" cy="69" r="2.6" fill="${SK}"/><circle cx="62" cy="69" r="2.6" fill="${SK}"/>`
    +`<path d="M36 76 Q54 84 72 76" fill="none" ${ln(2.8)}/>`+blush(58);
}
function human(a){
  const skin=a.skin||'#FFD9B8', hair=a.hair||'#4A3526';
  return `<path d="M16 52 Q16 14 50 14 Q84 14 84 52 L84 60 Q50 46 16 60 Z" fill="${hair}" ${ln(3)}/>`
    +`<ellipse cx="50" cy="58" rx="31" ry="33" fill="${skin}" ${ln(3.2)}/>`
    +`<path d="M20 46 Q50 18 80 46 Q50 34 20 46 Z" fill="${hair}"/>`
    +eyes(38,62,56,6)+smile(72,8)+blush(66,'#FF8FAB')
    +(a.accs||[]).map(x=>acc(x,a.ac)).join('');
}
function mermaid(a){
  return human({skin:'#FFE0C2',hair:'#E4572E'})
    +`<path d="M10 88 Q26 70 34 92 Z" fill="#6FE3C8" ${ln(2.6)}/><path d="M90 88 Q74 70 66 92 Z" fill="#6FE3C8" ${ln(2.6)}/>`
    +acc('tiara');
}
function fairy(a){
  return acc('wing')+human({skin:'#FFE6D0',hair:a.c1||'#9BD4FF'})
    +`<g transform="translate(84,74)"><path d="M0 -8 L2 -2 L8 0 L2 2 L0 8 L-2 2 L-8 0 L-2 -2 Z" fill="#FFD22E" ${ln(2)}/></g>`;
}
function robot(a){
  const c1=a.c1||'#B8C4D8';
  return earPart('antenna',c1,a.c2||'#FF8FAB')
    +`<rect x="16" y="28" width="68" height="62" rx="16" fill="${c1}" ${ln(3.4)}/>`
    +`<rect x="26" y="40" width="48" height="26" rx="10" fill="#2B3A67" ${ln(2.8)}/>`
    +`<circle cx="39" cy="53" r="6" fill="#6FE3C8"/><circle cx="61" cy="53" r="6" fill="#6FE3C8"/>`
    +`<path d="M40 76 L60 76" ${ln(3.4)}/>`
    +`<rect x="8" y="50" width="8" height="16" rx="4" fill="${c1}" ${ln(2.4)}/><rect x="84" y="50" width="8" height="16" rx="4" fill="${c1}" ${ln(2.4)}/>`;
}
function alien(a){
  const c1=a.c1||'#8FE38C';
  return `<ellipse cx="50" cy="52" rx="38" ry="40" fill="${c1}" ${ln(3.4)}/>`
    +`<path d="M30 18 L24 4 M70 18 L76 4" fill="none" ${ln(3)}/><circle cx="23" cy="2" r="4" fill="#FF8FAB"/><circle cx="77" cy="2" r="4" fill="#FF8FAB"/>`
    +shine(36,30)
    +`<ellipse cx="35" cy="52" rx="10" ry="13" fill="${SK}"/><ellipse cx="65" cy="52" rx="10" ry="13" fill="${SK}"/>`
    +`<ellipse cx="38" cy="47" rx="3.4" ry="4" fill="${W}"/><ellipse cx="68" cy="47" rx="3.4" ry="4" fill="${W}"/>`
    +smile(74,8)+(a.accs||[]).map(x=>acc(x,a.ac)).join('');
}
function sweet(a){
  const c1=a.c1,c2=a.c2||'#FFF3E2';
  let base='';
  switch(a.kind){
    case 'cookie': base=`<circle cx="50" cy="56" r="37" fill="${c1}" ${ln(3.4)}/><circle cx="32" cy="40" r="5" fill="#6B4226"/><circle cx="68" cy="44" r="4.4" fill="#6B4226"/><circle cx="60" cy="80" r="4.4" fill="#6B4226"/><circle cx="28" cy="70" r="4" fill="#6B4226"/>`; break;
    case 'cake': base=`<path d="M14 90 L22 40 L78 40 L86 90 Z" fill="${c1}" ${ln(3.4)}/><path d="M20 54 Q50 68 80 54 L82 66 Q50 80 18 66 Z" fill="${c2}"/><circle cx="50" cy="34" r="8" fill="#E4572E" ${ln(2.4)}/>`; break;
    case 'donut': base=`<circle cx="50" cy="56" r="37" fill="${c1}" ${ln(3.4)}/><path d="M14 50 Q30 34 50 42 Q72 50 86 40 L86 56 Q60 62 40 54 Q24 48 14 58 Z" fill="${c2}"/><circle cx="50" cy="56" r="11" fill="#FFF8E7" ${ln(3)}/>`; break;
    case 'pudding': base=`<path d="M22 88 L28 38 L72 38 L78 88 Z" fill="${c1}" ${ln(3.4)}/><path d="M28 38 Q50 26 72 38 Q50 48 28 38 Z" fill="#8B5E3C" ${ln(2.4)}/>`; break;
    case 'choco': base=`<rect x="16" y="34" width="68" height="54" rx="8" fill="${c1}" ${ln(3.4)}/><path d="M50 34 L50 88 M16 60 L84 60" fill="none" ${ln(2.4)}/>`; break;
    case 'dango': base=`<circle cx="50" cy="34" r="15" fill="#FFF3E2" ${ln(3)}/><circle cx="50" cy="58" r="15" fill="#D9C7A8" ${ln(3)}/><circle cx="50" cy="82" r="15" fill="#A8876B" ${ln(3)}/>`; break;
    case 'icecream': base=`<path d="M32 56 L68 56 L50 96 Z" fill="#E8B36B" ${ln(3.2)}/><circle cx="50" cy="42" r="24" fill="${c1}" ${ln(3.2)}/><circle cx="36" cy="48" r="14" fill="${c1}" ${ln(3.2)}/><circle cx="64" cy="48" r="14" fill="${c1}" ${ln(3.2)}/>`; break;
    default: base=`<circle cx="50" cy="56" r="36" fill="${c1}" ${ln(3.4)}/>`;
  }
  const ey=a.kind==='cake'||a.kind==='pudding'?62:54;
  return base+eyes(40,60,ey,6)+smile(ey+14,7)+blush(ey+8)
    +(a.accs||[]).map(x=>acc(x,a.ac)).join('');
}
function snowman(a){
  return `<circle cx="50" cy="74" r="26" fill="${W}" ${ln(3.4)}/><circle cx="50" cy="38" r="21" fill="${W}" ${ln(3.4)}/>`
    +`<rect x="30" y="16" width="40" height="8" rx="4" fill="#2B3A67" ${ln(2.4)}/><rect x="36" y="2" width="28" height="16" rx="4" fill="#2B3A67" ${ln(2.4)}/>`
    +eyes(43,57,36,5)+`<path d="M50 40 L62 46 L50 48 Z" fill="#FF9F1C" ${ln(2)}/>`
    +`<circle cx="50" cy="64" r="3.4" fill="${SK}"/><circle cx="50" cy="78" r="3.4" fill="${SK}"/>`
    +`<path d="M24 70 L6 60 M76 70 L94 60" fill="none" ${ln(3)}/>`;
}
function bug(a){
  const c1=a.c1,c2=a.c2||'#FFF3E2';
  if(a.kind==='butterfly')
    return `<path d="M46 52 Q16 18 10 46 Q8 70 44 64 Z" fill="${c1}" ${ln(3)}/><path d="M54 52 Q84 18 90 46 Q92 70 56 64 Z" fill="${c1}" ${ln(3)}/>`
      +`<path d="M44 60 Q18 74 24 92 Q40 90 48 70 Z" fill="${c2}" ${ln(2.6)}/><path d="M56 60 Q82 74 76 92 Q60 90 52 70 Z" fill="${c2}" ${ln(2.6)}/>`
      +`<ellipse cx="50" cy="58" rx="8" ry="24" fill="${SK}"/>`
      +`<path d="M46 36 L38 20 M54 36 L62 20" fill="none" ${ln(2.6)}/><circle cx="37" cy="18" r="3.4" fill="${SK}"/><circle cx="63" cy="18" r="3.4" fill="${SK}"/>`
      +`<circle cx="46" cy="44" r="2.6" fill="${W}"/><circle cx="54" cy="44" r="2.6" fill="${W}"/>`;
  if(a.kind==='caterpillar')
    return `<circle cx="22" cy="66" r="15" fill="${c1}" ${ln(3)}/><circle cx="44" cy="62" r="16" fill="${c1}" ${ln(3)}/><circle cx="68" cy="58" r="18" fill="${c1}" ${ln(3.2)}/>`
      +`<path d="M62 40 L58 26 M76 40 L82 26" fill="none" ${ln(2.6)}/><circle cx="57" cy="24" r="3.4" fill="${SK}"/><circle cx="83" cy="24" r="3.4" fill="${SK}"/>`
      +eyes(62,76,56,5)+smile(68,6);
  if(a.kind==='snail')
    return `<circle cx="38" cy="58" r="30" fill="${a.c2||'#D98E3C'}" ${ln(3.4)}/>`
      +`<path d="M38 58 Q38 40 54 42 Q68 46 62 62 Q56 76 40 72 Q28 68 32 56" fill="none" ${ln(3)}/>`
      +`<path d="M66 84 Q86 84 86 62 Q86 50 74 50" fill="${c1}" ${ln(3.2)}/>`
      +`<path d="M78 52 L82 38 M86 54 L92 42" fill="none" ${ln(2.4)}/><circle cx="82" cy="36" r="3.2" fill="${SK}"/><circle cx="93" cy="40" r="3.2" fill="${SK}"/>`
      +`<circle cx="76" cy="64" r="3.2" fill="${SK}"/><path d="M72 72 Q78 78 84 72" fill="none" ${ln(2.4)}/>`;
  /* てんとうむし */
  return `<circle cx="50" cy="58" r="36" fill="${c1}" ${ln(3.4)}/>`
    +`<path d="M50 22 L50 94" fill="none" ${ln(3)}/>`
    +`<circle cx="32" cy="46" r="6" fill="${SK}"/><circle cx="68" cy="50" r="6" fill="${SK}"/><circle cx="36" cy="74" r="5" fill="${SK}"/><circle cx="66" cy="76" r="5" fill="${SK}"/>`
    +`<path d="M20 34 Q50 12 80 34 Q50 40 20 34 Z" fill="${SK}"/>`
    +`<circle cx="40" cy="28" r="4" fill="${W}"/><circle cx="60" cy="28" r="4" fill="${W}"/>`;
}
function planet(a){
  return `<ellipse cx="50" cy="58" rx="32" ry="32" fill="${a.c1}" ${ln(3.4)}/>`
    +`<ellipse cx="50" cy="60" rx="48" ry="12" fill="none" stroke="#FFD86B" stroke-width="7"/>`
    +`<ellipse cx="50" cy="60" rx="48" ry="12" fill="none" ${ln(2.4)}/>`
    +shine(38,40)+eyes(40,60,54,6)+smile(66,7)+blush(62);
}
function car(a){
  return `<rect x="8" y="52" width="84" height="30" rx="12" fill="${a.c1}" ${ln(3.4)}/>`
    +`<path d="M24 52 L32 30 L68 30 L76 52 Z" fill="${W}" ${ln(3)}/>`
    +`<rect x="40" y="18" width="20" height="10" rx="4" fill="#E4572E" ${ln(2.4)}/>`
    +`<circle cx="28" cy="84" r="11" fill="${SK}"/><circle cx="72" cy="84" r="11" fill="${SK}"/>`
    +`<circle cx="28" cy="84" r="4.4" fill="${W}"/><circle cx="72" cy="84" r="4.4" fill="${W}"/>`
    +`<circle cx="40" cy="42" r="4" fill="${SK}"/><circle cx="60" cy="42" r="4" fill="${SK}"/>`;
}
function egg(a){
  return `<circle cx="50" cy="46" r="27" fill="#FFE06B" ${ln(3.2)}/>`
    +`<path d="M50 20 Q44 8 56 12 Q52 4 60 14" fill="#FFE06B" ${ln(2.4)}/>`
    +eyes(41,59,44,6)+`<path d="M46 54 L58 58 L46 62 Z" fill="#FF9F1C" ${ln(2)}/>`
    +blush(52,'#FF8FAB')
    +`<path d="M18 72 L28 60 L38 72 L48 58 L58 72 L68 60 L78 72 L82 96 L18 96 Z" fill="#FFF8F0" ${ln(3.2)}/>`
    +`<path d="M30 84 L70 84" fill="none" ${ln(2.2)} opacity=".5"/>`;
}

/* =========================================================
   キャラクターの データ
   ========================================================= */
const CHAR_ART={
  /* うみ */
  'かに':{t:'sea',kind:'crab',c1:'#E4572E'},
  'かめ':{t:'sea',kind:'turtle',c1:'#8FD48C',c2:'#7A5A3A'},
  'いるか':{t:'sea',c1:'#7FB6E8',c2:'#E8F4FF',fin:1},
  'にんぎょひめ':{t:'mermaid'},
  'たこ':{t:'sea',kind:'octopus',c1:'#E86A8A'},
  'ヒトデ':{t:'sea',kind:'star',c1:'#FFB347'},
  'ラッコ':{t:'furry',ear:'round',c1:'#9B7653',c2:'#E8D3B8',whisk:1,snout:1},
  /* やま */
  'もりの くまさん':{t:'furry',ear:'round',c1:'#A9714B',c2:'#F0D9BE',snout:1},
  'りす':{t:'furry',ear:'tuft',c1:'#D98E3C',c2:'#FFEBD2',snout:1},
  'うさぎ':{t:'furry',ear:'long',c1:'#FFF3E2',c2:'#FFC7D8'},
  'ふくろう':{t:'bird',owl:1,c1:'#A8865F',c2:'#FFD22E',crest:1},
  'やぎ':{t:'furry',ear:'horn',c1:'#F2EDE4',c2:'#C9B08A',beard:1,snout:1},
  'カモシカ':{t:'furry',ear:'antler',c1:'#B08050',c2:'#F0DCC0',snout:1},
  /* もり */
  'きつね':{t:'furry',ear:'fox',c1:'#E8853C',c2:'#FFF3E2',mask:1,snout:1},
  'しか':{t:'furry',ear:'antler',c1:'#C08A54',c2:'#FFF0DC',snout:1},
  'ちょうちょ':{t:'bug',kind:'butterfly',c1:'#FF8FAB',c2:'#FFD86B'},
  'かえる':{t:'furry',ear:'none',c1:'#7FC96A',c2:'#E8FFD9',big:1},
  'もりの ようせい':{t:'fairy',c1:'#8FD48C'},
  'はりねずみ':{t:'furry',ear:'spike',c1:'#C9A882',c2:'#7A5A3A',snout:1},
  'あおむし':{t:'bug',kind:'caterpillar',c1:'#8FD44A'},
  /* まち */
  'パンやさん':{t:'human',skin:'#FFD9B8',hair:'#4A3526',accs:['chef']},
  'おまわりさん':{t:'human',skin:'#F2C89A',hair:'#2B2018',accs:['cap'],ac:'#3B5FA8'},
  'ねこ':{t:'furry',ear:'cat',c1:'#F6C26B',c2:'#FFF3D6',whisk:1},
  'はと':{t:'bird',c1:'#B8C4D8',c2:'#FFD22E'},
  'おはなやさん':{t:'human',skin:'#FFDCC0',hair:'#8B5E3C',accs:['flower']},
  'とけいやさん':{t:'human',skin:'#F0C9A0',hair:'#9A9A9A',accs:['glasses']},
  /* うちゅう */
  'うちゅうじん':{t:'alien',c1:'#8FE38C'},
  'つきの うさぎ':{t:'furry',ear:'long',c1:'#FFFFFF',c2:'#FFD6E3'},
  'ロボット':{t:'robot',c1:'#B8C4D8',c2:'#FF8FAB'},
  'うちゅうひこうし':{t:'human',skin:'#FFD9B8',hair:'#4A3526',accs:['helmet']},
  'ほしの こ':{t:'sea',kind:'star',c1:'#FFD22E'},
  'どせいの こ':{t:'planet',c1:'#CDB4F5'},
  /* おかしの くに */
  'クッキーの こ':{t:'sweet',kind:'cookie',c1:'#D9A15B'},
  'ケーキひめ':{t:'sweet',kind:'cake',c1:'#FFE3C2',c2:'#FFF8F0',accs:['crown']},
  'ドーナツの こ':{t:'sweet',kind:'donut',c1:'#D9A15B',c2:'#FF8FAB'},
  'プリンおうじ':{t:'sweet',kind:'pudding',c1:'#FFD86B',accs:['crown']},
  'あめの まじょ':{t:'human',skin:'#F6E0CC',hair:'#5B4A8A',accs:['witch']},
  'マシュマロの こ':{t:'sweet',kind:'marsh',c1:'#FFF8F5'},
  /* きょうりゅうの しま */
  'やさしい きょうりゅう':{t:'dino',c1:'#7FC96A',c2:'#FFF3D6'},
  'ちいさな きょうりゅう':{t:'dino',c1:'#F0A05A',c2:'#FFF0DC'},
  'そらとぶ きょうりゅう':{t:'bird',c1:'#C98ED9',c2:'#FFD22E',crest:1},
  'たまごの あかちゃん':{t:'egg'},
  'かめの はかせ':{t:'sea',kind:'turtle',c1:'#A8D48C',c2:'#6B5030',accs:['glasses']},
  /* ゆきの くに */
  'しろくま':{t:'furry',ear:'round',c1:'#FFFFFF',c2:'#E8F4FF',snout:1},
  'ペンギン':{t:'bird',bib:1,dark:1,c1:'#3B4A67',c2:'#FFB347'},
  'ゆきだるま':{t:'snowman'},
  'ゆきうさぎ':{t:'furry',ear:'long',c1:'#FFFFFF',c2:'#D9ECFF'},
  'トナカイ':{t:'furry',ear:'antler',c1:'#A9714B',c2:'#F0D9BE',snout:1,accs:['scarf']},
  'アザラシ':{t:'sea',c1:'#B8C4D8',c2:'#F0F6FF',whisk:1},
  /* おきゃくさん */
  'こいぬ':{t:'furry',ear:'round',c1:'#E8C07A',c2:'#FFF3E2',snout:1},
  'こねこ':{t:'furry',ear:'cat',c1:'#B8C4D8',c2:'#F0F6FF',whisk:1},
  'あひる':{t:'bird',c1:'#FFF3C2',c2:'#FF9F1C',flat:1},
  'てんとうむし':{t:'bug',kind:'ladybug',c1:'#E4572E'},
  'ようせい':{t:'fairy',c1:'#FF8FAB'},
  'こぐま':{t:'furry',ear:'round',c1:'#C99A6B',c2:'#FFEBD2',snout:1},
  /* みちで であう こ */
  'おだんごやさん':{t:'human',skin:'#FFD9B8',hair:'#2B2018',accs:['apron']},
  'かたつむり':{t:'bug',kind:'snail',c1:'#C9D48C',c2:'#D98E3C'},
  'レーサー チーター':{t:'furry',ear:'cat',c1:'#F0C24B',c2:'#FFF3D6',whisk:1,accs:['goggles']},
  'パトカー':{t:'car',c1:'#3B5FA8'},
  'はやい ツバメ':{t:'bird',c1:'#3B4A67',c2:'#E4572E',bib:1,dark:1},
  'えきの ねこ':{t:'furry',ear:'cat',c1:'#8B7355',c2:'#FFF3D6',whisk:1},
  'えきべんやさん':{t:'human',skin:'#F2C89A',hair:'#4A3526',accs:['apron']},
  'とっきゅうロボ':{t:'robot',c1:'#9BD4FF',c2:'#FFD22E'},
  'はとの しゃしょう':{t:'bird',c1:'#B8C4D8',c2:'#FFD22E',accs:['cap'],ac:'#2B3A67'},
  'うちゅうしょくやさん':{t:'human',skin:'#E8B98C',hair:'#2B2018',accs:['chef']},
  'まいごの ロボット':{t:'robot',c1:'#D9C7A8',c2:'#6FE3C8'},
  'うちゅうじんレーサー':{t:'alien',c1:'#9BD4FF',accs:['goggles']},
  'アイスやさん':{t:'sweet',kind:'icecream',c1:'#FFD6E3'},
  'チョコレーサー':{t:'sweet',kind:'choco',c1:'#8B5E3C',accs:['goggles']},
  'グミの うさぎ':{t:'furry',ear:'long',c1:'#FF8FAB',c2:'#FFE3EC'}
};

const TPL={furry,bird,sea,dino,human,mermaid,fairy,robot,alien,sweet,snowman,bug,planet,car,egg};

/* キャラクターの え（SVG文字列）*/
function charArt(name,size){
  const a=CHAR_ART[name];
  const inner=a?(TPL[a.t]||furry)(a):`<circle cx="50" cy="55" r="36" fill="#FFD86B" ${ln(3.4)}/>${eyes(38,62,50)}${smile(68)}`;
  return `<svg class="ca" viewBox="0 0 100 100" width="${size}" height="${size}" aria-hidden="true">${inner}</svg>`;
}

/* =========================================================
   はいけい（そら＝CSS、たいよう＝CSS、けしき＝SVG）
   たてながの スマホでも きちんと みえるように そうを わける
   ========================================================= */
function rsun(x,y,size,c1,c2,stripes){
  return `<div class="rsun${stripes?' st':''}" style="left:${x}%;top:${y}%;width:${size}vw;height:${size}vw;background:linear-gradient(180deg,${c1} 0%,${c2} 100%)"></div>`;
}
function moon(x,y,size,c){
  return `<div class="rsun" style="left:${x}%;top:${y}%;width:${size}vw;height:${size}vw;background:radial-gradient(circle at 35% 32%,#fff 0%,${c} 62%,${c} 100%)"></div>`;
}
function clouds(list){
  return list.map(c=>`<div class="cloud" style="left:${c[0]}%;top:${c[1]}%;width:${c[2]}vw"></div>`).join('');
}
function land(inner){ return `<svg class="land" viewBox="0 0 400 140" preserveAspectRatio="none">${inner}</svg>`; }
function grid(c){ return `<div class="rgrid" style="--gc:${c}"></div>`; }

function bgArt(id){
  switch(id){
    case 'umi': return `<div class="sky" style="background:linear-gradient(180deg,#6EC5F0 0%,#BFE9FF 42%,#FFD9A8 72%,#FFC49B 100%)"></div>
      ${rsun(62,26,34,'#FFF3B0','#FF7E5F',1)}${clouds([[8,12,22],[76,9,16]])}
      ${land(`<path d="M0 22 Q100 8 200 22 T400 22 L400 140 L0 140 Z" fill="#2E86AB"/>
        <path d="M0 44 Q60 32 120 44 T240 44 T400 44" stroke="#BFE9FF" stroke-width="4" fill="none" opacity=".75"/>
        <path d="M0 66 Q70 54 140 66 T280 66 T400 66" stroke="#BFE9FF" stroke-width="4" fill="none" opacity=".55"/>
        <path d="M0 88 Q80 76 160 88 T320 88 T400 88" stroke="#E8F7FF" stroke-width="4" fill="none" opacity=".5"/>
        <path d="M0 104 L400 104 L400 140 L0 140 Z" fill="#F2D9A8"/>
        <circle cx="44" cy="122" r="7" fill="#FFF3E2" stroke="#2B2018" stroke-width="2.5"/>
        <circle cx="330" cy="128" r="6" fill="#FFD6E3" stroke="#2B2018" stroke-width="2.5"/>`)}`;
    case 'yama': return `<div class="sky" style="background:linear-gradient(180deg,#7EC8F5 0%,#CFEFFF 45%,#FFF1CF 100%)"></div>
      ${rsun(12,14,26,'#FFF9D0','#FFB347',0)}${clouds([[58,10,26],[30,22,18],[84,18,14]])}
      ${land(`<path d="M-10 96 L70 22 L140 96 Z" fill="#6B8E6B"/><path d="M70 22 L96 54 L44 54 Z" fill="#F2F6FF"/>
        <path d="M110 100 L220 14 L330 100 Z" fill="#4F6E55"/><path d="M220 14 L252 52 L188 52 Z" fill="#F2F6FF"/>
        <path d="M270 100 L360 34 L430 100 Z" fill="#6B8E6B" opacity=".85"/>
        <rect y="96" width="400" height="44" fill="#8FBF6A"/>
        <path d="M0 112 L400 112" stroke="#3E5B3E" stroke-width="2" opacity=".3"/>
        <path d="M0 126 L400 126" stroke="#3E5B3E" stroke-width="2" opacity=".3"/>`)}`;
    case 'mori': return `<div class="sky" style="background:linear-gradient(180deg,#9FE0B8 0%,#DFF6D8 50%,#F6FFE8 100%)"></div>
      ${rsun(74,10,22,'#FFFBD0','#FFD86B',0)}
      ${land(`<rect y="60" width="400" height="80" fill="#8FBF6A"/>
        ${[24,86,152,214,282,348].map((x,i)=>`<g><rect x="${x-5}" y="${44-i%2*6}" width="10" height="${46+i%2*6}" fill="#6B4A2E"/>
          <circle cx="${x}" cy="${34-i%2*8}" r="${24-i%3*3}" fill="${i%2?'#4F8F4A':'#3E7A3E'}"/>
          <circle cx="${x-14}" cy="${46-i%2*6}" r="${15-i%3*2}" fill="${i%2?'#3E7A3E':'#4F8F4A'}"/>
          <circle cx="${x+14}" cy="${46-i%2*6}" r="${15-i%3*2}" fill="${i%2?'#5AA152':'#46853F'}"/></g>`).join('')}
        <rect y="112" width="400" height="28" fill="#7A5A3A"/>
        <circle cx="60" cy="126" r="6" fill="#E4572E" stroke="#2B2018" stroke-width="2.5"/>
        <circle cx="300" cy="122" r="5" fill="#FFF3E2" stroke="#2B2018" stroke-width="2.5"/>`)}`;
    case 'machi': return `<div class="sky night" style="background:linear-gradient(180deg,#160C33 0%,#3B1B57 55%,#7A3B7E 100%)"></div>
      <div class="stars"></div>${rsun(50,18,40,'#FFB3EE','#7A3B7E',1)}${grid('#FF6FD8')}
      ${land(`${[6,54,102,150,202,254,302,352].map((x,i)=>`<g><rect x="${x}" y="${44-((i*29)%34)}" width="${30+i%3*6}" height="${96+((i*29)%34)}" fill="#1B1236"/>
        ${[0,1,2,3].map(r=>[0,1].map(c=>`<rect x="${x+6+c*12}" y="${54-((i*29)%34)+r*16}" width="7" height="8" fill="${(i+r+c)%3?'#FFD86B':'#6FE3C8'}" opacity=".95"/>`).join('')).join('')}</g>`).join('')}
        <rect y="126" width="400" height="14" fill="#0E0824"/>`)}`;
    case 'uchu': return `<div class="sky night" style="background:radial-gradient(120% 90% at 30% 10%,#3A1E6E 0%,#0B0726 55%,#05051A 100%)"></div>
      <div class="stars"></div>${moon(70,12,26,'#CDB4F5')}${grid('#6FE3C8')}
      ${land(`<ellipse cx="90" cy="86" rx="62" ry="15" fill="none" stroke="#FFD86B" stroke-width="6"/>
        <circle cx="90" cy="84" r="30" fill="#FF9F1C"/>
        <circle cx="78" cy="74" r="6" fill="#D97706"/><circle cx="100" cy="94" r="5" fill="#D97706"/>
        <path d="M0 120 Q100 104 200 120 T400 116 L400 140 L0 140 Z" fill="#1B1236"/>`)}`;
    case 'okashi': return `<div class="sky" style="background:linear-gradient(180deg,#FFC8E4 0%,#FFE3F1 48%,#FFF4E2 100%)"></div>
      ${rsun(16,12,26,'#FFF9D0','#FF8FAB',0)}${clouds([[52,8,28],[80,20,18],[34,24,16]])}
      ${land(`<path d="M0 40 Q100 20 200 40 T400 40 L400 140 L0 140 Z" fill="#C98ED9"/>
        <path d="M0 72 Q100 52 200 72 T400 72 L400 140 L0 140 Z" fill="#8B5E3C"/>
        ${[28,88,148,208,268,328,380].map((x,i)=>`<circle cx="${x}" cy="${96+i%2*14}" r="9" fill="${i%2?'#FFD86B':'#6FE3C8'}" stroke="#2B2018" stroke-width="2.5"/>`).join('')}
        <path d="M0 120 L400 120" stroke="#6B4226" stroke-width="3" opacity=".5"/>`)}`;
    case 'kyoryu': return `<div class="sky" style="background:linear-gradient(180deg,#FF9E6B 0%,#FFC49B 45%,#FFE3C2 100%)"></div>
      ${rsun(30,14,32,'#FFF3B0','#FF6F5F',1)}
      ${land(`<path d="M150 96 L240 14 L330 96 Z" fill="#8B5E3C"/>
        <path d="M240 14 Q252 -2 266 12 Q252 18 240 14 Z" fill="#E8E0D0" opacity=".85"/>
        <path d="M0 70 Q80 54 160 70 T400 66 L400 140 L0 140 Z" fill="#4F7A4F"/>
        ${[26,74,300,358].map((x,i)=>`<g><rect x="${x-4}" y="${56-i%2*6}" width="8" height="50" fill="#6B4A2E"/>
          ${[0,1,2,3,4].map(k=>`<path d="M${x} ${54-i%2*6} Q${x+(k-2)*20} ${36-i%2*6} ${x+(k-2)*28} ${52-i%2*6}" stroke="#3E7A3E" stroke-width="7" fill="none" stroke-linecap="round"/>`).join('')}</g>`).join('')}
        <rect y="118" width="400" height="22" fill="#C9A882"/>`)}`;
    case 'yuki': return `<div class="sky night" style="background:linear-gradient(180deg,#07103A 0%,#123B5C 55%,#2A5F7A 100%)"></div>
      <div class="stars"></div><div class="aurora"></div>
      ${land(`<path d="M-10 100 L70 40 L150 100 Z" fill="#E8F4FF"/>
        <path d="M110 104 L220 24 L330 104 Z" fill="#F6FBFF"/>
        <path d="M270 104 L356 48 L430 104 Z" fill="#D9ECFF"/>
        <rect y="100" width="400" height="40" fill="#FFFFFF"/>
        ${[40,110,190,260,330].map((x,i)=>`<circle cx="${x}" cy="${118+i%2*8}" r="5" fill="#D9ECFF" stroke="#2B2018" stroke-width="2"/>`).join('')}`)}`;
    default: return `<div class="sky" style="background:linear-gradient(180deg,#7ED0F5 0%,#CFEFFF 40%,#FFF1CF 100%)"></div>
      ${rsun(66,16,32,'#FFF3B0','#FF9AE0',1)}${clouds([[12,10,24],[40,20,16],[86,12,18]])}${grid('#3E7A6E')}
      ${land(`<path d="M0 46 Q100 26 200 46 T400 42 L400 140 L0 140 Z" fill="#8FBF6A"/>
        <path d="M0 78 Q120 60 240 78 T400 74 L400 140 L0 140 Z" fill="#6FA85A"/>
        <circle cx="56" cy="112" r="7" fill="#FFD86B" stroke="#2B2018" stroke-width="2.5"/>
        <circle cx="330" cy="120" r="6" fill="#FF8FAB" stroke="#2B2018" stroke-width="2.5"/>`)}`;
  }
}

/* マップの はいけい（ばしょが どこに あるか わかる え）*/
function mapArt(){
  const blob=(x,y,rx,ry,f,o=1)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}" opacity="${o}"/>`;
  return `<svg class="mapbg" viewBox="0 0 100 100" preserveAspectRatio="none">
    <rect width="100" height="100" fill="#C6E8A8"/>
    <rect width="100" height="16" fill="#1B1240"/>
    <path d="M0 16 Q30 24 58 15 Q80 8 100 16 L100 0 L0 0 Z" fill="#1B1240"/>
    ${blob(60,52,20,13,'#CDB4F5',.85)}
    ${blob(56,20,20,12,'#EAF6FF')}
    ${blob(22,28,17,11,'#8FD48C')}
    <path d="M14 30 L22 20 L30 30 Z" fill="#6B8E6B"/>
    ${blob(30,57,17,11,'#FFC8E4')}
    ${blob(74,80,17,11,'#6BAF5A')}
    ${blob(70,79,7,5,'#4F8F4A')}${blob(79,81,6,4.5,'#4F8F4A')}
    ${blob(44,90,20,12,'#A8D48C')}
    <path d="M34 92 L44 76 L54 92 Z" fill="#8FA88C"/><path d="M44 76 L48 82 L40 82 Z" fill="#FFFFFF"/>
    ${blob(14,88,18,11,'#F2D9A8')}
    <path d="M0 94 Q26 86 52 95 Q76 100 100 94 L100 100 L0 100 Z" fill="#2E86AB"/>
    ${blob(10,93,12,5,'#7FB6E8')}
    <rect x="79" y="54" width="15" height="12" rx="3" fill="#3B2E5A"/>
    <rect x="82" y="50" width="4" height="6" rx="1" fill="#3B2E5A"/>
    <rect x="88" y="52" width="4" height="5" rx="1" fill="#3B2E5A"/>
  </svg>`;
}
