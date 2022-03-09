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
    navigate("/delete");
  };

  return (
    <List className="containerList">
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
          <Grid columns={2}>
            <List.Item>
              {investment.coin}
              <p>Purchase price: {investment.purchasePrice}</p>
              <p>
                Investment value:
                {investment.quantity * investment.purchasePrice}
              </p>
              {/* <Image justify-content-center src={img} /> */}
            </List.Item>
            <div style={{ padding: 12 }}>
              <p>
                Actual profit:
                {(
                  investment.quantity * investment.actualPrice -
                  investment.quantity * investment.purchasePrice
                ).toFixed(2)}{" "}
                $
              </p>
              <p>
                {(
                  ((investment.quantity * investment.actualPrice -
                    investment.quantity * investment.purchasePrice) *
                    100) /
                  (investment.quantity * investment.purchasePrice)
                ).toFixed(2)}{" "}
                %
              </p>
            </div>
          </Grid>
        </SwipeAction>
      ))}
    </List>
  );
};

export default PortfolioList;
