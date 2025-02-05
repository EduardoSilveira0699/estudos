function votar(numero){
    if(numero < 18){
        return "nao legivel";
    }else if(numero >= 18 && numero <= 75){
        return "elegivel";
    }else{
        return "facultativo"; 
    }
}
console.log(votar(75));

