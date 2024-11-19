import React from "react";

const LandingPage = ({ changePage }) => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful houseplants!</p>
      <button onClick={() => changePage("products")}>Get Started</button>
    </div>
  );
};

export default LandingPage;
