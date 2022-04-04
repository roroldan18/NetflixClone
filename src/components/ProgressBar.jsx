import React, { useEffect, useState } from 'react';
import '../styles/ProgressBar.scss';

export const ProgressBar = ({option, setNumberOptionActive, numberOptionActive}) => {
  const [count, setCount] = useState(0);
  
  const [completeCounter, setCompleteCounter] = useState(false);


  useEffect(() => {
    setInterval(() => {
      setCount(prevCount => {
        if (prevCount === 100) {
          //EL setTimeOut lo manda a la cola y evita problema de actualizacion de estado doble
          setTimeout(() => setCompleteCounter(true), 0);
          return 0;
        }
        return prevCount + 1;
      });
    }, 50);
  }, []);

  useEffect(() => {
    if (completeCounter) {
      setTimeout(() => setNumberOptionActive(numberOptionActive+1), 0);
      setTimeout(() => setCompleteCounter(false), 0);
    }
  }, [completeCounter]);


  

  return (
    <>
      { 
      (numberOptionActive === option.order)
      ? 
      <progress className='progressBar' value={count} max={100} ></progress>
      :
      <progress className='progressBar' value={0} max={100} ></progress>
      }
    </>
  )
}

