import React from "react";
import Navbar from "../../components/navbar";
import CoinDetails from "../../components/coinDetails";

function SingleCoinDetails(props) {
  return (
    <>
      <Navbar />
      <CoinDetails {...props} />
    </>
  );
}
export default SingleCoinDetails;
