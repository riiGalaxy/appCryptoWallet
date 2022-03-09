import React from "react";
import { Button } from "antd-mobile";
import { Link } from "react-router-dom";
import "./logOutButton.css";

const ButtonLogOut = () => {
  return (
    <div className="buttonContainerLog">
      <Link textDecoration="none" to="/create" size="large">
        <Button block size="large" className="buttonBackgroundLog">
          Sign out
        </Button>
      </Link>
    </div>
  );
};

export default ButtonLogOut;
