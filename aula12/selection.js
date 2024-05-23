function mostrarSeletores() {
    const elementoId = document.getElementById("exemploId");
    console.log(elementoId.textContent);
   
    const elementosClasse = document.getElementsByClassName("exemploClasse");
    for(let i = 0; i < elementosClasse.length; i++) {
        console.log(elementosClasse[i].textContent);
    }

    const elementosTag = document.getElementsByTagName("p");
    for(let i = 0; i < elementosTag.length; i++) {
        console.log(elementosTag[i].textContent);
    }

    const elementosNome = document.getElementsByName("nomeInput");
    for(let i = 0; i < elementosNome.length; i++) {
        console.log(elementosNome[i].value);
    }
}
//get element by ID: paga o elemento por id

//get element by name0class:pega o elemento por nome da classe