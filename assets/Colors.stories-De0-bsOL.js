const W={neutral:["#EDF0FC","#D3DCEB","#BAC4D8","#A0ACC4","#8B98B3","#7786A4","#687792","#56637A","#465064","#323B4C"],gray:["#FAFAFA","#F6F6F6","#F0F0F0","#E2E2E2","#C0C0C0","#A1A1A1","#787878","#636363","#444444","#232323"],"brand/primary":["#E3F2FF","#BCDEFF","#90C9FF","#63B4FF","#42A4FF","#2594FE","#2786EF","#2574DB","#2462C9","#2243A8"],green:["#E8F5EA","#C8E7CA","#A6D8A9","#82CA87","#66BE6D","#4CB253","#43A34A","#38913F","#2E8035","#1B6122"],yellow:["#FFF9E0","#FFEEB1","#FFE47D","#FFDB44","#FFD100","#FFC800","#FFB900","#FFA500","#FF9300","#FF7200"],red:["#FBE9E7","#FFCBBC","#FFAA90","#FF8964","#FF6E42","#FF5421","#F44E1D","#E64718","#D84014","#BF330A"],"brand/secondary":["#E5E9EF","#BDC7D9","#93A3C0","#6A7FA6","#4B6595","#274C86","#21457E","#173C72","#103366","#07224F"],orange:["#FFF3DF","#FFDFAF","#FFCA7B","#FFB444","#FFA413","#FF9400","#FB8800","#F57700","#EF6700","#E74A00"]},C=[50,100,200,300,400,500,600,700,800,900],I=[];for(const[e,r]of Object.entries(W))r.forEach((a,t)=>I.push({name:`${e}/${C[t]}`,value:a,scopes:[],description:`${e.replace("/"," ")} foundation color at step ${C[t]}. Use through semantic, interaction, or component aliases.`}));I.push({name:"base/white",value:"#FFFFFF",scopes:[],description:"Base white foundation color for surfaces and inverse foreground content."},{name:"alpha/white/40",value:"rgba(255, 255, 255, 0.4)",displayValue:"#FFFFFF / 40%",scopes:[],description:"White with 40% alpha for glass surfaces and translucent overlays."},{name:"alpha/blue/08",value:"rgba(37, 116, 219, 0.08)",displayValue:"#2574DB / 8%",scopes:[],description:"Primary blue with 8% alpha for subtle interactive glass backgrounds."},{name:"alpha/blue/12",value:"rgba(37, 116, 219, 0.12)",displayValue:"#2574DB / 12%",scopes:[],description:"Primary blue with 12% alpha for selected backgrounds."},{name:"alpha/blue/20",value:"rgba(37, 116, 219, 0.2)",displayValue:"#2574DB / 20%",scopes:[],description:"Primary blue with 20% alpha for strong selected backgrounds."});const z=[["background/canvas","neutral/50",["FRAME_FILL","SHAPE_FILL"],"Primary application canvas background."],["background/surface","base/white",["FRAME_FILL","SHAPE_FILL"],"Default surface background for cards, panels, and containers."],["background/subtle","brand/primary/50",["FRAME_FILL","SHAPE_FILL"],"Subtle accent background for low-emphasis highlighted content."],["background/muted","gray/100",["FRAME_FILL","SHAPE_FILL"],"Muted neutral background for secondary regions."],["background/brand-subtle","neutral/50",["FRAME_FILL","SHAPE_FILL"],"Subtle branded background for broad interface regions."],["background/selected","alpha/blue/12",["FRAME_FILL","SHAPE_FILL"],"Background for selected elements with standard emphasis."],["background/selected-strong","alpha/blue/20",["FRAME_FILL","SHAPE_FILL"],"Background for selected elements requiring stronger emphasis."],["background/glass","alpha/white/40",["FRAME_FILL","SHAPE_FILL"],"Translucent white background for glass surfaces."],["Text & Icons/primary","neutral/900",["SHAPE_FILL","TEXT_FILL"],"Primary text and icon color for high-emphasis content."],["Text & Icons/secondary","neutral/600",["SHAPE_FILL","TEXT_FILL"],"Secondary text and icon color for supporting content."],["Text & Icons/inverse","base/white",["SHAPE_FILL","TEXT_FILL"],"Text and icon color displayed on dark or saturated backgrounds."],["Text & Icons/disabled","neutral/600",["SHAPE_FILL","TEXT_FILL"],"Text and icon color for disabled interface elements."],["Text & Icons/link/default","brand/primary/800",["SHAPE_FILL","TEXT_FILL"],"Default foreground color for text links."],["Text & Icons/link/hover","brand/primary/500",["SHAPE_FILL","TEXT_FILL"],"Foreground color for text links on hover."],["Text & Icons/link/pressed","brand/secondary/800",["SHAPE_FILL","TEXT_FILL"],"Foreground color for pressed text links."],["Text & Icons/info","brand/primary/800",["SHAPE_FILL","TEXT_FILL"],"Foreground color for informational content."],["Text & Icons/success","green/800",["SHAPE_FILL","TEXT_FILL"],"Foreground color for successful content."],["Text & Icons/warning","yellow/900",["SHAPE_FILL","TEXT_FILL"],"Foreground color for warning content."],["Text & Icons/danger","red/800",["SHAPE_FILL","TEXT_FILL"],"Foreground color for dangerous or error content."],["border/default","neutral/400",["STROKE_COLOR"],"Default border for controls and containers."],["border/hover","brand/primary/500",["STROKE_COLOR"],"Border color for interactive elements on hover."],["border/focus","brand/primary/500",["STROKE_COLOR"],"Border and focus indicator color for keyboard focus."],["border/selected","brand/primary/700",["STROKE_COLOR"],"Border color for selected elements."],["border/disabled","neutral/200",["STROKE_COLOR"],"Border color for disabled elements."],["border/danger","red/800",["STROKE_COLOR"],"Border color for dangerous or invalid elements."],["status/info/background","brand/primary/700",["FRAME_FILL","SHAPE_FILL"],"Filled background color for informational statuses and badges."],["status/info/foreground","base/white",["SHAPE_FILL","TEXT_FILL"],"Text and icon color displayed on filled informational status backgrounds."],["status/info/border","brand/primary/700",["STROKE_COLOR"],"Border color for informational status elements when a border is used."],["status/success/background","green/800",["FRAME_FILL","SHAPE_FILL"],"Filled background color for successful statuses and badges."],["status/success/foreground","base/white",["SHAPE_FILL","TEXT_FILL"],"Text and icon color displayed on filled success status backgrounds."],["status/success/border","green/800",["STROKE_COLOR"],"Border color for success status elements when a border is used."],["status/warning/background","yellow/400",["FRAME_FILL","SHAPE_FILL"],"Filled background color for warning statuses and badges."],["status/warning/foreground","neutral/900",["SHAPE_FILL","TEXT_FILL"],"Text and icon color displayed on filled warning status backgrounds."],["status/warning/border","yellow/400",["STROKE_COLOR"],"Border color for warning status elements when a border is used."],["status/danger/background","red/800",["FRAME_FILL","SHAPE_FILL"],"Filled background color for dangerous, critical, or error statuses and badges."],["status/danger/foreground","base/white",["SHAPE_FILL","TEXT_FILL"],"Text and icon color displayed on filled danger status backgrounds."],["status/danger/border","red/800",["STROKE_COLOR"],"Border color for danger status elements when a border is used."]],J=[["primary/background/default","brand/primary/700",["FRAME_FILL","SHAPE_FILL","STROKE_COLOR"],"Default background color for primary interactive elements."],["primary/background/hover","brand/primary/500",["FRAME_FILL","SHAPE_FILL","STROKE_COLOR"],"Background color for primary interactive elements on hover."],["primary/background/pressed","brand/secondary/800",["FRAME_FILL","SHAPE_FILL","STROKE_COLOR"],"Background color for primary interactive elements while pressed or activated."],["primary/background/focus","brand/primary/500",["FRAME_FILL","SHAPE_FILL","STROKE_COLOR"],"Background color for primary interactive elements in the focused state."],["primary/background/disabled","neutral/200",["FRAME_FILL","SHAPE_FILL","STROKE_COLOR"],"Background color for disabled primary interactive elements."],["primary/foreground/default","base/white",["SHAPE_FILL","TEXT_FILL"],"Text, icon, and selection indicator color on primary interactive backgrounds."],["primary/foreground/disabled","neutral/600",["SHAPE_FILL","TEXT_FILL"],"Text, icon, and selection indicator color for disabled primary interactive elements."]],G=e=>e.map(([r,a,t,s])=>({name:r,alias:a,scopes:t,description:s})),Y=G(z),Z=G(J),U=[],o=(e,r,a)=>U.push({name:e,alias:r,scopes:a,description:`Color for the ${e.replaceAll("/"," ")} role.`}),c=["FRAME_FILL","SHAPE_FILL"],p=["SHAPE_FILL","TEXT_FILL"],n=["STROKE_COLOR"],g=["default","hover","pressed","focus","disabled","loading"],ee={default:"primary/background/default",hover:"primary/background/hover",pressed:"primary/background/pressed",focus:"primary/background/focus",disabled:"primary/background/disabled",loading:"primary/background/default"};g.forEach(e=>o(`button/primary/background/${e}`,ee[e],c));["default","hover","pressed","focus"].forEach(e=>o(`button/primary/foreground/${e}`,"primary/foreground/default",p));o("button/primary/foreground/disabled","primary/foreground/disabled",p);o("button/primary/loader/track","primary/foreground/default",n);o("button/primary/loader/indicator","primary/foreground/default",n);const re={default:"background/surface",hover:"background/surface",pressed:"background/surface",focus:"background/surface",disabled:"gray/50",loading:"background/surface"};g.forEach(e=>o(`button/secondary/background/${e}`,re[e],c));const oe={default:"Text & Icons/primary",hover:"brand/primary/700",pressed:"brand/secondary/800",focus:"brand/primary/700",disabled:"Text & Icons/disabled"};Object.entries(oe).forEach(([e,r])=>o(`button/secondary/foreground/${e}`,r,p));const ae={default:"border/default",hover:"border/hover",pressed:"brand/secondary/800",focus:"border/focus",disabled:"gray/300",loading:"border/default"};g.forEach(e=>o(`button/secondary/border/${e}`,ae[e],n));o("button/secondary/loader/track","Text & Icons/secondary",n);o("button/secondary/loader/indicator","neutral/400",n);const se={default:"red/800",hover:"red/500",pressed:"red/900",focus:"red/500",disabled:"brand/secondary/50",loading:"red/800"};g.forEach(e=>o(`button/danger/background/${e}`,se[e],c));["default","hover","pressed","focus"].forEach(e=>o(`button/danger/foreground/${e}`,"Text & Icons/inverse",p));o("button/danger/foreground/disabled","Text & Icons/disabled",p);o("button/danger/loader/track","Text & Icons/inverse",n);o("button/danger/loader/indicator","Text & Icons/inverse",n);const ne={default:"yellow/300",hover:"yellow/200",pressed:"yellow/500",focus:"yellow/200",disabled:"brand/secondary/50",loading:"yellow/300"};g.forEach(e=>o(`button/warning/background/${e}`,ne[e],c));["default","hover","pressed","focus"].forEach(e=>o(`button/warning/foreground/${e}`,"Text & Icons/primary",p));o("button/warning/foreground/disabled","Text & Icons/disabled",p);o("button/warning/loader/track","yellow/600",n);o("button/warning/loader/indicator","yellow/800",n);o("button/focus-ring","border/focus",n);const te={default:"background/glass",hover:"alpha/blue/08",pressed:"background/glass",focus:"alpha/blue/08",disabled:"background/glass",loading:"background/glass"};Object.entries(te).forEach(([e,r])=>o(`button-glass/secondary/background/${e}`,r,c));const ce={default:"Text & Icons/primary",hover:"brand/primary/700",pressed:"brand/secondary/800",focus:"brand/primary/700",disabled:"Text & Icons/secondary"};Object.entries(ce).forEach(([e,r])=>o(`button-glass/secondary/foreground/${e}`,r,p));o("button-glass/secondary/loader/track","Text & Icons/secondary",n);o("button-glass/secondary/loader/indicator","neutral/500",n);o("button-glass/focus-ring","border/focus",n);const T={default:"primary/background/default",hover:"primary/background/hover",focus:"primary/background/focus",disabled:"primary/background/disabled"};Object.entries(T).forEach(([e,r])=>o(`checkbox/background/selected/${e}`,r,c));["default","hover","focus"].forEach(e=>o(`checkbox/indicator/${e}`,"primary/foreground/default",c));o("checkbox/indicator/disabled","primary/foreground/disabled",c);const N={default:"border/default",hover:"border/hover",focus:"border/focus",disabled:"border/disabled"};Object.entries(N).forEach(([e,r])=>o(`checkbox/border/unselected/${e}`,r,n));o("checkbox/focus-ring","border/focus",n);Object.entries(T).forEach(([e,r])=>{o(`radio/indicator/selected/${e}`,r,c),o(`radio/border/selected/${e}`,r,n)});Object.entries(N).forEach(([e,r])=>o(`radio/border/unselected/${e}`,r,n));o("radio/focus-ring","border/focus",n);Object.entries(T).forEach(([e,r])=>o(`switch/track/on/${e}`,r,c));const de={default:"neutral/500",hover:"brand/secondary/800",focus:"neutral/500",disabled:"border/default"};Object.entries(de).forEach(([e,r])=>o(`switch/track/off/${e}`,r,n));["default","hover","focus"].forEach(e=>o(`switch/thumb/on/${e}`,"primary/foreground/default",c));o("switch/thumb/on/disabled","primary/foreground/disabled",c);["default","hover","focus","disabled"].forEach(e=>o(`switch/thumb/off/${e}`,"neutral/500",c));o("switch/focus-ring","border/focus",n);const m=[{id:"primitive",name:"Primitive Colors",eyebrow:"Layer 01 · Foundations",description:"Raw color values. Hidden from property pickers and consumed through higher-level aliases.",tokens:I},{id:"semantic",name:"Semantic Colors",eyebrow:"Layer 02 · Meaning",description:"Interface-wide roles for surfaces, content, borders, and statuses.",tokens:Y},{id:"interaction",name:"Interaction Colors",eyebrow:"Layer 03 · Behavior",description:"Shared visual behavior for primary interactive states across controls.",tokens:Z},{id:"component",name:"Component Colors",eyebrow:"Layer 04 · Implementation",description:"Component-specific contracts for Button, Button Glass, Checkbox, Radio, and Switch.",tokens:U}],ie=Object.fromEntries(m.map(e=>[e.id,Object.fromEntries(e.tokens.map(r=>[r.name,r]))])),le=["component","interaction","semantic","primitive"];function ue(e){if(e.value)return{cssValue:e.value,displayValue:e.displayValue||e.value,path:[e.name]};const r=new Set,a=[e.name];let t=e.alias;for(;t&&!r.has(t);){r.add(t),a.push(t);const s=le.map(l=>ie[l][t]).find(Boolean);if(!s)break;if(s.value)return{cssValue:s.value,displayValue:s.displayValue||s.value,path:a};t=s.alias}return{cssValue:"transparent",displayValue:"Unresolved",path:a}}function pe(e){return e.tokens.reduce((r,a)=>{const t=a.name.split("/"),s=e.id==="component"?2:1,l=t.slice(0,s).join(" / ");return(r[l]||(r[l]=[])).push(a),r},{})}const u=e=>String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;");function be(e){return e.length?e.map(r=>`<span class="scope">${u(r)}</span>`).join(""):'<span class="scope scope--hidden">Hidden · no direct scope</span>'}function fe(e){const r=ue(e),a=e.alias?`<div class="alias"><span>Aliases</span><code>${u(e.alias)}</code></div>`:'<div class="alias alias--raw"><span>Source</span><code>Raw value</code></div>';return`
    <article
      class="token-row"
      data-search="${u(`${e.name} ${e.description} ${e.scopes.join(" ")} ${e.alias||""}`.toLowerCase())}"
      data-scopes="${u(e.scopes.join(" "))}"
    >
      <div class="token-identity">
        <div class="swatch" style="--swatch:${r.cssValue}">
          <span></span>
        </div>
        <div>
          <code class="token-name">${u(e.name)}</code>
          <p>${u(e.description)}</p>
        </div>
      </div>
      ${a}
      <div class="value">
        <span>Resolved value</span>
        <code>${u(r.displayValue)}</code>
      </div>
      <div class="scopes">
        <span>Scope</span>
        <div>${be(e.scopes)}</div>
      </div>
    </article>
  `}function me(e){const r=pe(e);return`
    <section class="layer" id="${e.id}">
      <header class="layer-header">
        <div>
          <p class="eyebrow">${e.eyebrow}</p>
          <h2>${e.name}</h2>
          <p class="layer-description">${e.description}</p>
        </div>
        <div class="token-count">${e.tokens.length}<span>tokens</span></div>
      </header>
      <div class="layer-groups">
        ${Object.entries(r).map(([a,t],s)=>`
          <details class="token-group" ${s<4?"open":""}>
            <summary>
              <span>${u(a)}</span>
              <span>${t.length}</span>
            </summary>
            <div class="token-list">
              ${t.map(fe).join("")}
            </div>
          </details>
        `).join("")}
      </div>
    </section>
  `}function ge(e){return m.map((r,a)=>`
    <a class="architecture-card ${e.includes(r.id)?"":"is-muted"}" href="#${r.id}">
      <span>0${a+1}</span>
      <strong>${r.name.replace(" Colors","")}</strong>
      <small>${r.tokens.length} tokens</small>
    </a>
    ${a<m.length-1?'<span class="architecture-arrow">→</span>':""}
  `).join("")}function F(e="all"){const r=e==="all"?m.map(i=>i.id):[e],a=m.filter(i=>r.includes(i.id)),t=a.reduce((i,b)=>i+b.tokens.length,0),s=document.createElement("main");s.className="color-library",s.innerHTML=`
    <header class="hero">
      <div class="hero-copy">
        <p class="eyebrow">weDAT Design System 2.0 Glass</p>
        <h1>Color token architecture</h1>
        <p>Trace every color from raw foundation values to semantic meaning, shared interaction behavior, and component implementation.</p>
      </div>
      <div class="hero-stat">
        <strong>${t}</strong>
        <span>documented colors</span>
      </div>
    </header>

    <nav class="architecture" aria-label="Color token layers">
      ${ge(r)}
    </nav>

    <section class="toolbar">
      <label class="search">
        <span>Search tokens, aliases, descriptions, or scopes</span>
        <input type="search" placeholder="Try “disabled”, “STROKE_COLOR”, or “button/primary”…" />
      </label>
      <label class="scope-filter">
        <span>Scope</span>
        <select>
          <option value="">All scopes</option>
          <option value="FRAME_FILL">Frame fill</option>
          <option value="SHAPE_FILL">Shape fill</option>
          <option value="TEXT_FILL">Text fill</option>
          <option value="STROKE_COLOR">Stroke color</option>
          <option value="hidden">Hidden primitives</option>
        </select>
      </label>
    </section>

    <div class="results-summary" aria-live="polite">${t} tokens shown</div>
    ${a.map(me).join("")}
  `;const l=s.querySelector("input"),_=s.querySelector("select"),Q=s.querySelector(".results-summary"),S=()=>{const i=l.value.trim().toLowerCase(),b=_.value;let k=0;s.querySelectorAll(".token-row").forEach(d=>{const f=!i||d.dataset.search.includes(i),A=!b||(b==="hidden"?d.dataset.scopes==="":d.dataset.scopes.includes(b));d.hidden=!(f&&A),d.hidden||(k+=1)}),s.querySelectorAll(".token-group").forEach(d=>{const f=[...d.querySelectorAll(".token-row")].some(A=>!A.hidden);d.hidden=!f,(i||b)&&f&&(d.open=!0)}),s.querySelectorAll(".layer").forEach(d=>{d.hidden=![...d.querySelectorAll(".token-row")].some(f=>!f.hidden)}),Q.textContent=`${k} ${k===1?"token":"tokens"} shown`};return l.addEventListener("input",S),_.addEventListener("change",S),s}const Fe={title:"Foundations/Colors"},L={name:"All layers",render:()=>F("all")},h={name:"01 · Primitive Colors",render:()=>F("primitive")},y={name:"02 · Semantic Colors",render:()=>F("semantic")},E={name:"03 · Interaction Colors",render:()=>F("interaction")},v={name:"04 · Component Colors",render:()=>F("component")};var w,O,$;L.parameters={...L.parameters,docs:{...(w=L.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: "All layers",
  render: () => createColorLibrary("all")
}`,...($=(O=L.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var R,B,x;h.parameters={...h.parameters,docs:{...(R=h.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: "01 · Primitive Colors",
  render: () => createColorLibrary("primitive")
}`,...(x=(B=h.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var P,H,D;y.parameters={...y.parameters,docs:{...(P=y.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: "02 · Semantic Colors",
  render: () => createColorLibrary("semantic")
}`,...(D=(H=y.parameters)==null?void 0:H.docs)==null?void 0:D.source}}};var M,j,X;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  name: "03 · Interaction Colors",
  render: () => createColorLibrary("interaction")
}`,...(X=(j=E.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var K,V,q;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
  name: "04 · Component Colors",
  render: () => createColorLibrary("component")
}`,...(q=(V=v.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const Le=["AllLayers","PrimitiveColors","SemanticColors","InteractionColors","ComponentColors"];export{L as AllLayers,v as ComponentColors,E as InteractionColors,h as PrimitiveColors,y as SemanticColors,Le as __namedExportsOrder,Fe as default};
