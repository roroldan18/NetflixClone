import React, { useState } from 'react';

import './MainVideoMenu.scss';
import './LeftMenuMainTrailer.scss';

import { VideoTrailer } from '../components/MainTrailer/VideoTrailer';
import { TitleMovieTrailer } from '../components/MainTrailer/TitleMovieTrailer';
import { SubtitleMovieTrailer } from '../components/MainTrailer/SubtitleMovieTrailer';
import { DescribeMovieTrailer } from '../components/MainTrailer/DescribeMovieTrailer';
import { ButtonMovieTrailer } from '../components/MainTrailer/ButtonMovieTrailer';
import { ButtonManageTrailer } from '../components/MainTrailer/ButtonManageTrailer';
import { TagAge } from '../components/MainTrailer/TagAge';
import { movieTrailer } from '../utils/movieTrailer';
import { buttonsOptions } from '../utils/buttonsOptions';
/* import { SelectionsBar } from './SelectionsBar';
import { optionsTrailer } from '../utils/optionsTrailer'; */

export const MainVideoMenu = ():JSX.Element => {

    const [videoIsPaused, setVideoIsPaused] = useState(false);
    const [videoTrailer, setVideoTrailer] = useState<HTMLVideoElement|null>(null);

  return (
    <div className='bg_movie'>
        <VideoTrailer videoPath={movieTrailer.pathVideo} videoIsPaused={videoIsPaused} setVideoIsPaused={setVideoIsPaused} setVideoTrailer={setVideoTrailer} />
        <div className='movie_trailer_details'>
            <div className='container_title'>
                <TitleMovieTrailer src={movieTrailer.src} alt={movieTrailer.alt} />
            </div>
            {movieTrailer.isTop10 && <SubtitleMovieTrailer position={movieTrailer.position} />}
            <DescribeMovieTrailer description={movieTrailer.description}/>
            <div className='d-flex buttonMovieTrailer'>
                {
                    buttonsOptions.map((button, index) => <ButtonMovieTrailer key={index} svg={button.svg} text={button.text} classN={button.classN} />)
                }
            </div>
        </div>
        <span className="leftMenuMainTrailer">
            <ButtonManageTrailer videoIsPaused={videoIsPaused} setVideoIsPaused={setVideoIsPaused} videoTrailer={videoTrailer} />
            <TagAge age={movieTrailer.age} />
        </span>
        {/* <SelectionsBar options={optionsTrailer} buttonsOptions={buttonsOptions}  /> */}
    </div>
  )
}
