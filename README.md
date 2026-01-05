# Tracklet Backend 🚀

Backend service for **Tracklet**, a modern full-stack expense tracking application.

This backend provides secure authentication, authorization, and expense
management APIs built with Node.js, Express, and MongoDB.

---

## ✨ Features

- User Signup & Login
- JWT Authentication (Access + Refresh Tokens)
- Secure password hashing using bcrypt
- Protected expense routes
- Add / Fetch / Delete expenses
- MongoDB integration with Mongoose
- Clean REST API structure

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT)
- bcryptjs
- dotenv
- CORS

---

## 📁 Folder Structure

```txt
backend/
├── middleware/
│   └── authMiddleware.js
│
├── models/
│   ├── User.js
│   └── Expense.js
│
├── routes/
│   ├── authRoutes.js
│   └── expenseRoutes.js
│
├── uploads/
│
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── README.md
