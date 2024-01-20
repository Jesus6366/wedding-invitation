import { useState, useEffect } from 'react'
import WelcomePage from './components/WelcomePage/WelcomePage'
import './app.css'
import Home from './components/Home/Home'


function App() {

  const [name, setName] = useState(null)
  const [redirectToHome, setRedirectToHome] = useState(false);

  console.log(name);


  if (redirectToHome === false) {
    return (

      <div className='container'>
        <div className='centered-component'>
          <WelcomePage setRedirectToHome={setRedirectToHome} setName={setName} />
        </div>
      </div>
    )
  } else if (redirectToHome === true) {
    return (<Home name={name} setRedirectToHome={setRedirectToHome} />)
  }

}

export default App
