//operadores logicos

const freteGratis = true;
const estoque = false;

// and && afirmacao
/*
00=0
01=0
10=0
11=1
*/
// console.log(freteGratis && estoque);


// or ||
/*
00=0
01=1
10=1
11=1
*/
// console.log(freteGratis || estoque);


// not !
/*
0=1
*/
// console.log(!freteGratis);

//dupla negacao || usada para converter um valor para seu equivalente booleano

const nome = "eduardo"
const nome2 = 0;

console.log(!!nome);
console.log(!!nome2);
