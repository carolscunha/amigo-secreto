//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos à lista
function adicionarAmigo() {
    // Captura o campo de entrada de texto
    const nomeInput = document.getElementById('amigo');
    
    // Obtém o nome inserido, removendo espaços extras no começo e no final
    const nome = nomeInput.value.trim();

    // Validação: se o campo estiver vazio, exibe um alerta
    if (nome === '') {
        alert('Por favor, insira um nome.');
        return; // Não adiciona o nome se estiver vazio
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Limpa o campo de entrada após adicionar o nome
    nomeInput.value = '';

    // Atualiza a lista visível de amigos na página
    atualizarLista();
}

// Função para atualizar a lista visível de amigos
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    
    // Limpa a lista antes de adicionar os novos nomes
    lista.innerHTML = '';

    // Adiciona cada nome à lista visível
    amigos.forEach(function(amigo) {
        const li = document.createElement('li'); // Cria um novo item de lista
        li.textContent = amigo; // Atribui o nome ao item
        lista.appendChild(li); // Adiciona o item à lista
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Adicione pelo menos um nome para realizar o sorteio!');
        return; // Não sorteia se a lista estiver vazia
    }

    // Sorteia um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o resultado do sorteio na lista de resultados
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

