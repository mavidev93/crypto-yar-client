import React, { useContext } from "react";
import { SelectedCoinsContext } from "../../contexts/SelectedCoinsContext";
import customizePrice from "../../helpers/customizePrice";

import TradingViewWidget from "react-tradingview-widget";
import "./CoinDetails.scss";

function CoinDetails(props) {
  const { match } = props;
  const { id } = match.params;

  const { selectedCoins } = useContext(SelectedCoinsContext);
  const coin = selectedCoins.find((coin) => coin.id === id);
  const { name, rank, symbol, quotes } = coin;
  const { price, volume_24h, percent_change_24h } = quotes.USD;

  const roundPrice = parseFloat(price).toFixed(2);
  const roundVolume_24h = customizePrice(parseInt(volume_24h));

  const createCoinPallete = () => (
    <div className="SingleCoin">
      <div className="SingleCoin_name">
        <p>{name}</p>
        <span> رنک : {rank}</span>
        <p>{symbol} :نماد </p>
      </div>
      <div className="SingleCoin_price">
        <span>قیمت متوسط: {roundPrice}</span>
        <span className="price_change">
          (24h)تغییر قیمت :
          <span
            className="price_change--num"
            style={
              percent_change_24h > 0
                ? { color: "#2BC36F" }
                : { color: "#F63B45" }
            }
          >
            {percent_change_24h}
          </span>
        </span>
        <span>$حجم بازار : {` ${roundVolume_24h}  `} </span>
      </div>
      <div className=" SingleCoin_tradingview">
        <TradingViewWidget symbol={`COINBASE:${symbol}USD`} autosize />
      </div>
    </div>
  );
  console.log(coin);
  return <div id="CoinDetails">{createCoinPallete()}</div>;
}
export default CoinDetails;
