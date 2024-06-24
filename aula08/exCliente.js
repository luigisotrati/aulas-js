// Array para armazenar os nomes dos clientes
let clientes = [];

// Função para solicitar e armazenar nomes
function inserirNomes() {
    let nomeCliente = prompt("Insira o nome do cliente:");

    // Verifica se o usuário inseriu algum nome
    if (nomeCliente !== null && nomeCliente !== "") {
        clientes.push(nomeCliente); // Adiciona o nome ao array
    } else {
        alert("Nome inválido. Insira um nome válido.");
    }
}

// Função principal do programa
function programaClientes() {
    let continuar = true;

    while (continuar) {
        inserirNomes();

        // Pergunta ao usuário se deseja inserir mais nomes
        let resposta = prompt("Deseja inserir mais algum nome? (sim/não)");

        // Converte a resposta para minúsculas para facilitar a comparação
        resposta = resposta.toLowerCase().trim();

        if (resposta === "não" || resposta === "nao") {
            continuar = false;
        } else if (resposta !== "sim") {
            alert("Resposta inválida. Por favor, responda 'sim' ou 'não'.");
        }
    }

    // Exibe os nomes armazenados no array
    if (clientes.length > 0) {
        console.log("Nomes armazenados:");
        for (let nome of clientes) {
            console.log(nome);
        }
    } else {
        console.log("Nenhum nome foi armazenado.");
    }
}

// Executa o programa
programaClientes();
