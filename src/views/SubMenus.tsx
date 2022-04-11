import React from 'react';
import { LineSubMenu } from '../components/SubMenus/LineSubMenu';
import { subMenus } from '../utils/subMenus';

export const SubMenus = () => {

  return (
    <div className='position-relative subMenu'>
        {
            subMenus.map(menu => 
                <LineSubMenu menu={menu} key={menu.order}/>
                )
        }
    </div>
  )
}
