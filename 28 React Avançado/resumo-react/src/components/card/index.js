import React from "react";

const Card = (props) => {
  return (
    <div style={{ backgroundColor: props.bgColor }}>
      <h3>{props.code}</h3>
      <img src={props.image} />
      <button
        onClick={() => alert(`code: ${props.code} | suit: ${props.suit}.`)}
      >
        Ver Mais
      </button>
    </div>
  );
};

Card.defaultProps = {
  code: "name genérico",
  value: "valor generico",
  image: "descricao qualquer",
  suit: "suitequalquer",
  bgColor: "cyan",
};

export default Card;
