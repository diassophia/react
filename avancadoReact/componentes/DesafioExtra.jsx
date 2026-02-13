import React, { useState } from 'react'

const DesafioExtra = () => {
  const [numero, setNumero] = useState(10)

  const aumentar = () => {
    setNumero(numero + 5)
  }

  const diminuir = () => {
    if (numero - 5 >= 0) {
      setNumero(numero - 5)
    }
  }

  return (
    <div>
      <h2>Desafio Extra</h2>
      <p>Número: {numero}</p>
      <div>
        <button 
          onClick={aumentar}
        >
          Aumentar +5
        </button>
        <button 
          onClick={diminuir}
        >
          Diminuir -5
        </button>
        </div>
        </div>
        
  )
}

export default DesafioExtra