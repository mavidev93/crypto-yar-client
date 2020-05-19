import React from "react";
import Navbar from "../../components/navbar";
import CoinDetails from "../../components/coinDetails";

function SingleCoinDetails(props) {
  return (
    <>
      {console.log("singleCoin details rerenderd")}
      <Navbar />
      <CoinDetails {...props} />
    </>
  );
}
export default SingleCoinDetails;
