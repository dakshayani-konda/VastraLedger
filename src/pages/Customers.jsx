import { useEffect, useState } from "react";

function Customers() {
  const [showForm, setShowForm] = useState(false);

  const [customers, setCustomers] = useState(() => {
    const savedCustomers = localStorage.getItem("customers");

    return savedCustomers
      ? JSON.parse(savedCustomers)
      : [];
  });

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "customers",
      JSON.stringify(customers)
    );
  }, [customers]);

  const handleDelete = (index) => {
    const updatedCustomers = customers.filter(
      (_, i) => i !== index
    );

    setCustomers(updatedCustomers);
  };

  const handleSave = () => {
    if (!name || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    const newCustomer = {
      id: Date.now(),
      name,
      phone,
      address,
    };

    setCustomers([...customers, newCustomer]);

    setName("");
    setPhone("");
    setAddress("");
    setShowForm(false);
  };

  return (
    <main className="page">

      <div className="page-header">
        <div>
          <h1>Customers</h1>
          <p>Manage your customers</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Customer
        </button>
      </div>


      {showForm && (
        <div className="customer-card">

          <h3>Add New Customer</h3>

          <input
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />

          <button
            className="add-button"
            onClick={handleSave}
          >
            Save Customer
          </button>

        </div>
      )}


      <div className="customer-card">

        <h3>Customer List</h3>

        {customers.length === 0 ? (
          <p>No customers added yet.</p>
        ) : (
          <table className="customer-table">

            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Phone</th>
                <th>Address</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {customers.map((customer, index) => (
                <tr key={customer.id}>

                  <td>{customer.name}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.address}</td>

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

export default Customers;