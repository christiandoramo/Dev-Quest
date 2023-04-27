/* Crie um carrossel (slider) de imagensconforme layout do figma
Exercício
1
https://www.figma.com/file/zBKnYG9UNdUiIr8ClQTWSG/?node-id=0%3A1
O slider possui uma seta a esquerda e outraa direita que servem pra passar ou voltar aimagem.
Quando for a primeira imagem, a seta daesquerda deve ficar com uma opacidade esem clique.
 Quando for a última imagem, a seta dadireita deve ficar com uma opacidade e semclique. */

const btnDireito = document.getElementById('btn-direito')
const btnEsquerdo = document.getElementById('btn-esquerdo')
const slides = document.getElementsByClassName('slide')

console.log(slides)

let slideAtual = 0

function atualizaBotoes() {
    btnEsquerdo.disabled = slideAtual <= 0;
    btnDireito.disabled = slideAtual >= 3;
    btnDireito.style.opacity = slideAtual >= 3 ? 0.2 : 1;
    btnEsquerdo.style.opacity = slideAtual <= 0 ? 0.2 : 1;
  }
  

btnDireito.addEventListener('click', () => {
  slides[++slideAtual].scrollIntoView({ behavior: 'smooth' })
  atualizaBotoes()
})

btnEsquerdo.addEventListener('click', () => {
  slides[--slideAtual].scrollIntoView({ behavior: 'smooth' })
  atualizaBotoes()
})
