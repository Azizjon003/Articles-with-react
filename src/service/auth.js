import axios from "./api.js";
const AuthService = {
  async userRegister(user) {
    const res = await axios.post("/users", { user });
    return res.data;
  },
  async userLogin(user) {
    const res = await axios.post("/users/login", { user });
    return res.data;
  },
};

export default AuthService;
