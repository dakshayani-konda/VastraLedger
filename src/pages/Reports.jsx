import { useEffect, useState } from "react";

function Reports() {
  const [sales, setSales] = useState([]);
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    const loadData = () => {
      setSales(JSON.parse(localStorage.getItem("sales") || "[]"));
      setProducts(JSON.parse(localStorage.getItem("products") || "[]"));
      setCustomers(JSON.parse(localStorage.getItem("customers") || "[]"));
      setBills(JSON.parse(localStorage.getItem("bills") || "[]"));
    };

    loadData();
  }, []);

  const totalRevenue = sales.reduce(
    (sum, sale) => sum + Number(sale.total || 0),
    0
  );

  const totalItemsSold = sales.reduce(
    (sum, sale) => sum + Number(sale.quantity || 0),
    0
  );

  const pendingPayments = bills
    .filter((bill) => bill.paymentStatus === "Pending")
    .reduce(
      (sum, bill) => sum + Number(bill.total || 0),
      0
    );

  const paidPayments = bills
    .filter((bill) => bill.paymentStatus === "Paid")
    .reduce(
      (sum, bill) => sum + Number(bill.total || 0),
      0
    );

  return (
    <main className="page">

      <div className="page-header">
        <div>
          <h1>Reports</h1>
          <p>Automatically generated from your business records</p>
        </div>
      </div>

      <div className="sales-summary">

        <div className="summary-card">
          <h3>Total Revenue</h3>
          <p>₹{totalRevenue.toLocaleString()}</p>
        </div>

        <div className="summary-card">
          <h3>Total Sales</h3>
          <p>{sales.length}</p>
        </div>

        <div className="summary-card">
          <h3>Total Products</h3>
          <p>{products.length}</p>
        </div>

        <div className="summary-card">
          <h3>Total Customers</h3>
          <p>{customers.length}</p>
        </div>

      </div>

      <div className="sales-summary">

        <div className="summary-card">
          <h3>Items Sold</h3>
          <p>{totalItemsSold}</p>
        </div>

        <div className="summary-card">
          <h3>Paid Payments</h3>
          <p>₹{paidPayments.toLocaleString()}</p>
        </div>

        <div className="summary-card">
          <h3>Pending Payments</h3>
          <p>₹{pendingPayments.toLocaleString()}</p>
        </div>

        <div className="summary-card">
          <h3>Total Bills</h3>
          <p>{bills.length}</p>
        </div>

      </div>

      <div className="customer-card">

        <h3>Sales Report</h3>

        {sales.length === 0 ? (
          <p>No sales recorded yet.</p>
        ) : (
          <div className="table-container">

            <table className="customer-table">

              <thead>
                <tr>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Amount</th>
                </tr>
              </thead>

              <tbody>

                {sales
                  .slice()
                  .reverse()
                  .map((sale) => (
                    <tr key={sale.id}>

                      <td>{sale.date}</td>

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
                        ₹{Number(sale.total).toLocaleString()}
                      </td>

                    </tr>
                  ))}

              </tbody>

            </table>

          </div>
        )}

      </div>

    </main>
  );
}

export default Reports;