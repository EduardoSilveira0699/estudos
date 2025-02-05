/*
## Desafio 1 -
-> Crie um array com alguns cargos de uma empresa (por exemplo, "fullstack", "frontend", "backend", "mobile") 

-> Você precisa remover o cargo "backend" da lista de cargos pois esse cargo não está mais disponivel na empresa.

### FEITO
*/
// const cargos = ["fullstack", "frontend", "backend", "mobile"];

// cargos.splice(2,1);
// console.log(cargos);

//se n sabe a posicao

// const posicaoItem = cargos.indexOf("backend");

// if(posicaoItem !== -1){
//     cargos.splice(posicaoItem, 1);
//     console.log(cargos);
//     return;
// }else{
//     console.log("item nao encontrado");
// }



/*
## Desafio 2 - 
-> Crie um array com os nomes abaixo:
["Alice", "Lucas", "Carol", "David"];

-> Você está procurando por um nome chamado Henrique caso o nome esteja na lista mostre no console
qual a posição em que esse nome está na sua lista.
-> Caso não encontre esse nome mostre no console o nome procurado e fale que não foi encontrado na lista
*/
// const nomes = ["Alice", "Lucas", "Carol", "David"];
// const pesquisa = "henrique";

// const posicaoItem = nomes.indexOf(pesquisa);
    
// if(posicaoItem!=-1){
//     console.log(posicaoItem);
// }else{
//     console.log(`${pesquisa} nao encontrado`);
// }

/*
## Desafio 3
Crie um array com esses numeros: [5, 15, 23, 2 ]

- Você deve devolver qual é a soma de todos esses numeros usando foreach
*/
// const numeros = [5, 15, 23, 2 ];
// let soma = 0;

// numeros.forEach(valor => {
//     soma = soma + valor;
// });
// console.log(soma);

// do professor

// const numeros = [5, 15, 23, 2 ];
// let soma = 0;
// numeros.forEach((numero)=>{
//     //soma = soma + numero; 
//     soma += numero;   
// })
// console.log(soma);




/*
## Desafio 4
Crie um array com esses numeros: [6, 12, 5, 9, 14, 27]

- Você deve devolver um array com todos os numeros que são multiplos de 3
*/

// const numeros = [6, 12, 5, 9, 14, 27];
// const multiplos3 = [];
// numeros.forEach(valor => {
//     if(valor % 3 == 0){
//         multiplos3.push(valor);
//     }
// })
// console.log(multiplos3);

//professor
// const numeros = [6, 12, 5, 9, 14, 27];
// const multiplos3 = [];
// numeros.forEach((valor) => {
//     if(valor % 3 === 0){
//         multiplos3.push(valor);
//     }
// })
// console.log(`${multiplos3}`);


/*
## Desafio 5
Filtrar Palavras com Mais de 5 Letras usando foreach
const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

- Você deve devolver um array com todas palavras que possuem mais de 5 letras
 */
//professor

// const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];
// const palavrasMaiores = [];

// palavrasMaiores.forEach((palavra) => {
//     if (palavra.length > 5) {
//         palavrasMaiores.push(palavra)
//     }
// })
// console.log(palavrasMaiores);


// metodos do chat

// const palavras = ["gato", "cachorro", "elefante", "peixe", "leão"];

// const palavrasCom4Letras = palavras.filter(palavra => palavra.length >= 5);

// console.log(palavrasCom4Letras);


//ou

// const palavras = ["casa", "bola", "carro", "sol"];

// const todosCom4Letras = palavras.every(palavra => palavra.length === 4);

// console.log(todosCom4Letras);
// Resultado: false (pois nem todas têm 4 letras)

//ou

// const palavras = ["casa", "bola", "carro", "sol"];

// const algumCom4Letras = palavras.some(palavra => palavra.length === 4);

// console.log(algumCom4Letras);
// Resultado: true (pois há palavras com 4 letras)