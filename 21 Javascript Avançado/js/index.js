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
//aula 7 - parametro REST - usa o operado Spread sempre no param final
/*
function comRest(msg, outro, ...plp) {
  console.log(outro);
  plp = plp.filter((p) => p.idade >= 22);
  plp.map((p) => {
    const { nome, idade } = p;
    console.log(
      `Mensagem: ${msg}, Para: ${nome}, estudante com Idade: ${idade}`
    );
  });
}
comRest("olá pessoa", "Acima de 22 anos", ...pessoas); // ...pessoas está retornando os itens de pessoas
// aqui em vez de ...pessoas, poderia colocar pessoas[0], pessoas[1]...
*/
// aula 8 - SetInterval e SetTimeout
/*let refIntervalo = setInterval(() => {
  console.log("roda a cada segundo");
}, 1000); // roda a cada 1 segundo
let timeOut = setTimeout(() => {
  console.log("passou 5 segundos");
  clearInterval(refIntervalo, console.log("limpou interval"));
  clearTimeout(timeOut, console.log("limpou timeout"));
}, 5000);*/
// aula 9 - Síncrono e Assíncrono
// aula 10 - Promises
/*
return new Promise((resolve, reject) => {
  resolve(); // retorna q deu certo
  reject(); // retorna q deu errado
});
// isso para tratar exceções
*/
// aula 11 - then
/*
promessa.then().chamandoOutrafunção.then(). apos uma promise = só pode ser usado com promise
// pois then primeiramente checa se foi retornou resolve ou reject na promise
*/
// aula 12 - async e await
/*
async torna uma função em assincrona
await faz a função apenas retornar o resultado da promise e após o seu fim,
senão será retornada toda a promise
await só funciona c funções async
*/
// aula 13 - Tratamento de erros
/*
function liberarA() {
  return new Promise((resolve, reject) => {
    console.log("A");
    resolve("A");
  });
}
function liberarB() {
  return new Promise((resolve, reject) => {
    console.log("B");
    resolve("B");
  });
}
function liberarC() {
  return new Promise((resolve, reject) => {
    console.log("C");
    resolve("C");
  });
}
function liberadas() {
  return new Promise((resolve, reject) => resolve(true));
}
async function liberaABC() {
  let liberaC = liberarC();
  const liberaA = await liberarA();
  liberaC = await liberarC(liberaA);
  const liberaB = await liberarB(liberaC);
  liberaC = await liberarC(liberaB);
  const liberar = await liberadas(liberaB);
  if (liberar) console.log("A B C foram todas liberadas");
}
liberaABC();

no try catch
o reject recebe como parametro a Exception por exemplo uma mensagem de erro no paramentro ou throw 
de nova uma exception
lembrando que o reject é usado em uma função assincrona async
Ao mesmo tempo o tratamento do erro evita que o programa JS pare de funcionar
*/
// aula 14 - API : "interface" de programação app
// aula 15 - JSON : notação de objetos em JS
// aulas 16,17,18 19 - npm
/* 
const pacote = requires("pacote")
o fetch serve para usar APIs, e para isso é necessário consultar a documentação da API
npm é usa apenas obrigatoriamente o node, o navegador (user side) n tem acesso
npm install nomeDoPacote -- save , instala os node modules e salva no diretorio atual 
npm install instala todos os node-modules necessarios citados no package.json
import { função } from './caminhoDoArquivoApartirDaRootDoProjeto' - importação nomeada
para usar o import no user side, é preciso indica o type="module" no html em script
*/
