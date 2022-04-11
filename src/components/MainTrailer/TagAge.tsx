import React from 'react'
import { MovieTrailer } from '../../utils/movieTrailer';

export const TagAge = ({age}:Pick<MovieTrailer, 'age'>) => {
  return (
    <div className='ageDisplayMovieTrailer'>{age}</div>
  )
}
