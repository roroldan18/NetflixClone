import React from "react";
import { TabNavigationBar } from "../components/TabNavigationBar";
import { TabRightBar } from "./TabRightBar";

export const Header = () => {
  return (
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark">
        <TabNavigationBar />
        <TabRightBar />
      </nav>
  );
};
