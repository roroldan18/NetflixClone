import React from 'react'
import { options } from '../../utils/optionProfiles'
import { users } from '../../utils/usersProfile'
import { ButtonOptionProfile } from './ButtonOptionProfile'
import { UserList } from './UserList'

export const ProfilesComponent = () => {

  return (
    <div className='menuDropHoverProfiles'>
        <i className="fa-solid fa-caret-up m-0 arrowProfiles"/>
      <div className='contentProfiles'>
            {
                users.map(user => <UserList key={user.id} user={user} /> )
            }
            <ButtonOptionProfile option={options[0]} />
        </div>
        <div className='contentProfiles'>
                <ButtonOptionProfile option={options[1]} />
                <ButtonOptionProfile option={options[2]} />
        </div>
        <div className='contentProfiles'>
            <div className="card singleUser">
                <p className="card-text m-2 d-flex justify-content-center">Cerrar sesión en Netflix</p>
        </div>
        </div>
      </div>
  )
}
