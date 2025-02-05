/*
 1) Verificar elegibilidade para votar
    Crie uma função que verifique se uma pessoa é elegível para votar. 
    A pessoa precisa ter 18 anos ou mais para votar, além disso, vamos incluir uma verificação para ver se a pessoa tem menos de 
    75 anos, assumindo que acima dessa idade, o voto é facultativo.

    - Com base na idade fornecida deverá retornar "Elegível para votar", caso seja maior que 75 retornar "Voto facultativo" ou
    caso seja menor de 18 retornar "Não elegível para votar"
 */
function verificarElegibilidade(idade) {
    if (idade >= 18 && idade < 75) {
        return "Elegível para votar";
    } else if (idade >= 75) {
        return "Voto facultativo";
    } else {
        return "Não elegível para votar";
    }
}

// Exemplos de uso
console.log(verificarElegibilidade(20)); // Saída: "Elegível para votar"
console.log(verificarElegibilidade(70)); // Saída: "Elegível para votar"
console.log(verificarElegibilidade(80)); // Saída: "Voto facultativo"
console.log(verificarElegibilidade(16)); // Saída: "Não elegível para votar"

/*
 2) Verificar se todos os números são positivos
    Este desafio recebe três números como parametro da função e verifica se todos são positivos. 
    Se todos forem positivos, retorna verdadeiro; caso contrário, retorna falso.
 */
function todosPositivos(n1, n2, n3) {
    return n1 > 0 && n2 > 0 && n3 > 0;
}

// Exemplo de uso
let n1 = 1, n2 = 2, n3 = -3;
console.log(`Todos os números são positivos: ${todosPositivos(n1, n2, n3)}`);


/*
 3) Classificar uma temperatura
    Este desafio classifica a temperatura em 'Frio', 'Moderado' ou 'Quente'. 
    A temperatura é considerada 'Fria' se for menor que 10°C, 'Moderada' entre 10°C e 25°C, 
    e 'Quente' se for maior que 25°C.

    - Crie uma função que vai verificar a temperatura enviada e retornar se está 'Frio', 'Moderado' ou 'Quente'.
    com base na temperatura enviada.
 */
function classificarTemperatura(temperatura) {
    if (temperatura < 10) {
        return "Frio";
    } else if (temperatura >= 10 && temperatura <= 25) {
        return "Moderado";
    } else {
        return "Quente";
    }
}

// Exemplo de uso
let temperatura = 18;
console.log(`A temperatura de ${temperatura}°C é considerada ${classificarTemperatura(temperatura)}.`);



/*
 4) Escreva uma função que receba um número e retorne "Par" 
 se o número for par e "Ímpar" se o número for ímpar.
 */

function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "Par";
    } else {
        return "Ímpar";
    }
}

console.log(parOuImpar(4)); // Deve retornar "Par"
console.log(parOuImpar(5)); // Deve retornar "Ímpar"

/*
 5) Dado um array de objetos onde cada objeto 
 tem as propriedades nome e idade, escreva uma função que retorne um novo 
 array contendo apenas as pessoas com 18 anos ou mais.
*/


const pessoas = [
    { nome: "Ana", idade: 22 },
    { nome: "João", idade: 16 },
    { nome: "Maria", idade: 18 },
    { nome: "Sujeito", idade: 28 }
];

function maioresDeIdade(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade >= 18);
}

let pessoasMaiores = maioresDeIdade(pessoas);
console.log(pessoasMaiores);

/*
  6) Imprima na tela todos os números de 1 a 10.
*/
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

/*
 7) Imprima na tela a tabuada de multiplicação de 5.
*/
let numero = 5;
for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

/*
 8) Dado um número de 1 a 7, imprima o dia da semana correspondente.
*/

let dia = 3;
switch (dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda-feira");
        break;
    case 3:
        console.log("Terça-feira");
        break;
    case 4:
        console.log("Quarta-feira");
        break;
    case 5:
        console.log("Quinta-feira");
        break;
    case 6:
        console.log("Sexta-feira");
        break;
    case 7:
        console.log("Sábado");
        break;
    default:
        console.log("Dia inválido");
}

/*
 9) Crie uma função chamada adicionarElemento que aceite dois parâmetros: um array
    e um elemento. 
    - A função deverá adicionar o elemento recebido como parametro dentro 
      do array porem precisa verificar se esse elemento que deseja adicionar já não 
      exista no array, caso ele já exista dentro do array não deverá ser adicionado ao
      array.     
    - Ao final o array não deve ter itens duplicado se tentar chamar a função duas vezes
    tentando adicionar mais de uma vez o mesmo elemento no array.
*/
function adicionarElemento(lista, elemento) {
    const indexItem = lista.indexOf(elemento);

    if (indexItem !== -1) {
        return;// Return aqui para caso já exista no array paramos o código aqui.
    }

    lista.push(elemento);
}

let numeros = [1, 2, 3];
adicionarElemento(numeros, 4); // Tentar adicionar na lista o numero 4
adicionarElemento(numeros, 6); // Tentar adicionar na lista o numero 6
adicionarElemento(numeros, 6); // Tentar adicionar na lista o numero 6
console.log(numeros); // Saída: [1, 2, 3, 4, 6]


/*
  10) Você tem essa lista abaixo de contatos:
  let listaDeContatos = [
   { nome: "João", telefone: "123456789" },
   { nome: "Maria", telefone: "987654321" },
   { nome: "Matheus", telefone: "111222333" },
   { nome: "Matheus Fraga", telefone: "444555666" },
   { nome: "Ana", telefone: "999888777" }
  ];

  - Agora crie em seguida uma função que deverá listar todos os contatos da lista
   que tem o nome de Matheus
 */

// Definindo a lista de contatos
let listaDeContatos = [
    { nome: "João", telefone: "123456789" },
    { nome: "Maria", telefone: "987654321" },
    { nome: "Matheus", telefone: "111222333" },
    { nome: "Matheus", telefone: "444555666" },
    { nome: "Ana", telefone: "999888777" }
];

// Função para pesquisar telefones pelo nome usando filter
function pesquisarTelefonePorNome(nome) {
    let contatosFiltrados = listaDeContatos.filter(contato => contato.nome === nome);

    contatosFiltrados.forEach((contato) => {
        console.log(`Contato: ${contato.nome}, Telefone: ${contato.telefone}`)
    })

}

// Nome para pesquisar
let nomeParaPesquisar = "Matheus";

// Pesquisando telefones pelo nome
pesquisarTelefonePorNome(nomeParaPesquisar);