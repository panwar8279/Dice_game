import styled from 'styled-components'
// eslint-disable-next-line react/prop-types
const Roledice = ({currentDice,roleDice}) => {


  return (
    <DiceContainer>
    <div className='dice' onClick={roleDice}>
      <img  src={`images/dice/dice_${currentDice}.png`}/>
    </div>
    <p>Click On Dice to Roll</p>
    </DiceContainer>
  )
}

export default Roledice

const DiceContainer=styled.div`

text-align: center;
p{
    font-size: 24px;
}
.dice{
    cursor:pointer;
}`;