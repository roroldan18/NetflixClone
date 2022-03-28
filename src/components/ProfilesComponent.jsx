import React from 'react'
import { ButtonOptionProfile } from './ButtonOptionProfile'
import { UserList } from './UserList'

export const ProfilesComponent = () => {

    const users = [
        {
            id: 1,
            srcImg: '/assets/img/profilePicture/iconUser1.png',
            name: 'Martin',
        },
        {
            id: 2,
            srcImg: '/assets/img/profilePicture/iconUser2.png',
            name: 'Juan Carlos',
        },
    ]

    const options = [
        {
        id: 1,
        iconClass: 'fa-solid fa-pen',
        text: 'Administrar perfiles',
        },
        {
        id: 2,
        iconClass: 'fa-regular fa-user',
        text: 'Cuenta',
        },
        {
        id: 3,
        iconClass: 'fa-solid fa-circle-question',
        text: 'Centro de ayuda',
        },
]

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
