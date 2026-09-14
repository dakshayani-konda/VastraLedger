import { useEffect, useState } from "react";

function Products() {
  const [showForm, setShowForm] = useState(false);

  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("products");

    return savedProducts
      ? JSON.parse(savedProducts)
      : [];
  });

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "products",
      JSON.stringify(products)
    );
  }, [products]);

  const handleSave = () => {
    if (!name || !category || !price || !stock) {
      alert("Please fill all fields");
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      category,
      price: Number(price),
      stock: Number(stock),
    };

    setProducts([...products, newProduct]);

    setName("");
    setCategory("");
    setPrice("");
    setStock("");

    setShowForm(false);
  };

  const handleDelete = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);
  };

  return (
    <main className="products-page">

      <div className="page-header">

        <div>
          <h1>Products</h1>
          <p>Manage your clothing inventory</p>
        </div>

        <button
          className="add-product-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Product
        </button>

      </div>

      {showForm && (
        <div className="customer-card">

          <h3>Add New Product</h3>

          <input
            type="text"
            placeholder="Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />

          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />

          <input
            type="number"
            placeholder="Stock Quantity"
            value={stock}
            onChange={(e) => setStock(e.target.value)}
          />

          <button
            className="add-button"
            onClick={handleSave}
          >
            Save Product
          </button>

        </div>
      )}

      <div className="products-content">

        {products.length === 0 ? (
          <p>No products added yet.</p>
        ) : (
          <table className="customer-table">

            <thead>
              <tr>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {products.map((product) => (
                <tr key={product.id}>

                  <td>{product.name}</td>

                  <td>{product.category}</td>

                  <td>
                    ₹{product.price.toLocaleString()}
                  </td>

                  <td>{product.stock}</td>

                  <td>
                    <button
                      className="delete-button"
                      onClick={() => handleDelete(product.id)}
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

export default Products;