import React from "react";
import { AutoCenter, Grid, Space, SpinLoading } from "antd-mobile";

const Spinners = () => {
  return (
    <>
      <div>
        <AutoCenter style={{ marginTop: "150px" }}>
          <Space direction="horizontal" wrap block style={{ "--gap": "16px" }}>
            <Grid columns={1}>
              <SpinLoading
                AutoCenter
                color={"#fcd537"}
                style={{ "--size": "75px" }}
              />
            </Grid>
          </Space>
        </AutoCenter>
      </div>
    </>
  );
};

export default Spinners;
