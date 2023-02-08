import React from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import './App.css'
import {useState} from 'react'

const App = () => {

  const [menuIsOn, setMenuIsOn] = useState(false)

  function toggle(){
    setMenuIsOn(prevMenu => !prevMenu)

  }

  return (
    <div className='app-container'>
      <Navbar menuIsOn={menuIsOn} handleClick={toggle}/>
      <Main />
    </div>
  )
}

export default App
