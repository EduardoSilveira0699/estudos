/*
  # Crie um algoritmo de pilha.
  - Deverá ter a função para retornar o tamanho da pilha. (FEITO)
  - Função para adicionar um elemento na pilha. (FEITO)
  - Função para retornar qual é o último elemento da pilha. (FEITO)
  - Função para remover o último elemento da pilha e retonar qual foi o elemento removido. (FEITO)
  - Função para limpar a pilha e zerar ela. (FEITO)
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


    function limprar() {
        elementos = [];
    }



    return {
        adicionar,
        tamanho,
        pilhaEstaVazia,
        topoPilha,
        remover,
        limprar
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
pilha.limprar();

console.log(`${pilha.tamanho()}`)









