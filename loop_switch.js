// switch

const codigoPromocao = 510;
let desconto;

switch(codigoPromocao){
    case 10:
        console.log("produto tenis");
        break;
    case 500:
        console.log("produto camiseta");
        break;
    case 510:
        console.log("produto eletronico");
        desconto = 0.3;
        break;
    default:
        console.log("produto nao enocntrado");
        break;
}
console.log(`valor do desconto ${desconto} valor do produto ficou em ${codigoPromocao - (codigoPromocao* desconto) }`);