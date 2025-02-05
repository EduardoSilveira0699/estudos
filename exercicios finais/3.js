function verificaTemperatura(temperatura){
    if(temperatura < 10){
        return "fria";
    }else if(temperatura >= 10 && temperatura <= 25){
        return "moderada";
    }else{
        return "quente"; 
    }
}

console.log( verificaTemperatura(17));
