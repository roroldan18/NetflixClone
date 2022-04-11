import React from 'react';
import { PropVideoTrailer } from '../../utils/types';

export const VideoTrailer = ({videoPath, videoIsPaused, setVideoIsPaused}:PropVideoTrailer) => {
  const handleEventPause = () => {
      setVideoIsPaused(true);
  }
  return (
      <>
        <div className='gradientBackground'></div>
        <video autoPlay className={`trailerVideo-${videoIsPaused}`} id='trailerVideo' onPause={handleEventPause} muted={false} >
            <source src={videoPath} type="video/mp4" />
        </video> 
      </>
  )
}
