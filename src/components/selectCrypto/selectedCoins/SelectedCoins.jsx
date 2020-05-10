import React from "react";
import SingleCoin from "../../singleCoin";
function SelectedCoins({ selectedCoins, removeCoin }) {
  return (
    <div>
      {selectedCoins.map((coin) => (
        <SingleCoin key={coin.id} removeCoin={removeCoin} {...coin} />
      ))}
    </div>
  );
}
export default SelectedCoins;
