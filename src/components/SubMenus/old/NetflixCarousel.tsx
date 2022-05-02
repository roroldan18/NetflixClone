/* import React from 'react'
import './NetflixCarousel.scss';
import { optionsTrailer } from '../../../utils/optionsTrailer';


export const NetflixCarousel = () => {

    const section1Options = optionsTrailer.slice(0, 5);
    const section2Options = optionsTrailer.slice(5, 10);
    const section3Options = optionsTrailer.slice(0, 5);

  return (
    <div className="wrapper">
        <section id="section1">
            <a href="#section3">‹</a>
            {
                section1Options.map( option =>
                <div className="item" key={option.order}>
                    <img src={option.src} alt={option.alt} />
                </div>
                )
            }
            <a href="#section2">›</a>
        </section>

        <section id="section2">
            <a href="#section1">‹</a>
            {
                section2Options.map( option =>
                    <div className="item" key={option.order}>
                        <img src={option.src} alt={option.alt} />
                    </div>
                )
            }   
            <a href="#section3">›</a>
        </section>

        <section id="section3">
            <a href="#section2">‹</a>
            {
                section3Options.map( option =>
                    <div className="item" key={option.order}>
                        <img src={option.src} alt={option.alt} />
                    </div>
                )
            }
            <a href="#section1">›</a>
        </section>
        
    </div>
  )
}
 */