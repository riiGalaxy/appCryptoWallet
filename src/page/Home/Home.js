import React, { useEffect, useState } from "react";
import Session from "../../components/Session/Session";
import Cards from "../../components/Cards/Cards";
import Spinners from "../../components/Spinners/Spinners";
import apiServices from "../../services/crypto.services";

import "./home.css";

export const Home = () => {
  const [coins, changeCoins] = useState([]);

  useEffect(async () => {
    const { data } = await apiServices.getListCrypto();

    changeCoins(data);
  }, []);

  return (
    <div>
      <Session />
      <div className="container">
        {!coins.length ? <Spinners /> : <Cards coins={coins} />}
      </div>
    </div>
  );
};
