const numeroSorteado = math.floor(math.random() * 10) + 1;
let tentativas = 0;

while (true){
    const palpite = parselnt(prompt("adivinhe o numero 1 a 10"));


    tentativas++;
    if(palpite === numeroSorteado){
        alert(`parabéns, voce acertou!`)
        break;
    } else{
        alert("tente novamente")
    }
}