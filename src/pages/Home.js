import React , {useState} from 'react'
import {Box} from '@mui/material';
import Exercises from '../components/Exercises';
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
//passing the states to searchexercises page
const Home = () => {
  const[bodyPart,setBodyPart]=useState('all')
  const [exercises,setExercises] = useState([]); 
  //passing the same set of states to different components
  //can be done by react context API
  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner/>

      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart}
      />

      <Exercises
      exercises={exercises}
      setExercises={setExercises}
      bodyPart={bodyPart}
      
      />

    </Box>
  )
}

export default Home