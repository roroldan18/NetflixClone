import React, { useState } from 'react';
import { PropButtonManageTrailer } from '../../utils/types';

export const ButtonManageTrailer = ({videoIsPaused, setVideoIsPaused}:PropButtonManageTrailer) => {

    const [trailerVideo, setTrailerVideo] = useState<HTMLVideoElement|null> (null);

    window.onload = function() {
        setTrailerVideo(document.getElementById('trailerVideo') as HTMLVideoElement);
    };
    

    const initialVolumeIcon = 'assets/svg/minimal-speaker-icon.svg';
    const [volumeIcon, setVolumeIcon] = useState(initialVolumeIcon);


    const handleClickVolume = () => {
        if(volumeIcon === 'assets/svg/minimal-speaker-icon.svg'){
            setVolumeIcon('assets/svg/speaker-off.svg');
            if(trailerVideo !== null){
                trailerVideo.muted = true;
            }
                
        } else {
            setVolumeIcon(initialVolumeIcon);
            if(trailerVideo !== null){
                trailerVideo.muted = false;
            }
        }
    }

    const handleRestartVideo = () => {
        if(trailerVideo !== null){
            trailerVideo.play();
        }
        setVideoIsPaused(false);
    }

  return (
      <>
        {
            videoIsPaused
            ?
                <img src='assets/svg/reload-icon.svg' alt="control" className='iconVolume' onClick={handleRestartVideo}/>
            :
                <img src={volumeIcon} alt="control" className='iconVolume' onClick={handleClickVolume}/>
        } 
      </>
  )
}
