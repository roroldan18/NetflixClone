import React from 'react'
import { notifications } from '../../utils/notifications'
import { SingleNotification } from './SingleNotification'

export const NotificationComponent = () => {

  return (
    <div className='menuDropHoverNotification'>
      <i className="fa-solid fa-caret-up m-0 arrowNotificacion"/>
      <div className='contentNotification '>
            {
                notifications.map(notification => <SingleNotification key={notification.id} notification={notification} /> )
            }
        </div>
      </div>
  )
}
