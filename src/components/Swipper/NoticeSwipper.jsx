import React, { useRef } from "react";
import { Swiper, Toast } from "antd-mobile";
import "./noticeSwiper.css";

// const colors = ["#292c32", "#292c32", "#292c32", "#292c32"];
const colors = [
  "https://d500.epimg.net/cincodias/imagenes/2021/08/23/mucho_mas_que_criptos/1629739351_078876_1629740349_noticia_normal_recorte1.jpg",
  "https://phantom-marca.unidadeditorial.es/8e8217e66927348c75b825febeb55185/resize/660/f/webp/assets/multimedia/imagenes/2022/02/15/16449488999474.jpg",
  "https://i0.wp.com/criptotendencia.com/wp-content/uploads/2021/02/Binance-coin-BNB-paso-de-40-a-casi-150-en-solo-9-dias.png?fit=1598%2C900&ssl=1",
  "https://www.welivesecurity.com/wp-content/uploads/2018/09/blockchain-que-es-como-funciona.jpg",
  "https://www.criptonoticias.com/wp-content/uploads/2017/12/bitcoin-logo-blockchain-hist%C3%B3rico-1024x640.jpg",
  "https://www.cointribune.com/app/uploads/2021/12/binance-guncellemeye-gidiyor-hangi-sorunlar-cozulecek.jpg",
];

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div style={{ background: color }}>
      <img src={color} className="imagenSwipper" />
    </div>
  </Swiper.Item>
));

const SwipperNews = () => {
  const ref = useRef();
  return (
    <div className="containerNews">
      <Swiper
        autoplay
        style={{
          "--border-radius": "8px",
        }}
      >
        {items}
      </Swiper>
    </div>
  );
};

export default SwipperNews;
