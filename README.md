# VastraLedger — Clothing Store Management Dashboard

VastraLedger is a **React-based clothing store management dashboard** designed to organize and streamline the day-to-day operations of a small clothing business.

The application provides a centralized interface for managing **products, customers, sales, billing, inventory, reports, and store settings**.

It uses the browser's **localStorage API** for client-side data persistence and provides a responsive dashboard for managing store information.

---

## 📌 About the Project

Managing a clothing store involves handling products, inventory, customers, sales, payments, and business records.

VastraLedger brings these operations together into a single dashboard, allowing users to manage store data and monitor business activity efficiently.

### The application allows users to:

* Manage products and inventory
* Maintain customer records
* Record sales transactions
* Create and manage bills
* Monitor low-stock products
* Search products, customers, and sales
* View business reports and statistics
* Manage basic store preferences

---

## ✨ Features

### 📊 Dashboard

Provides an overview of the store's current business activity.

* Total sales
* Total products
* Total customers
* Total items sold
* Total revenue
* Recent sales
* Low-stock alerts
* Dynamic business statistics

### 📦 Product Management

Manage clothing products and inventory records.

* Add products
* Store product name and category
* Set product price
* Track stock quantity
* Delete products
* Identify low-stock products
* Persist product data using `localStorage`

### 👥 Customer Management

Maintain customer information within the application.

* Add customers
* Store name, phone number, and address
* View customer records
* Delete customers
* Preserve customer data after page refresh

### 💰 Sales Management

Record and manage sales transactions.

* Add sales
* Select products and customers
* Enter quantity sold
* Track price per item
* Automatically calculate total amount
* View sales history
* Delete sales records
* Persist sales data using `localStorage`

### 🧾 Billing

Create and manage customer bills.

* Enter customer details
* Add product details
* Enter quantity and price
* Automatically calculate bill totals
* Track payment status
* View generated bills

### 📈 Reports & Analytics

Generate business statistics dynamically from stored application data.

Reports include:

* Total revenue
* Total sales
* Total products
* Total customers
* Total items sold
* Paid payments
* Pending payments
* Total bills
* Detailed sales records

The reports are calculated from actual application data rather than manually entered values.

### 🔎 Global Search

Provides centralized searching across business records.

Currently supports searching for:

* Products
* Customers
* Sales

### ⚙️ Settings

Manage basic store preferences.

* Store name
* Currency
* Save settings
* Reset settings

---

## 🛠️ Tech Stack

| Technology            | Purpose                       |
| --------------------- | ----------------------------- |
| **React.js**          | Building the user interface   |
| **JavaScript (ES6+)** | Application logic             |
| **Vite**              | Development and build tool    |
| **React Router**      | Client-side page navigation   |
| **CSS3**              | Styling and responsive design |
| **localStorage API**  | Client-side data persistence  |
| **Git**               | Version control               |
| **GitHub**            | Source code management        |

---

## 🧠 React Concepts Used

This project demonstrates practical usage of:

* Functional Components
* `useState`
* `useEffect`
* React Router
* Controlled Components
* Event Handling
* Conditional Rendering
* Component-Based Architecture
* `map()`
* `filter()`
* `reduce()`
* State Management
* CRUD Operations
* Dynamic Calculations
* `localStorage`

---

## 📁 Project Structure

```text
VastraLedger/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx
│   │   ├── Navbar.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Products.jsx
│   │   ├── Customers.jsx
│   │   ├── Billing.jsx
│   │   ├── Sales.jsx
│   │   ├── Reports.jsx
│   │   └── Settings.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/dakshayani-konda/VastraLedger.git
```

### 2. Open the Project

```bash
cd VastraLedger
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually:

```text
http://localhost:5173
```

---

## 💾 Data Storage

VastraLedger currently uses the browser's **localStorage API** for client-side data persistence.

The application stores:

* Product records
* Customer records
* Sales transactions
* Bills
* Payment information
* Store settings

> **Note:** Data is currently stored locally in the browser and is not connected to a backend server or shared database.

---

## 🔮 Future Enhancements

The current frontend application can be extended into a complete full-stack system.

Planned improvements include:

* **Java Spring Boot backend**
* **MySQL database**
* REST APIs
* User authentication
* Role-based access control
* Automatic inventory updates after sales
* Invoice PDF generation
* Customer purchase history
* Advanced sales analytics
* Online product catalog
* Cloud deployment

---

## 🎯 Project Objective

The primary objective of VastraLedger is to develop a practical software solution for managing the everyday operations of a clothing store while demonstrating modern **React development and frontend application design**.

The project focuses on:

* Building reusable components
* Managing application state
* Implementing CRUD operations
* Working with persistent client-side data
* Creating dynamic dashboards
* Performing business calculations
* Designing responsive user interfaces

---

## 👩‍💻 Author

**Dakshayani Konda**

GitHub | LinkedIn
