const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    // Gera um valor tal que, menorValor <= valor && valor <= maiorValor
    return parseInt(Math.random() * ((maiorValor + 1) - menorValor) + menorValor);
}

console.log('Número secreto: ' + numeroSecreto)

const elementoMenorValor = document.getElementById('menor-valor');
elementoMenorValor.innerHTML = menorValor;

const elementoMaiorValor = document.getElementById('maior-valor');
elementoMaiorValor.innerHTML = maiorValor;
