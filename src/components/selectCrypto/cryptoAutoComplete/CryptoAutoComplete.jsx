import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./CryptoAutoComplete.scss";

function CryptoAutoComplete({ addCoin, searchCoins, coins }) {
  let [value, setValue] = useState("");

  const handleInputchange = (e) => {
    e.preventDefault();
    console.log("input change");
    setValue(e.target.value);
  };

  const handleChange = (e, coin) => {
    e.preventDefault();
    if (coin) {
      const id = coin.id;
      addCoin(id);
    }
  };

  useEffect(() => {
    console.log(value);
    const val = value ? value : "empty";
    searchCoins(val);
  }, [value]);

  return (
    <div className="CryptoAutoComplete">
      <Autocomplete
        noOptionsText="No labels"
        onChange={handleChange}
        renderOption={(coin, { selected }) => (
          <div
            selected={selected}
            id={coin.id}
            className="CryptoAutoComplete_listItem"
          >
            {coin.name}
          </div>
        )}
        options={coins.map((coin) => coin)}
        getOptionLabel={(option) => option.name}
        onInputChange={handleInputchange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="crypto search"
            variant="outlined"
            className="Autocomplete_input"
            fullWidth
          />
        )}
      />
    </div>
  );
}
export default CryptoAutoComplete;
