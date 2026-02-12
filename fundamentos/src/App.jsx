
import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'
function App() {

  //1- Chamar o component
  
  return (
    <div>
      <h1>Teste</h1>
      <p>paragrafo</p>
      <FirstComponent/>
      {/* Chamando o componente  que nós criamos*/}

      {/* 2- Usar esse componente  */}
      <TemplateExpression/>
    </div>
  )
}

export default App
