import React, { useState } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation";

const defaultValue = [
  {
    //TEXT INPUT
    name: "Elizabeth",
    //DROPDOWN
    size: "Large",
    //TOPPINGS CHECKBOXES
    pepperoni: true,
    sausage: false,
    jalapeno: true,
    pineapple: false,
    //TEXT INPUT
    instructions: "Please don't burn it like last time",
  },
];

const App = () => {
  const [order, setOrder] = useState(defaultValue);
  const history = useHistory();

  const routeToPizza = () => {
    history.push("/pizza");
  };

  const addToOrder = (item) => {
    const newOrder = {
      name: item.name,
      size: item.size,
      pepperoni: item.pepperoni,
      sausage: item.sausage,
      jalapeno: item.jalapeno,
      pineapple: item.pineapple,
      instructions: item.instructions,
    };
    console.log(newOrder);
    setOrder([...order, newOrder]);
  };
  return (
    <div>
      <header className="lambda-eats">
        <h1>Lambda Eats</h1>
      </header>
      <div className="container">
        <h2>Would you like some Pizza?</h2>
        <button onClick={routeToPizza}>Pizza?</button>
      </div>
      <Switch>
        <Route path="/pizza/confirmation">
          <Confirmation order={order} />
        </Route>
        <Route exact path="/pizza">
          <Form addToOrder={addToOrder} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
