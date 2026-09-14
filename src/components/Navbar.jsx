import { useState } from "react";

function Navbar() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (value) => {
    setSearch(value);

    if (!value.trim()) {
      setResults([]);
      return;
    }

    const customers = JSON.parse(
      localStorage.getItem("customers") || "[]"
    );

    const products = JSON.parse(
      localStorage.getItem("products") || "[]"
    );

    const sales = JSON.parse(
      localStorage.getItem("sales") || "[]"
    );

    const text = value.toLowerCase();

    const customerResults = customers
      .filter(
        (customer) =>
          customer.name?.toLowerCase().includes(text) ||
          customer.phone?.includes(text)
      )
      .map((customer) => ({
        type: "Customer",
        name: customer.name,
        details: customer.phone,
      }));

    const productResults = products
      .filter(
        (product) =>
          product.name?.toLowerCase().includes(text) ||
          product.category?.toLowerCase().includes(text)
      )
      .map((product) => ({
        type: "Product",
        name: product.name,
        details: `₹${product.price}`,
      }));

    const salesResults = sales
      .filter(
        (sale) =>
          sale.customerName?.toLowerCase().includes(text) ||
          sale.productName?.toLowerCase().includes(text)
      )
      .map((sale) => ({
        type: "Sale",
        name: sale.customerName,
        details: `${sale.productName} • ₹${sale.total}`,
      }));

    setResults([
      ...customerResults,
      ...productResults,
      ...salesResults,
    ]);
  };

  return (
    <header className="navbar">

      <div className="navbar-search">

        <div className="search-input-wrapper">
          <span className="search-icon">🔍</span>

          <input
            type="text"
            placeholder="Search customers, products..."
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />

          {search && (
            <button
              className="search-clear"
              onClick={() => {
                setSearch("");
                setResults([]);
              }}
            >
              ×
            </button>
          )}
        </div>

        {search.trim() && (
          <div className="search-dropdown">

            {results.length === 0 ? (
              <div className="no-search-results">
                <span>🔎</span>
                <div>
                  <strong>No results found</strong>
                  <p>Try another customer or product name</p>
                </div>
              </div>
            ) : (
              <>
                <div className="search-heading">
                  Search Results
                </div>

                {results.map((result, index) => (
                  <div
                    className="search-item"
                    key={index}
                  >
                    <div className="search-item-main">
                      <strong>{result.name}</strong>
                      <span>{result.details}</span>
                    </div>

                    <span className="search-type">
                      {result.type}
                    </span>
                  </div>
                ))}
              </>
            )}

          </div>
        )}

      </div>

      <div className="owner-section">

        <div className="owner-avatar">
          D
        </div>

        <div>
          <div className="owner-name">
            Owner
          </div>

          <div className="owner-role">
            Administrator
          </div>
        </div>

      </div>

    </header>
  );
}

export default Navbar;