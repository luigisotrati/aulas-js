class celular {
    constructor  (marca, modelo, memória,  ) {
         this.modelo = modelo;
         this.marca = marca;
         this.memória = memória;
    }
    desbloquearCelular(){
         console.log(`celular foi desbloqueado!`);
     }
}

class Celulargamer extends celular{
    constructor(modelo, marca, memória, tela, rgb){
     super(modelo, marca, memória);
     this.rgb = rgb;
     this.tela = tela;
    }
}


let cel1 = new Celulargamer('POCO 6PRO', 'XIAOMI', '16GB', '120hz', true)
console.log(cel1);

class gamerPremium extends Celulargamer{
    constructor(modelo, marca, memória, rgb, tela, cooler){
        super(modelo, marca, memória, cooler, tela, rgb)
        this.cooler = cooler;
        
    }
}
let cel2 = new gamerPremium(
    'redMagicpro',
    'nubia',
    '32GB',
    true,
    true,
)

console.log(cel2);