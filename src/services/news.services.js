import axios from "axios";

class NewsServices {
  constructor() {
    this.news = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    });
  }

  getNewsList = async () => {
    return this.news.get("/news");
  };
}

const newsServices = new NewsServices();

export default newsServices;
