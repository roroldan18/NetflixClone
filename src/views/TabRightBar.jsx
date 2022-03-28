import '../styles/TabRightBar.scss';
import React, { useState } from 'react'
import { SearchIcon } from '../components/SearchIcon';
import { NotificationComponent } from '../components/NotificationComponent';

export const TabRightBar = () => {

  let timer = 0;
  const TIMEOUT = 500;

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseHover = () => {
    setIsHovering(true);
    clearTimeout(timer);
  }

  const handleMouseOut = () => {
    timer = setTimeout(() => {
      setIsHovering(false);
    }, TIMEOUT);
  }



  return (
      <div className="form-inline my-2 my-lg-0 secondNav">
          <SearchIcon />
          <span onMouseOver={handleMouseHover} onMouseOut={handleMouseOut}>
            <span className="fa-layers-counter iconNotification">10</span>
            <i className="fa-solid fa-bell fa-lg"></i>
            { isHovering && <NotificationComponent setIsHovering={setIsHovering}/>}
          </span>
          <span>
            <img src="/assets/img/profilePicture/profile.jpg" className='profilePicture' alt="profile" />
            <i className="fa-solid fa-caret-down iconProfile"></i>
          </span>
      </div>
  )
}
