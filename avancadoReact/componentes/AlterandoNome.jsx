import React, { useState } from 'react'

const AlterandoNome = () => {
  const [nome, setNome] = useState('Maria')

  const alterarParaJoao = () => {
    setNome('João')
  }

  return (
    <div>
      <h2>Exercício 2 – Alterando Nome</h2>
      <p>Nome: <strong>{nome}</strong></p>
      <button onClick={alterarParaJoao}>
        Alterar para João
      </button>
    </div>
  )
}

export default AlterandoNome