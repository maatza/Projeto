
const valorEmprestimo = 10000; 
const taxaJuros = 0.1; 
const numeroParcelas = 5; 


function calcularParcela(valorInicial, taxa, parcela) {
    const juros = valorInicial * taxa;
    return valorInicial / parcela + juros;
}


console.log("Usando ciclo for:");
for (let i = 1; i <= numeroParcelas; i++) {
    const valorParcela = calcularParcela(valorEmprestimo, taxaJuros, numeroParcelas - i + 1);
    console.log(`Parcela ${i}: R$ ${valorParcela.toFixed(2)}`);
}


console.log("\nUsando ciclo while:");
let parcelaAtual = 1;
while (parcelaAtual <= numeroParcelas) {
    const valorParcela = calcularParcela(valorEmprestimo, taxaJuros, numeroParcelas - parcelaAtual + 1);
    console.log(`Parcela ${parcelaAtual}: R$ ${valorParcela.toFixed(2)}`);
    parcelaAtual++;
}
