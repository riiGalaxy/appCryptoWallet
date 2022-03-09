import React from "react";
import { Card, Grid, Image, Space } from "antd-mobile";
import { Link } from "react-router-dom";

import crypto1 from "../../static/png/1.png";
import crypto1027 from "../../static/png/1027.png";

import "./cards.css";

const Cards = ({ coins }) => {
  return (
    <Grid columns={2} gap={10}>
      {coins.map((coin) => {
        return (
          <Link to={`/detail/${coin.id}`} key={coin.id}>
            <Card block>
              <Grid className="homeList" columns={2}>
                <Grid.Item className="container-card">
                  {/* <Image href={`crypto${coin.id}`} /> */}
                  <Space wrap>
                    <p>{coin.quote.USD.percent_change_24h.toFixed(2)}%</p>
                  </Space>
                </Grid.Item>
                <div>
                  <h4>{coin.name}</h4>
                  <h3>{coin.quote.USD.price.toFixed(2)} $</h3>
                </div>
              </Grid>
            </Card>
          </Link>
        );
      })}
    </Grid>
  );
};

export default Cards;
