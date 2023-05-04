// High Order Functions
let pessoas = [
  { nome: "carlao", idade: 22, nCoisas: 50, tipo: "compra" },
  { nome: "gugu", idade: 83, nCoisas: 50, tipo: "compra" },
  { nome: "didi", idade: 83, nCoisas: 51, tipo: "compra" },
  { nome: "junin", idade: 21, nCoisas: 10, tipo: "venda" },
];

// aula 1 - filter
/*
const pessoasCom83 = pessoas.filter((pessoa) => pessoa.idade === 83);
console.log(pessoasCom83);
*/
// aula 2 - Map
/*
const nomePessoas = pessoas.map((pessoa) => pessoa.nome);
console.log(nomePessoas);
*/
// aula 3 - Reduce
/*
nCoisas = pessoas.reduce(
  (totalAtual, pessoa) => totalAtual + pessoa.nCoisas,
  0
);
console.log(nCoisas);
*/
// aula 4 - Interpolaçao de strings
// aula 5 - Desestruturação de objetos e arrays
/*
const [um, dois, tres, quatro] = pessoas; // [ ]
const { nome, idade, nCoisas: quantia, tipo } = tres; // { }
console.log(
  `nome: ${nome} idade: ${idade} quantia de coisas: ${quantia} tipo: ${tipo}`
);
*/
// aula 6 - operador spread
/*
const pessoas1 = ["jose", "joao", "joana", "jassyara"];
const pessoas2 = ["kamerson", "kim", "kimberly", "kekel"];
const pessoas3 = ["l1", "l2", "l3", "l4"];
let pessoasTodas = [...pessoas1, ...pessoas2, ...pessoas3];
console.log(pessoasTodas);
pessoasTodas = "";
pessoasTodas = pessoas1.concat(pessoas2).concat(pessoas3);
console.log(pessoasTodas);
let pessoinha = { nome: "juca", idade: 23 };
const objetoClonado = { ...pessoinha };
console.log(pessoinha);
console.log(objetoClonado);
pessoinha.idade = 100;
console.log(pessoinha);
console.log(objetoClonado);
// com o OPERADOR SPREAD ... o objeto clonado aponta para outra referencia de memoria
// portanto sendo apenas uma copia, e não uma referencia extra real
*/
//aula 7
