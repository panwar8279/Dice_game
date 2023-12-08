import styled from 'styled-components'
// eslint-disable-next-line react/prop-types
const NumberSelector = ({ setError, error, selectedNumber, setSelectedNumber}) => {
    const arrNumber=[1,2,3,4,5,6];

   const errorhandler=(value)=>{
    setSelectedNumber(value);
    setError("");
   }
  return (
<NumberContainer>
<h5>{error}</h5>
    <div  className='d-flex'>
     {arrNumber.map((value,i)=>(<Box 
     isSelected={value==selectedNumber}
     key={i} onClick={()=>errorhandler(value)}>{value}</Box>)) }
    </div>
    <p>Select Number</p>
    </NumberContainer>
  )
}

export default NumberSelector
 const NumberContainer=styled.div`
 .d-flex{
    gap: 20px;
    cursor: pointer;
 }
 p{
    font-size: 24px;
    padding:20px;
    text-align: end;
    font-weight: 700;
 }
 h5{
    color:red;
    text-align: end;
 }`;
const Box=styled.div`
height:72px;
width:72px;
border:1px solid black;
font-size:24px;
font-weight:700;
display: grid;
place-items:center;
background-color:${
    (props)=>(props.isSelected ?'black': "white")
};
color:${
    (props)=>(!props.isSelected ?'black': "white")
};
`;