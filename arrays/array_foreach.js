// includes verifica se existe o item no array e devolve o verdadeiro ou falso

const nomes =  ["eduardo", "mariana", "mari"];

const verificaNome = nomes.includes("eduardo");

//console.log(verificaNome);


// foreach
const alunos =  ["eduardo", "mariana", "mari"];

// alunos.forEach(function (){
//     console.log("passou aqui");
    
// })

// alunos.forEach(() => {
//     console.log("passou aqui");
    
// })

// alunos.forEach((nome) => {
//     console.log(`passou aqui ${nome}`)
    
// })

const valores = [10, 500, 100];

valores.forEach((valor) => {
    console.log(`valor ajustado ${valor + 100}`);
    
})