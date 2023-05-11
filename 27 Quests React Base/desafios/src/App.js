import './App.css'
import TituloColorido from './Components/htag/titulocolorido'
import DivColorida from './Components/divs/divcolorida'
import Botao from './Components/buttons/botao'

function App() {
  return (
    <>
      {/* Desafio 1 */}
      <TituloColorido>Desafio 1</TituloColorido>
      <DivColorida label="Titulo da div funcionando" bgColor="cyan">
        <TituloColorido cor="orange">
          titulo Colorido funcionando
        </TituloColorido>
      </DivColorida>
      {/* Desafio 2 */}
      <TituloColorido>Desafio 2</TituloColorido>
      <Botao label="Aquele texto lá"></Botao>
    </>
  )
}

export default App
