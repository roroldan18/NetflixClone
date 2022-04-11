import React from 'react';
import { PropOptionProfile } from '../../utils/types';

export const ButtonOptionProfile = ({option}:PropOptionProfile) => {
  return (
    <div className="card flex-row singleUser">
        <div className='col-4 mt-2'>
            <i className={option.iconClass}></i>
        </div>
        <div className="card-body col-8 mt-3">
            <p className="card-text m-0">{option.text}</p>
        </div>
    </div>
  )
}
