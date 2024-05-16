import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [contador, setContador] = useState(0)

const incrementar = ()=>{
  setContador(contador+ 1);
};
const decrementar = () =>{
  setContador(contador- 1);
}

  return (
   <div className='container'>
    <h1>Contador</h1>
    <div className="contador">
      <h2 id='numero'>{contador}</h2>
    </div>
    <div className="buttons">
      <button id='soma' onClick={incrementar}>Somar</button>
      <button id='sub' onClick={decrementar}>Subtrair</button>
    </div>
   </div>

  )
}

export default App
