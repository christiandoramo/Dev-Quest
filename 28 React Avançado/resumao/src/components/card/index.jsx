import React from 'react'

const Card = (props) => {
  return (
    <div style={{ backgroundColor: props.bgColor }}>
      <h3>{props.code}</h3>
      <img src={props.image} />
      <button onClick={() => alert(`${props.value} ${props.suit}.`)}>
        Ver Mais
      </button>
    </div>
  )
}

Card.defaultProps = {
  code: 'título genérico',
  value: 'valor generico',
  image: 'descricao qualquer',
  suit: 'suitequalquer',
  bgColor: 'cyan',
}

export default Card
