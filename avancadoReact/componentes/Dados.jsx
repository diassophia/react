import React, {useState} from 'react'



const Dados = () => {
  // Variável comum (React não monitora mudanças nessa variável)
  let valor = 10;
  
  // Estado = valor monitorado pelo react
  const [anotherNumber, setAnotherNumber] = useState(); // Estado para forçar re-renderização

  return (
    <div>
        <div>
            <p>Valor: {valor}</p>
        
        {/* Evento de click, mas que não muda a variável por não conter o useState */}
            <button onClick={() => valor += 15}>Mudar variável</button>
        </div>
        <div>
            <p>Valor: {anotherNumber}</p>
            {/* Aqui o react vai mudar o valor desse número! */}
            <button onClick={() => setAnotherNumber(20)}>Mudar valor</button>
        </div>
    </div>
  )
}
export default Dados