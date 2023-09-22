import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewsTicker from './components/Component1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <NewsTicker />
    </div>
  )
}

export default App
