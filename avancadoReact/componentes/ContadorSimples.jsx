import React, { useState } from 'react'

const ContadorSimples = () => {
  const [contador, setContador] = useState(0)

  const aumentar = () => {
    setContador(contador + 1)
  }

  return (
    <div>
      <h2>Exercício 1 – Contador Simples</h2>
      <p>Contador: {contador}</p>
      <button onClick={aumentar}>
        Somar +1
      </button>
    </div>
  )
}

export default ContadorSimples