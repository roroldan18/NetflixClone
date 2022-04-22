import React, { useEffect, useState } from 'react'
import { MovieTrailer } from '../../utils/movieTrailer'

export const TitleMovieTrailer = ({src, alt}:Pick<MovieTrailer, 'src' | 'alt'>) => {

  const [classVideo, setClassVideo] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setClassVideo('-started')
    }, 3000);
  }, [])
  

  return (
    <img src={src} alt={alt} className={`titleMovieTrailer${classVideo}`} />
  )
}
