import styled from 'styled-components'
const Rule = () => {
  return (
    <div>
      <RuleContainer>
        <h3>How to Play Dice Game</h3>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>

      </RuleContainer>
    </div>
  )
}

export default Rule


const RuleContainer=styled.div`
background-color:#FBF1F1;
padding:20px;
max-width:800px;
border-radius: 10px;
margin:0px auto;
margin-top: 40px;
h3{
font-weight: 600;
}`;