// Pizza Form component
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as yup from "yup";

// const defaultValue = {
//   //TEXT INPUT
//   name: "",
//   //DROPDOWN
//   size: "",
//   //TOPPINGS CHECKBOXES
//   pepperoni: false,
//   sausage: false,
//   jalapeno: false,
//   pineapple: false,
//   //TEXT INPUT
//   instructions: "",
// };

const initialValue = {
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

const errorValue = {
  name: "",
};

const Form = ({ addToOrder }) => {
  const [formState, setFormState] = useState(initialValue);
  const [error, setError] = useState(errorValue);

  let formSchema = yup.object().shape({
    name: yup
      .string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
  });

  const validateChange = (e) => {
    e.persist();
    yup
      .reach(formSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) =>
        setError({
          ...error,
          [e.target.name]: "",
        })
      )
      .catch((err) => console.log(err));
  };

  const history = useHistory();

  const formSubmit = (e) => {
    console.log("FORM STATE", formState);
    e.preventDefault();
    addToOrder(formState);
    setFormState(initialValue);
    submitOrder();
  };
  const inputChange = (e) => {
    const newValue =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setFormState({
      ...formState,
      [e.target.name]: newValue,
    });
    validateChange(e);
  };

  const submitOrder = () => {
    history.push("/pizza/confirmation");
  };

  return (
    <div>
      <form onSubmit={formSubmit}>
        <h3> Build Your Own Pizza</h3>

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
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div id="#pizza-toppings">
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
        <button id="#add-button">Add to Order</button>
      </form>
    </div>
  );
};

export default Form;
