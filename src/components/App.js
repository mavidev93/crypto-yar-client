import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../routes/home";
import SingleCoinDetails from "../routes/singleCoinDetails";
import { SelectedCoinsProvider } from "../contexts/SelectedCoinsContext";
import { LoggedInProvider } from "../contexts/LoggedInContext";

import "../assets/sass/global.scss";
import "./App.scss";

function App() {
  return (
    <LoggedInProvider>
      <SelectedCoinsProvider>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Home />} />
            <Route
              exact
              path="/singlecoin/:id"
              render={(params) => <SingleCoinDetails {...params} />}
            />
            {/* <Route exact path="/login">
              <button onClick={() => window.open("/auth/google")}></button>
            </Route> */}
          </Switch>
        </div>
      </SelectedCoinsProvider>
    </LoggedInProvider>
  );
}

export default App;
