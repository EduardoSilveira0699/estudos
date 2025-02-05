/*
algoritmo de pilha
funcao de retornar o tamanho da pilha feito
adcionar elemento na pilha feito
retornar qual e o ultimo elemento feito
remover o ultimo elemento e retornar qual foi o ultimo removido
limpar a p;ilha e zerar ela
*/
function criarPilha() {
    let elementos = [];

    function adicionar(elemento) {
        elementos.push(elemento)
    }

    function pilhaEstaVazia() {
        return elementos.length === 0;
    }

    function tamanho() {
        if (pilhaEstaVazia()) {
            return "A pilha está vazia."
        }

        return elementos.length;
    }


    function topoPilha() {
        if (pilhaEstaVazia()) {
            return "A pilha está vazia."
        }

        return elementos[elementos.length - 1]

    }


    function remover() {
        if (pilhaEstaVazia()) {
            return "A pilha está vazia."
        }

        return elementos.pop();

    }


    function limpar() {
        elementos = [];
    }



    return {
        adicionar,
        tamanho,
        pilhaEstaVazia,
        topoPilha,
        remover,
        limpar
    }

}

let pilha = criarPilha();

pilha.adicionar(10)
pilha.adicionar(20);
pilha.adicionar(50);

console.log(`O ultimo elemento da pilha é ${pilha.topoPilha()}`)

console.log(`Removendo o ultimo elemento da pilha: ${pilha.remover()}`)

console.log(`O tamanho da pilha é ${pilha.tamanho()}`)

console.log("Limpando a pilha agora...")
pilha.limpar();

console.log(`${pilha.tamanho()}`)
