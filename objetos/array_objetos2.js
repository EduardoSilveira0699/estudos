const carrinho =[{
    nome:"doritos",preco: 20,
},{
    nome:"bala",preco: 10,
},{
    nome:"ovos",preco: 30,
},{
    nome:"coca",preco: 6,
}
]
const carrinho2 =[{
    nome:"fone",preco: 210,
},{
    nome:"cabo",preco: 110,
},{
    nome:"carregador",preco: 310,
}
]
//  let totalCarrinho = 0;

//  carrinho.forEach((produto)=>{
//     //totalCarrinho = totalCarrinho + produto.preco;
//     totalCarrinho += produto.preco;
//  })

// console.log(`total do carrinho e: ${totalCarrinho}`);

function calcularTotalCarrinho(carrinho){
    let total = 0;
    let totalProdutos = carrinho.length;

         carrinho.forEach((produto)=>{
        //totalCarrinho = totalCarrinho + produto.preco;
            total += produto.preco;
     })   
     return `seu carrinho tem ${totalProdutos}, o total do carrinho ficou: ${total}`
    
}
const totalCarrinho = calcularTotalCarrinho(carrinho);
const totalCarrinho2 = calcularTotalCarrinho(carrinho2);

console.log(totalCarrinho);
console.log(totalCarrinho2);