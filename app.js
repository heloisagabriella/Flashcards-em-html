function criaCartao(categoria,pergunta,resposta){
    let container= document.getElementById("container")
    let cartao = document.createElement("article")
    cartao.className ="cartao"
}
cartao.inneHTML=´
< div class= "cartao_conteude">
<h3>$(categoria)</h3>
<div class="cartao_conteudo_pergunta">
    <p>${pergunta}</p>
    </div>
    <div class="cartao_conteudo_resposta">
        <p>${resposta}</p>
        </div>
        </div>