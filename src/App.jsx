import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Attribution from './components/Attribution'
import './App.css'
import {useState} from 'react'

const App = () => {

  const [menuIsOn, setMenuIsOn] = useState(false)

  function toggle(){
    setMenuIsOn(prevMenu => !prevMenu)

  }

  return (
    <div>
      <Navbar menuIsOn={menuIsOn} handleClick={toggle}/>
      <Main />
      <Attribution />
    </div>
  )
}

export default App
