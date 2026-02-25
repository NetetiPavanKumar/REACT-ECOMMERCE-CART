# 🛒 React E-Commerce Cart & Checkout

## 📌 Overview

This project is a **frontend e-commerce cart and checkout system** built using **React.js** with a Node.js + Express backend (for API support).

The primary goal of this project is to **practice and strengthen React skills**, including component-based architecture, state management with Hooks, routing, and API integration — while connecting to a backend for dynamic data.

> ⚠️ Note:  
> The **frontend is entirely my work**.  
> The **backend code is third-party** and is included only to power APIs for demonstration purposes.

---

## ✨ Features

- Product listing page with search
- Add to Cart functionality
- Update cart quantity
- Remove items from cart
- Select delivery options with dynamic shipping calculation
- Checkout page with order summary and payment summary
- Place orders and view order history
- Persistent cart using `localStorage`
- Fully responsive and interactive UI

---

## 🧠 What I Learned

- Component-based architecture in React.js
- React Hooks: `useState`, `useEffect`
- Managing complex application state and dynamic rendering
- Integrating frontend with REST APIs using Axios
- Client-side routing with React Router
- Handling user events, forms, and selection inputs
- Writing modular, reusable, and maintainable React components
- Structuring a React project for clarity and scalability

---

## 🗂 Project Structure

```text
REACT-ECOMMERCE-CART/
│
├── FRONTEND/          ← React frontend (my work)
│
├── BACKEND/           ← Node.js + Express backend (third-party)
│
└── README.md          ← Project documentation


## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/NetetiPavanKumar/REACT-ECOMMERCE-CART.git
cd REACT-ECOMMERCE-CART

### 2. Start the backend

```bash
cd BACKEND
npm install
npm start

The backend runs at: http://localhost:3000

### 3. Start the frontend

```bash
cd ../FRONTEND
npm install
npm run dev

The frontend runs at: http://localhost:5173
 by default (Vite server)
