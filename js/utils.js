// Utilitários: seletor, moeda, parcelas, toast, diálogo
const $=s=>document.querySelector(s),R=v=>v.toLocaleString("pt-BR",{style:"currency",currency:"BRL"});
const parc=v=>`ou 21x de ${R(v*1.06/21)}`;
const fat=k=>k==1?1:1+.0029*k;
function shr(){try{navigator.clipboard.writeText(location.href);toast("Link copiado")}catch(e){toast("Copie o endereço do navegador")}}
function toast(t){const e=$("#ts");e.textContent=t;e.classList.add("o");setTimeout(()=>e.classList.remove("o"),1600)}
const dlg=$("#dlg");dlg.addEventListener("click",e=>{if(e.target==dlg)dlg.close()});
