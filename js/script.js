//1 - Valor da variável
let indice = 13, S = 0, k = 0;

while (k < indice){
    k += 1;
    S += k;
}
console.log(S);
//----------------- ---------------- ---------------------
//2 - Programa para verificar se um número pertence á sequência de Fibonacci

/*function isFibonacci(n){
    let = 0, b = 1;
    while(b < n){
        if(b=== n){
            return true;
        }
        [a, b] = [b, a + b]
    }
    return false;
}

let numero = parseInt(prompt('Informe um número: '), 10);
if(isFibonacci(numero)){
    console.log(`O número ${numero} pertence á sequência de Fibonacci.`);
}else{
    console.log(`O número ${numero} não pertence á sequência de Fibonacci.`)
}
*/
//----------------- ---------------- ---------------------

//3 - Programa para calcular o faturamento diário

const faturamentoDiario = [1000, 2000, 0, 500, 0, 0, 1500, 0, 100, 2500, 0, 0, 1300, 0];

const faturamento = faturamentoDiario.filter(valor => valor > 0);
const menorValor = Math.min(...faturamento);
const maiorValor = Math.max(...faturamento);
const mediaMensal = faturamento.reduce((acc, valor)=> acc + valor, 0) / faturamento.length;
const diasAcimaDaMedia = faturamento.filter(valor => valor > mediaMensal).length;

console.log(`Menor valor: ${menorValor}`);
console.log(`Maior valor: ${maiorValor}`);
console.log(`Dias acima da média ${diasAcimaDaMedia}`);
//----------------- ---------------- ---------------------

// 4 - Percentual de respresentação por estado

const faturamentoJ = `{
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
}`

const faturamentoPorEstado = JSON.parse(faturamentoJ);
const faturamentoTotal = Object.values(faturamentoPorEstado).reduce((acc, valor)=> acc + valor, 0)

for(const [estado, valor]of Object.entries(faturamentoPorEstado)){
    const percentual = (valor / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}

//----------------- ---------------- ---------------------

// 5 - Programa para inverter uma string

function inverterString(str){
    let resultado = '';
    for(let i = str.lenght - 1; i >= 0; i--){
        resultado += str[i];
    }
    return resultado
}
const string = prompt("Informe um string: ");
console.log(`String invertida: ${inverterString(string)}`)