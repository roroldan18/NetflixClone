import React, { useState } from 'react'
import { PropPictureSelection } from '../../utils/types';
import { CardMoreInfo } from './CardMoreInfo';

export const PictureSelection = ({option, buttonsOptions, numberOptionActive}:PropPictureSelection) => {

  let timer = 0;
  const TIMEOUT = 100;

  const [isHoveringInfo, setIsHoveringInfo] = useState(false);

  const handleMouseHoverInfo = () => {
    setIsHoveringInfo(true);
    clearTimeout(timer);
  }

  const handleMouseOutInfo = () => {
    timer = window.setTimeout(() => {
      setIsHoveringInfo(false);
    }, TIMEOUT);
  }

  return (
    <div className='d-flex pl-2 center blockImgSelection'>
        <img className='imgSelection align-middle' src={option.src} alt={option.alt} />
        <div className='targetPictureSelection'>
          <img src={buttonsOptions[0].svg} className='buttonOption' alt={buttonsOptions[0].text}/>
          <span onMouseOver={handleMouseHoverInfo} onMouseOut={handleMouseOutInfo} className="spanOptions">
            <img src={buttonsOptions[1].svg} alt={buttonsOptions[1].text} className='buttonOption'/>
            { (isHoveringInfo && option.order===numberOptionActive) && <CardMoreInfo option={option} />}
          </span>
        </div>
    </div>
  )
}
