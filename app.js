function criaCartao(categoria, pergunta, resposta) {
    // Seleciona o container onde os cartões serão adicionados
    const container = document.getElementById("container");

    // Cria o elemento do cartão
    const cartao = document.createElement("article");
    cartao.className = "cartao";

    // Define o conteúdo interno do cartão com template literals
    cartao.innerHTML = `
        <div class="cartao_conteudo">
            <h3>${categoria}</h3>
            <div class="cartao_conteudo_pergunta">
                <p>${pergunta}</p>
            </div>
            <div class="cartao_conteudo_resposta">
                <p>${resposta}</p>
            </div>
        </div>
    `;

    // Estado da resposta (visível ou não)
    let respostaEstaVisivel = false;

    // Função que vira o cartão (mostra/esconde a resposta)
    function viraCartao() {
        respostaEstaVisivel = !respostaEstaVisivel;
        cartao.classList.toggle("active", respostaEstaVisivel);
    }

    // Adiciona evento de clique ao cartão
    cartao.addEventListener("click", viraCartao);

    // Adiciona o cartão ao container principal
    container.appendChild(cartao);
}
