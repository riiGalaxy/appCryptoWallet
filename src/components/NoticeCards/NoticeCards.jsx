import React from "react";
import { Card, Grid, Image, Space } from "antd-mobile";
import "./noticeCars.css";

const imgNoticeUrl =
  "https://cdn.pixabay.com/photo/2017/01/25/12/31/bitcoin-2007769_960_720.jpg";
const imgNoticeUrl2 =
  "https://imagenes.20minutos.es/files/image_656_370/uploads/imagenes/2021/10/01/bitcoin-predicciones.png";

const NewsCards = ({ news }) => {
  console.log(news.Data);
  let cutNews = news.Data.slice(0, 10);
  console.log(cutNews);
  return (
    <Grid columns={2} gap={10} className="homeList">
      {cutNews.map((value) => {
        return (
          <a href={value.guid} key={value.id}>
            <Card block>
              <div className="container-news-cards">
                <Space wrap>
                  <Image src={value.imageurl} />
                </Space>

                <div>
                  <h1>{value.title}</h1>
                  <p>{value.body.slice(0, 200)}</p>
                </div>
              </div>
            </Card>
          </a>
        );
      })}
    </Grid>
  );
};

export default NewsCards;
