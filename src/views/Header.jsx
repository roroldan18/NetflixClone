import React, { useEffect, useState } from "react";
import { TabNavigationBar } from "../components/TabNavigationBar";
import { TabRightBar } from "./TabRightBar";

export const Header = () => {

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
