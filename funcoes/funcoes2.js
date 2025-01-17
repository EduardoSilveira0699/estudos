// //funcoes com paramentros

// function mostraNome(nome){
//     console.log(`seja bem vindo ${nome} ao sistema`);
    
// }

// //mostraNome("eduardo");

// const nota1 = 8;
// const nota2 = 10;
// const nota3 = 7;
// const nome = "eduardo";

// function calculoMadia(nota1, nota2, nota3, nome){
//     let media = (nota1 + nota2 + nota3)/3;
//     return `o aluno ${nome} teve media ${media}`;
// }

// const resultado = calculoMadia(nota1, nota2, nota3, nome);

// console.log(resultado);

// const fulano = calculoMadia(10 ,9 ,5 , 'dudu');

// console.log(fulano);

// let valor = 2000, taxa = 0.03, meses = 10;
// let juros = (valor*taxa*meses);
// console.log(`juros de ${juros}`);

// function calculadoraJuros(valorCapital,  taxaJuros, totalPeriodo){
//     const jurosFinal = valorCapital * taxaJuros * totalPeriodo;
//     console.log(`juros no periodo de ${totalPeriodo} mese e de R$ ${jurosFinal} reais`);
// }

// calculadoraJuros(2000, 0.03, 12);

// juros fixo
const juros = 0.03;
function calculadoraJuros(valorCapital, totalPeriodo){
    const jurosFinal = valorCapital * juros * totalPeriodo;
    console.log(`juros no periodo de ${totalPeriodo} mese e de R$ ${jurosFinal} reais`);
}

calculadoraJuros(2000, 12);