import React from 'react'
import { menu } from '../../utils/menu'

export const TabNavigationBar = () => {
 
  return (
    <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      <img src="/assets/img/logo-netflix.png" alt="Logo Netflix" className="maxSizeLogo p-2" />
      <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
        {
          menu.map((item, index) => (
            <li className="nav-item" key={index}>
              <a className="nav-link" href="/">{item.title}</a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
