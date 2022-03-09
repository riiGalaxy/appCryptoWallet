import React from "react";
import { Image, Space } from "antd-mobile";

import "./graphic.css";

const graphicImageUrl =
  "https://mercadoforex.net/sites/default/files/grafico-velas-2.png";

const GraphicImage = () => {
  return (
    <div className="graphicContainer">
      <Image src={graphicImageUrl} />;
    </div>
  );
};

export default GraphicImage;
