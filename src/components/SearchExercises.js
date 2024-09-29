import React , {useEffect , useState } from 'react'
import {Box,Button , Stack,TextField,Typography} from '@mui/material'
import { fetchData , excerciseOptions } from '../utils/fetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

//all the 3 down here will be coming from HOME
const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
  const [search,setSearch]=useState('') //search will be string
   //the exercises will be array - moved to home
  const [bodyParts,setBodyParts]=useState([]); //bodyParts will hold an array of body parts that u fetch from api
  //setBOdyParts fucntion updates the sate of bodyParts

  useEffect(()=>
  {
    const fetchExercisesData=async()=>{
      const bodyPartsData=await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',excerciseOptions)

      setBodyParts(['all',...bodyPartsData]); //updates bodyparts variable
    }

    fetchExercisesData();
  },[])  //empty list to denote that this runs only once

  
  //async means it takes sometime to fetch from API (generally)
  const handleSearch=async()=>
  {
    //if someone types something
     if(search)
     {
        const excerciseData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',excerciseOptions);
        const searchedExercises =excerciseData.filter((exercise)=> exercise.name.toLowerCase().includes(search)
        ||exercise.target.toLowerCase().includes(search)
        ||exercise.equipment.toLowerCase().includes(search)
        ||exercise.bodyPart.toLowerCase().includes(search)

       
      );
      console.log(excerciseData);
       setSearch(''); //sets search into empty string - this clears the textfield
       setExercises(searchedExercises); //stores the searched exercises
     }
  }
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      
       <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb="50px" textAlign="center">
        Awesome excercises you  <br/>
        should know
       </Typography>

       <Box position="relative" mb="72px">
          <TextField
          sx={{
            input:{fontWeight:'700',border:'none',borderRadius:'4px'},
            width:{lg:'900px',xs:'350px'},
            backgroundColor:'#fff',
            borderRadius:'40px'
          }}
          height="76px"
          value={search}
          onChange={(e)=>{
            setSearch(e.target.value.toLowerCase());
            console.log(search);
          }}
          placeholder='Search Exercises'
          type="text"
          />

          <Button className="Search-btn"
          sx={{
            bgcolor:"#FF2625",
            color:"#fff",
            textTransform:'none',
            width:{lg:'175px',xs:'80px'},
            fontSize:{lg:'20px',xs:'14px'},
            height:'56px',
            position:"absolute", //to bring the search box to right side
            right:'0'
          }}
          onClick={handleSearch}
          >
           Search  
          </Button>

       </Box>
       
       <Box sx={{position:'relative',width:'100%',p:'20px'}}>
            <HorizontalScrollbar data={bodyParts}
            bodyPart={bodyPart} setBodyPart={setBodyPart}/> 
       </Box>
    </Stack>
    //the data - bodyparts is given to horizontalscrollbar
  )
}

export default SearchExercises