import './App.css'
import MeuComponente from './components/MeuComponente'
import Title from './components/Title';

function App() {
  //4
  const n = 10;

  //5 - classes dinamicas
  const redTitle = false;
  return (
    <div className="App">

      <h1>CSS no react</h1>

      {/* 1 -  Chamando o componente  */}
      <MeuComponente/>

      {/* 3 - CSS Inline - Na linha */}
      <p style={{color:"blue", padding: "25px", borderTop: "1px solid black"}}>
        Este parágrafo foi estilizado com css Inline!
      </p>

      {/* 4 - CSS Inline Dinâmico */}
      {/* Operador Ternário - condição ? valor verdadeiro : valor falso */}
      <h2 style={n > 10 ?{color: "purple"}: {color: "red"}}>
        CSS Dinâmico
      </h2>
{/* 5 - Classes dinamicas*/}
<h2 className = {n > 10 ? "red-title" : "title"}>
  Usando Classes Dinamicas no css Externo
</h2>

{/* 6 - CSS Modulos */}
<Title/>

    </div>
  )
}

export default App