// Pizza Form component
import React from "react";
import Confirmation from "./Confirmation";
import { Route, useHistory } from "react-router-dom";

const Form = () => {
  const history = useHistory();

  const submitOrder = () => {
    history.push("/pizza/confirmation");
  };
  return (
    <div>
      <form>
        <h3> Build Your Own Pizza</h3>;
        <button onClick={submitOrder}>Add to Order</button>
      </form>

      <Route path="/pizza/confirmation">
        <Confirmation />
      </Route>
    </div>
  );
};

export default Form;
