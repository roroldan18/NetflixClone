import React, { useState } from 'react'
import './SubMenus.scss';
import { PropCardMoreInfo } from '../../utils/types';

export const CardMovieSubMenu = ({option}:PropCardMoreInfo) => {

  const [isHovering, setIsHovering] = useState(false);

  let timer: number|null = null;
  const TIMEOUT = 1000;

  const handleMouseOver = () => {
    timer = window.setTimeout(() => {
      console.log(`mouse Over ${option.order}`);
      setIsHovering(true);
    }, TIMEOUT);
  }

  const handleMouseOut = () => {
    clearTimeout(timer as number);
    timer = null;
    setIsHovering(false);
    console.log(`mouse out ${option.order}`);
  }

  
  if(isHovering){
    return (
        <img className="card-img-top" src={option.src} alt={option.alt} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
      )
  } else{
    return (
        <img className="card-img-top imgMovieCard" src={option.src} alt={option.alt} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}/>
      )
  }
}
