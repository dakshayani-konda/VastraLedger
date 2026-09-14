# VastraLedger 🧾

### Clothing Store Management Dashboard

VastraLedger is a **React-based clothing store management dashboard** built to simplify and organize the daily operations of a small clothing business.

It brings **products, customers, sales, billing, inventory, reports, and store settings** together in one centralized application.

The project uses **LocalStorage** to persist business data in the browser and provides a responsive, user-friendly dashboard for managing store information.


## 📌 About the Project

Running a clothing store involves managing products, stock, customers, sales, and payments on a regular basis.

VastraLedger provides a single dashboard where a store owner can manage these activities efficiently.

### The application allows users to:

* Manage products and inventory
* Add and manage customer records
* Record sales transactions
* Create and track bills
* Monitor low-stock products
* Search products, customers, and sales
* View business reports and statistics
* Manage basic store preferences


## ✨ Features

### 📊 Dashboard

Provides a quick overview of the store's current business activity.

* Total sales
* Total products
* Total customers
* Total items sold
* Total revenue
* Recent sales
* Low-stock alerts
* Dynamic business statistics


### 📦 Product Management

Manage clothing products and inventory.

* Add products
* Store product name and category
* Set product price
* Track stock quantity
* Delete products
* Identify low-stock products
* Store product data using LocalStorage

### 👥 Customer Management

Maintain customer information in one place.

* Add customers
* Store name, phone number, and address
* View customer records
* Delete customers
* Preserve customer data after page refresh


### 💰 Sales Management

Record and track sales transactions.

* Add sales
* Select products and customers
* Enter quantity sold
* Track price per item
* Automatically calculate total amount
* View sales history
* Delete sales records
* Store sales data using LocalStorage


### 🧾 Billing

Create and manage customer bills.

* Enter customer details
* Add product details
* Enter quantity and price
* Automatically calculate bill total
* Track payment status
* View generated bills


### 📈 Reports & Analytics

Generate business statistics automatically from the stored application data.

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

The reports are generated from actual application data rather than manually entered values.


### 🔎 Global Search

Search business records quickly from one place.

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


## 🛠️ Tech Stack

| Technology            | Purpose                       |
| --------------------- | ----------------------------- |
| **React**             | Building the user interface   |
| **JavaScript (ES6+)** | Application logic             |
| **Vite**              | Development and build tool    |
| **React Router**      | Page navigation               |
| **CSS3**              | Styling and responsive design |
| **LocalStorage API**  | Client-side data persistence  |
| **Git**               | Version control               |
| **GitHub**            | Source code management        |


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
* LocalStorage
* Dynamic Calculations
* State Management
* CRUD Operations


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




## 🚀 Getting Started

### 1. Clone the repository

git clone https://github.com/dakshayani-konda/VastraLedger.git

### 2. Open the project

cd VastraLedger

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev

Open the local URL shown in the terminal, usually:

http://localhost:5173


## 💾 Data Storage

VastraLedger currently uses the **browser's LocalStorage API** to store application data.

This allows the application to retain:

* Product records
* Customer records
* Sales transactions
* Bills
* Payment information
* Store settings

> **Note:** Data is currently stored locally in the browser and is not connected to a backend server or shared database.


## 🔮 Future Enhancements

The current frontend version can be extended into a complete full-stack application.

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


## 🎯 Project Objective

The main objective of VastraLedger is to build a practical software solution for managing the everyday operations of a clothing store while demonstrating modern **React development and frontend application design**.

The project focuses on:

* Building reusable components
* Managing application state
* Performing CRUD operations
* Working with persistent client-side data
* Creating dynamic dashboards
* Implementing business calculations
* Designing responsive user interfaces


## 👩‍💻 Author

**Dakshayani Konda**

