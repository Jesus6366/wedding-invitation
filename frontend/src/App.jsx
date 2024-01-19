import { useState } from 'react'
import WelcomePage from './components/WelcomePage/WelcomePage'
import './app.css'


function App() {

  const [name, setName] = useState("")

  console.log(name);

  return (
    <div className='container'>
      <div className='centered-component'>
        <WelcomePage setName={setName} />
      </div>
    </div>
  )
}

export default App
