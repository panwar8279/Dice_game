import  { useState } from 'react';
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import Roledice from './Roledice';
import Rule from './Rule';

const Gameplay = () => {
    const [selectedNumber,setSelectedNumber]=useState();
    const [currentDice, setCurrentDice]=useState(1);
    const [Score, setScore]=useState(0);
    const [error, setError]=useState();
    const [showRules, setShowRules]=useState(false);



  
    const generateRandom=(min, max) =>{

        return Math.floor(Math.random() * (max - min) + min);
      }
     
      const roleDice=()=>{
        if(!selectedNumber){
            setError("You have not selected any number")
            return;
        } 
        setError("")
        const RandomNumber=generateRandom(1,7);
        setCurrentDice(()=>RandomNumber);

        if(selectedNumber==RandomNumber){
            setScore((prev)=>prev+RandomNumber);
        }else{
            setScore((prev)=>prev-2);
        }
        setSelectedNumber(undefined);
      }

      const resetScore=()=>{
        setScore(0);
      }
  return (
    <MainContainer>
<div>

    <div className='row gx-0 justify-content-between container m-auto mt-5'>
    <div className='col-md-4'>
      <TotalScore Score={Score}/>
      </div>
      <div className='col-md-4 '>
      <NumberSelector error={error} setError={setError} selectedNumber={selectedNumber} 
      setSelectedNumber={setSelectedNumber} /></div>
      </div>
     <Roledice currentDice={currentDice} 
     roleDice={roleDice} />
     <div className='btns text-center'>
        <Button className='my-2 reset-btn' onClick={resetScore}>Reset Score</Button><br/>
        <Button onClick={()=>{setShowRules((prev)=>!prev)}}>{showRules? "Hide":"Show"} Rules</Button>
     </div>
     {showRules && <Rule/>}
    </div>
    </MainContainer>
  )
}

export default Gameplay

const MainContainer=styled.div`
.reset-btn{
  background-color: white;
  color:black ;
  padding: 6px 40px;
  border-radius: 10px;
  
}
.reset-btn:hover{
  background-color: black;
  color:white ;
  padding: 6px 40px;
  border-radius: 10px;
  
}`;
const Button=styled.button `
  background-color: black;
  color:white ;
  padding: 6px 40px;
  border-radius: 10px;
&:hover{
  background-color: white;
  color:black ;
  padding: 6px 40px;
  border-radius: 10px;
}`;