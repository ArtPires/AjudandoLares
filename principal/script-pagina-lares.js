// Função para exibir as casas na página home
function exibirCasas(casas) {
    var grid = document.querySelector(".grid");

    // Limpar a lista antes de adicionar as casas
    grid.innerHTML = "";

    // Obter a lista de casas armazenada no armazenamento local
    var casas = JSON.parse(localStorage.getItem("casas")) || [];

    // Ordenar as casas por ordem alfabética do nome
    casas.sort((a, b) => a.nome.localeCompare(b.nome));

    casas.forEach(function(casa, index) {
        var cardDiv = document.createElement("div");
        cardDiv.classList.add("card"); // Adiciona a classe "card" à div da casa

        cardDiv.innerHTML = `
            <img src="/imagens/${casa.imagem}" alt="${casa.nome}">
            <h3>${casa.nome}</h3>
            <p>Descrição: ${casa.descricao}</p>
            <p>${casa.endereco}</p>
            <button class="btn" data-target="#contato-info">Contato</button>
        `;

        grid.appendChild(cardDiv);

        // Se o índice for divisível por 4 (ou seja, for o último item de uma linha), adiciona um div clear
        if ((index + 1) % 4 === 0) {
            var clearDiv = document.createElement("div");
            clearDiv.style.clear = "both"; // Limpa a flutuação
            grid.appendChild(clearDiv);
        }
    });
}

// Chamar a função exibirCasas quando a página é carregada
exibirCasas();

$(document).ready(function() {
    $('.btn').click(function(e) {
        e.preventDefault();
        var target = $(this).data('target');
        $(target).fadeIn();
    });

    $('.fechar-info').click(function() {
        $('.contato-info').fadeOut();
    });
});
