import React, { useState } from 'react'
import { OptionsTrailer } from '../../utils/optionsTrailer';

import { PropLineSubMenu } from '../../utils/types';
import { CardMovieSubMenu } from './CardMovieSubMenu';


export const LineSubMenu = ({menu}:PropLineSubMenu):JSX.Element => {


  const length=7;

  let startSlice = 0;
  let endSlice = length;
  const totalSections = Math.ceil(menu.movies.length/length);

  const renderSections = () => {

    const sections = [];

    for (let i = 1; i <= totalSections; i++) {

      sections.push(
        <section id={`section${menu.order}-${i}`} key={i}>
          <div className='relativeContainerArrow'>
            <a className='arrowPrev' href={`#section${menu.order}-${i === 1 ? totalSections : i-1}`}>‹</a>
          </div>
          {
            menu.movies.slice(startSlice, endSlice).map( (option:OptionsTrailer) =>
              <CardMovieSubMenu option={option} key={option.order} />
            )
          }
          <div className='relativeContainerArrow'>
            <a className='arrowNext' href={`#section${menu.order}-${i === totalSections ? 1 : i+1}`}>›</a>
          </div>
        </section>
      )
      
      startSlice = endSlice;
      if((menu.movies.length-endSlice) >= length) {
        endSlice += length;
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
    <div  className="lineSection mt-5" onMouseOver={handleMouseHoverSection} onMouseOut={handleMouseOutSection}>
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
