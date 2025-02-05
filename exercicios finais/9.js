function adicionarElemento(lista, elemento) {
    const indexItem = lista.indexOf(elemento); 

    if (indexItem !== -1) { // indexoff retorna -1 se nao tem na array
        return;// se tem ele vai ser diferente de -1 e entra na codicao e return zero para finalizar a funcao
    }
    // se for -1 significa que nao tem na array e vai segui para ca, push adiciona um elemento
    lista.push(elemento);
}

let numeros = [1, 2, 3];

adicionarElemento(numeros, 4); // Tentar adicionar na lista o numero 4
adicionarElemento(numeros, 6); // Tentar adicionar na lista o numero 6
adicionarElemento(numeros, 6); // Tentar adicionar na lista o numero 6

console.log(numeros); // Saída: [1, 2, 3, 4, 6]

let listaDeContatos = [
    { nome: "João", telefone: "123456789" },
    { nome: "Maria", telefone: "987654321" },
    { nome: "Matheus", telefone: "111222333" },
    { nome: "Matheus Fraga", telefone: "444555666" },
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