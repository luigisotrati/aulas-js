let lista_nomes = [];
let contador = 0;
let resposta = true;

while(resposta) {
    let nomes = prompt("digite um nome:");
    lista_nomes.push(nomes);

    resposta = confirm("voce deseja continuar?");

    contador = contador + 1;
}


alert(lista_nomes.toString());