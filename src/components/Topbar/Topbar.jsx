import React from "react";
import { NavBar, Space, Toast } from "antd-mobile";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <NavBar backArrow={false}>
        <h1>CryptoWallet</h1>
      </NavBar>
    </div>
  );
};

export default Topbar;
