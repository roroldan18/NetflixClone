import React, { useState } from 'react';

export const ButtonManageTrailer = ({isPlaying}) => {
    const initialVolumeIcon = 'assets/svg/minimal-speaker-icon.svg';
    const [volumeIcon, setVolumeIcon] = useState(initialVolumeIcon);

    const handleClick = () => {
        if(volumeIcon === 'assets/svg/minimal-speaker-icon.svg'){
            setVolumeIcon('assets/svg/speaker-off.svg');
        } else {
            setVolumeIcon(initialVolumeIcon);
        }
    }

    const svgImg = isPlaying ? `${volumeIcon}` : 'assets/svg/reload-icon.svg';

  return (
    <img src={svgImg} alt="control" className='iconVolume' onClick={handleClick}/>
  )
}
