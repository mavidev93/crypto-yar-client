import { useState } from "react";

function useSelectedCoins(initialVal) {
  const [state, setState] = useState(initialVal);
  const SelectedCoins = (newState) => {
    setState(newState);
  };
  return [state, SelectedCoins];
}
export default useSelectedCoins;
