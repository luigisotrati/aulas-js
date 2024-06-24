let codigoPromocional = prompt("por favor, insira o código promocional (DESC1, DESC2 ,DESC3, DESC4 OU DESC5):")

let desconto = 0;

switch (codigoPromocional) {
    case "dec1":
        desconto = 0.5;
        break;

        case "desc2":
            desconto = 0.10;
            break;

            case "desc3":
            desconto = 0.15;
            break;

            case "desc4":
            desconto = 0.20;
            break;
            
            case "desc5":
            desconto = 0.25;
            break;
            
            
            default:
                alert("código promocional inválido")
                break;
}


if (desconto > 0){
    alert("desconto de"  + (desconto * 100) + "% aplicado com sucesso");
} else{
    alert("nenhum desconto aplicado");
}