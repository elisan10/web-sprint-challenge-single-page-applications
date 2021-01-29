import React from "react";
import Form from "./components/Form";
import Home from "./components/Home";
import Confirmation from "./components/Confirmation";

import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/pizza/confirmation">
          <Confirmation />
        </Route>
        <Route exact path="/pizza">
          <Form />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
};
export default App;
