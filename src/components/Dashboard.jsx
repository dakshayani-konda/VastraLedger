function Dashboard() {
  return (
    <main className="dashboard">

      {/* Dashboard Header */}
      <div className="dashboard-header">

        <div>
          <h1>Dashboard</h1>
          <p>Welcome back! Here's what's happening with your business.</p>
        </div>

        <button className="date-button">
          📅 Today
        </button>

      </div>


      {/* Statistics */}
      <div className="stats">

        <div className="card">
          <div className="card-top">
            <div>
              <p className="card-title">Total Sales</p>
              <h2>₹45,250</h2>
            </div>

            <div className="card-icon">
              💰
            </div>
          </div>

          <p className="card-change positive">
            ↑ 12.5% <span>from last month</span>
          </p>
        </div>


        <div className="card">
          <div className="card-top">
            <div>
              <p className="card-title">Customers</p>
              <h2>128</h2>
            </div>

            <div className="card-icon">
              👥
            </div>
          </div>

          <p className="card-change positive">
            ↑ 8.2% <span>from last month</span>
          </p>
        </div>


        <div className="card">
          <div className="card-top">
            <div>
              <p className="card-title">Products</p>
              <h2>356</h2>
            </div>

            <div className="card-icon">
              👗
            </div>
          </div>

          <p className="card-change positive">
            ↑ 5.4% <span>from last month</span>
          </p>
        </div>


        <div className="card">
          <div className="card-top">
            <div>
              <p className="card-title">Low Stock</p>
              <h2>12</h2>
            </div>

            <div className="card-icon">
              ⚠️
            </div>
          </div>

          <p className="card-change warning">
            Needs attention
          </p>
        </div>

      </div>


      {/* Dashboard Main Grid */}
      <div className="dashboard-grid">

        {/* Sales Chart */}
        <div className="dashboard-box">

          <div className="box-header">

            <div>
              <h2>Sales Overview</h2>
              <p>Monthly sales performance</p>
            </div>

            <select>
              <option>Last 7 Months</option>
              <option>Last 6 Months</option>
              <option>This Year</option>
            </select>

          </div>


          <div className="chart">

            <div className="chart-bars">

              <div className="bar-wrapper">
                <div className="bar" style={{ height: "45%" }}></div>
                <span>Mar</span>
              </div>

              <div className="bar-wrapper">
                <div className="bar" style={{ height: "60%" }}></div>
                <span>Apr</span>
              </div>

              <div className="bar-wrapper">
                <div className="bar" style={{ height: "50%" }}></div>
                <span>May</span>
              </div>

              <div className="bar-wrapper">
                <div className="bar" style={{ height: "75%" }}></div>
                <span>Jun</span>
              </div>

              <div className="bar-wrapper">
                <div className="bar" style={{ height: "65%" }}></div>
                <span>Jul</span>
              </div>

              <div className="bar-wrapper">
                <div className="bar" style={{ height: "85%" }}></div>
                <span>Aug</span>
              </div>

              <div className="bar-wrapper">
                <div className="bar" style={{ height: "95%" }}></div>
                <span>Sep</span>
              </div>

            </div>

          </div>

        </div>


        {/* Low Stock */}
        <div className="dashboard-box">

          <div className="box-header">

            <div>
              <h2>Low Stock</h2>
              <p>Products that need attention</p>
            </div>

            <button className="view-button">
              View All
            </button>

          </div>


          <div className="stock-list">

            <div className="stock-item">

              <div className="product-info">

                <div className="product-image">
                  👗
                </div>

                <div>
                  <strong>Kanchipuram Saree</strong>
                  <p>Only 2 left</p>
                </div>

              </div>

              <span className="stock-danger">
                Critical
              </span>

            </div>


            <div className="stock-item">

              <div className="product-info">

                <div className="product-image">
                  👚
                </div>

                <div>
                  <strong>Cotton Saree</strong>
                  <p>Only 3 left</p>
                </div>

              </div>

              <span className="stock-warning">
                Low
              </span>

            </div>


            <div className="stock-item">

              <div className="product-info">

                <div className="product-image">
                  👘
                </div>

                <div>
                  <strong>Red Lehenga</strong>
                  <p>Only 2 left</p>
                </div>

              </div>

              <span className="stock-warning">
                Low
              </span>

            </div>

          </div>

        </div>

      </div>


      {/* Recent Sales */}
      <div className="dashboard-box recent-sales">

        <div className="box-header">

          <div>
            <h2>Recent Sales</h2>
            <p>Latest customer transactions</p>
          </div>

          <button className="view-button">
            View All
          </button>

        </div>


        <div className="table-container">

          <table>

            <thead>
              <tr>
                <th>Customer</th>
                <th>Product</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              <tr>
                <td>Priya</td>
                <td>Kanchipuram Saree</td>
                <td>₹4,500</td>
                <td>14 Sep 2026</td>
                <td>
                  <span className="status paid">
                    Paid
                  </span>
                </td>
              </tr>

              <tr>
                <td>Swathi</td>
                <td>Cotton Saree</td>
                <td>₹1,500</td>
                <td>13 Sep 2026</td>
                <td>
                  <span className="status paid">
                    Paid
                  </span>
                </td>
              </tr>

              <tr>
                <td>Anusha</td>
                <td>Red Lehenga</td>
                <td>₹2,500</td>
                <td>12 Sep 2026</td>
                <td>
                  <span className="status pending">
                    Pending
                  </span>
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </main>
  );
}

export default Dashboard;