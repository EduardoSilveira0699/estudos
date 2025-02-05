// splice

/*
index: a posicao no array onde a operacao comecara
quantidade: o numero de elementos a serem removidos a partir daquela posicao
elementos que deseja adicionar naquel local
*/
//               0  1   2   3
const numeros = [1, 5, 100, 10];

// a partir de 1 remover o 5
//numeros.splice(1,1);
// a partir de 1 remover o 5 e o 100
//numeros.splice(1,2);
// a partir de 1 remover o 5 e o 100 e adcionar o 30
numeros.splice(1,2,30);

//console.log(numeros);

const nomes = ["dudu", "mariana", "mari", "silveira"];

//nomes.splice(3,0,"silsil");

//nomes.splice(2, 1, "edila", "joao");

const resultado = nomes.splice(2, 2, "edila", "joao");

console.log(resultado);


console.log(nomes);

