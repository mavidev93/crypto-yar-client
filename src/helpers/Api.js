import axios from "axios";
const getCoinById = async (id) => {
  console.log("get coinby id called");
  return (await axios.get(`https://api.coinpaprika.com/v1/tickers/${id}`)).data;
};
export { getCoinById };
