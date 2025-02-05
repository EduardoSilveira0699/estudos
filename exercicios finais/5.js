const pessoas =[{
    nome:"eduardo",
    idade: 25, 
},{
    nome:"mariana",
    idade: 21, 
},{
    nome:"gabriel",
    idade: 17,
}];

function maioresDeIdade(pessoas) {
    return pessoas.filter(pessoa => pessoa.idade >= 18);
}

let pessoasMaiores = maioresDeIdade(pessoas);

console.log(pessoasMaiores);



