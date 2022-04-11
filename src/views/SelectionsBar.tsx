import React, { useState } from 'react'
import { PictureSelection } from '../components/SelectionsBar/PictureSelection';
import { ProgressBar } from '../components/SelectionsBar/ProgressBar';
import '../styles/SelectionsBar.scss';
import { OptionsTrailer } from '../utils/optionsTrailer';
import { PropSelectionBar } from '../utils/types';

export const SelectionsBar = ({options, buttonsOptions}:PropSelectionBar) => {

  const [count, setCount] = useState(0);

  const [numberOptionActive, setNumberOptionActive] = useState(1);

  const classStyleSelection = (optionOrder:number) => {
    return numberOptionActive===optionOrder ? 'selectionActive' : '';
  }

  const handleClickSelection = (optionOrder:number) => {
    setNumberOptionActive(optionOrder);
    setCount(0);
  }

  return (
    <>
      <div className="subMenu">
        <h2 className='text-white titleSection'>Selecciones para ti</h2>
        <div className='selectionsBar text-center ms-2'>
          {
            options.map((option:OptionsTrailer) => 
              <div role='button' className={`d-flex row m-1 selectionCard ${classStyleSelection(option.order)}`} key={option.order} onClick={ () => handleClickSelection(option.order)}>
                <ProgressBar option={option} setNumberOptionActive={setNumberOptionActive} numberOptionActive={numberOptionActive} setCount={setCount} count={count} />
                <PictureSelection option={option} buttonsOptions={buttonsOptions} numberOptionActive={numberOptionActive}/>
              </div>
              )
          }
        </div>
      </div>
    </>
  )
}
