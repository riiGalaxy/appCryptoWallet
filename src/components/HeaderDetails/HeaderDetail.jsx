import { Card, Grid, Space } from "antd-mobile";

import "./headerDetail.css";

const HeaderDetail = ({ coin }) => {
  return (
    // <Grid columns={1} gap={5}>
    <Card block>
      <Grid className="HeaderName" columns={1}>
        <div className="container-card">
          <Space wrap>
            <Grid columns={2} justify-content-center>
              <h2>{coin.name}</h2>
              <h2>{coin.quote.USD.price.toFixed(2)}$</h2>
            </Grid>
          </Space>
        </div>
      </Grid>
    </Card>
    // </Grid>
  );
};

export default HeaderDetail;
