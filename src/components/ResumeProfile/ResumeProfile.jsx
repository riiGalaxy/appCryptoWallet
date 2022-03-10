import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Grid, Space } from "antd-mobile";
import "./resumeProfile.css";

const ResumeProfile = ({ stats }) => {
  const [totalCalc, setTotalCalc] = useState(0);
  const [totalProfit, setTotalProfit] = useState(0);
  const [totalProfitPercent, setTotalProfitPercent] = useState(0);
  const [compareInvestment, setCompareInvestment] = useState([]);

  useEffect(() => {
    let totalInvested = 0;
    let profitTotal = 0;

    stats.data.forEach((data) => {
      //total invested
      const quantityXPurchase = data.quantity * data.purchasePrice;
      totalInvested += quantityXPurchase;
      //total profit
      const profitCoin =
        data.quantity * data.actualPrice - data.quantity * data.purchasePrice;
      profitTotal += profitCoin;
    });

    let percentTotalProfit = (profitTotal * 100) / totalInvested;

    setTotalCalc(totalInvested);
    setTotalProfit(profitTotal.toFixed(2));
    setTotalProfitPercent(percentTotalProfit.toFixed(2));

    const profits = stats.data
      .map((data) => {
        const objectData = {
          coin: data.coin,
          value: (
            data.quantity * data.actualPrice -
            data.quantity * data.purchasePrice
          ).toFixed(2),
        };
        return objectData;
      })
      .sort((a, b) => b.value - a.value);
    setCompareInvestment(profits);
  }, []);

  return (
    <>
      <Card block>
        <Grid columns={2} className="resume-profit">
          <div className="resume-profit-p">
            <div className="container-profit">
              <p className="parrafoStart">Total Profit/Loss</p>
            </div>
          </div>
          <div className="container-profit">
            <h1>{totalProfit}</h1>
            <br></br>
            <h1>{totalProfitPercent}%</h1>
          </div>
        </Grid>
      </Card>
      <Grid columns={2} gap={10} className="gridParrafo">
        <Link to={"/portfolio"}>
          <p>Number Of Assets</p>
          <Card block>
            <Grid className="homeList" columns={1} gap={15}>
              <div className="container-card-investment">
                <Space wrap>
                  <h1>{stats.data.length}</h1>
                </Space>
              </div>
            </Grid>
          </Card>
        </Link>

        <Link to={"/portfolio"}>
          <p>Invested Money</p>
          <Card block>
            <Grid className="homeList" columns={1} gap={15}>
              <div className="container-card-investment">
                <div>
                  <h1>{totalCalc} $</h1>
                </div>
              </div>
            </Grid>
          </Card>
        </Link>

        {/* <Link to={"/portfolio"}>
          <p>Total Profit/Loss ($)</p>
          <Card block>
            <Grid className="homeList" columns={2} gap={15}>
              <div className="container-card">
                <div>
                  <h1>{totalProfit}</h1>
                </div>
              </div>
            </Grid>
          </Card>
        </Link>

        <Link to={"/portfolio"}>
          <p>Total profit/loss (%)</p>
          <Card block>
            <Grid className="homeList" columns={1} gap={15}>
              <div className="container-card-investment">
                <Space wrap>
                  <h1>{totalProfitPercent}%</h1>
                </Space>
              </div>
            </Grid>
          </Card>
        </Link> */}

        <Link to={"/portfolio"}>
          <p>Best Performance</p>
          <Card block>
            <Grid className="homeList" columns={1} gap={15}>
              <div className="container-card-investment">
                <Space wrap>
                  {compareInvestment.length > 0 && (
                    <h1>{compareInvestment[0].coin}</h1>
                  )}
                </Space>
                <Space wrap>
                  {compareInvestment.length > 0 && (
                    <h1 className="green">{compareInvestment[0].value} $</h1>
                  )}
                </Space>
              </div>
            </Grid>
          </Card>
        </Link>

        <Link to={"/portfolio"}>
          <p>Worst Performance</p>
          <Card block>
            <Grid className="homeList" columns={1} gap={15}>
              <div className="container-card-investment">
                <Space wrap>
                  {compareInvestment.length > 0 && (
                    <h1>
                      {compareInvestment[compareInvestment.length - 1].coin}
                    </h1>
                  )}
                </Space>
                <Space wrap>
                  {compareInvestment.length > 0 && (
                    <h1 className="red">
                      {compareInvestment[compareInvestment.length - 1].value} $
                    </h1>
                  )}
                </Space>
              </div>
            </Grid>
          </Card>
        </Link>
      </Grid>
    </>
  );
};

export default ResumeProfile;
