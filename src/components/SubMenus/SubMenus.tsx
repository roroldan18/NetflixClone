import React from 'react';
import { LineSubMenu } from './LineSubMenu';
import { subMenus } from '../../utils/subMenus';
import './SubMenus.scss';

export const SubMenus = ():JSX.Element => {

  return (
    <div className='subMenu'>
        {
            subMenus.map(menu => 
                <LineSubMenu menu={menu} key={menu.order}/>
                )
        }
    </div>
  )
}
