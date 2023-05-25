import { useState } from "react";

const Form = (props) => {
  const [inputs, setInputs] = useState({
    image: "",
  });
  const handleInputChange = (event) => {
    setInputs({
      image: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault(); // impede o refresh da pagina
    // previne de ser uma pagina dinamica comum, para ser uma SPA
    props.addCard(inputs);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="image">Quantidade de cartas desejadas</label>
          <input
            type="text"
            id="image"
            name="qte"
            onChange={handleInputChange}
            value={inputs.image}
          />
        </div>
        <input type="submit">Confirmar</input>
      </form>
    </>
  );
};

export default Form;
