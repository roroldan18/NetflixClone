import '../styles/TabRightBar.scss';
import React, { useState } from 'react'
import { SearchIcon } from '../components/Nav/SearchIcon';
import { NotificationComponent } from '../components/Nav/NotificationComponent';
import { ProfilesComponent } from '../components/Nav/ProfilesComponent';


export const TabRightBar = () => {

  let timer = 0;
  const TIMEOUT = 500;

  const [isHoveringNotifications, setIsHoveringNotifications] = useState(false);
  const [isHoveringProfiles, setIsHoveringProfiles] = useState(false);

  const handleMouseHoverNotification = () => {
    setIsHoveringProfiles(false);
    setIsHoveringNotifications(true);
    clearTimeout(timer);
  }

  const handleMouseOutNotification = () => {
    timer = setTimeout(() => {
      setIsHoveringNotifications(false);
    }, TIMEOUT);
  }

  const handleMouseHoverProfiles = () => {
    setIsHoveringNotifications(false);
    setIsHoveringProfiles(true);
    clearTimeout(timer);
  }

  const handleMouseOutProfiles = () =>{
    timer = setTimeout(() => {
      setIsHoveringProfiles(false);
    }, TIMEOUT);
  }



  return (
      <div className="form-inline my-2 my-lg-0 secondNav">
          <SearchIcon />
          <span onMouseOver={handleMouseHoverNotification} onMouseOut={handleMouseOutNotification} className='notificationsMenu'>
            <span className="fa-layers-counter iconNotification">10</span>
            <i className="fa-solid fa-bell fa-lg"></i>
            { isHoveringNotifications && <NotificationComponent/>}
          </span>
          <span onMouseOver={handleMouseHoverProfiles} onMouseOut={handleMouseOutProfiles} className='profilesMenu'>
            <img src="/assets/img/profilePicture/profile.jpg" className='profilePicture' alt="profile" />
            <i className="fa-solid fa-caret-down iconProfile"></i>
            { isHoveringProfiles && <ProfilesComponent />}
          </span>
      </div>
  )
}
