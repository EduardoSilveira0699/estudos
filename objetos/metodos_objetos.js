const pessoa ={
    nome:"eduardo",
    idade: 25,
    cargo: "full",
    saudacao: function(){
        console.log("ola eu sou o "+ pessoa.nome);
        
    }
}

//console.log(pessoa);
//pessoa.saudacao();

const calculos = {
    soma: function(numero1, numero2){
        return numero1 + numero2
    },
    subtrair: function (numero1, numero2) {
        return numero1 - numero2
        
    }
}

const resultadoSoma = calculos.soma(10, 20);
console.log(resultadoSoma);

const resultadoSubtracao = calculos.subtrair(50,30)
console.log(resultadoSubtracao);

