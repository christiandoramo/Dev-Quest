import React, { useEffect, useState, useContext } from "react";
import Card from "../card";
import drawCards from "../../services/card-service";
import Form from "../form";
import { MeuLink } from "../link";
import styled from "styled-components";
/* ao ocorrer problema de null objet (edgsOut) usar 
"npm install pacotedesejado@latest" e dps nom audit fix --force
após isso vai funcionar - pois o npm n tava instalando a versão compativel
com o meu node*/
import { Menu } from "../menu";
import { ThemeContext } from "../../contexts/theme-context";
import { ButtonSemMenu } from "../buttons";

const Cards = (props) => {
  const { theme } = useContext(ThemeContext);

  const [cartas, setCartas] = useState([]);

  useEffect(() => {
    drawCards().then((cartas) => {
      setCartas(cartas);
    });
    // quando o fetch for concluido set cartas causa efeito colateral
    // assim os state é atualizado com as cartas novas setadas
  }, []);

  const addCard = (newCard) => {
    console.log(newCard);
    setCartas([...cartas, newCard]);
  };

  return (
    <>
      <Menu />
      <ButtonSemMenu />
      <MeuLink>PIKOMON</MeuLink>
      <Section>
        <h1>{props.secao}</h1>
        <div
          style={{
            color: theme.color,
            backgroundColor: theme.backgroundColor,
          }}
        >
          <Form addCard={addCard} />
          <ul>
            {cartas.map((item, index) => (
              <li key={index}>
                <Card
                  code={item.code}
                  value={item.value}
                  suit={item.suit}
                  image={item.image}
                  // bgColor={index % 2 === 0 ? "red" : "blue"}
                  // // estilização condicional - if nao funfa bem
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
