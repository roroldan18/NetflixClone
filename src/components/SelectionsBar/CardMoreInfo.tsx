import React from 'react';
import {  PropCardMoreInfoSelection } from '../../utils/types';

export const CardMoreInfo = ({option}:PropCardMoreInfoSelection) => {

  return (
      <div className=''>
        <div className="card moreInfoMovie" >
            <img className="card-img-top m-0 p-0" src={option.src} alt={option.alt} />
            <h5 className="card-titl titleCard">{option.alt}</h5>
        </div>
      </div>
  )
}
