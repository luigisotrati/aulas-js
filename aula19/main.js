fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET'})
.then((Response) => Response.json())
.then((Response)=>{
    imagem.src = Response.message
})
.then((dudu) => {

    console.log(dudu);

    if(dudu.code == 404) {
        console.log("deu ruim, pia");
    } else{
        console.log("deu bom, pia");
    }

});



let botao = document.querySelector('#botao')
let imagem = document.querySelector('#imagem')

botao.addEventListener("click", ()=>{
    fetch("https://dog.ceo/api/breeds/image/random", {method: 'GET'})
    .then((Response) => Response.json())
    .then((Response)=>{
        imagem.src = Response.message
    });
});