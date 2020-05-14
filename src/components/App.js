import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../routes/home";
import SingleCoinDetails from "../routes/singleCoinDetails";
import { SelectedCoinsProvider } from "../contexts/SelectedCoinsContext";
import "../assets/sass/global.scss";
import "./App.scss";

function App() {
  return (
    <SelectedCoinsProvider>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/singlecoin/:id"
            render={() => <SingleCoinDetails />}
          />
        </Switch>
      </div>
    </SelectedCoinsProvider>
  );
}

export default App;
