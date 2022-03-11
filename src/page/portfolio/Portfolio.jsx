import { useEffect, useState } from "react";

import ButtonInvestment from "../../components/Button/Button";
import PortfolioList from "../../components/PortfolioList/List";
import Session from "../../components/Session/Session";
import "./portfolio.css";

import investmentServices from "../../services/investment.services.js";

export const Portfolio = () => {
  const [investments, changeInvestments] = useState([]);
  const [isDelete, setIsDelete] = useState(false);

  useEffect(async () => {
    const { data } = await investmentServices.getListInvestment();

    changeInvestments(data);
  }, [isDelete]);

  const deleteInvestment = async (data) => {
    await investmentServices.deleteInvestment(data);
    setIsDelete(!isDelete);
  };

  return (
    <>
      <div>
        <div className="containerPortfolio">
          {!investments && <Session />}
          {investments && (
            <PortfolioList
              investments={investments}
              deleteInvestment={deleteInvestment}
            />
          )}
          {investments && <ButtonInvestment />}
        </div>
      </div>
    </>
  );
};
