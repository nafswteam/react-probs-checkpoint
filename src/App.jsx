import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import PlayerList from './Components/PlayerList';

function App() {

  return (
    <>

<div className='Container'>

  <div className='row'>
  <PlayerList></PlayerList>


  </div>
</div>




    </>
  )
}

export default App
