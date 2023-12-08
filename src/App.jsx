import { useState } from 'react';
import Home from './components/Home';
import Gameplay from './components/Gameplay';


function App() {
  const [isGameStarted,setIsGameStarted]=useState(false);

  const toggleGamePlay=()=>{
    setIsGameStarted((prev)=>!prev);
  }

  return (
    <>
    { isGameStarted ? <Gameplay/> :<Home toggle={toggleGamePlay}/>
    }
     
    </>
  )
}

export default App
