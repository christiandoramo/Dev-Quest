/*
  ao clicar em uma pergunta deve acontecer
uma animação de acordeon para abrir o item
e mostrar o texto escondido, e a seta deve
mudar de cor.
ao clicar em um item para abri-lo todos os
outros itens devem ser fechados.
Referência do que é um efeito acordeon
https://www.netflix.com/br/ na seção
"Perguntas Frequentes".
*/

let itens = document.querySelectorAll('.item')
// lista de <li> item de
itens.forEach((item) => {
  item.addEventListener('click', () => {
    const anterior = document.querySelector('.ativo')
    if (item === anterior) {
      item.classList.remove('ativo');
    } else {
      if (anterior != null) {
        anterior.classList.remove('ativo');
      }
      item.classList.add('ativo');
    }
  });
});