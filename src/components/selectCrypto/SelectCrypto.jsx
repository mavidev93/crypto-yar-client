import React, { useState, useEffect } from 'react';
import SelectedCoins from './selectedCoins';
import CryptoAutoComplete from './cryptoAutoComplete';
import axios from 'axios';
import './SelectCrypto.scss';

function SelectCrypto() {

    const [coins, setCoins] = useState([]);
    const [selectedCoins, setSelectedCoins] = useState([]);

    const addCoin = async (id) => {
        const newCoin = (await axios.get(`https://api.coinpaprika.com/v1/tickers/${id}`)).data
        setSelectedCoins([...selectedCoins, newCoin])
        console.log(newCoin)
    }

    const searchCoins = async (val) => {
        const currencies = (await axios.get(`https://api.coinpaprika.com/v1/search/?q=${val}`)).data.currencies;
        setCoins(currencies)
    }

    useEffect(() => {
        async function fetchData() {
            const data = (await axios.get('https://api.coinpaprika.com/v1/coins')).data;
            setCoins(data.slice(0, 20))
        }
        fetchData()
    }, [])

    return (
        <div className="SelectCrypto">
            <CryptoAutoComplete
                addCoin={addCoin}
                searchCoins={searchCoins}
                coins={coins}

            />
            <SelectedCoins />
        </div>
    )
}

export default SelectCrypto