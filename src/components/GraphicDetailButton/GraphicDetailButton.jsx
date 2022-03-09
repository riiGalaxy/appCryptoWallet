import React from "react";
import { Button, Space } from "antd-mobile";
import { Link } from "react-router-dom";
import "./graphicDetailButton.css";

const ButtonsCoins = () => {
  return (
    <div className="buttonContainer">
      <div className="buttonsCoins">
        <Link textDecoration="none" to="/create" size="large">
          <Button block size="large" className="buttonBackground">
            Add investment
          </Button>
        </Link>
      </div>
      {/* <div className="buttonsCoins">
        <Link textDecoration="none" to="/edit" size="large">
          <Button block size="large" className="buttonBackground">
            Edit investment
          </Button>
        </Link>
      </div>
      <div className="buttonsCoins">
        <Link textDecoration="none" to="/portfolio" size="large">
          <Button block size="large" className="buttonBackground">
            Delete investment
          </Button>
        </Link> 
      </div>*/}
    </div>
  );
};

export default ButtonsCoins;
