import React, { useEffect, useState } from "react";
import { TabNavigationBar } from "../components/Nav/TabNavigationBar";
import { TabRightBar } from "./TabRightBar";
import './Header.scss';

export const Header = ():JSX.Element => {

  const [classNav, setClassNav] = useState('');

  useEffect(() => {
    document.onscroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      if (scrollTop > 0) {
        setClassNav('-normal')
      } else{
        setClassNav('')
      }
    }
  }, []);

  return (
      <nav className={`navbar navbar-expand-lg navbar-dark navBarStick${classNav}`} id="header">
        <TabNavigationBar />
        <TabRightBar />
      </nav>
  );
};
