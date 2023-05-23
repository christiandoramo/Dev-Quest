import React, { useEffect, useState } from 'react'
import Card from '../card'
import draw10Cards from '../../services/cardServices.js'

const Cards = (props) => {
  const [cartas, setCartas] = useState([])

  useEffect(() => {
    draw10Cards().then((cartas) => {
      // quando o fetch for concluido set cartas causa efeito colateral
      // assim os state é atualizado com as cartas novas setadas
      setCartas(cartas)
    })
  }, [])

  return (
    <>
      <h1>{props.secao}</h1>
      <div style={{ backgroundColor: props.bgColor }}>
        <ul>
          {cartas.map((item, index) => (
            <li key={index}>
              <Card
                code={item.code}
                value={item.value}
                suit={item.suit}
                image={item.image}
                bgColor={index % 2 === 0 ? 'red' : 'inherit'}
                // estilização condicional - if nao funfa bem
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

Cards.defaultProps = {
  bgColor: 'cyan',
  secao: 'Seção Genérica',
}

export default Cards
