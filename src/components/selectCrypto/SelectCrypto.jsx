import React, { useState, useEffect, useContext } from "react";
import SelectedCoins from "./selectedCoins";
import CryptoAutoComplete from "./cryptoAutoComplete";
import { SelectedCoinsContext } from "../../contexts/SelectedCoinsContext";
import { getCoinById } from "../../helpers/Api";
import axios from "axios";
import "./SelectCrypto.scss";

function SelectCrypto() {
  const [coins, setCoins] = useState([]);
  // const [selectedCoins, setSelectedCoins] = useState([]);

  const { selectedCoins, setSelectedCoins } = useContext(SelectedCoinsContext);

  const addCoin = async (id) => {
    if (selectedCoins.every((coin) => coin.id !== id)) {
      const newCoin = await getCoinById(id);
      setSelectedCoins([...selectedCoins, newCoin]);
    } else {
      console.log("this crypto alredy selected");
    }
  };

  const removeCoin = (id) => {
    const newCoins = [...selectedCoins];
    const removeIndex = newCoins.findIndex((coin) => coin.id === id);
    newCoins.splice(removeIndex, 1);
    setSelectedCoins(newCoins);
  };

  const searchCoins = async (val) => {
    const currencies = (
      await axios.get(`https://api.coinpaprika.com/v1/search/?q=${val}`)
    ).data.currencies;
    setCoins(currencies);
  };

  useEffect(() => {
    async function fetchData() {
      const data = (await axios.get("https://api.coinpaprika.com/v1/coins"))
        .data;
      setCoins(data.slice(0, 50));
    }
    fetchData();
  }, []);

  return (
    <div className="SelectCrypto">
      <CryptoAutoComplete
        addCoin={addCoin}
        searchCoins={searchCoins}
        coins={coins}
      />
      <SelectedCoins selectedCoins={selectedCoins} removeCoin={removeCoin} />
    </div>
  );
}

export default SelectCrypto;
