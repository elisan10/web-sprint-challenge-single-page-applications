//Confirmation component that displays form layout
import React from "react";

const Confirmation = (props) => {
  console.log(props);
  if (!props) return null;
  return (
    <div>
      {props.order.map((item) => {
        console.log({ item });
        const toppings =
          (item.pepperoni ? "Pepperoni" : null,
          item.sausage ? "Sausage" : null,
          item.jalapeno ? "Jalapeno" : null,
          item.pineapple ? "Pineapple" : null);

        return (
          <>
            <h2>{item.name}'s Order</h2>
            <p>
              {item.size} pizza with the toppings of: {toppings}
            </p>
            <p>Special Instructions: {item.instructions}</p>
          </>
        );
      })}
    </div>
  );
};

export default Confirmation;
