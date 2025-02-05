//map percorre a array e devolve uma nova array de itens, diferente do foreach

const aluno = ["arthur", "mari", "mariana", "eduardo", "mari"];

const resultado = aluno.map((aluno) => {
    return aluno + " online";

})
//console.log(resultado);

const numeros = [1,2,3,4,5,6,7,8,9];
const dobra = numeros.map((numero) => {
    return numero * 2;
});

console.log(dobra);
console.log(numeros);

