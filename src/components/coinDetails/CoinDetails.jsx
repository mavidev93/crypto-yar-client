import React, { useContext, useState } from "react";
import { SelectedCoinsContext } from "../../contexts/SelectedCoinsContext";
import customizePrice from "../../helpers/customizePrice";

import { getCoinById } from "../../helpers/Api";
import TradingViewWidget from "react-tradingview-widget";
import "./CoinDetails.scss";

function CoinDetails(props) {
  const { match } = props;
  const { id } = match.params;
  const { selectedCoins } = useContext(SelectedCoinsContext);
  const [coin, setCoin] = useState(
    selectedCoins.find((coin) => coin.id === id)
  );

  coin || getCoinById(id).then((coin) => setCoin(coin));
  console.log(coin);

  const setPercentStyle = (percent) =>
    percent > 0 ? { color: "#2BC36F" } : { color: "#F63B45" };

  const createCoinPallete = () => {
    const { name, rank, symbol, quotes, total_supply } = coin;
    const {
      price,
      volume_24h,
      percent_change_24h,
      percent_change_30d,
    } = quotes.USD;

    const roundPrice = parseFloat(price).toFixed(2);
    const roundVolume_24h = customizePrice(parseInt(volume_24h));
    const totalCoins = customizePrice(parseInt(total_supply));
    return (
      <div className="CoinDetails">
        <div className="CoinDetails_text">
          <div className="CoinDetails_name">
            <p>{name}</p>
            <span> رنک : {rank}</span>
            <p>{symbol} :نماد </p>
          </div>
          <div className="CoinDetails_price">
            <span>قیمت : {roundPrice}</span>
            <span className="day_change price_change">
              (24h)تغییر قیمت :
              <span
                className="price_change--num"
                style={setPercentStyle(percent_change_24h)}
              >
                {percent_change_24h}
              </span>
            </span>
            <span className="price_change">
              تغییر ماهانه :
              <span
                className="price_change--num"
                style={setPercentStyle(percent_change_30d)}
              >{`${percent_change_30d}`}</span>
            </span>
          </div>
          <div className="CoinDetails_volume">
            <span>$حجم بازار : {` ${roundVolume_24h}  `} </span>
            <span>تعداد در گردش:{`${totalCoins}`}</span>
          </div>
        </div>
        <div className=" CoinDetails_tradingview">
          <TradingViewWidget symbol={`COINBASE:${symbol}USD`} autosize />
        </div>
      </div>
    );
  };

  return <>{coin && createCoinPallete()}</>;
}
export default CoinDetails;
