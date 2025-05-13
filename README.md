# 🏍️ The Bikers Nexus

**The Bikers Nexus** is a full-stack web application built for motorcycle enthusiasts to explore and purchase biker gear, connect through events, and engage with community posts. It includes user authentication, a product catalog, shopping cart, order management, and an admin dashboard.

---

## 🔧 Tech Stack

**Frontend:**
- React.js
- CSS or Bootstrap
- Axios

**Backend:**
- ASP.NET Framework (Web API)
- ADO.NET for data access
- SQL Server

---

## 📁 Project Structure

### Frontend (`/frontend`)  
src/  
├── components/ # UI components  
├── pages/ # Home, Cart, Admin, etc.  
├── api/ # Axios services  
├── App.jsx  
└── index.js  


### Backend (`/BikersNexonMain`)  
BikersNexonMain/  
├── Controllers/ # API endpoints  
├── BAL/ # Business logic  
├── DAL/ # Database access  
├── Models/ # Entity classes  
├── Web.config # DB connection  
└── Global.asax  


---

## 🔐 Features

- User registration and login
- View and add helmets/products to cart
- Proceed to checkout and place orders
- Admin dashboard for stats and monitoring
- API-driven modular architecture

---

## 🚀 Getting Started

### Prerequisites
- Node.js and npm
- Visual Studio (with .NET Framework support)
- SQL Server

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
Backend Setup
Open solution in Visual Studio
Update Web.config with your SQL Server connection string
Run the Web API
Make sure database tables are created

🔌 API Endpoints  
User 
GET /api/user/getall  
POST /api/user/add  
POST /api/user/login  
PUT /api/user/update  
DELETE /api/user/delete/{id}  

Product  
GET /api/product/getall  
GET /api/product/{id}  

Order  
POST /api/order/add  
GET /api/order/user/{userId}  

Order Details  
POST /api/orderdetails/add  
GET /api/orderdetails/order/{orderId}  

📊 Admin Dashboard
Stats: total users, products, posts, events  
Recent users table  
Admin notes section  

✨ Future Enhancements
Online payment integration  
OTP login  
Email confirmations  
Role-based admin panel  

