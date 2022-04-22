import React, { useState } from 'react'
import { OptionsTrailer } from '../../utils/optionsTrailer';

import { PropLineSubMenu } from '../../utils/types';
import { CardMovieSubMenu } from './CardMovieSubMenu';


export const LineSubMenu = ({menu}:PropLineSubMenu) => {



  let startSlice = 0;
  let endSlice = 7;
  const totalSections = Math.ceil(menu.movies.length/7);

  const renderSections = () => {
    const sections = [];
    for (let i = 1; i <= totalSections; i++) {
      sections.push(
        <section id={`section${menu.order}-${i}`} key={i}>
          <a className='arrowPrev' href={`#section${menu.order}-${i === 1 ? totalSections : i-1}`}>‹</a>
          {
            menu.movies.slice(startSlice, endSlice).map( (option:OptionsTrailer) =>
              <CardMovieSubMenu option={option} key={option.order} />
            )
          }
          <a className='arrowNext' href={`#section${menu.order}-${i === totalSections ? 1 : i+1}`}>›</a>
        </section>
      )
      startSlice = endSlice;
      if((menu.movies.length-endSlice) >= 7) {
        endSlice += 7;
      } else{
        endSlice = menu.movies.length;
      }
    }
    return sections;
  }

  const [isHoveringTitleArrow, setIsHoveringTitleArrow] = useState(false);


  const handleMouseHoverSection = () => {
    setIsHoveringTitleArrow(true);
  }

  const handleMouseOutSection = () => {
  setIsHoveringTitleArrow(false);
  }

  return (
    <div  className="mt-5" onMouseOver={handleMouseHoverSection} onMouseOut={handleMouseOutSection}>
        <div className='subTitle'>
          <h3 className='m-0 mr-3'>{menu.title}</h3>
          {
            isHoveringTitleArrow 
            &&
            <div className='d-flex'>
              <span className='textExplorar'>Explorar todos</span>
              <span className='arrow ml-2'>{'>'}</span>
            </div >
          }
        </div>
        <div className="lineSubmenu">
            {renderSections()}
        </div>
    </div>
  )
}
