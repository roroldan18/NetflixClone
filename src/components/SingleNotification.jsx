import React from 'react'

export const SingleNotification = ({notification}) => {
  return (
    <div className="card flex-row singleNotification">
        <div className='col-5'>
            <img className="card-img-left example-card-img-responsive" src={notification.srcImg} alt={notification.description} />
        </div>
        <div className="card-body col-8">
            <p className="card-text m-0">{notification.type}</p>
            <p className="card-text m-0">{notification.description}</p>
            <p className="text-muted small">hace 3 días</p>
        </div>
    </div>
  )
}
