// Assistência técnica: tabelas de referência (telas e bateria) e pedido de orçamento no WhatsApp
const SVC={tela:{n:"Troca de tela",d:[["iPhone 6",200],["iPhone 6 Plus",230],["iPhone 6s",230],["iPhone 7",260],["iPhone 7 Plus",260],["iPhone 8",290],["iPhone 8 Plus",320],["iPhone X",480],["iPhone XR",490],["iPhone XS",500],["iPhone XS Max",590],["iPhone 11",550],["iPhone 11 Pro",600],["iPhone 11 Pro Max",700],["iPhone 12",900],["iPhone 12 Pro",1000],["iPhone 12 Pro Max",1200],["iPhone 13",1200],["iPhone 13 Pro",1300],["iPhone 13 Pro Max",1400]]},
bateria:{n:"Troca de bateria",d:[["iPhone 6",100],["iPhone 6 Plus",110],["iPhone 6s",120],["iPhone 6s Plus",135],["iPhone 7",140],["iPhone 7 Plus",150],["iPhone 8",160],["iPhone 8 Plus",170],["iPhone X",220],["iPhone XR",230],["iPhone XS",240],["iPhone XS Max",245],["iPhone 11",270],["iPhone 11 Pro",310],["iPhone 11 Pro Max",340],["iPhone 12",350],["iPhone 12 Pro",375],["iPhone 12 Pro Max",400]]}};
let svT="tela",svI=0;
function svDraw(){const t=SVC[svT],i=Math.min(svI,t.d.length-1),[m,v]=t.d[i];
 $("#svt").innerHTML=Object.entries(SVC).map(([k,x])=>`<button class="${k==svT?"on":""}" onclick="svT='${k}';svI=0;svDraw()">${x.n}</button>`).join("");
 $("#sm").innerHTML=t.d.map((x,k)=>`<option value="${k}" ${k==i?"selected":""}>${x[0]}</option>`).join("");
 $("#sq").innerHTML=`<small>${t.n}, a partir de</small><b>${R(v)}</b>`;
 $("#sw").href=`https://wa.me/${CONFIG.whats}?text=`+encodeURIComponent(`Olá, ED Smartphones! Quero um orçamento: ${t.n.toLowerCase()} do ${m} (tabela de referência ${R(v)}).`);
 $("#tbl").innerHTML=t.d.map(([a,b])=>`<div><span>${a}</span><b>${R(b)}</b></div>`).join("")}
