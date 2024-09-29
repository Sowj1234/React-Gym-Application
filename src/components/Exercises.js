import React , {useEffect , useState } from 'react'
import Pagination from '@mui/material/Pagination'
//it is used to divide the results from the API
import {Stack,Box,Typography} from '@mui/material/';
import { excerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  console.log(exercises)
  //for pagination
  const[currentPage,setCurentPage] =useState(1);

  const paginate = (e,value)=>
  {
    setCurentPage(value);
    window.scrollTo({top:1800,behavior : 'smooth'})
  }
  
  useEffect(()=>
  {
     const fetchExercisesData=async()=>
     {
      let exercisesData=[];
      if(bodyPart==='all')
      {
        exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',excerciseOptions);
      }

      else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,excerciseOptions)
      }

      setExercises(exercisesData);
     }
     fetchExercisesData(); //calling the fecth fucntion whenver there is some changes 
  },[bodyPart]) //dependency array contains something - calls this function whenever the bodypart chnages
  //to display the output when the image/icon is clicked

  return (
    <Box id="exercises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
     <Typography variant="h3" mb="46px">
      Showing results
     </Typography>

     <Stack direction="row" sx={{gap:{lg:'110px', xs:'50px'}}}
     flexWrap="wrap" justifyContent={"center"}>
      {exercises.map((exercise,index)=>(
        
        <ExerciseCard key={index} exercise={exercise}/>
      ))}
      

     </Stack>
     
     <Stack mt="100px" alignItems="centre"> 
      {exercises.length>9 && (   //for the pagination - this code doeant work for some
      // reason but for implementing paguinatiopn - u need to have 1st index , 
      //last index and current index of the images that show up in a single page
        <Pagination    
        color="standard"
        shape="rounded"
        defaultPage={1}
        count={Math.ceil(exercises.length/9)}
        page={currentPage}
        onChange={paginate} 
        size="large"
        />
      )}
      
     </Stack>
    </Box>
  )
}

export default Exercises