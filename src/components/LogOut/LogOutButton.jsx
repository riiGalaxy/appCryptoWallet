import React, { useContext } from "react";
import { Button } from "antd-mobile";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import "./logOutButton.css";

const ButtonLogOut = () => {
  const { logOutUser } = useContext(UserContext);

  return (
    <div className="buttonContainerLog">
      <Link textDecoration="none" to="/" size="large">
        <Button
          onClick={logOutUser}
          block
          size="large"
          className="buttonBackgroundLog"
        >
          Sign out
        </Button>
      </Link>
    </div>
  );
};

export default ButtonLogOut;
