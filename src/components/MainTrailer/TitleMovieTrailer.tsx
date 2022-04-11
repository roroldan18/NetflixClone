import React from 'react'
import { MovieTrailer } from '../../utils/movieTrailer'

export const TitleMovieTrailer = ({src, alt}:Pick<MovieTrailer, 'src' | 'alt'>) => {
  return (
    <img src={src} alt={alt} className='titleMovieTrailer' />
  )
}
