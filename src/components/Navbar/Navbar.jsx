import React from "react";
import { TabBar } from "antd-mobile";
import { useNavigate, useLocation } from "react-router-dom";
import {
  AppOutline,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";

import "./navbar.css";

const Bottom = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const setRouteActive = (value) => {
    navigate(value);
  };

  const tabs = [
    {
      key: "/",
      title: "HOME",
      icon: <AppOutline />,
    },
    {
      key: "/portfolio",
      title: "PORTFOLIO",
      icon: <UnorderedListOutline />,
    },
    {
      key: "/news",
      title: "NEWS",
      icon: <MessageOutline />,
    },
    {
      key: "/profile",
      title: "PROFILE",
      icon: <UserOutline />,
    },
  ];

  return (
    <TabBar activeKey={pathname} onChange={(value) => setRouteActive(value)}>
      {tabs.map((item) => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  );
};

const Navigation = (props) => {
  return (
    <div className="bottom">
      <Bottom />
    </div>
  );
};

export default Navigation;
