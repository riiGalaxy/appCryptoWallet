import axios from "axios";

class Investment {
  constructor() {
    this.investment = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    });
    this.investment.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("userToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  createNewInvestment = async (data) => {
    return this.investment.post("/portfolio/investment", data);
  };

  getListInvestment = async () => {
    return this.investment.get("/portfolio/investment");
  };

  editInvestmentId = async (data) => {
    return this.investment.put(`/portfolio/investment/${data.id}`, data);
  };

  deleteInvestment = async (data) => {
    console.log("app----borrandoooooo", data);

    return this.investment.delete(`/portfolio/investment/${data}`);
  };
}

const investmentServices = new Investment();

export default investmentServices;
