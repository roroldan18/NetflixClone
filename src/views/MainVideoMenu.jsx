import React, { useState } from 'react';
import { ButtonManageTrailer } from '../components/ButtonManageTrailer';
import { ButtonMovieTrailer } from '../components/ButtonMovieTrailer';
import { DescribeMovieTrailer } from '../components/DescribeMovieTrailer';
import { SubtitleMovieTrailer } from '../components/SubtitleMovieTrailer';
import { TagAge } from '../components/TagAge';
import { TitleMovieTrailer } from '../components/TitleMovieTrailer';
import '../styles/MainVideoMenu.scss';
import '../styles/LeftMenuMainTrailer.scss';
import { VideoTrailer } from '../components/VideoTrailer';
import { SelectionsBar } from './SelectionsBar';

export const MainVideoMenu = () => {

    const [videoIsPaused, setVideoIsPaused] = useState(false);

    const movieTrailer = {
        src: 'https://occ-0-5428-185.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQPJ-UiGBz6Pp778ItFUi8DmaHd3cCY2vAfTzZj8YVPPGJimAx771r_0JK6SpsDZ3b-q0PrA539dyDOO9Ucj9EZaqVkCx3RfPXVtjVbW-WGPxbg8RU1xDqtHsOGuw-aVszLdAlTdp6x8m_oLd1x_W2-5_zjwLtTxhe37YlGzI9TGdg.webp?r=144',
        alt: 'Trailer Movie',
        description: 'Para terminar con una guerra apocalíptica y salvar a su hija, una soldado se embarca en una misión desesperada y cruza el mar congelado con un cargamento secreto.',
        pathVideo: 'assets/videos/Test-Trailer.mp4',
        age: '+16',
        isTop10: true,
        position: 5,
    }

    const options = [
        {
            order: 1,
            src: 'assets/img/flyers/bloodshot.jpg',
            alt: 'Bloodshot',
        },
        {
            order: 2,
            src: 'assets/img/flyers/boo.jpg',
            alt: 'Boo',
        },
        {
            order: 3,
            src: 'assets/img/flyers/goliath.png',
            alt: 'Goliath',
        },
        {
            order: 4,
            src: 'assets/img/flyers/minimalist.jpg',
            alt: 'Minimalist',
        },
        {
            order: 5,
            src: 'assets/img/flyers/movieName.jpg',
            alt: 'Movie Name',
        },
        {
            order: 6,
            src: 'assets/img/flyers/MovieNight.jpg',
            alt: 'Movie Night',
        },
        {
            order: 7,
            src: 'assets/img/flyers/minimalist.jpg',
            alt: 'Minimalist',
        },
        {
            order: 8,
            src: 'assets/img/flyers/movieName.jpg',
            alt: 'Movie Name',
        },
        {
            order: 9,
            src: 'assets/img/flyers/MovieNight.jpg',
            alt: 'Movie Night',
        },
        {
            order: 10,
            src: 'assets/img/flyers/minimalist.jpg',
            alt: 'Minimalist',
        }
    ]

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
        <VideoTrailer videoPath={movieTrailer.pathVideo} videoIsPaused={videoIsPaused} setVideoIsPaused={setVideoIsPaused}  />
        <div className='movie_trailer_details'>
            <TitleMovieTrailer src={movieTrailer.src} alt={movieTrailer.alt} />
            {movieTrailer.isTop10 && <SubtitleMovieTrailer  isTop10={movieTrailer.isTop10} position={movieTrailer.position} />}
            <DescribeMovieTrailer description={movieTrailer.description}/>
            <div className='d-flex buttonMovieTrailer'>
                {
                    buttonsOptions.map((button, index) => <ButtonMovieTrailer key={index} svg={button.svg} text={button.text} classN={button.class} />)
                }
            </div>
        </div>
        <span className="leftMenuMainTrailer">
            <ButtonManageTrailer videoIsPaused={videoIsPaused} setVideoIsPaused={setVideoIsPaused} />
            <TagAge age={movieTrailer.age} />
        </span>
        <SelectionsBar options={options} buttonsOptions={buttonsOptions}  />
    </div>
  )
}
