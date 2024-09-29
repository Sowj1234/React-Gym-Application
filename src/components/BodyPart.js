import React from 'react'
import { Stack,Typography } from '@mui/material'
import Icon from '../assests/icons/gym.png'


const BodyPart = ({item,setBodyPart,bodyPart}) => {
  return (
    <Stack
    type ="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
        borderTop: bodyPart===item? '4px solid #ff2625' : '',
          backgroundColor:'#fff',
          borderBottomLeftRadius : '20px',
          width: '270px',
          height :'280px',
          cursor:'pointer',
          gap:'47px' } }  //if bodypart is not equal to the item
    //we need to display something when one of the icos is being clicked 
    onClick={()=>{
      // console.log(typeof setBodyPart);

      setBodyPart(item);
      window.scrollTo({ top: 2900, left: 100, behavior: 'smooth' });
      //window.scrollTo()
    }}
    >
      <img src={Icon} alt="dumbbell" style={{width : '40px',height:'40px'}}/>
      <Typography fontSize='24px' fontWeight="bold" color="#3A1212" textTransform="capitalize">{item}</Typography>
    </Stack>
  )
}

export default BodyPart