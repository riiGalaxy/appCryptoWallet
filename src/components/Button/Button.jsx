import React from "react";
import { Button, Space } from "antd-mobile";
import { Link } from "react-router-dom";
import "./button.css";

const ButtonInvestment = () => {
  return (
    <div className="buttonContainer">
      <Link textDecoration="none" to="/create" size="large">
        <Button block size="large" className="buttonBackground">
          Add New Asset
        </Button>
      </Link>
    </div>
  );
};

export default ButtonInvestment;
