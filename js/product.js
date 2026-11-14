// Página de detalhes do produto
let cur,sel;
function prod(id){location.hash="produto-"+id}
function price(){return cur.pr+(cur.st?cur.st.find(s=>s[0]==sel.gb)[1]:0)}
function drawProd(){const p=cur,pr=price(),s=stk(p.id),n=(p.img&&p.img.length)||3;
 const th=Array.from({length:n},(_,v)=>v).map(v=>`<button class="${sel.v==v?"on":""}" onclick="sel.v=${v};drawProd()" aria-label="Foto ${v+1}">${pic(p,COL[sel.co],v)}</button>`).join("");
 const stg=p.st?`<label>Armazenamento</label><div class="opt">${p.st.map(x=>`<button class="${sel.gb==x[0]?"on":""}" onclick="sel.gb=${x[0]};drawProd()">${x[0]>=1024?"1 TB":x[0]+" GB"}</button>`).join("")}</div>`:"";
 const cor=`<label>Cor: ${sel.co}</label><div class="opt">${p.co.map(c=>`<button class="sw ${sel.co==c?"on":""}" style="background:${COL[c]}" onclick="sel.co='${c}';drawProd()" aria-label="${c}"></button>`).join("")}</div>`;
 const semi=p.c=="semi"?`<div class="box"><b>Nota ${p.g}</b>, ${p.g=="A+"?"impecável":p.g=="A"?"excelente":"bom"}.<br>Saúde da bateria: <b>${p.b}%</b><div class="bat"><i style="width:${p.b}%"></i></div><br>Tela sem riscos, câmeras sem arranhões, Face ID, câmeras e botões testados. IMEI e iCloud liberados. Garantia de 12 meses. <a href="#" style="text-decoration:underline" onclick="gradeGuide();return false">Entenda as notas</a></div>`:"";
 const sp=(SPEC[p.id]||[]).map(([a,b])=>`<tr><td>${a}</td><td>${b}</td></tr>`).join("");
 const cat={iphone:["iphones","iPhones"],ipad:["ipads","iPads"],mac:["macs","Macs"],acc:["acessorios","Acessórios"]}[p.f];
 const rel=P.filter(x=>x.f==p.f&&x.id!=p.id).slice(0,3);
 const msg=encodeURIComponent(`Olá, ED Smartphones! Tenho interesse no ${p.n}${sel.gb?" "+sel.gb+" GB":""}, cor ${sel.co} (${R(pr)}). Ainda está disponível?`);
 const buy=s>0?`<button class="btn" onclick="add()">Adicionar ao carrinho</button><button class="btn g" onclick="add();openCart()">Comprar agora</button>`:`<b>Esgotado no momento.</b>`;
 $("#pv").innerHTML=`<div class="crumb"><a href="#top">Início</a> / <a href="#${cat[0]}">${cat[1]}</a> / ${p.n}</div><div class="pd"><div><div class="gal">${pic(p,COL[sel.co],sel.v)}</div><div class="th">${th}</div></div><div><span class="meta">${p.c=="novo"?"Novo, lacrado":p.c=="semi"?"Seminovo":"Acessório"}</span><h2 style="font-size:30px">${p.n}</h2><div class="stk ${s<3?"lo":"ok"}">${s<1?"Esgotado":s<3?"Últimas "+s+(s>1?" unidades":" unidade"):"Disponível para pronta entrega"}</div>${stg}${cor}${semi}
 <div style="margin:20px 0 4px"><div class="pr" style="font-size:30px;margin:0">${R(pr*.95)}<small>no Pix, 5% de desconto</small></div><p class="meta" style="margin-top:6px">${R(pr)} em até <b style="color:#fff">21x de ${R(pr*fat(21)/21)}</b> no cartão (juros de demonstração)</p></div>
 <details style="padding:10px 0"><summary style="font-size:15px">Ver opções de parcelamento</summary><p>${[1,3,6,12,21].map(k=>`${k}x de ${R(pr*fat(k)/k)}`).join(" · ")}</p></details>
 <div style="display:flex;gap:10px;margin-top:12px;flex-wrap:wrap">${buy}</div>
 <div style="display:flex;gap:10px;margin-top:10px;flex-wrap:wrap"><a class="btn g sm" target="_blank" rel="noopener" href="https://wa.me/${CONFIG.whats}?text=${msg}">Tirar dúvidas no WhatsApp</a><button class="btn g sm" onclick="shr()">Copiar link</button></div>
 <div class="pf"><div><b>${p.c=="semi"?"12 meses":p.c=="novo"?"1 ano":"Garantia"}</b>de garantia</div><div><b>7 dias</b>para desistir</div><div><b>Nota fiscal</b>e procedência</div></div>
 ${p.c=="novo"?`<div class="box">Lacrado, com nota fiscal e 1 ano de garantia Apple. Acompanha cabo USB-C.</div>`:""}
 ${sp?`<h3 style="margin-top:22px;font-size:18px">Especificações</h3><table class="sp">${sp}</table>`:""}
 <div class="box">Aceitamos seu aparelho Apple usado como parte do pagamento. <a href="#troca" style="text-decoration:underline">Simular troca</a></div></div></div>
 ${rel.length?`<h3 class="rel">Você também pode gostar</h3><div class="grid">${rel.map(card).join("")}</div>`:""}
 <div class="sb"><div><b style="font-size:20px">${R(pr*.95)}</b><br><small class="meta">no Pix</small></div>${s>0?`<button class="btn" onclick="add()">Adicionar ao carrinho</button>`:"<b>Esgotado</b>"}</div>`}
