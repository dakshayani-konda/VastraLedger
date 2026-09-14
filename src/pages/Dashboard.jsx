import { useEffect, useState } from "react";

function Dashboard() {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const loadDashboardData = () => {
      const savedSales = localStorage.getItem("sales");
      const savedProducts = localStorage.getItem("products");
      const savedCustomers = localStorage.getItem("customers");

      setSales(
        savedSales
          ? JSON.parse(savedSales)
          : []
      );

      setProducts(
        savedProducts
          ? JSON.parse(savedProducts)
          : []
      );

      setCustomers(
        savedCustomers
          ? JSON.parse(savedCustomers)
          : []
      );
    };

    loadDashboardData();
  }, []);

  const totalSales = sales.reduce(
    (sum, sale) => sum + Number(sale.total || 0),
    0
  );

  const totalItems = sales.reduce(
    (sum, sale) => sum + Number(sale.quantity || 0),
    0
  );

  const lowStockProducts = products.filter(
    (product) => Number(product.stock) <= 5
  );

  return (
    <main className="dashboard">

      {/* Dashboard Header */}

      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>

          <p>
            Welcome back! Here's what's happening with your business.
          </p>
        </div>

        <button className="date-button">
          📅 Today
        </button>

      </div>


      {/* Statistics */}

      <div className="stats">

        {/* Total Sales */}

        <div className="card">

          <div className="card-top">

            <div>
              <p className="card-title">
                Total Sales
              </p>

              <h2>
                ₹{totalSales.toLocaleString()}
              </h2>
            </div>

            <div className="card-icon">
              💰
            </div>

          </div>

          <p className="card-change positive">
            {sales.length}{" "}
            <span>transactions</span>
          </p>

        </div>


        {/* Total Products */}

        <div className="card">

          <div className="card-top">

            <div>
              <p className="card-title">
                Total Products
              </p>

              <h2>
                {products.length}
              </h2>
            </div>

            <div className="card-icon">
              📦
            </div>

          </div>

          <p className="card-change">
            <span>
              Products in inventory
            </span>
          </p>

        </div>


        {/* Total Customers */}

        <div className="card">

          <div className="card-top">

            <div>
              <p className="card-title">
                Total Customers
              </p>

              <h2>
                {customers.length}
              </h2>
            </div>

            <div className="card-icon">
              👥
            </div>

          </div>

          <p className="card-change">
            <span>
              Registered customers
            </span>
          </p>

        </div>


        {/* Items Sold */}

        <div className="card">

          <div className="card-top">

            <div>
              <p className="card-title">
                Items Sold
              </p>

              <h2>
                {totalItems}
              </h2>
            </div>

            <div className="card-icon">
              🛍️
            </div>

          </div>

          <p className="card-change positive">
            <span>
              Based on your sales
            </span>
          </p>

        </div>

      </div>


      {/* Dashboard Grid */}

      <div className="dashboard-grid">


        {/* Sales Overview */}

        <div className="dashboard-box sales-overview">

          <div className="box-header">

            <div>
              <h2>Sales Overview</h2>

              <p>
                Your recorded sales
              </p>
            </div>

            <select className="period-select">
              <option>This Week</option>
              <option>This Month</option>
              <option>This Year</option>
            </select>

          </div>


          <div className="chart">

            {sales.length === 0 ? (

              <div className="empty-chart">

                <p>
                  No sales recorded yet.
                </p>

                <span>
                  Add a sale to see your sales overview.
                </span>

              </div>

            ) : (

              <div className="chart-bars">

                {sales.slice(-7).map(
                  (sale, index) => {

                    const saleTotal =
                      Number(sale.total || 0);

                    const maxSale = Math.max(
                      ...sales
                        .slice(-7)
                        .map(
                          (item) =>
                            Number(item.total || 0)
                        ),
                      1
                    );

                    const barHeight = Math.max(
                      (saleTotal / maxSale) * 100,
                      15
                    );

                    return (
                      <div
                        className="bar-wrapper"
                        key={sale.id || index}
                      >

                        <div
                          className="bar"
                          style={{
                            height: `${barHeight}%`,
                          }}
                        ></div>

                        <span>
                          Sale {index + 1}
                        </span>

                      </div>
                    );
                  }
                )}

              </div>

            )}

          </div>

        </div>


        {/* Low Stock */}

        <div className="dashboard-box">

          <div className="box-header">

            <div>
              <h2>Low Stock</h2>

              <p>
                Products that need attention
              </p>
            </div>

          </div>


          <div className="stock-list">

            {lowStockProducts.length === 0 ? (

              <div className="empty-stock">

                <p>
                  No low-stock products.
                </p>

                <span>
                  Products with 5 or fewer items will appear here.
                </span>

              </div>

            ) : (

              lowStockProducts.map(
              (product) => (

                <div
                  className="stock-item"
                  key={product.id}
                >

                  <div className="stock-product-info">

                    <div className="stock-product-icon">
                      📦
                    </div>

                    <div>
                      <strong>
                        {product.name}
                      </strong>

                      <span>
                        {product.category}
                      </span>
                    </div>

                  </div>

                  <div className="stock-product-right">

                    <span className="low-stock-badge">
                      Low Stock
                    </span>

                    <span className="stock-count">
                      {product.stock} left
                    </span>

                  </div>

                </div>

              )
            )

            )}

          </div>

        </div>

      </div>


      {/* Recent Sales */}

      <div className="dashboard-box recent-sales">

        <div className="box-header">

          <div>
            <h2>Recent Sales</h2>

            <p>
              Latest transactions
            </p>
          </div>

        </div>


        <div className="table-container">

          {sales.length === 0 ? (

            <p className="empty-message">
              No sales recorded yet.
            </p>

          ) : (

            <table>

              <thead>

                <tr>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                  <th>Date</th>
                </tr>

              </thead>


              <tbody>

                {sales
                  .slice()
                  .reverse()
                  .slice(0, 5)
                  .map((sale) => (

                    <tr key={sale.id}>

                      <td>
                        {sale.customerName}
                      </td>

                      <td>
                        {sale.productName}
                      </td>

                      <td>
                        {sale.quantity}
                      </td>

                      <td>
                        ₹
                        {Number(
                          sale.total || 0
                        ).toLocaleString()}
                      </td>

                      <td>
                        {sale.date}
                      </td>

                    </tr>

                  ))}

              </tbody>

            </table>

          )}

        </div>

      </div>

    </main>
  );
}

export default Dashboard;