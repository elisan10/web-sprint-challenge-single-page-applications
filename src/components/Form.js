// Pizza Form component
import React, { useState } from "react";
import Confirmation from "./Confirmation";
import { Route, useHistory } from "react-router-dom";

const defaultValue = {
  //TEXT INPUT
  name: "",
  //DROPDOWN
  size: "",
  //TOPPINGS CHECKBOXES
  pepperoni: false,
  sausage: false,
  jalapeno: false,
  pineapple: false,
  //TEXT INPUT
  instructions: "",
};

const initialOrder = [];

const Form = () => {
  const [formState, setFormState] = useState(defaultValue);
  const [order, setOrder] = useState(initialOrder);

  const history = useHistory();

  const formSubmit = (e) => {
    e.preventDefault();
  };
  const inputChange = (e) => {};

  const submitOrder = () => {
    history.push("/pizza/confirmation");
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <h3> Build Your Own Pizza</h3>;
        <div className="customer-name">
          <label htmlFor="name">Your Name: </label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={inputChange}
          />
        </div>
        <br />
        <div className="pizza-size">
          <label htmlFor="size">Pizza Size: </label>
          <select onChange={inputChange} value={formState.size} name="size">
            <option value="">--Choose a size--</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <div className="pizza-toppings">
          <h4>Pizza Toppings: </h4>
          <label htmlFor="pepperoni">
            Pepperoni
            <input
              type="checkbox"
              name="pepperoni"
              checked={formState.pepperoni}
              onChange={inputChange}
            />
          </label>
          <br />
          <label htmlFor="sausage">
            Sausage
            <input
              type="checkbox"
              name="sausage"
              checked={formState.sausage}
              onChange={inputChange}
            />
          </label>
          <br />
          <label htmlFor="jalapeno">
            Jalapeno
            <input
              type="checkbox"
              name="jalapeno"
              checked={formState.jalapeno}
              onChange={inputChange}
            />
          </label>
          <br />
          <label htmlFor="pineapple">
            Pineapple
            <input
              type="checkbox"
              name="pineapple"
              checked={formState.pineapple}
              onChange={inputChange}
            />
          </label>
          <br />
        </div>
        <br />
        <div className="special-instructions">
          <label htmlFor="instructions">Special Instructions: </label>
          <input
            type="text"
            name="instructions"
            value={formState.instructions}
            onChange={inputChange}
          />
        </div>
        <br />
        <button onClick={submitOrder}>Add to Order</button>
      </form>
    </div>
  );
};

export default Form;
