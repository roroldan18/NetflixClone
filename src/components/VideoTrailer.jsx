import React from 'react';

export const VideoTrailer = ({videoPath, videoIsPaused, setVideoIsPaused}) => {


  const handleEventPause = () => {
      setVideoIsPaused(true);
  }


  return (
    <video autoPlay className={`trailerVideo-${videoIsPaused}`} id='trailerVideo' onPause={handleEventPause} >
        <source src={videoPath} type="video/mp4" />
    </video> 
  )
}
