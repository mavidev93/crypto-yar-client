import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import "./CryptoAutoComplete.scss";

function CryptoAutoComplete({ addCoin, searchCoins, coins }) {
  let [value, setValue] = useState("");

  const handleInputchange = (e) => {
    console.log("input change");
    setValue(e.target.value);
    searchCoins(value);
  };

  const handleChange = (e, coin) => {
    if (coin) {
      const id = coin.id;
      addCoin(id);
    }
  };

  return (
    <form className="CryptoAutoComplete">
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
    </form>
  );
}
export default CryptoAutoComplete;
