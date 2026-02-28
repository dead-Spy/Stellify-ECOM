# 🛒 Full-Stack E-Commerce Platform

A production-ready full-stack e-commerce application featuring a
dedicated **Admin Panel** and a **User-Facing Frontend**.

The system is built using **React.js (Vite)** for the frontend
applications and **Node.js with Express.js** for the backend API.
MongoDB is used for database management, with Cloudinary integration for
image storage and Stripe for secure payment processing.

------------------------------------------------------------------------

## 📌 Project Overview

This application is structured into three independent services:

-   Backend API Server
-   Admin Panel (React + Vite)
-   User Frontend (React + Vite)

Each module operates independently and communicates securely via REST
APIs.

------------------------------------------------------------------------

# 🚀 Features

## 🛠 Admin Panel

### 🔐 Authentication

-   Secure JWT-based admin authentication
-   Environment-controlled admin credentials

### 📦 Product Management

-   Add products with name, description, price, category, sub-category,
    sizes, and multiple images
-   View all products
-   Update product details
-   Delete products

### 📑 Order Management

-   View all customer orders
-   Update order status:
    -   Order Placed
    -   Packing
    -   Shipped
    -   Out For Delivery
    -   Delivered

------------------------------------------------------------------------

## 🛍 User Frontend

### 👤 User Authentication

-   Register
-   Login / Logout
-   JWT-based session handling

### 🛒 Product Browsing

-   Browse products on home and collection pages
-   View detailed product information
-   Search by product name
-   Filter by category and sub-category
-   Sort by price and relevance

### 🧺 Shopping Cart

-   Add products with selected sizes
-   Update quantities
-   Remove items

### 💳 Checkout & Payments

-   Cash on Delivery (COD)
-   Stripe payment integration

### 📦 Order History

-   View all previous orders
-   Track order status

------------------------------------------------------------------------

# 🧱 Technology Stack

## Frontend

-   React.js
-   Vite
-   Tailwind CSS
-   React Router DOM
-   Axios
-   React Toastify

## Backend

-   Node.js
-   Express.js
-   MongoDB
-   Mongoose
-   JWT
-   Bcrypt
-   Cloudinary
-   Multer
-   Stripe
-   Razorpay (prepared)
-   CORS
-   Dotenv

------------------------------------------------------------------------

# ⚙️ Setup Instructions

## 📌 Prerequisites

-   Node.js (v14+)
-   npm or yarn
-   MongoDB Atlas or local MongoDB
-   Cloudinary account
-   Stripe account

------------------------------------------------------------------------

# 🔧 Backend Setup

``` bash
git clone <repository_url>
cd backend
npm install
```

Create `.env` file:

    STRIPE_SECRET_KEY=your_stripe_secret_key
    MONGODB_URI=your_mongodb_connection_uri
    CLOUDINARY_NAME=your_cloudinary_cloud_name
    CLOUDINARY_API_KEY=your_cloudinary_api_key
    CLOUDINARY_API_SECRET=your_cloudinary_api_secret
    JWT_SECRET=your_jwt_secret
    ADMIN_EMAIL=admin@test.com
    ADMIN_PASSWORD=admin123
    PORT=3000

Run backend:

``` bash
npm start
```

------------------------------------------------------------------------

# 🛠 Admin Panel Setup

``` bash
cd admin
npm install
```

Create `.env`:

    VITE_BACKEND_URL=http://localhost:3000

Run:

``` bash
npm run dev
```

------------------------------------------------------------------------

# 🛍 User Frontend Setup

``` bash
cd frontend
npm install
```

Create `.env`:

    VITE_BACKEND_URL=http://localhost:3000

Run:

``` bash
npm run dev
```

------------------------------------------------------------------------

# 🔐 Admin Login Test

Open:

http://localhost:5174

Credentials:

Email: admin@test.com\
Password: admin123

------------------------------------------------------------------------

# 🌍 Deployment

1.  Complete frontend design\
2.  Connect frontend with backend & database\
3.  Finalize admin panel\
4.  Deploy backend and frontend (Vercel / Netlify / VPS)

------------------------------------------------------------------------

# 🔒 Security Notice

Never expose database credentials or secret keys in production
environments.
