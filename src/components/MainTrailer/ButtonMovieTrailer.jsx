import React from 'react'
import '../../styles/ButtonMovieTrailer.scss'

export const ButtonMovieTrailer = ({svg, text, classN}) => {

  return (
    <button className={classN}>
        <img src={svg} alt={text}/>
        <p className='m-0 align-middle col text-center'>{text}</p>
    </button>
  )
}
