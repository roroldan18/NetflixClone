import React from 'react'
import { CardMovieSubMenu } from './CardMovieSubMenu';

export const LineSubMenu = ({menu}) => {


  let startSlice = 0;
  let endSlice = 5;
  const totalSections = Math.ceil(menu.movies.length/6);

  const renderSections = () => {
    const sections = [];
    for (let i = 1; i <= totalSections; i++) {
      sections.push(
        <section id={`section${menu.order}-${i}`} key={i}>
          <a className='arrowPrev' href={`#section${menu.order}-${i === 1 ? totalSections : i-1}`}>‹</a>
          {
            menu.movies.slice(startSlice, endSlice).map( movie =>
              <CardMovieSubMenu movie={movie} key={movie.id}/>
            )
          }
          <a className='arrowNext' href={`#section${menu.order}-${i === totalSections ? 1 : i+1}`}>›</a>
        </section>
      )
      startSlice = endSlice;
      endSlice += 5;
    }
    return sections;
  }

  return (
    <div  className="mt-5">
        <h3 className='subTitle'>{menu.title}</h3>
        <div className="lineSubmenu">
            {renderSections()}
        </div>
    </div>
  )
}
