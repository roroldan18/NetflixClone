import React, { useState } from 'react'
import { PictureSelection } from '../components/PictureSelection';
import { ProgressBar } from '../components/ProgressBar';
import '../styles/SelectionsBar.scss';

export const SelectionsBar = ({options, buttonsOptions}) => {

  const [numberOptionActive, setNumberOptionActive] = useState(1);

  const classStyleSelection = (optionOrder) => {
    return numberOptionActive===optionOrder ? 'selectionActive' : '';
  }

  return (
      <div className='selectionsBar text-center ms-2'>
        {
          options.map(option => 
            <div className={`d-flex row m-1 ${classStyleSelection(option.order)}`} key={option.order}>
              <ProgressBar option={option} setNumberOptionActive={setNumberOptionActive} numberOptionActive={numberOptionActive} />
              <PictureSelection option={option} buttonsOptions={buttonsOptions} />
            </div>
            )
        }
      </div>
  )
}
