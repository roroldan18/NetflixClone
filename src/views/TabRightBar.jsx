import '../styles/TabRightBar.scss';
import React from 'react'
import { SearchIcon } from '../components/SearchIcon';
import { NotificationComponent } from '../components/NotificationComponent';

export const TabRightBar = () => {
  return (
      <div className="form-inline my-2 my-lg-0 secondNav">
          <SearchIcon />
          <span>
            <span className="fa-layers-counter iconNotification">10</span>
            <i className="fa-solid fa-bell fa-lg"></i>
            <NotificationComponent />
          </span>
          <span>
            <img src="/assets/img/profilePicture/profile.jpg" className='profilePicture' alt="profile" />
            <i className="fa-solid fa-caret-down iconProfile"></i>
          </span>
      </div>
  )
}
