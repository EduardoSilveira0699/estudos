//objetos

const aluno = {
    nome: "eduardo",
    idade: 25,
    cargo: "full"
}

console.log(aluno);
console.log(aluno.nome);
console.log(aluno.idade);
console.log(aluno.cargo);

aluno.cargo = "front";
aluno.status = true;

console.log(aluno.cargo);
console.log(aluno["cargo"]);
console.log(aluno);

