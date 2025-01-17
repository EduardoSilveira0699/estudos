// funcoes

function mostraNome(){
    console.log("seja bem vindo ao sistema");
    console.log("aprendendo");
    
}

function gerarNumeroAleatorio(){
    //console.log(Math.random());
    return Math.random();
    
}

mostraNome();
let numeroGerado = gerarNumeroAleatorio();

console.log("numero gerado foi " + numeroGerado);


function dataAtual(){
    const data = new Date();
    return data.toDateString();
}

const data = dataAtual();
console.log(data);
