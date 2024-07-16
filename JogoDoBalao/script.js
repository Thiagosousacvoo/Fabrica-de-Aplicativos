/* LOGICA DO JOGO
1 CRIAR O BALAO
2 ESTOURAR O BALAO
3 CARREGAR O JOGO
*/

var total = 0;

//criar balao
function criarBalao(){
    var balao = document.createElement("div");
    balao.setAttribute("class", "balao");

    var x = Math.floor(Math.random() * 600);
    var y = Math.floor(Math.random() * 400);

    balao.setAttribute("style", "left:"+x+"px;top:"+y+"px;");
    balao.setAttribute("onclick", "estourar(this)");
    document.body.appendChild(balao);
}

//estourar balao

function estourar(objeto){
    document.body.removeChild(objeto);

    total++;
    var score = document.getElementById('total');
    score.innerHTML = "Baloes estourados: " + total;

}

//carregar jogo

function carregarJogo(){
    setInterval(criarBalao,1000);
}