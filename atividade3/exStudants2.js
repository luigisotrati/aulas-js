let students = [
    {name: 'jonh', age:20},
    {name: 'jane', age:25},
    {name: 'mark', age:22},
];

let nomeStudents= students.map((objeto)=>{
      return objeto.name
});
console.log(nomeStudents);