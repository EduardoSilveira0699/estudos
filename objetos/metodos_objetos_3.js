const pessoa ={
    nome:"eduardo",
    idade: 25,
    cargo: "full",
    endereco: {
        rua: "mato grosso",
        complemento: "casa",
        cep: 96745000,

    }
}
console.log(pessoa);
console.log(pessoa.endereco.rua); //tentar acessar alguma propriedade que n existe retorna undefined
