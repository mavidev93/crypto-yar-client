import React, { useState } from "react";

export const SelectedCoinsContext = React.createContext();

export function SelectedCoinsProvider(props) {
  const [selectedCoins, setSelectedCoins] = useState([]);
  return (
    <SelectedCoinsContext.Provider value={{ selectedCoins, setSelectedCoins }}>
      {props.children}
    </SelectedCoinsContext.Provider>
  );
}
