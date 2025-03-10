import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/header.jsx'
import Header from './components/header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <div>
        <p className='text-2xl'>
          SIGMA SIGMA BOI SIGMA BOI SIGMA BOI
        </p>
      </div>
    </div>
  )
}

export default App
