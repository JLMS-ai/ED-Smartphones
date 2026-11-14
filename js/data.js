// Dados: cores, produtos (família f: iphone, ipad, mac, acc) e especificações. Preços de demonstração.
const COL={"Titânio natural":"#bfb8ad","Titânio preto":"#2b2c2e","Titânio branco":"#e4e4e1","Preto":"#232427","Rosa":"#f1c9cf","Azul":"#a9c3dc","Branco":"#ecebe8","Meia-noite":"#1f2630","Estelar":"#e3dcd2","Grafite":"#4a4b4f","Laranja":"#e07b3a","Cinza-espacial":"#6b6d72","Prateado":"#d9dadc","Amarelo":"#f2d98a"};
const P=[
{id:1,f:"iphone",n:"iPhone 17 Pro Max",c:"novo",top:1,pr:9999,st:[[256,0],[512,1800],[1024,3600]],co:["Titânio natural","Titânio preto","Laranja"],tag:"Lançamento"},
{id:2,f:"iphone",n:"iPhone 16 Pro Max",c:"novo",top:1,pr:8299,st:[[256,0],[512,1500]],co:["Titânio natural","Titânio preto","Titânio branco"]},
{id:3,f:"iphone",n:"iPhone 15",c:"novo",pr:4899,st:[[128,0],[256,700],[512,1700]],co:["Rosa","Azul","Preto"],tag:"Oferta"},
{id:4,f:"iphone",n:"iPhone 15 Pro Max",c:"semi",top:1,pr:5899,st:[[256,0],[512,1000]],co:["Titânio natural","Titânio preto"],g:"A+",b:94},
{id:5,f:"iphone",n:"iPhone 14 Pro",c:"semi",pr:4199,st:[[128,0],[256,450]],co:["Preto","Branco"],g:"A",b:91},
{id:6,f:"iphone",n:"iPhone 14",c:"semi",pr:3199,st:[[128,0],[256,400]],co:["Meia-noite","Estelar","Azul"],g:"A",b:89},
{id:7,f:"iphone",n:"iPhone 13",c:"semi",pr:2499,st:[[128,0],[256,350]],co:["Meia-noite","Estelar","Rosa"],g:"B",b:85},
{id:8,f:"ipad",n:"iPad 10ª geração",c:"novo",top:1,pr:3499,st:[[64,0],[256,1100]],co:["Prateado","Azul","Rosa","Amarelo"]},
{id:9,f:"ipad",n:"iPad Air 11 M2",c:"novo",pr:6299,st:[[128,0],[256,800],[512,2000]],co:["Cinza-espacial","Azul","Estelar"]},
{id:10,f:"ipad",n:"iPad 9ª geração",c:"semi",pr:2299,st:[[64,0],[256,700]],co:["Cinza-espacial","Prateado"],g:"A",b:90},
{id:11,f:"mac",n:"MacBook Air 13 M2",c:"novo",top:1,pr:8499,st:[[256,0],[512,1200]],co:["Meia-noite","Estelar","Cinza-espacial"]},
{id:12,f:"mac",n:"MacBook Air 13 M1",c:"semi",pr:5299,st:[[256,0],[512,900]],co:["Cinza-espacial","Prateado"],g:"A",b:88},
{id:13,f:"mac",n:"MacBook Pro 14 M3",c:"semi",pr:12499,st:[[512,0],[1024,2200]],co:["Cinza-espacial","Prateado"],g:"A+",b:96},
{id:14,f:"mac",n:"iMac 24 M1",c:"semi",pr:7499,st:[[256,0],[512,1100]],co:["Azul","Prateado"],g:"A",b:100},
{id:15,f:"acc",n:"Capa de silicone MagSafe",c:"acc",pr:149,co:["Preto","Rosa","Azul"],d:"Compatível com a linha 15 e 16"},
{id:16,f:"acc",n:"Película 3D de vidro",c:"acc",pr:59,co:["Preto"],d:"Instalação grátis na loja"},
{id:17,f:"acc",n:"Carregador 20W USB-C",c:"acc",pr:129,co:["Branco"],d:"Carga rápida"},
{id:18,f:"acc",n:"AirPods Pro 2",c:"acc",pr:1799,co:["Branco"],d:"Lacrado, garantia Apple"},
{id:19,f:"acc",n:"Cabo USB-C trançado 1m",c:"acc",pr:89,co:["Preto","Branco"],d:"Resistente, 60W"},
{id:20,f:"acc",n:"Apple Watch Series 9",c:"acc",pr:3299,co:["Meia-noite","Estelar"],d:"GPS, 41 mm"}];
const SPEC={1:[["Tela","6,9 pol. Super Retina XDR"],["Chip","A19 Pro"],["Câmeras","Tripla de 48 MP"],["Acabamento","Titânio"]],2:[["Tela","6,9 pol. Super Retina XDR"],["Chip","A18 Pro"],["Câmeras","Tripla de 48 MP"],["Acabamento","Titânio"]],3:[["Tela","6,1 pol. Super Retina XDR"],["Chip","A16 Bionic"],["Câmeras","Dupla de 48 MP"],["Conector","USB-C"]],4:[["Tela","6,7 pol. Super Retina XDR"],["Chip","A17 Pro"],["Câmeras","Tripla de 48 MP"],["Acabamento","Titânio"]],5:[["Tela","6,1 pol. Super Retina XDR"],["Chip","A16 Bionic"],["Câmeras","Tripla de 48 MP"],["Tela","ProMotion 120 Hz"]],6:[["Tela","6,1 pol. Super Retina XDR"],["Chip","A15 Bionic"],["Câmeras","Dupla de 12 MP"],["Biometria","Face ID"]],7:[["Tela","6,1 pol. Super Retina XDR"],["Chip","A15 Bionic"],["Câmeras","Dupla de 12 MP"],["Biometria","Face ID"]],
8:[["Tela","10,9 pol. Liquid Retina"],["Chip","A14 Bionic"],["Câmera","12 MP"],["Conector","USB-C"]],9:[["Tela","11 pol. Liquid Retina"],["Chip","M2"],["Câmera","12 MP"],["Acessórios","Compatível com Apple Pencil"]],10:[["Tela","10,2 pol. Retina"],["Chip","A13 Bionic"],["Câmera","8 MP"],["Conector","Lightning"]],
11:[["Tela","13,6 pol. Liquid Retina"],["Chip","M2"],["Memória","8 GB"],["Portas","2x Thunderbolt, MagSafe"]],12:[["Tela","13,3 pol. Retina"],["Chip","M1"],["Memória","8 GB"],["Portas","2x Thunderbolt"]],13:[["Tela","14,2 pol. Liquid Retina XDR"],["Chip","M3"],["Memória","18 GB"],["Portas","3x Thunderbolt, HDMI, SD"]],14:[["Tela","23,5 pol. 4,5K Retina"],["Chip","M1"],["Memória","8 GB"],["Câmera","FaceTime HD 1080p"]]};
