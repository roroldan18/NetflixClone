import React from 'react'
import '../../styles/SubMenus.scss';
import { PropCardMoreInfo } from '../../utils/types';

export const CardMovieSubMenu = ({option}:PropCardMoreInfo) => {
  return (
    <img className="card-img-top imgMovieCard" src={option.src} alt={option.alt} />
  )
}
