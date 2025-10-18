/* Boi:
-EVA preto >  R$3~6 por folha => 4 folha
-Tnt branco e azul >  R$3~5  por metro => 2m

Figurino
-Sprays (azul, verde, preto e branco)  > 15 por unidade => 4~5 latas
-Isopor > 25 (se pá 2 isopor)

Mural
- tela > 30 reais
- isopor pra coisar a tela > 10 reais
- balao > 2qntd = 17x2 = 34
- 

Caracterização artística local
- 50 reais

Comida
- Banda de tambaqui > 20~30
- Polpa de cupuaçu > 10
*/

/* Valor da variável vai ser o valor */
let EVAPreto = 5
let tntBrancoAzul = 5
let PrecoSpray = 15
let isoporFigurino = 25
let telaMural = 30
let isoporMural = 10
let balaoQuadra = 17
let artista = 50
let comida = 35

let qntdEVA = 4
let qntdTntBrancoAzul = 2
let qntdSpray = 5
let qntdIsoporFigurino = 1
let qntdIsoporFigurino2 = 2
let qntdTelaMural = 1
let qntdIsoporMural = 1
let qntdBalaoQuadra = 2
let qntdArtista = 1
let qntdComida = 1

let calculoBoi = (EVAPreto * qntdEVA) + (tntBrancoAzul * qntdTntBrancoAzul)
let calculoFigurino = (PrecoSpray * qntdSpray) + (isoporFigurino * qntdIsoporFigurino2)
let calculoMural = (telaMural * qntdTelaMural) + (isoporMural * qntdIsoporMural) + (balaoQuadra * qntdBalaoQuadra)
let calculoArtistico = (qntdArtista * artista)
let calculocomida = (comida * qntdComida)

let soma = calculoBoi + calculoArtistico + calculoFigurino + calculoMural + calculocomida

console.log(soma)