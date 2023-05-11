import React from 'react'
import './divcolorida.css'

const DivColorida = (props) => {
  return (
    <div className="divColorida" style={{ backgroundColor: props.bgColor }}>
      <h1>{props.label}</h1>
      {props.children}
    </div>
  )
}

DivColorida.defaultProps = {
  bgColor: 'red',
  label: "div Sem título"
}

export default DivColorida
