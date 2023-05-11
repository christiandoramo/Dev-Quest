import './titulocolorido.css'

const TituloColorido = (props) => {
  return (
    <h2 style={{ color: props.cor }} className="tituloColorido">
      {props.children}
    </h2>
  )
}

TituloColorido.defaultProps = {
  label: 'Texto Colorido',
  cor: 'black',
}

export default TituloColorido
