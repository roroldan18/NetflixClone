import React from 'react'
import '../../styles/SubMenus.scss';

export const CardMovieSubMenu = ({movie}) => {
  return (
    <img className="card-img-top imgMovieCard" src={movie.src} alt={movie.alt} />
  )
}
