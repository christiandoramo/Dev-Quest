import React from 'react'
import './botao.css'

function mostraLabel(label) {
  alert(`A label desse botão é ${label}.`)
}

const Botao = (props) => {
  return <button onClick={() => mostraLabel(props.label)}>{props.label}</button>
  //   note que é necessário usar função anônima no parâmetro
}

export default Botao
