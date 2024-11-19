import React from "react";

const Header = ({ cartCount, changePage }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        background: "#f8f8f8",
      }}
    >
      <h1 onClick={() => changePage("landing")} style={{ cursor: "pointer" }}>
        Paradise Nursery
      </h1>
      <div>
        <button
          onClick={() => changePage("products")}
          style={{ marginRight: "20px" }}
        >
          Products
        </button>
        <button onClick={() => changePage("cart")}>Cart ({cartCount})</button>
      </div>
    </div>
  );
};

export default Header;
