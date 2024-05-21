let emails = [ //tamanho do array = 5
    'email1@gmail.com',//0
    'email2@gmail.com',//1
    'email3@gmail.com',//2
    'email4@gmail.com',//3
    'email5@gmail.com',//4
];
// for (let elemento= 0; elemento < emails.length; elemento ++) {
//     console.log(`e-mail enviado para ${emails[elemento]}`);
    
// }

emails.forEach((email,cadastro, completo)=>{
    console.log(`--- --- --- --- --- ---`);
    console.log(`e-mail enviado para ${email}`);
    console.log(`seu numero de cadastro é: ${cadastro}`);
    console.log(`--- --- --- --- --- ---`);
    console.log(`lista da sala: ${completo}`);
});

