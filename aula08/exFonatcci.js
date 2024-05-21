let primeiro = 0;
let segundo = 1;
let proximo = 0;
let contador = 0;
while(contador < 10){ 
    console.log(primeiro);
  proximo = primeiro + segundo;
  primeiro = segundo;
  segundo = proximo; 
  contador++;
}
