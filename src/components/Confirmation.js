//Confirmation component that displays form layout
import React from "react";

const Confirmation = (props) => {
  console.log(props);
  if (!props) return null;
  return (
    <div>
      {props.order.map((item) => {
        console.log({ item });
        return (
          <>
            <h2>{item.name}'s Order</h2>
            <p>
              {item.size} pizza with the toppings of: {item.toppings}
            </p>
            <p>Special Instructions: {item.instructions}</p>
          </>
        );
      })}
    </div>
  );
};

export default Confirmation;
