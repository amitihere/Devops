# ♻️ Circular Fashion Marketplace – Print-on-Demand & Thrift Exchange Platform

A full-stack **MERN-based circular fashion marketplace** that combines **print-on-demand clothing**, **thrifted fashion resale**, and **upcycling** into a single sustainable platform.

This project goes beyond traditional e-commerce by introducing a **credit-based exchange system**, **multi-role users**, and **sustainability-driven business logic**, simulating a real-world startup-level product.

---

## 🌍 Main Idea Behind the Project

The fashion industry faces two major problems:
1. Overproduction of clothing
2. Massive textile waste from unused or discarded garments

This platform addresses both by creating a **circular fashion ecosystem** where users can:
- Design and order custom print-on-demand clothing
- Resell or exchange thrifted clothes
- Upcycle thrifted items by adding new designs
- Track sustainability impact

Instead of just *buying new clothes*, users actively participate in **reusing, redesigning, and redistributing fashion**.

---

## 👥 Who This Platform Helps

### 🧑‍🎨 Designers & Creators
- Sell designs without holding inventory
- Collaborate with thrift sellers for upcycled fashion

### ♻️ Thrifters & Resellers
- Resell curated thrifted clothing
- Exchange items using platform credits
- Reduce waste while earning value

### 🛒 Customers
- Buy unique, customized apparel
- Discover affordable thrifted fashion
- Support sustainable and independent fashion

---

## 👕 Product Types & Sources

### 🖨️ Print-on-Demand Products
- Custom-designed t-shirts, hoodies, and apparel
- Designs uploaded by sellers
- Products are manufactured only after an order is placed
- Zero inventory storage required

### ♻️ Thrifted Products
- Pre-owned clothing uploaded by users or sellers
- Each item is unique (quantity = 1)
- Includes condition, size, and authenticity details

### 🔁 Upcycled Products (Unique Feature)
- Thrifted items enhanced with new print designs
- One-of-one customized fashion pieces
- New product lifecycle created from old clothing

---

## 🧰 Tech Stack

### Frontend
- React.js
- React Router

### Backend
- Node.js
- Express.js
- RESTful APIs
- JWT Authentication
- Role-Based Access Control (Admin, Seller, User)

### Database
- MongoDB Atlas
- Indexed collections for performance

### Payments & Services ( Optional )
- Stripe / Razorpay
- Cloudinary (image storage)
- Nodemailer (email notifications)

### Deployment & Tools
- Vercel / Netlify (Frontend)
- Render / AWS (Backend)
- GitHub Actions (CI/CD – optional)
- Docker (optional)

---

## ✨ Core Features

### 🔐 Authentication & Authorization
- JWT-based authentication
- Role-based access control
- Secure password hashing
- Protected routes and APIs

---

### 🛍️ Marketplace Features
- Multi-vendor product listings
- Separate flows for POD and thrifted items
- Advanced search and filters
- Cart and wishlist

---

### 🖨️ Print-on-Demand Workflow
- Design uploads by creators
- Size and color variants
- Order-triggered production flow
- Seller fulfillment tracking

---

### ♻️ Thrift Exchange System (Standout Feature)
- Thrifted item listing
- Platform credit system
- Exchange items using credits
- Hybrid checkout (credits + cash)

---

### 🧑‍💼 Dashboards
#### Seller / Creator Dashboard
- Product and design management
- Order tracking
- Earnings overview

---

## 🗂️ Project Development Phases

### 🚀 Phase 1: Foundation & Authentication
- Project setup (Frontend + Backend)
- User authentication & RBAC
- Database schema design
- Basic UI and routing

---

### 🛒 Phase 2: Core Marketplace
- Product listings (POD & Thrifted)
- Cart, wishlist, checkout
- Order management
- Search and filtering

---

### 🔁 Phase 3: Circular Economy Features
- Platform credit system
- Thrift exchange workflow
- Upcycling product flow
- Admin moderation

---

### 📊 Phase 4: Advanced & Production Features
- Payment gateway integration
- Email notifications
- Sustainability metrics dashboard
- Performance optimization
- Deployment and documentation
