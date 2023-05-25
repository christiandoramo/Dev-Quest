import { useState } from "react";

const Form = (props) => {
  const [inputs, setInputs] = useState({
    image: "",
    code: "",
    suit: "",
  });
  const handleInputChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    setInputs({
      // deve se juntar as entradas anteriores com as novas
      ...inputs,
      [name]: value,
      // os colchetes serve para transformar a entrada de um name da entrada especifica
      // dentro da coleção, sendo unica para cada nome de input, portando
      // eu n preciso digitar o nome da entrada para cada entrada diferente no form como em
      // setInputs ({ senha : event.target.value, login :event.target.value })
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
          <label htmlFor="image">Imagem da carta</label>
          <input
            type="text"
            id="image"
            name="image"
            onChange={handleInputChange}
            value={inputs.image}
          />
        </div>
        <div>
          <label htmlFor="code">Nome da carta</label>
          <input
            type="text"
            id="code"
            name="code"
            onChange={handleInputChange}
            value={inputs.code}
          />
        </div>
        <div>
          <label htmlFor="suit">Naipe da carta</label>
          <input
            type="text"
            id="suit"
            name="suit"
            onChange={handleInputChange}
            value={inputs.suit}
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
};

export default Form;
