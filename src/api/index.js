import axios from "axios";

const api = axios;

// const login = () => {
//   console.log("login called");
//   api
//     .get("/auth/google")
//     .then(() => console.log("welcome to log in page"))
//     .catch((e) => console.log("unauthinticated"));
// };

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

const apis = {
  insertCrypto,
  getSearchList,
  getUser,
  getSelectedCoins,
  removeCrypto,
};

export default apis;
