import React from 'react'

import './ButtonMovieTrailer.scss';
import { ButtonOption } from '../../utils/buttonsOptions';

export const ButtonMovieTrailer = ({svg, text, classN}:Pick<ButtonOption, 'svg'|'text'|'classN'>) => {

  return (
    <button className={classN}>
        <img src={svg} alt={text}/>
        <p className='m-0 align-middle col text-center'>{text}</p>
    </button>
  )
}
