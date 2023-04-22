/*
Criando mais de uma função.

Com os conhecimentos adquiridos na aula de
funções crie uma função para cada operação
matemática (soma, divisão, multiplicação e
subtração).

Exemplo:
function somar(numero1, numero2) {
let soma = numero1 + numero2;
return 'A soma dos dois números é: ' + soma;
}

Realize a chamada de cada função, colocando
cada resultado em uma variável e mostre a
resposta usando o console.log.
*/

function somar(a , b){
    let soma = a +b;
    return `A soma de ${a} e ${b} é ${soma}`
}
function multiplicar(a , b){
    let multiplicação = a * b
    return `A multiplicação de ${a} e ${b} é ${multiplicação}`
}
function subtrair(a , b){
    let subtracao = a - b
    return `A subtração de ${a} por ${b} é ${subtracao}`;
}
function dividir(a , b){
    let divisao = a / b
    return `A divisão de ${a} por ${b} é ${divisao}`
}

let a=15, b=5;
console.log(somar(a,b));
console.log(multiplicar(a,b));
console.log(subtrair(a,b));
console.log(dividir(a,b));