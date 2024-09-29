import React from 'react'
import {Box,Stack,Typography} from '@mui/material'


const ExerciseVideos = ({exerciseVideo,name}) => {
  console.log(exerciseVideo);
  return (
    <Box sx={{ marginTop: { lg: '203px', xs: '20px' } }} p="20px">
      
      <Typography  sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>

      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '110px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
      {exerciseVideo?.slice(0, 5).map((item, index) => (
        item.video ? ( // Check if item.video is defined
        <a key={index} className="exercise-video" 
           href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
           target="_blank"
           rel="noreferrer">
            <img src={item.video.thumbnails[0].url} alt={item.video.title} />
        </a>
    ) : null // Render nothing if item.video is undefined
))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos