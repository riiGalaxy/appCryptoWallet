import axios from "axios";

class ApiServices {
  constructor() {
    this.api = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    });

    this.api.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  getListCrypto = async () => {
    return this.api.get("/coin-market");
  };

  getIdCrypto = async (id) => {
    return this.api.get(`/coin-market/${id}`);
  };
}

const apiServices = new ApiServices();

export default apiServices;
