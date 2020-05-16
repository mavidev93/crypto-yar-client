import axios from "axios";
const getCoinById = async (id) =>
  (await axios.get(`https://api.coinpaprika.com/v1/tickers/${id}`)).data;
export { getCoinById };
