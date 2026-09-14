VastraLedger 🧾
Clothing Store Management Dashboard

VastraLedger is a modern React-based clothing store management dashboard designed to help small clothing businesses manage their day-to-day operations from a single application.

The application provides modules for product and inventory management, customer management, sales tracking, billing, reporting, global search, and store settings. It uses browser-based persistent storage to maintain application data across sessions while providing a clean and responsive user interface.

📌 Project Overview

Managing products, customers, sales, and billing separately can make it difficult for small retail businesses to maintain accurate and organized records.

VastraLedger brings these core operations together into one centralized dashboard.

The application allows a store owner to:

Manage clothing products and inventory
Maintain customer records
Record and track sales transactions
Create and manage bills
Monitor low-stock products
Search products, customers, and sales
View automatically generated business reports
Monitor important business statistics
Configure basic store preferences
✨ Key Features
📊 Dashboard

The dashboard provides a centralized overview of the store's current business activity.

Total sales
Total products
Total customers
Total items sold
Revenue overview
Recent sales transactions
Low-stock product alerts
Dynamic statistics calculated from stored data
📦 Product Management

Manage clothing products and inventory through an intuitive interface.

Add new products
Store product name and category
Set product price
Track available stock
Delete products
Automatically identify low-stock products
Persist product data using LocalStorage
👥 Customer Management

Maintain customer information in one place.

Add customers
Store customer name
Store phone number
Store address
View customer records
Delete customer records
Persist customer data across browser refreshes
💰 Sales Management

Record and manage clothing sales transactions.

Add sales transactions
Select products and customers
Track quantity sold
Track price per item
Automatically calculate total sale amount
View transaction history
Delete sales records
Persist sales data using LocalStorage
🧾 Billing

Create and manage customer bills.

Enter customer details
Add product details
Enter quantity and price
Automatically calculate bill totals
Track payment status
View generated bills
📈 Reports & Analytics

The Reports section dynamically generates business information from the application's stored data.

It provides:

Total revenue
Total sales
Total products
Total customers
Total items sold
Paid payments
Pending payments
Total bills
Detailed sales records

This ensures that reports remain synchronized with the application's actual data instead of relying on manually entered sample values.

🔎 Global Search

A global search feature allows users to quickly find information across the application.

Currently supports searching for:

Products
Customers
Sales

Search results are generated from the application's stored data.

⚙️ Settings

Basic store preferences can be managed through the Settings section.

Configure store name
Set currency preference
Save preferences
Reset settings
🛠️ Tech Stack
Technology	Purpose
React	Frontend UI development
JavaScript (ES6+)	Application logic and functionality
Vite	Development server and build tooling
React Router	Client-side routing and navigation
CSS3	Styling and responsive UI
LocalStorage API	Client-side data persistence
Git	Version control
GitHub	Source code hosting
🧠 React Concepts Used

This project demonstrates practical implementation of several React and JavaScript concepts:

Functional components
useState
useEffect
React Router
Controlled form inputs
Event handling
Conditional rendering
Component-based architecture
Array methods such as map(), filter(), and reduce()
LocalStorage API
Dynamic calculations
State-driven UI updates
Client-side data management
🏗️ Project Structure
VastraLedger/
│
├── src/
│   │
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
├── public/
├── package.json
├── package-lock.json
└── README.md
🚀 Getting Started
1. Clone the Repository
git clone https://github.com/dakshayani1705/VastraLedger.git
2. Navigate to the Project Directory
cd VastraLedger
3. Install Dependencies
npm install
4. Start the Development Server
npm run dev

The application will be available at the local development URL provided by Vite, typically:

http://localhost:5173
💾 Data Persistence

VastraLedger currently uses the browser's LocalStorage API for client-side data persistence.

This allows the application to:

Preserve products after page refresh
Preserve customer records
Preserve sales transactions
Preserve bills and payment information
Store application settings

Note: Since the current version uses LocalStorage, the data is stored locally in the user's browser and is not synchronized with a server or shared database.

🔮 Future Enhancements

The project can be further extended into a complete full-stack business management system.

Possible future improvements include:

Java Spring Boot backend
MySQL database integration
User authentication and authorization
REST API integration
Cloud-based data storage
Advanced sales analytics
Inventory stock updates based on sales
Invoice PDF generation
Online product catalog
Customer purchase history
Role-based access control
Deployment to a cloud platform
🎯 Project Goals

VastraLedger was developed to demonstrate how a real-world business problem can be converted into a practical software solution using modern frontend technologies.

The project focuses on:

Component-based development
Data-driven UI design
State management
Client-side persistence
CRUD operations
Dynamic calculations
Responsive dashboard design
Practical React development

👩‍💻 Author
Dakshayani Konda
