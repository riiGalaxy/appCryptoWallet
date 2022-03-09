import { useEffect, useState } from "react";
import ButtonInvestment from "../../components/Button/Button";
import PortfolioList from "../../components/PortfolioList/List";

import "./portfolio.css";

import investmentServices from "../../services/investment.services.js";

export const Portfolio = () => {
  const [investments, changeInvestments] = useState();

  useEffect(async () => {
    const { data } = await investmentServices.getListInvestment();

    changeInvestments(data);
  }, []);

  return (
    <>
      <div>
        <div className="containerPortfolio">
          {investments && <PortfolioList investments={investments} />}
          <ButtonInvestment />
        </div>
      </div>
    </>
  );
};
