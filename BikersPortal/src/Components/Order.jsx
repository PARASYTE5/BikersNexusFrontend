import React from 'react';
import { FaTrash, FaPlus, FaMinus } from 'react-icons/fa';
import axios from 'axios';
import './Cart.css';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Order = ({ cart, increaseQuantity, decreaseQuantity, removeItem }) => {
  const imageBasePath = "https://localhost:44384/Product_IMG/";

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.Price * item.Quantity, 0);

  const Navigate = useNavigate();  // Using useNavigate for redirection

  const handleCheckout = async () => {
    const orderId = Math.floor(Math.random() * 1000000);

    // Retrieve the user ID from localStorage (Assuming the user is already logged in)
    const userId = localStorage.getItem("User_ID");  // Fetching User_ID from localStorage

    // Proceed with the order only if userId is found (if it's null, it means the user might have logged out)
    if (!userId) {
      alert("Please log in to place an order.");
      toast.error("Please log in to place an order.", {
        position: "top-right",
        autoClose: 3000,
        closeButton: false,
        hideProgressBar: false,
        theme: "colored",
      });
      return;  // Exit if no user is found in localStorage (even if login is not checked again)
    }

    // Prepare the order data
    const orderData = {
      Order_ID: orderId,
      User_ID: userId,  // Use the user ID from localStorage
      Total_Price: subtotal,
      Is_Delivered: false,
      OrderDetails: cart.map(item => ({
        Product_ID: item.Product_ID,
        Quantity: item.Quantity,
        Unit_Price: item.Price,
      })),
    };

    try {
      // Send the order data to the backend API
      const res = await axios.post("https://localhost:44384/api/orders", orderData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Handle successful response
      alert("Order placed successfully!");
       toast.success("Order placed successful.", {
              position: "top-right",
              autoClose: 3000,
              closeButton: false,
              hideProgressBar: false,
              theme: "colored",
            });
      localStorage.removeItem("cart");  // Clear the cart from localStorage after placing the order
      window.location.href = "/";  // Redirect to order confirmation page
    } catch (err) {
      // Handle error response
      console.error("Error placing order:", err);
      alert("Failed to place order.");
       toast.error("Order failed. Please try again.", {
              position: "top-right",
              autoClose: 3000,
              closeButton: false,
              hideProgressBar: false,
              theme: "colored",
            });
    }
  };

  return (
    <div className="container" style={{marginTop: "100px", paddingTop: "100px", paddingBottom: "146px"}}>
      <div className="row">
        {/* Left side: Cart Items */}
        <div className="col-md-8">
          <h2 className="mb-4">Shopping Cart</h2>
          {cart.map((item) => (
            <div key={item.Product_ID} className="cart-item shadow-sm p-3 mb-3 bg-white rounded">
              <div className="row">
                {/* Product Image */}
                <div className="col-md-2 text-center">
                  <img src={`${imageBasePath}${item.Image_URL}`} alt={item.Product_Name} className="cart-item-img" />
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                  <h5 className="cart-item-title">{item.Product_Name}</h5>
                  <p><strong>Size:</strong> L</p>
                  <p><strong>Colour:</strong> {item.Color || 'Default'}</p>
                </div>

                {/* Price & Quantity */}
                <div className="col-md-4 text-md-right text-center">
                  <div className="d-flex align-items-center justify-content-md-end justify-content-center mb-2">
                    <button className="btn btn-light btn-sm" onClick={() => decreaseQuantity(item.Product_ID)}>
                      <FaMinus />
                    </button>
                    <span className="mx-2">{item.Quantity}</span>
                    <button className="btn btn-light btn-sm" onClick={() => increaseQuantity(item.Product_ID)}>
                      <FaPlus />
                    </button>
                  </div>
                  <p className="cart-item-price">₹{item.Price * item.Quantity}</p>
                  <p className="text-muted"><del>M.R.P:  ₹ {item.Price * 2}</del></p>
                  <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.Product_ID)}>
                    <FaTrash /> Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side: Subtotal */}
        <div className="col-md-4" style={{marginTop: "65px"}}>
          <div className="subtotal-box p-4 bg-white shadow rounded">
            <h4>Subtotal ({cart.length} items):</h4>
            <h3 className="text-danger">₹{subtotal}</h3>
            <button className="btn btn-success btn-block mt-3" onClick={handleCheckout}>Proceed to Checkout</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
