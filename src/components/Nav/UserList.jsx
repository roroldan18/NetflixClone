import React from 'react'

export const UserList = ({user}) => {
  return (
    <div className="card flex-row singleUser">
        <div className='col-4 mt-2'>
            <img className="card-img-left example-card-img-responsive otherProfilesImg" src={user.srcImg} alt={user.name} />
        </div>
        <div className="card-body col-8 mt-3">
            <p className="card-text m-0">{user.name}</p>
        </div>
    </div>
  )
}
