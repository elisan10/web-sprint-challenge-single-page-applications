import React from "react";
import { Link, useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();

  const routeToPizza = () => {
    history.push("/pizza");
  };
  return (
    <div>
      <header className="lambda-eats">
        <h1>Lambda Eats</h1>
        <Link to="/">Home</Link>
      </header>
      <div className="container">
        <h2>Would you like some Pizza?</h2>
        <button onClick={routeToPizza}>Pizza?</button>
      </div>
    </div>
  );
};

export default Home;
