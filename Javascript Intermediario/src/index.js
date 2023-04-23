// array.splice(1,2 , "abacaxi", "maracuja","uva")
// retorna um array sem os itens da posição 1 e 2 do array
// pois a partir da posição 1 ela retira 2 itens. retornando o array
// sem esses itens, e inserindo esses 3 itens a partir da posição 1
// enquanto o slice apenas faz a operação de retirada em uma copia do array
let elemento = document.getElementsByTagName("h1")[0];
console.log("Pegando pela tag -> " + elemento.innerText);

elemento = document.getElementsByClassName("p1")[0];
console.log("Pegando pela classe -> " + elemento.innerText);

elemento = document.getElementById("p2");
console.log("Pegando pelo ID" + elemento.innerText);
elemento = document.querySelector("input[name='email']");
console.log("Achou o primeiro elemento pela busca " + elemento);
console.log(elemento);
elemento = document.querySelectorAll("input[name='email']");
console.log("Achou lista de elementos possiveis " + elemento);
console.log(elemento);
