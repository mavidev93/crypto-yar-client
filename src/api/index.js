import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

export const insertCrypto = (payload) =>
  api
    .post("/crypto", payload)
    .then(() => console.log("sucssedful"))
    .catch((e) => console.log("something is wrong"));

const apis = {
  insertCrypto,
};

export default apis;
