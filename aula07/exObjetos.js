let animal ={
   nome: 'macaco',
   peso: '15kg',
   cor: 'marron',
   tempoVida:{
    madril: '20anos',
    macacojaponÊs: '27anos',
    bugiopreto: '15/20anos',
   },
   origem: 'primata',
}
let animal2 ={
    nome: 'cavalo',
    peso: '420kg',
    cor: 'marron',
    tempoVida: '30anos',
    suespecies:{
        subspecie1: 'equus',
        subspecie2: 'tarpan',
        subspecie3: 'Przewalski',
    } 
}
let animal3 ={
    nome: 'urso',
    peso: '780kg',
    cor: 'marron/preto',
    tempoVida: '40 anos',
    tiposDeursos:{
        tipo1: 'ursoPardo',
        tipo2: 'ursoPolar',
        tipo3: 'ursoPanda',
    }
}
console.log(animal.tempoVida);
console.log(animal2.suespecies);
console.log(animal3.tiposDeursos);

let {
    tempoVida,
    subspecies,
    tiposDeursos
} = animal
console.log(tempoVida);
console.log(subspecies);
console.log(tiposDeursos);