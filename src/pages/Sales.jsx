import { useEffect, useState } from "react";

function Sales() {
  const [sales, setSales] = useState(() => {
    const savedSales = localStorage.getItem("sales");

    return savedSales
      ? JSON.parse(savedSales)
      : [];
  });

  const [showForm, setShowForm] = useState(false);

  const [productName, setProductName] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "sales",
      JSON.stringify(sales)
    );
  }, [sales]);

  const handleSave = () => {
    if (!productName || !customerName || !quantity || !price) {
      alert("Please fill all fields");
      return;
    }

    const newSale = {
      id: Date.now(),
      productName,
      customerName,
      quantity: Number(quantity),
      price: Number(price),
      total: Number(quantity) * Number(price),
      date: new Date().toLocaleDateString(),
    };

    setSales([...sales, newSale]);

    setProductName("");
    setCustomerName("");
    setQuantity("");
    setPrice("");

    setShowForm(false);
  };

  const handleDelete = (id) => {
    const updatedSales = sales.filter(
      (sale) => sale.id !== id
    );

    setSales(updatedSales);
  };

  const totalSales = sales.reduce(
    (sum, sale) => sum + sale.total,
    0
  );

  const totalItems = sales.reduce(
    (sum, sale) => sum + sale.quantity,
    0
  );

  return (
    <main className="page">

      <div className="page-header">

        <div>
          <h1>Sales</h1>
          <p>Track your clothing sales</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Sale
        </button>

      </div>


      {/* SALES SUMMARY */}

      <div className="sales-summary">

        <div className="summary-card">
          <h3>Total Sales</h3>
          <p>₹{totalSales.toLocaleString()}</p>
        </div>

        <div className="summary-card">
          <h3>Items Sold</h3>
          <p>{totalItems}</p>
        </div>

        <div className="summary-card">
          <h3>Transactions</h3>
          <p>{sales.length}</p>
        </div>

      </div>


      {/* ADD SALE FORM */}

      {showForm && (
        <div className="customer-card">

          <h3>Add New Sale</h3>

          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price per Item"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <button
            className="add-button"
            onClick={handleSave}
          >
            Save Sale
          </button>

        </div>
      )}


      {/* SALES LIST */}

      <div className="customer-card">

        <h3>Sales List</h3>

        {sales.length === 0 ? (
          <p>No sales recorded yet.</p>
        ) : (

          <table className="customer-table">

            <thead>
              <tr>
                <th>Product</th>
                <th>Customer</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Date</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {sales.map((sale) => (

                <tr key={sale.id}>

                  <td>{sale.productName}</td>

                  <td>{sale.customerName}</td>

                  <td>{sale.quantity}</td>

                  <td>₹{sale.price.toLocaleString()}</td>

                  <td>₹{sale.total.toLocaleString()}</td>

                  <td>{sale.date}</td>

                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(sale.id)}
                    >
                      Delete
                    </button>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        )}

      </div>

    </main>
  );
}

export default Sales;