import React, { useState } from "react";
import { customizePrice } from "../../helpers/customizePrice";
import { CSSTransition } from "react-transition-group";
import TradingViewWidget from "react-tradingview-widget";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./SingleCoin.scss";

function SingleCoin({ name, rank, symbol, quotes, id, removeCoin }) {
  const [toggle, SetToggle] = useState(true);
  const { price, volume_24h, percent_change_24h } = quotes.USD;
  const roundPrice = parseFloat(price).toFixed(2);
  const roundVolume_24h = customizePrice(parseInt(volume_24h));

  const handleTrashClick = (e) => {
    SetToggle(false);
    setTimeout(() => {
      removeCoin(id);
    }, 300);
  };
  return (
    <CSSTransition in={toggle} timeout={1000} classNames="sample">
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
        <div className="SingleCoin_trash" onClick={handleTrashClick}>
          <FontAwesomeIcon icon={faTrash} className="trash_icon" />
        </div>
      </div>
    </CSSTransition>
  );
}
export default SingleCoin;
