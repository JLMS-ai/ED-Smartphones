// Carrinho, frete, checkout e envio do pedido ao WhatsApp
let cart=[],fr=null;
function add(){const k=cur.id+sel.gb+sel.co,f=cart.find(i=>i.k==k);if(cart.filter(i=>i.id==cur.id).reduce((a,i)=>a+i.q,0)>=stk(cur.id)){toast("Sem estoque disponível");return}f?f.q++:cart.push({k,id:cur.id,gb:sel.gb,co:sel.co,pr:price(),q:1});upd();toast("Adicionado ao carrinho")}
function qty(k,d){const i=cart.find(i=>i.k==k);if(d>0&&cart.filter(x=>x.id==i.id).reduce((a,x)=>a+x.q,0)>=stk(i.id)){toast("Sem estoque disponível");return}i.q+=d;if(i.q<1)cart=cart.filter(x=>x.k!=k);upd()}
function calc(){const c=$("#cep").value.replace(/\D/g,"");if(c.length!=8){toast("Digite um CEP com 8 números");return}
 fr={cep:c,v:Number(c[0])*4.5+14.9,d:2+Number(c[0])%5};upd()}
function openCart(){$("#dr").classList.add("o")}function closeCart(){$("#dr").classList.remove("o")}
function upd(){try{localStorage.setItem("ed:cart",JSON.stringify(cart))}catch(e){}$("#cc").textContent=cart.reduce((a,i)=>a+i.q,0);
 const sub=cart.reduce((a,i)=>a+i.pr*i.q,0),free=sub>=1500,fv=!fr?0:free?0:fr.v;
 $("#cl").innerHTML=cart.length?cart.map(i=>{const p=P.find(x=>x.id==i.id);return `<div class="it"><div><b>${p.n}</b><br><small>${i.gb?i.gb+" GB · ":""}${i.co}${p.g?" · Nota "+p.g:""}</small></div><b>${R(i.pr*i.q)}</b><div class="q"><button onclick="qty('${i.k}',-1)" aria-label="Menos">−</button><span>${i.q}</span><button onclick="qty('${i.k}',1)" aria-label="Mais">+</button></div></div>`}).join(""):`<p style="color:var(--mu);padding:30px 0">Seu carrinho está vazio. Escolha um iPhone para começar.</p>`;
 const cepv=$("#cep")?$("#cep").value:"";
 $("#cf").innerHTML=cart.length?`<div class="cep"><input id="cep" inputmode="numeric" maxlength="9" placeholder="Seu CEP" value="${cepv}" aria-label="CEP"><button onclick="calc()">Calcular frete</button></div>
 <div class="row"><span>Subtotal</span><span>${R(sub)}</span></div><div class="row"><span>Frete${fr?` (${fr.d} a ${fr.d+2} dias úteis)`:""}</span><span>${!fr?"informe o CEP":free?"Grátis":R(fv)}</span></div>
 <div class="row"><span>Pix (5% off)</span><b style="color:var(--ok)">${R(sub*.95+fv)}</b></div><div class="row t"><span>Total no cartão</span><span>${R(sub+fv)}</span></div><p class="meta" style="font-size:13px">até 21x de ${R((sub+fv)*1.06/21)} · frete grátis acima de R$ 1.500</p>
 <button class="btn" style="width:100%;margin-top:12px" onclick="finish()">Finalizar compra</button>`:"";}
function finish(){closeCart();checkout()}
function checkout(){dlg.innerHTML=`<button class="dx" onclick="dlg.close()" aria-label="Fechar">✕</button><div class="leg"><h3>Finalizar pedido</h3><label for="cn">Nome</label><input id="cn" autocomplete="name"><label for="ct">WhatsApp com DDD</label><input id="ct" inputmode="tel" autocomplete="tel"><label for="cb">Data de nascimento (para ganhar um mimo de aniversário)</label><input id="cb" type="date"><label for="cp">Pagamento</label><select id="cp"><option>Pix</option><option>Cartão de crédito</option><option>Dinheiro na entrega</option></select><p style="margin-top:16px"><button class="btn" onclick="place()">Confirmar pedido</button></p></div>`;dlg.showModal()}
function place(){const n=$("#cn").value.trim(),t=$("#ct").value.replace(/\D/g,"");if(!n||t.length<10){toast("Informe nome e WhatsApp");return}
 const sub=cart.reduce((a,i)=>a+i.pr*i.q,0),pay=$("#cp").value,fv=!fr||sub>=1500?0:fr.v;
 const o={id:Math.max(1000,...ORD.map(x=>x.id))+1,t:Date.now(),cl:t,nome:n,it:cart.map(i=>({id:i.id,n:P.find(p=>p.id==i.id).n,gb:i.gb,co:i.co,q:i.q,pr:i.pr})),tot:(pay=="Pix"?sub*.95:sub)+fv,pay,pago:false,st:"Pendente"};
 ORD.push(o);DB.set("ord",ORD);const b=$("#cb").value,c=CLI.find(x=>x.t==t);if(c){if(b)c.b=b}else CLI.push({t,n,b});DB.set("cli",CLI);
 cart.forEach(i=>STK[i.id]=Math.max(0,stk(i.id)-i.q));DB.set("stk",STK);cart=[];fr=null;upd();refresh();
 dlg.innerHTML=`<button class="dx" onclick="dlg.close()" aria-label="Fechar">✕</button><div class="leg"><h3>Pedido #${o.id} recebido</h3><p>Demonstração: nenhuma cobrança foi feita. O pedido já aparece na Área do dono.</p><p><a class="btn" target="_blank" rel="noopener" href="${waOrder(o)}">Enviar pedido no WhatsApp</a> <a class="btn g" href="#admin" onclick="dlg.close()">Área do dono</a></p></div>`}
function waOrder(o){return "https://wa.me/"+CONFIG.whats+"?text="+encodeURIComponent(`Olá, ED Smartphones! Fiz o pedido #${o.id} pelo site:\n${o.it.map(i=>`• ${i.q}x ${i.n}${i.gb?" "+i.gb+"GB":""} (${i.co})`).join("\n")}\nTotal: ${R(o.tot)} (${o.pay})\nNome: ${o.nome}`)}
