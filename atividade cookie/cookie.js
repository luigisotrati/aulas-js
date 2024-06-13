let imagemCookie = document.querySelector('#cookie');
let contador  = document.querySelector ('#contador');

let pontuação = 0;

imagemCookie.addEventListener('click',() =>{
   pontuação++;
   contador.innerHTML = `contador: ${pontuação}`
});