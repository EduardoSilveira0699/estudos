// array de objetos

const alunos =[{
    nome:"eduardo",
    idade: 25,
    cargo: "full",
},{
    nome:"mariana",
    idade: 21,
    cargo: "full",
},{
    nome:"gabriel",
    idade: 21,
    cargo: "security",

}
    
]
//console.log(alunos);

//console.log(alunos[0]);

console.log(alunos[0].cargo);


alunos.forEach((aluno) =>{
    //console.log(aluno.nome);
    console.log(`aluno ${aluno.nome}`);
    console.log(`cargo atual ${aluno.cargo}`);
    
})
