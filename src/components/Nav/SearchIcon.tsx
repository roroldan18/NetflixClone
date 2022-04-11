import React, { useEffect, useState } from 'react';
import '../../styles/SearchIcon.scss';


export const SearchIcon = () => {

    const [isVisible, setIsVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const resetValues = () => {
            reset();
        }
        document.addEventListener("mousedown", resetValues)
        return () => {    
          document.removeEventListener("mousedown", resetValues)
        }
      }, [isVisible])

      useEffect(() => {
        if(inputValue !== ''){
            !isVisible&&setIsVisible(true);
        } else{
            isVisible&&setIsVisible(false);
        }
      }, [inputValue, isVisible]);


    const reset = () => {
        setIsVisible(false);
        setInputValue('')
    }
    
    return (
      <span className='searchContainer'>
        <button>
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
        </button>
        <input type="text" className="search-click" value={inputValue} name="searchText" placeholder="Títulos, personas, géneros" onChange={(e) => setInputValue(e.target.value)}/>
        {
            isVisible
            &&
            <span role='button' >
                <i className="fa-solid fa-xmark crossButton fa-lg" onClick={() => reset()}></i>
            </span>
        }
      </span>
  )
}