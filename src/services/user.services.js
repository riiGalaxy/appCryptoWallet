import axios from "axios";

class User {
  constructor() {
    this.user = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`,
    });
    this.user.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem("userToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }
  createNewUser = async (data) => {
    return this.user.post("/user/register", data);
  };

  loginUser = async (data) => {
    return this.user.post("/user/login", data);
  };

  verify(token) {
    return this.user.get("/user/verify", {
      headers: { Authorization: `Bearer ${token}` },
    });
  }
}

const userServices = new User();

export default userServices;
