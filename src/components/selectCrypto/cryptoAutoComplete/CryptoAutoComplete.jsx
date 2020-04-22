import React, { useState } from 'react';
import Autocomplete from 'react-autocomplete';
import './CryptoAutoComplete.scss';

function CryptoAutoComplete({ addCoin, searchCoins, coins }) {
    let [value, setValue] = useState('');
    const handleInputchange = (e) => {
        setValue(e.target.value)
        searchCoins(value)
    }
    const handleSelect = (val, item) => {
        const coinId = item.id
        setValue(val)
        addCoin(coinId)
    }
    return (
        <Autocomplete
            getItemValue={(item) => item.name}
            items={[...coins]}
            renderItem={(item, isHighlighted) =>
                <div
                    style={{ background: isHighlighted ? 'lightgray' : 'white', fontSize: '1.4rem' }}
                    key={item.id}
                    className='item'
                >
                    <span>{item.name}</span>
                </div>
            }
            value={value}
            onChange={handleInputchange}
            onSelect={handleSelect}
        />
    )
}
export default CryptoAutoComplete;
