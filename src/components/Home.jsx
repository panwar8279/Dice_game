import styled from 'styled-components'

const Button=styled.button `
  background-color: black;
  color:white ;
  padding: 6px 40px;
  border-radius: 10px;
  &:hover{
    background-color:white;
  color:black ;
  }
`;
// eslint-disable-next-line react/prop-types
const Home = ({toggle}) => {
  return (
    <div>
      <div className='row container m-auto my-5 py-5'>
        <div className='col-md-6 dice-img'>
            <img src="/images/dices.png.png" alt=""/>
        </div>
        <div className='col-md-6 m-auto text-end'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
      </div>
    </div>
  )
}

export default Home
