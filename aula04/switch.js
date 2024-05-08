let nota = 'A'
//A - otimo B - regular C - ruim



switch (nota) {
    case 'A':
        console.log(`nota do atendimento: ótimo`);
        break;
  case 'B':
    console.log('nota do atendimento:regular');
    break;

    case'C':
    console.log('nota do atendimento: ruim');
      break;

      default:
        console.log(`nota não atribuida.`);
        break;
}