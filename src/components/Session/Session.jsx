import React from "react";
import { Button, Space, Grid } from "antd-mobile";
import { Link } from "react-router-dom";
import "./session.css";

const Session = () => {
  return (
    <Grid columns={2} gap={10} className="sessionContainer">
      <Space direction="vertical" block>
        <Link textDecoration="none" to="/register">
          <Button block>Sign up</Button>
        </Link>
      </Space>
      <Space direction="vertical" block>
        <Link to="/login">
          <Button block>Log in</Button>
        </Link>
      </Space>
    </Grid>
  );
};

export default Session;
