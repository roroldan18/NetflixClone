import React from 'react'
import { SingleNotification } from './SingleNotification'

export const NotificationComponent = () => {

    const notifications = [
        {
        id: 1,
        type: 'Estreno',
        description: 'Proyecto Géminis',
        creationDate: new Date(),
        srcImg: '/assets/notifications/Gemini_man.webp',
        top10: false,
        newEpisodes: false,
        },
        {
        id: 2,
        type: 'Estreno',
        description: 'Cangrejo Negro',
        creationDate: new Date(),
        srcImg: '/assets/notifications/Cangrejo-Negro.jpeg',
        top10: true,
        newEpisodes: true,
        },
        {
        id: 3,
        type: 'Estreno',
        description: 'Flash',
        creationDate: new Date(),
        srcImg: '/assets/notifications/The-Flash.webp',
        top10: false,
        newEpisodes: false,
        },
        {
        id: 4,
        type: 'Estreno',
        description: 'Proyecto Géminis',
        creationDate: new Date(),
        srcImg: '/assets/notifications/Gemini_man.webp',
        top10: false,
        newEpisodes: false,
        },
        {
        id: 5,
        type: 'Estreno',
        description: 'Cangrejo Negro',
        creationDate: new Date(),
        srcImg: '/assets/notifications/Cangrejo-Negro.jpeg',
        top10: true,
        newEpisodes: true,
        },
        {
        id: 6,
        type: 'Estreno',
        description: 'Flash',
        creationDate: new Date(),
        srcImg: '/assets/notifications/The-Flash.webp',
        top10: false,
        newEpisodes: false,
        },
        {
        id: 7,
        type: 'Estreno',
        description: 'Proyecto Géminis',
        creationDate: new Date(),
        srcImg: '/assets/notifications/Gemini_man.webp',
        top10: false,
        newEpisodes: false,
        },
        {
        id: 8,
        type: 'Estreno',
        description: 'Cangrejo Negro',
        creationDate: new Date(),
        srcImg: '/assets/notifications/Cangrejo-Negro.jpeg',
        top10: true,
        newEpisodes: true,
        },
        {
        id: 9,
        type: 'Estreno',
        description: 'Flash',
        creationDate: new Date(),
        srcImg: '/assets/notifications/The-Flash.webp',
        top10: false,
        newEpisodes: false,
        },

]

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
