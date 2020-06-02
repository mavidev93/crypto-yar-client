import axios from "axios";

const api = axios;

const insertCrypto = (coin) =>
  api
    .post("/crypto/selected", { coin })
    .then(() => console.log("sucssedful"))
    .catch((e) => console.log("something is wrong"));
const getSearchList = (searchInput = "empty") =>
  api.get(`/crypto/search/${searchInput}`);
const getSelectedCoins = () => {
  return api.get("crypto/getCoins");
};

const removeCrypto = (coinId) => {
  return api.post("/crypto/remove", { coinId });
};

const getUser = () => {
  return api.get("/auth/user");
};

const logout = () => {
  return api.get("/auth/logout");
};

const apis = {
  insertCrypto,
  getSearchList,
  getUser,
  getSelectedCoins,
  removeCrypto,
  logout,
};

export default apis;
