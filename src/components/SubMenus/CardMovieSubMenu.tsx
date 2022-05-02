import React, { useState } from 'react';
import './SubMenus.scss';
import { PropCardMoreInfo } from '../../utils/types';
import { ModalCardExpand } from './ModalCardExpand';

export const CardMovieSubMenu = ({option}:PropCardMoreInfo):JSX.Element => {

      const [isOpen, setIsOpen] = useState(false);

      

      return (
        <div className='imgMovieCardDiv' onMouseEnter={ ()=>setIsOpen(true) }  onMouseLeave={ ()=> setIsOpen(false) }   >
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