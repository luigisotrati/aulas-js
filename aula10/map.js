// let frutas = ['banana', 'abacaxi', 'melão', 'maracuja'];

// let newFrutas = frutas.map((fruta)=>{
//     return fruta.toLocaleUpperCase()
// });

// console.log(newFrutas);

// let alunos = [
//     {
//       nome: 'luigi',
//       curso:'dev, web',
//       matriculado: true,
//     },

//     {
//         nome: 'leslie',
//         curso:'dev, web',
//         matriculada: true,
//       },
      
//       {
//         nome: 'cesar',
//         curso:'ADM',
//         matriculado: true,
//       },

//       {
//         nome: 'emerson',
//         curso:'dev, web',
//         matriculado: true,
//       },
// ];

// let nomeAlunos = alunos.map((objeto)=>{
//     return objeto.nome
// });

// console.log(nomeAlunos);

let notas = [ 3,  5,  8, 7, 6];


let notasAprovados = notas.filter((notas)=>{
    return notas >=7
});

console.log(notasAprovados);