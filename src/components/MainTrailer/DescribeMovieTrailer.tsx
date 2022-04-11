import React from 'react'
import { MovieTrailer } from '../../utils/movieTrailer'

export const DescribeMovieTrailer = ({description}:Pick<MovieTrailer, 'description'>) => {
  return (
    <p className='descriptionMovieTrailer'>{description}</p>
  )
}
