const contatos =[{
    nome:"eduardo", numero: 5123232323,
},{
    nome:"mariana", numero: 5143434343,
},{
    nome:"arthur", numero: 5198989898,
},{
    nome:"edila", numero: 5121212121,
}
]

function buscaContato(nomePessoa, listaContatos){
    if(!nomePessoa){
        console.log("nome da pessoa e obrigatorio!");
        return "";
    }
    const contatoPessoa = listaContatos.find((contato)=>{
        return contato.nome === nomePessoa;
    }) 

    if(!contatoPessoa){
        return `ops, essa pessoa n esta na lista`
    }

    return `o ${nomePessoa} tem o telefone: ${contatoPessoa.numero}`;
}

const pessoa1 = buscaContato("jorge", contatos);
const pessoa2 = buscaContato("arthur", contatos);

console.log(pessoa1);
console.log(pessoa2);


  






