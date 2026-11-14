// Rotas por hash: #produto-ID, #admin e âncoras da home
function route(){const h=location.hash.slice(1),m=h.match(/^produto-(\d+)$/);
 document.body.classList.toggle("onp",!!m);$("#top").hidden=!!m||h=="admin";$("#pv").hidden=!m;$("#ad").hidden=h!="admin";
 if(m){const p=P.find(x=>x.id==m[1]);try{if(!p)throw 0;cur=p;sel={gb:p.st?p.st[0][0]:null,co:p.co[0],v:0};drawProd()}catch(e){$("#pv").innerHTML='<a class="bk" href="#top">Voltar à loja</a><p class="meta" style="margin-top:24px">Não conseguimos abrir este produto. Volte à loja e tente de novo.</p>'}scrollTo(0,0)}
 else if(h=="admin"){adm();scrollTo(0,0)}
 else{const e=h&&document.getElementById(h);e?e.scrollIntoView():scrollTo(0,0)}}
addEventListener("hashchange",route);
