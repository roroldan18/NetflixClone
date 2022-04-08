import React, { useEffect, useState } from 'react';
import '../../styles/ProgressBar.scss';

export const ProgressBar = ({option, setNumberOptionActive, numberOptionActive, setCount, count}) => {
  
  const [completeCounter, setCompleteCounter] = useState(false);

  const maxOptions = 10;

  useEffect(() => {
    if(numberOptionActive === option.order) {
      setInterval(() => {
        setCount(prevCount => {
          if (prevCount === 100) {
            //EL setTimeOut lo manda a la cola y evita problema de actualizacion de estado doble
            setTimeout(() => setCompleteCounter(true), 0);
            return 0;
          }
          return prevCount + 1;
        });
      }, 100);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (completeCounter) {
      setTimeout(() => setNumberOptionActive(numberOptionActive === maxOptions ? 1 : numberOptionActive+1), 0);
      setTimeout(() => setCompleteCounter(false), 0);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [completeCounter]);



  return (
    <>
      { 
      (numberOptionActive === option.order)
      ? 
      <progress value={count} max={100} ></progress>
      :
      <progress value={0} max={100} ></progress>
      }
    </>
  )
}

