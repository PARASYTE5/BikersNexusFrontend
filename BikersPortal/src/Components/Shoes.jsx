import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Helmet.css";
import "font-awesome/css/font-awesome.min.css"; // For back arrow icon

const Helmets = ({ handleAddToCart, handleBuyNow }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const imageBasePath = "https://localhost:44384/Product_IMG/";

  useEffect(() => {
    fetch("https://localhost:44384/api/products/category/1005")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch products");
        return response.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error.message);
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="container-fluid main-container2" style={{ paddingTop: "50px" }}>
      {/* Back Button - Styled like Login.jsx */}
      <button className="btn back-button" onClick={() => navigate("/Equipments")}>
        <i className="fa fa-arrow-left"></i>
      </button>

      <h1 className="text-center fw-bold mt-4 mb-4">All Shoes</h1>

      {loading && <p className="text-center text-secondary">Loading...</p>}
      {error && <p className="text-center text-danger">{error}</p>}

      {!loading && !error && products.length > 0 ? (
        <div className="container-fluid">
          <div className="row justify-content-center">
            {products.map((product) => (
              <div
                key={product.Product_ID}
                className="col-sm-3 d-flex justify-content-center mb-4"
              >
                <div className="product-card">
                  <div className="card-inner">
                    <div className="card-front">
                      <img
                        src={`${imageBasePath}${product.Image_URL}`}
                        alt={product.Product_Name}
                        className="product-image"
                      />
                      <h2 className="product-title">{product.Product_Name}</h2>
                      <p className="product-brand">
                        <strong>Brand:</strong> {product.Brand}
                      </p>
                      <p className="product-price">Price: ₹{product.Price}</p>
                    </div>
                    <div className="card-back">
                      <p><strong>Brand:</strong> {product.Brand}</p>
                      <p><strong>Model:</strong> {product.Model}</p>
                      <p><strong>Size:</strong> {product.Size}</p>
                      <p><strong>Color:</strong> {product.Color}</p>
                      <p><strong>Material:</strong> {product.Material}</p>
                      <p><strong>Description:</strong> {product.Description}</p>
                      <button
                        className="btn btn-primary w-100 mt-3"
                        onClick={() => handleAddToCart(product)}
                      >
                        Buy Now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        !loading && <p className="text-center text-warning">No products found.</p>
      )}
    </div>
  );
};

export default Helmets;
