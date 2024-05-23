let pontuacao = 0;

function aumentar() {
    pontuacao += 1;
    document.getElementById('pontos').innerText = pontuacao;
    atualizarMensagem();
}

function atualizarMensagem() {
    let mensagemElemento = document.getElementById('mensagem');

    if (pontuacao < 100) {
        mensagemElemento.innerText = '';
    } else if (pontuacao >= 100 && pontuacao < 150) {
        mensagemElemento.innerText = "CALMA!";
    } else if (pontuacao >= 150 && pontuacao < 200) {
        mensagemElemento.innerText = "VAI QUEBRAR!";
    } else if (pontuacao >= 200 && pontuacao < 250) {
        mensagemElemento.innerText = "VOCÊ DEVE UM MOUSE NOVO PRO IOS";
    } else if (pontuacao >= 250) {
        let cores = ["red", "orange", "yellow", "green", "blue"];
        let indiceCor = Math.floor(Math.random() * cores.length);
        mensagemElemento.style.color = cores[indiceCor];

        let tamanhoAtual = parseInt(mensagemElemento.style.fontSize || 16); 
        mensagemElemento.style.fontSize = (tamanhoAtual + 1) + "px";
    }
}

document.getElementById('cookieImage').addEventListener('click', aumentar);
document.getElementById('pontos').innerText = pontuacao;
atualizarMensagem(); 