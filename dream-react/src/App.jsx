import { useState } from 'react'
import viteLogo from '/vite.svg'
import './assets/styles/App.css'
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
