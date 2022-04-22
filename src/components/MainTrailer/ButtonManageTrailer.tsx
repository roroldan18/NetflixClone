import React, { useState } from 'react';
import { PropButtonManageTrailer } from '../../utils/types';

export const ButtonManageTrailer = ({videoIsPaused, setVideoIsPaused, videoTrailer }:PropButtonManageTrailer): JSX.Element => {

    const initialVolumeIcon = 'assets/svg/minimal-speaker-icon.svg';
    const [volumeIcon, setVolumeIcon] = useState(initialVolumeIcon);


    const handleClickVolume = () => {
        if(volumeIcon === 'assets/svg/minimal-speaker-icon.svg'){
            setVolumeIcon('assets/svg/speaker-off.svg');
            if(videoTrailer !== null){
                videoTrailer.muted = true;
            }
                
        } else {
            setVolumeIcon(initialVolumeIcon);
            if(videoTrailer !== null){
                videoTrailer.muted = false;
            }
        }
    }

    const handleRestartVideo = () => {
        if(videoTrailer !== null){
            videoTrailer.play();
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
