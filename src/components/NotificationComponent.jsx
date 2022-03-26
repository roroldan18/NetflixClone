import React from 'react'
import { SingleNotification } from './SingleNotification'

export const NotificationComponent = () => {

    const notifications = [
        {
        type: 'Estreno',
        description: 'Proyecto Géminis',
        creationDate: new Date(),
        srcImg: '/assets/notifications/Gemini_man.webp',
        top10: false,
        newEpisodes: false,
        },
        {
        type: 'Estreno',
        description: 'Cangrejo Negro',
        creationDate: new Date(),
        srcImg: '/assets/notifications/Cangrejo-Negro.jpeg',
        top10: true,
        newEpisodes: true,
        },
        {
        type: 'Estreno',
        description: 'Flash',
        creationDate: new Date(),
        srcImg: '/assets/notifications/The-Flash.webp',
        top10: false,
        newEpisodes: false,
        },

]

  return (
    <div className='menuDropHover notificationHover'>
        {
            notifications.map(notification => <SingleNotification notification={notification} /> )
        }
    </div>
  )
}
