import { BrowserRouter, Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';
import Navbar from './Components/Navbar';
import React, { useState, useEffect } from 'react';
import LoadingScreen from './Components/LoadingScreen';
import { Home } from './Components/Home';
import Login from './Components/Login';
import Accessories from './Components/Accessories';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer';
import News from './Components/News';
import NewsIndia from './Components/NewsIndia';
import NewsUSA from './Components/NewsUSA';
import NewsUK from './Components/NewsUK';
import NewsAustralia from './Components/NewsAustralia';
import NewsChina from './Components/NewsChina';
import NewsRussia from './Components/Russia';
import Greet_and_meet from './Components/Greet_and_meet';
import Create_GnM from './Components/Create_GnM';
import JoinGnM from './Components/JoinGnM';
import UserPost from "./Components/UserPost";
import AdminLogin from './Components/AdminLogin';
import Registration from './Components/Registeration';
import ChallengeMain from './Components/ChallengeMain';
import Dashboard from './Components/Dashboard';
import AdminUsers from './Components/AdminUsers';
import AdminOrder from './Components/AdminOrder';
import AdminProducts from './Components/AdminProducts';
import AdminReports from './Components/AdminReports';
import Helmets from './Components/Helmets';
import Gloves from './Components/Gloves';
import Contact from './Components/Contact';
import Product from './Components/Product';
import Order from './Components/Order';
import Gear from './Components/Gear';
import Shoes from './Components/Shoes';
import Accessories1 from './Components/Accessories1';
import { ToastContainer } from 'react-toastify';

// Protected Route for basic user
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
  return isLoggedIn ? children : <Navigate to="/Login" />;
};

// Protected Route For admin
const ProtectedRouteAdmin = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); 
  return isLoggedIn === "true" ? children : <Navigate to="/AdminLogin" />;
};

const AppContent = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  // Determine if the current route is an admin route
  const isAdmin = location.pathname.startsWith("/Admin");

  // Check if the current page is Login
  const isLoginPage = location.pathname === "/Login";

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("User_ID");
    localStorage.removeItem("User_Email");
    localStorage.removeItem("User_Phno");
    localStorage.removeItem("admin_name");
    localStorage.removeItem("admin_token");

    window.location.reload();
  };

  // Buy Now Function - Redirect to login if not logged in
  const handleBuyNow = (path) => {
    isLoggedIn ? navigate(path) : navigate("/Login");
  };

  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.Product_ID === product.Product_ID);

      if (existingItem) {
        // If product exists, increase its quantity
        return prevCart.map((item) =>
          item.Product_ID === product.Product_ID ? { ...item, Quantity: item.Quantity + 1 } : item
        );
      } else {
        // If product is new, add to cart with Quantity 1
        return [...prevCart, { ...product, Quantity: 1 }];
      }
    });
  };

  const increaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.Product_ID === id ? { ...item, Quantity: item.Quantity + 1 } : item
      )
    );
  };

  // Decrease quantity (minimum limit is 1)
  const decreaseQuantity = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.Product_ID === id && item.Quantity > 1
          ? { ...item, Quantity: item.Quantity - 1 }
          : item
      )
    );
  };

  // Remove item from cart
  const removeItem = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.Product_ID !== id));
  };

  return (
    <div style={{ background: "#E2E2D2" }}>
      <ScrollToTop />
      {/* Show Navbar and Footer only if not on Login or Admin pages */}
      {!isAdmin && !isLoginPage && <Navbar size={cart.length} handleLogout={handleLogout} />}
      <Routes>
        {/* Public Routes Open */}
        <Route path="/" element={<Home handleBuyNow={handleBuyNow} />} />
        <Route path="/Equipments" element={<Accessories handleBuyNow={handleBuyNow} />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Registration />} />
        <Route path="/News" element={<News />} />
        <Route path="/India" element={<NewsIndia />} />
        <Route path="/USA" element={<NewsUSA />} />
        <Route path="/UK" element={<NewsUK />} />
        <Route path="/China" element={<NewsChina />} />
        <Route path="/Russia" element={<NewsRussia />} />
        <Route path="/Australia" element={<NewsAustralia />} />
        <Route path="/GreetandMeet" element={<Greet_and_meet />} />
        <Route path="/CreateGnM" element={<Create_GnM />} />
        <Route path="/JoinGnM" element={<JoinGnM />} />
        <Route path="/UserPost" element={<UserPost />} />
        <Route path="/Challenge" element={<ChallengeMain />} />
        <Route path="/ContactUS" element={<Contact />} />
        <Route path="/All" element={<News />} />
        <Route path="/Product" element={<Product handleAddToCart={handleAddToCart} />} />
        <Route path="/Order" element={ <ProtectedRoute> <Order cart={cart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} removeItem={removeItem}/> </ProtectedRoute> } />
        {/* Public Routes Close */}
        
        {/* Admin Routes (Protected) */}
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Admin/Dashboard"element={<ProtectedRouteAdmin> <Dashboard handleLogout={handleLogout} /></ProtectedRouteAdmin>  }/>
        <Route path="/Admin/users" element={<ProtectedRouteAdmin><AdminUsers handleLogout={handleLogout} /> </ProtectedRouteAdmin> }/>
        <Route  path="/Admin/orders"element={<ProtectedRoute><AdminOrder handleLogout={handleLogout} /></ProtectedRoute> } />
        <Route path="/Admin/products" element={ <ProtectedRoute> <AdminProducts handleLogout={handleLogout} /></ProtectedRoute> }/>
        <Route path="/Admin/reports" element={ <ProtectedRoute><AdminReports handleLogout={handleLogout} /></ProtectedRoute>}/>
        {/* Admin Routes (Protected) Closed */}
        
        {/* Protected Equipment Routes */}
        <Route path="/Equipments/Helmets" element={ <ProtectedRoute><Helmets handleAddToCart={handleAddToCart} /> </ProtectedRoute> }/>
        <Route path="/Equipments/Shoes" element={ <ProtectedRoute><Shoes handleAddToCart={handleAddToCart} /> </ProtectedRoute> }/>
        <Route path="/Equipments/Accessories" element={ <ProtectedRoute><Accessories1 handleAddToCart={handleAddToCart} /> </ProtectedRoute> }/>
        <Route path="/Equipments/Gloves"element={ <ProtectedRoute><Gloves handleAddToCart={handleAddToCart} /> </ProtectedRoute>}/>
        <Route path="/Equipments/Jackets"element={ <ProtectedRoute><Gear handleAddToCart={handleAddToCart} /></ProtectedRoute>}/></Routes>
      
      {/* Show Footer only if not on Login or Admin pages */}
      {!isAdmin && !isLoginPage && <Footer />}
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <BrowserRouter>
          <ToastContainer />
          <AppContent />
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
