import React, { useState, useEffect, useContext } from "react";
import SelectedCoins from "./selectedCoins";
import CryptoAutoComplete from "./cryptoAutoComplete";
import { SelectedCoinsContext } from "../../contexts/SelectedCoinsContext";
import { LoggedInContext } from "../../contexts/LoggedInContext";
import apis from "../../api";
import { getCoinById } from "../../helpers/Api";
import "./SelectCrypto.scss";

function SelectCrypto() {
  const [coins, setCoins] = useState([]);
  // const [selectedCoins, setSelectedCoins] = useState([]);

  const { selectedCoins, setSelectedCoins } = useContext(SelectedCoinsContext);
  const { user } = useContext(LoggedInContext);
  useEffect(() => {
    if (user.loggedIn) {
      async function initialUserCoins() {
        const userCoins = (await apis.getSelectedCoins()).data;
        setSelectedCoins(userCoins);
      }
      initialUserCoins();
    }
  }, [user.loggedIn]);

  const addCoin = async (id) => {
    if (selectedCoins.every((coin) => coin.id !== id)) {
      const newCoin = await getCoinById(id);
      await apis
        .insertCrypto(newCoin)
        .catch((e) => console.log("can't insert crypto"));
      if (user.loggedIn) {
        const userCoins = (await apis.getSelectedCoins()).data;
        setSelectedCoins(userCoins);
      } else {
        setSelectedCoins([...selectedCoins, newCoin]);
      }
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
    let currencies = (await apis.getSearchList(val)).data;
    if (currencies.hasOwnProperty("currencies")) {
      currencies = currencies.currencies;
    }

    setCoins(currencies);
  };

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
