import React from "react";
import useSelectedCoins from "../hooks/useSelectedCoins";
import axios from "axios";
export const SelectedCoinsContext = React.createContext();

export function SelectedCoinsProvider(props) {
  const [selectedCoins, setSelectedCoins] = useSelectedCoins([]);
  return (
    <SelectedCoinsContext.Provider value={{ selectedCoins, setSelectedCoins }}>
      {console.log("context run")}
      {props.children}
    </SelectedCoinsContext.Provider>
  );
}
