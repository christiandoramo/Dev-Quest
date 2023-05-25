import React, { useEffect, useState } from "react";
import Card from "../card";
import drawCards from "../../services/card-service";
import Form from "../form";
import { MeuLink } from "../link";
import styled from "styled-components";
/* ao ocorrer problema de null objet (edgsOut) usar 
"npm install pacotedesejado@latest" e dps nom audit fix --force
após isso vai funcionar - pois o npm n tava instalando a versão compativel
com o meu node*/

const Cards = (props) => {
  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    drawCards().then((cartas) => {
      // quando o fetch for concluido set cartas causa efeito colateral
      // assim os state é atualizado com as cartas novas setadas
      setCartas(cartas);
    });
  }, []);

  const addCard = (newCard) => {
    console.log(newCard);
    setCartas([...cartas, newCard]);
  };

  return (
    <>
      <MeuLink>PIKOMON</MeuLink>
      <Section>
        <h1>{props.secao}</h1>
        <div style={{ backgroundColor: props.bgColor }}>
          <Form addCard={addCard} />
          <ul>
            {cartas.map((item, index) => (
              <li key={index}>
                <Card
                  code={item.code}
                  value={item.value}
                  suit={item.suit}
                  image={item.image}
                  bgColor={index % 2 === 0 ? "red" : "inherit"}
                  // estilização condicional - if nao funfa bem
                />
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

const Section = styled.section`
  background-color: black;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

Cards.defaultProps = {
  bgColor: "cyan",
  secao: "Seção Genérica",
};

export default Cards;
