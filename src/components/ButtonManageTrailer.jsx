import React, { useState } from 'react';

export const ButtonManageTrailer = ({videoIsPaused, setVideoIsPaused}) => {
    const trailerVideo = document.getElementById('trailerVideo');

    const initialVolumeIcon = 'assets/svg/minimal-speaker-icon.svg';
    const [volumeIcon, setVolumeIcon] = useState(initialVolumeIcon);


    const handleClickVolume = () => {
        if(volumeIcon === 'assets/svg/minimal-speaker-icon.svg'){
            setVolumeIcon('assets/svg/speaker-off.svg');
            trailerVideo.muted = true;
        } else {
            setVolumeIcon(initialVolumeIcon);
            trailerVideo.muted = false;
        }
    }

    const handleRestartVideo = () => {
        trailerVideo.play();
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
