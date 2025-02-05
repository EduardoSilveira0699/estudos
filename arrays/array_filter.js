//filter -  devolve uma lista do que se pediu

const numeros = [1,2,10,30,200];

const numerosFiltrados = numeros.filter((numero) =>{
    return numero > 10;
})
// console.log(numeros);
// console.log(numerosFiltrados);

const nomes = ["gato", "cachorro", "elefante", "peixe", "leao", "eduardo"];

const filtro = nomes.filter((nome) => {
    if(nome.length >= 5){
        return nome;
    }
})
// console.log(filtro);
// console.log(nomes);

//find - devolve o primeiro que encontrar nao percorre tudo
const alunos = ["arthur", "mariana", "eduardo", "mari"];

// const buscaNome = alunos.find((aluno) => {
//     if(aluno === "eduardo"){
//         return aluno;
//     }
// })

// const buscaNome = alunos.find((aluno, index, obj) => {
//     if(aluno === "eduardo"){
//          console.log(index);
//          console.log(obj);
//         return aluno;
//     }
// })
//console.log(buscaNome);

//findIndex

const buscaAluno = alunos.findIndex((aluno) => {
    return aluno === "eduardo";
})
console.log(buscaAluno);

