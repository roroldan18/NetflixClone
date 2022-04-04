import React from 'react'

export const PictureSelection = ({option, buttonsOptions}) => {

  return (
    <div className='d-flex fa-align-center center blockImgSelection'>
        <img className='imgSelection' src={option.src} alt={option.alt} />
        <div className='targetPictureSelection'>
          <img src={buttonsOptions[0].svg} alt={buttonsOptions[0].text}/>
          <img src={buttonsOptions[1].svg} alt={buttonsOptions[1].text}/>
        </div>
    </div>
  )
}
