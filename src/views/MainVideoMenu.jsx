import React from 'react';
import { ButtonMovieTrailer } from '../components/ButtonMovieTrailer';
import { DescribeMovieTrailer } from '../components/DescribeMovieTrailer';
import { SubtitleMovieTrailer } from '../components/SubtitleMovieTrailer';
import { TitleMovieTrailer } from '../components/TitleMovieTrailer';
import '../styles/MainVideoMenu.scss';

export const MainVideoMenu = () => {

    const titleMovieTrailer = {
        src: 'https://occ-0-5428-185.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQPJ-UiGBz6Pp778ItFUi8DmaHd3cCY2vAfTzZj8YVPPGJimAx771r_0JK6SpsDZ3b-q0PrA539dyDOO9Ucj9EZaqVkCx3RfPXVtjVbW-WGPxbg8RU1xDqtHsOGuw-aVszLdAlTdp6x8m_oLd1x_W2-5_zjwLtTxhe37YlGzI9TGdg.webp?r=144',
        alt: 'Trailer Movie',
        description: 'Para terminar con una guerra apocalíptica y salvar a su hija, una soldado se embarca en una misión desesperada y cruza el mar congelado con un cargamento secreto.',
        isTop10: true,
        position: 5,
    }

    const buttonsOptions = [
        {
            id: 1,
            svg: 'https://www.svgrepo.com/show/95124/play-button.svg',
            text: 'Reproducir',
            class: 'light',
        },
        {
            id: 2,
            svg: 'https://www.svgrepo.com/show/332421/info-circle.svg',
            text: 'Más información',
            class: 'dark',
        }
    ]

  return (
    <div className='bg_movie'>
        <div className='movie_trailer_details'>
            <TitleMovieTrailer src={titleMovieTrailer.src} alt={titleMovieTrailer.alt} />
            {titleMovieTrailer.isTop10 && <SubtitleMovieTrailer  isTop10={titleMovieTrailer.isTop10} position={titleMovieTrailer.position} />}
            <DescribeMovieTrailer description={titleMovieTrailer.description}/>
            <div className='d-flex buttonMovieTrailer'>
                {
                    buttonsOptions.map(button => <ButtonMovieTrailer svg={button.svg} text={button.text} classN={button.class} />)
                }
            </div>
        </div>
    </div>
  )
}
