import React, { useState, useEffect } from "react";
import NewsCards from "../../components/NoticeCards/NoticeCards";
import SwipperNews from "../../components/Swipper/NoticeSwipper";

import newsServices from "../../services/news.services";

import "./news.css";

export const News = () => {
  const [news, changeNews] = useState();

  useEffect(async () => {
    const { data } = await newsServices.getNewsList();

    changeNews(data);
  }, []);

  return (
    <>
      <SwipperNews />
      {news && <NewsCards news={news} />}
    </>
  );
};
