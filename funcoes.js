function calcularPrecoProduto(precoUnitario, quantidade) {
    return precoUnitario * quantidade;
}


function calcularPrecoTotal(produtos) {
    let precoTotal = 0;
    for (let produto of produtos) {
        precoTotal += produto.preco * produto.quantidade;
    }
    return precoTotal;
}


function calcularPrecoTotalComDesconto(produtos, limiteDesconto, percentualDesconto) {
    let precoTotal = calcularPrecoTotal(produtos);
    if (precoTotal > limiteDesconto) {
        precoTotal -= precoTotal * (percentualDesconto / 100);
    }
    return precoTotal;
}


const produtos = [
    { nome: 'Camiseta', preco: 20, quantidade: 3 },
    { nome: 'Calça', preco: 50, quantidade: 2 },
    { nome: 'Sapato', preco: 100, quantidade: 1 }
];

const precoCamisetas = calcularPrecoProduto(20, 3);
const precoTotalProdutos = calcularPrecoTotal(produtos);
const precoTotalComDesconto = calcularPrecoTotalComDesconto(produtos, 150, 10);

console.log("Preço das camisetas:", precoCamisetas);
console.log("Preço total dos produtos:", precoTotalProdutos);
console.log("Preço total com desconto:", precoTotalComDesconto);
