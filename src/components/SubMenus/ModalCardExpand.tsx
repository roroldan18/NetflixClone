import React from 'react'
import { PropCardMoreInfo } from '../../utils/types';

export const ModalCardExpand = ({option}: PropCardMoreInfo) => {
  return (
    <div className='imgMovieCardDivInfoContainer'>
        <div className='allCardFixed'>
            <img className="card-img-top imgMovieCardExpansive" src={option.src} alt={option.alt} />
            <div className='infoCard'>
                <div className='iconFirstLine d-flex'>
                <div className='containerIcon playIcon'>
                    <i className="fa-solid fa-play "></i>
                </div>
                <div className='containerIcon normalIcon'>
                    <i className="fa-solid fa-plus "></i>
                </div>
                <div className='containerIcon normalIcon'>
                <i className="fa-solid fa-thumbs-up"></i>
                </div>
                <div className='containerIcon normalIcon'>
                    <i className="fa-solid fa-thumbs-down"></i>
                </div>
                <div className='containerIcon lastIcon'>
                    <i className="fa-solid fa-angle-down"></i>
                </div>
                </div>
                <div className='secondLine d-flex'>
                <h4>99% para ti</h4>
                <p>16+</p>
                <h5>6 temporadas</h5>
                <p>HD</p>
                </div>
                <div className='thirdLine'>
                <p>Inusual</p>
                <span className="separatorCategory"></span>
                <p>Drama</p>
                <span className="separatorCategory"></span>
                <p>Crudo</p>
                </div>
                <div className='forthLine'>
                <div className='likeNetflix'>
                    <i className="fa-solid fa-thumbs-up"></i>
                </div>
                <p>Con más «Me gusta»</p>
                </div>
            </div>
        </div>
    </div>
  )
}