let valor =  Number(prompt('qual o  valor do seu produto?'))
let desconto = Number(prompt('aplique seu desconto'))
let valortotal  = (0.5/100)
let DESC1 = valor (0.5/100)
let desc2= 10;
let desc3 = 15;
 let desc4 = 20;
 let desc5 = 25;

switch (desconto) {
    case 'DESC1':
        alert(`5% do desconto ao produto equevale a ${desconto} com ${valor} o produto vai ser ${DESC1}`)
        break;
   case 'desc2':
   alert(`desconto de 10%`);
   break;
   case 'desc3':
    alert(`desconto de 15%`);
    break;
    case 'desc4':
        alert(`desconto de 20%`);
        break;
        case 'desc5':
        alert(`desconto de 25%`);    
    default:
        alert(`nenhum desconto aplicado`);
        break;
}