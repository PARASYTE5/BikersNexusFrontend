import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AdminNavbar from './AdminNavbar';
import { FaCheckCircle, FaTimesCircle, FaShoppingCart } from 'react-icons/fa';

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch all orders from the backend API
  const fetchOrders = async () => {
    try {
      const res = await axios.get("https://localhost:44384/api/orders");
      console.log("Orders fetched:", res.data);  // Log the response to see the data structure
      setOrders(res.data);  // Set the orders to state
    } catch (err) {
      console.error("Error fetching orders:", err);
    } finally {
      setLoading(false);
    }
  };

  // UseEffect to fetch data when the component is mounted
  useEffect(() => {
    fetchOrders();
  }, []);

  // Calculate total, successful, and failed orders
  const totalOrders = orders.length;
  const successfulOrders = orders.filter(order => order.Is_Delivered).length;
  const failedOrders = orders.filter(order => !order.Is_Delivered).length;

  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: "72px"}}>
      <AdminNavbar />

      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
        <div className="container">
          <h2 className="mb-4 text-center text-dark">Admin Orders</h2>

          {/* Order Stats Section */}
          <div className="row mb-4">
            {/* Total Orders Box */}
            <div className="col-md-4 mb-3">
              <div className="card text-white bg-info border-0 shadow-lg hover-shadow-lg" style={{ borderRadius: "10px", height:"240px" }}>
                <div className="card-body d-flex align-items-center justify-content-center">
                  <FaShoppingCart size={40} color="orange" />
                  <div className="text-center ms-5">
                    <h5 className="text-dark">Total Orders</h5>
                    <h3 className="text-dark">{totalOrders > 0 ? totalOrders : 'N/A'}</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Successful Orders Box */}
            <div className="col-md-4 mb-3">
              <div className="card text-white bg-success border-0 shadow-lg hover-shadow-lg" style={{ borderRadius: "10px", height:"240px"  }}>
                <div className="card-body d-flex align-items-center justify-content-center">
                  <FaCheckCircle size={40} color="green" />
                  <div className="text-center ms-5">
                    <h5 className="text-dark">Successful Orders</h5>
                    <h3 className="text-dark">{successfulOrders > 0 ? successfulOrders : 'N/A'}</h3>
                  </div>
                </div>
              </div>
            </div>

            {/* Failed Orders Box */}
            <div className="col-md-4 mb-3">
              <div className="card text-white bg-danger border-0 shadow-lg hover-shadow-lg" style={{ borderRadius: "10px", height:"240px"  }}>
                <div className="card-body d-flex align-items-center justify-content-center">
                  <FaTimesCircle size={40} color="red" />
                  <div className="text-center ms-5">
                    <h5 className="text-dark">Failed Orders</h5>
                    <h3 className="text-dark">{failedOrders > 0 ? failedOrders : 'N/A'}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loading Spinner */}
          {loading ? (
            <div className="text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-12">
                {orders.length === 0 ? (
                  <div className="text-center">
                    <p>No orders available</p>
                  </div>
                ) : (
                  <table className="table table-bordered table-striped">
                    <thead className="thead-dark">
                      <tr>
                        <th>Order ID</th>
                        <th>User ID</th>
                        <th>Total Price</th>
                        <th>Is Delivered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.Order_ID}>
                          <td>{order.Order_ID}</td>
                          <td>{order.User_ID}</td>
                          <td>₹{order.Total_Price}</td>
                          <td>{order.Is_Delivered ? 'Yes' : 'No'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
