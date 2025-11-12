const flashcards = [
    {
        categoria: "HTML",
        pergunta: "Para que serve a tag <head>?",
        resposta: "Contém meta informações sobre o documento HTML, como links para CSS, título da página, e charset."
    },
    {
        categoria: "CSS",
        pergunta: "Qual propriedade é usada para centralizar um <div> com 'display: block'?",
        resposta: "margin: 0 auto; (desde que a largura - width - esteja definida)."
    },
    {
        categoria: "JavaScript",
        pergunta: "O que significa Hoisting?",
        resposta: "É o comportamento de mover declarações de variáveis (var) e funções para o topo do seu escopo durante a compilação."
    },
    {
        categoria: "Bootstrap",
        pergunta: "Qual classe do Bootstrap torna uma imagem responsiva?",
        resposta: "A classe .img-fluid."
    }
];

// ===================================================================
// PARTE 2: Função de Criação do Cartão (Corrigida)
// Esta função recebe os dados e cria um elemento DOM (o cartão)
// ===================================================================

/**
 * Cria um elemento de cartão (flashcard) e o anexa ao container.
 * Adiciona um evento de clique para virar o cartão.
 *
 * @param {string} categoria - A categoria do flashcard.
 * @param {string} pergunta - O texto da pergunta.
 * @param {string} resposta - O texto da resposta.
 */
function criaCartao(categoria, pergunta, resposta) {
    // 1. Obter o elemento container (deve existir um <div id="container"> no HTML)
    const container = document.getElementById("container");
    
    if (!container) {
        console.error("Erro: Elemento com ID 'container' não encontrado. Verifique seu HTML.");
        return; 
    }

    // 2. Criar o elemento <article> do cartão
    const cartao = document.createElement("article");
    cartao.className = "cartao"; // A classe 'cartao' é usada pelo CSS para o layout 3D

    // 3. Inserir o HTML (usando template literals `)
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

    // 4. Lógica de virar o cartão
    function viraCartao() {
        // Alterna a classe 'active' que o CSS usa para aplicar a rotação 3D
        cartao.classList.toggle('active');
    }
    
    // 5. Adicionar o evento de clique e anexar ao DOM
    cartao.addEventListener('click', viraCartao);
    container.appendChild(cartao);
}


// ===================================================================
// PARTE 3: Inicialização (Execução)
// Garante que o script rode após o HTML estar carregado
// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
    // Itera sobre o array 'flashcards' e chama a função criaCartao para cada objeto
    flashcards.forEach(card => {
        criaCartao(card.categoria, card.pergunta, card.resposta);
    });
});