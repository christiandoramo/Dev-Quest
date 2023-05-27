import React from "react";

const Card = (props) => {
  return (
    <div>
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
  image: "http://placekitten.com/200/300",
  suit: "suitequalquer",
};

export default Card;
