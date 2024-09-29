import React , {useEffect , useState} from 'react'
import { useParams } from 'react-router-dom' //to fetch the id that we r on
import {Box} from '@mui/material'

import { excerciseOptions,fetchData, youtubeOptions } from '../utils/fetchData'
import Detail from '../components/Detail';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';


const ExcerciseDetail = () => {

  const [exerciseDetail , setexerciseDetail]=useState({}); // its a pbject containing all the info reg a exercise
  const [exerciseVideo,setexerciseVideo] = useState([]); //set to array
  const{id}=useParams();
  
  useEffect(()=>
  {
    const fetchExercisesData=async()=>
    {
       //setting up url of the api that is to be called
       const exerciseDbUrl='https://exercisedb.p.rapidapi.com';

       //utube search and download api
       const youtubeSearchUrl='https://youtube-search-and-download.p.rapidapi.com';

       const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`,excerciseOptions);
       console.log({exerciseDetailData})
       setexerciseDetail(exerciseDetailData);


       //for showing similar videos from utube - using api
       const exerciseVideosData=await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetail.name}`,youtubeOptions)
       setexerciseVideo(exerciseVideosData.contents);
    }
    console.log(exerciseVideo);

    //calling that function
    fetchExercisesData();
  },[id]); //this fucntion gets called everytime the id is changed
  return (
    <Box>
     <Detail exerciseDetail={exerciseDetail}/>
     <ExerciseVideos exerciseVideo={exerciseVideo} name={exerciseDetail.name}/>
     <SimilarExercises/>
    </Box>
  )
}

export default ExcerciseDetail