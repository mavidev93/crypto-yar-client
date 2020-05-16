import React from "react";
import useSelectedCoins from "../hooks/useSelectedCoins";

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
// function selectedCoinsReducer(state, action) {}
