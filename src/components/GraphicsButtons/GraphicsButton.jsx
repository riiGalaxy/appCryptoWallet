import React from "react";
import { Button, Space, Grid } from "antd-mobile";
import { Link } from "react-router-dom";

import "./graphicsButton.css";

const GraphicsButton = () => {
  return (
    <Grid columns={3} gap={10} className="graphicsContainer">
      <Space direction="vertical" block>
        <Link textDecoration="none" to="/#">
          <Button block>1d</Button>
        </Link>
      </Space>
      <Space direction="vertical" block>
        <Link to="/#">
          <Button block>7d</Button>
        </Link>
      </Space>
      <Space direction="vertical" block>
        <Link to="/#">
          <Button block>1M</Button>
        </Link>
      </Space>
    </Grid>
  );
};

export default GraphicsButton;
