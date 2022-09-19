import React, { useState } from 'react';
import './SubMenus.scss';
import { PropCardMoreInfo } from '../../utils/types';
import { ModalCardExpand } from './ModalCardExpand';

export const CardMovieSubMenu = ({option}:PropCardMoreInfo):JSX.Element => {

      const [isOpen, setIsOpen] = useState(false);
      
      let timer = 0;
      const TIMEOUT = 200;

      const handleHoverEnter = () => {
        timer = window.setTimeout(() => {
          setIsOpen(true);
        }, TIMEOUT);
      }

      const hoverOut = () => {
        clearTimeout(timer);
        setIsOpen(false);
      }

      

      return (
        <div className='imgMovieCardDiv' onMouseEnter={handleHoverEnter}  onMouseLeave={hoverOut}   >
          {
            !!isOpen 
            ?
            <ModalCardExpand option={option}/>
            :
            <img className="imgMovieCard" src={option.src} alt={option.alt} />
          }
        </div>
      );
  }