const calculos = {

    n1: 15,
    n2: 30,
    soma: function(){
        return this.n1 + this.n2;
    },
    subtrair: function () {
        return this.n1 - this.n2;
    }     
}

calculos.n1 = 100;
calculos.n2 = 150;

//const resultado = calculos.soma();
const resultado = calculos.subtrair();
console.log(resultado);



