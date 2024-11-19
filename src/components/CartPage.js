import React from "react";

const CartPage = ({ cart, removeFromCart, changePage }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Please add some items before checkout.");
      return;
    }
    // Simulate checkout process
    alert(`Thank you for your purchase! Your total is $${total}.`);
    changePage("landing"); // Navigate back to the landing page
    window.location.reload(); // Clear cart and reset state
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Your Cart</h1>
      <button onClick={() => changePage("products")}>Continue Shopping</button>
      <div>
        {cart.length === 0 ? (
          <p>Your cart is empty!</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid #ccc",
                padding: "10px 0",
              }}
            >
              <div>
                <p>
                  <strong>{item.name}</strong>
                </p>
                <p>Price: ${item.price}</p>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))
        )}
      </div>
      <h2>Total: ${total}</h2>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "#fff",
          border: "none",
          cursor: "pointer",
        }}
        onClick={handleCheckout}
      >
        Checkout
      </button>
    </div>
  );
};

export default CartPage;
