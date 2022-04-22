import React, { useEffect, useRef } from 'react';
import { PropVideoTrailer } from '../../utils/types';

export const VideoTrailer = ({videoPath, videoIsPaused, setVideoIsPaused, setVideoTrailer}:PropVideoTrailer) => {
  const handleEventPause = () => {
      setVideoIsPaused(true);
  }


  const videoRef = useRef<HTMLVideoElement>(null!);
  
  useEffect(() => {
    if( !!videoRef.current ){
      setVideoTrailer(videoRef.current);
      videoRef.current.disablePictureInPicture = true;
    }
  }, [videoRef])

  //+++++++++++++++++++++++++++++++IMPORTANTE --> Poner de nuevo el autplay  +++++++++++++++++++++++++++++++
  return (
      <>
        <div className='gradientBackground'></div>
        <video disablePictureInPicture className={`trailerVideo-${videoIsPaused}`} id='trailerVideo' onPause={handleEventPause} muted={false} ref={videoRef} >
            <source src={videoPath} type="video/mp4" />
        </video> 
      </>
  )
}
