import React from "react";
import { List, SwipeAction, Grid, Image } from "antd-mobile";
import { useNavigate } from "react-router-dom";

import "./list.css";

const PortfolioList = ({ investments }) => {
  const navigate = useNavigate();

  const editInvestment = ({ id, coin, quantity, purchasePrice }) => {
    navigate(`/edit/${id}`, {
      state: { id, coin, quantity, purchasePrice },
    });
  };
  const deleteInvestment = () => {
    navigate("/portfolio");
  };

  return (
    <List className="containerList">
      <h1>Your Assets</h1>
      <Grid columns={3}>
        <List.Item>
          <p>Asset</p>
        </List.Item>
        <List.Item>
          <p className="lastTittle">Price</p>
        </List.Item>
        <List.Item>
          <p className="lastTittle">Profit</p>
        </List.Item>
      </Grid>
      {investments.map((investment) => (
        <SwipeAction
          key={investment._id}
          rightActions={[
            {
              key: "edit",
              text: "Edit",
              color: "warning",
              onClick: () => {
                editInvestment({
                  id: investment._id,
                  coin: investment.coin,
                  quantity: investment.quantity,
                  purchasePrice: investment.purchasePrice,
                });
              },
            },
            {
              key: "delete",
              text: "Delete",
              color: "danger",
              onClick: () => {
                deleteInvestment(investment._id);
              },
            },
          ]}
        >
          <Grid columns={3}>
            <List.Item>
              {/* <Image
                src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${investment.id}.png`}
              /> */}
              {investment.coin}
            </List.Item>
            <List.Item>
              <h3 className="lastTittle">
                {investment.actualPrice.toFixed(2)} $
              </h3>
            </List.Item>
            <List.Item>
              <div className="lastColumn">
                <h3
                  className={
                    investment.quantity * investment.actualPrice -
                      investment.quantity * investment.purchasePrice >
                    0
                      ? "green"
                      : "red"
                  }
                >
                  {(
                    investment.quantity * investment.actualPrice -
                    investment.quantity * investment.purchasePrice
                  ).toFixed(2)}{" "}
                  $
                </h3>
                <p>
                  {investment.quantity}
                  {investment.coin.slice(0, 3)}
                </p>
              </div>
            </List.Item>
          </Grid>
        </SwipeAction>
      ))}
    </List>
  );
};

export default PortfolioList;

//// Actual profit en %
//  <p>
//    {(
//      ((investment.quantity * investment.actualPrice -
//        investment.quantity * investment.purchasePrice) *
//        100) /
//      (investment.quantity * investment.purchasePrice)
//    ).toFixed(2)}{" "}
//    %
//  </p>;

{
  /* <div style={{ padding: 12 }}></div> */
}
