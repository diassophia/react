import './App.css'

//2- imagem em assets
import city from './assets/city.jpg'

import Dados from '../componentes/Dados'
import AlterandoNome from '../componentes/AlterandoNome'
import ContadorSimples from '../componentes/ContadorSimples'
import DesafioExtra from '../componentes/DesafioExtra'

function App() {

  return (
    <div>
      <h1>Testando</h1>
      {/* imagem do assets */}
      <img src={city} alt="Imagem do assets"/>

      {/* imagem do public */}
      <img src="/img1.jpg" alt="Imagem do public" />

      {/*Atuando com useState - Mudanças de estado, valor de algo */}
      <Dados />
      <AlterandoNome />
      <ContadorSimples />
      <DesafioExtra />


    </div>
  )
}

export default App