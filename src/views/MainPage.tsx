import React from 'react'
import { Header } from './Header'
import { MainVideoMenu } from './MainVideoMenu'
import { SubMenus } from './SubMenus'

export const MainPage = ():JSX.Element => {

  return (
    <div>
      <Header />
      <MainVideoMenu />
      <SubMenus />
    </div>
  )
}
