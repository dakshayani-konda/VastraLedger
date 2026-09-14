import { useState } from "react";

function Billing() {
  const [showForm, setShowForm] = useState(false);

  const [bills, setBills] = useState([]);

  const [customerName, setCustomerName] = useState("");
  const [productName, setProductName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("Pending");

  const handleSave = () => {
    if (!customerName || !productName || !quantity || !price) {
      alert("Please fill all fields");
      return;
    }

    const total = Number(quantity) * Number(price);

    const newBill = {
      customerName,
      productName,
      quantity,
      price,
      total,
      paymentStatus,
    };

    setBills([...bills, newBill]);

    setCustomerName("");
    setProductName("");
    setQuantity("");
    setPrice("");
    setPaymentStatus("Pending");

    setShowForm(false);
  };

  const handleDelete = (index) => {
    const updatedBills = bills.filter(
      (_, i) => i !== index
    );

    setBills(updatedBills);
  };

  return (
    <main className="page">

      <div className="page-header">
        <div>
          <h1>Billing</h1>
          <p>Create and manage customer bills</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Create Bill
        </button>
      </div>

      {showForm && (
        <div className="customer-card">

          <h3>Create New Bill</h3>

          <input
            type="text"
            placeholder="Customer Name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
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

          <select
            value={paymentStatus}
            onChange={(e) => setPaymentStatus(e.target.value)}
          >
            <option value="Pending">Pending</option>
            <option value="Paid">Paid</option>
          </select>

          <button
            className="add-button"
            onClick={handleSave}
          >
            Save Bill
          </button>

        </div>
      )}

      <div className="customer-card">

        <h3>Bill List</h3>

        {bills.length === 0 ? (
          <p>No bills created yet.</p>
        ) : (
          <table className="customer-table">

            <thead>
              <tr>
                <th>Customer</th>
                <th>Product</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Payment Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {bills.map((bill, index) => (
                <tr key={index}>
                  <td>{bill.customerName}</td>
                  <td>{bill.productName}</td>
                  <td>{bill.quantity}</td>
                  <td>₹{bill.price}</td>
                  <td>₹{bill.total}</td>
                  <td>{bill.paymentStatus}</td>

                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(index)}
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

export default Billing;