let botaoValidar = document.querySelector("#botaoValidar");

botaoValidar.addEventListener("click", () => {
        // expressão que define que um email seja formatado como email@email.com
        let regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let email = document.querySelector("#emailInput").value;
    
        // se passar no teste de comparação
        if (regExEmail.test(email)) {
            document.querySelector("#resultado").innerText = "E-mail válido!";
            document.querySelector("#resultado").style.color = "green";
        } else {
            document.querySelector("#resultado").innerText = "E-mail inválido!";
            document.querySelector("#resultado").style.color = "red"
        }
})
        
 
         let regExsenha = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         let senha = document.querySelector("#senhaInput").value;

         if (regExsenha.test(senha)) {
            document.querySelector("#resultado").innerText = "senha válida!";
            document.querySelector("#resultado").style.color = "green";
        } else {
            document.querySelector("#resultado").innerText = "senha inválida!";
            document.querySelector("#resultado").style.color = "red"
        }

        let regExnumero = /^[^\s@]/;
        let numero = document.querySelector("#numeroInput").value;

        if (regExnumero.test(numero)) {
           document.querySelector("#resultado").innerText = "numero válido!";
           document.querySelector("#resultado").style.color = "green";
       } else {
           document.querySelector("#resultado").innerText = "numero inválido!";
           document.querySelector("#resultado").style.color = "red"
       }
