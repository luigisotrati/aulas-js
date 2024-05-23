

class carro {
   constructor (marca, modelo, cor, ano){
    this.marca = marca
    this.modelo = modelo
    this.cor = cor
    this.ano = ano
   }
   modelocarro(){
    console.log(`o  carro é um: ${this.modelo} da marca: ${this.marca}`);
   }
   somBuzina(){
    return `bip bip`
   }
};

let carro1 = new carro ('volksvagen', 'fusca', 'azul', 1989)
let carro2 = new carro ('chevrolet', 'sl', 'branco', 1989)

carro1.modelocarro();
console.log(carro1.somBuzina());
