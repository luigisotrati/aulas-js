let pessoa = {
    nome: "luigi",
    idade: "19",
    cidade: "são paulo",
};
function infopessoa(pessoa){
    return `nome: ${pessoa.nome}, idade ${pessoa.idade}, cidade: ${pessoa.cidade}`;
}

let informacoes = infopessoa(pessoa);
console.log(informacoes);

pessoa.idade= 30;

let infoAttpessoa = infopessoa(pessoa);
console.log(infoAttpessoa);