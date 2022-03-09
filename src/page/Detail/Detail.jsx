import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AdvancedChart } from "react-tradingview-embed";
import GraphicImage from "../../components/Graphic/Graphic";
import ButtonsCoins from "../../components/GraphicDetailButton/GraphicDetailButton";
import GraphicsButton from "../../components/GraphicsButtons/GraphicsButton";
import HeaderDetail from "../../components/HeaderDetails/HeaderDetail";

import "./detail.css";

import apiServices from "../../services/crypto.services";

export const Details = () => {
  const [coin, changeCoin] = useState();
  const { id } = useParams();

  useEffect(async () => {
    const { data } = await apiServices.getIdCrypto(id);

    changeCoin(data);
  }, []);

  return (
    <>
      {coin && <HeaderDetail coin={coin} />}
      {/* <GraphicsButton />
      <GraphicImage /> */}
      {coin && (
        <div className="graphicContainer">
          <AdvancedChart
            widgetProps={{
              theme: "dark",
              symbol: `BINANCE:${coin.symbol}USDT`,
            }}
          />
        </div>
      )}
      <ButtonsCoins />
    </>
  );
};
