import { useState } from "react";

function Settings() {
  const [storeName, setStoreName] = useState("VastraLedger");
  const [currency, setCurrency] = useState("INR");
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  const handleReset = () => {
    setStoreName("VastraLedger");
    setCurrency("INR");
    setSaved(false);
  };

  return (
    <main className="page">

      <div className="settings-header">
        <div>
          <h1>Settings</h1>
          <p>Manage your store information and preferences</p>
        </div>
      </div>

      <div className="settings-card">

        <div className="settings-card-header">
          <h2>Store Settings</h2>
          <p>Update the basic information for your store.</p>
        </div>

        <div className="settings-form">

          <div className="settings-field">
            <label htmlFor="storeName">
              Store Name
            </label>

            <input
              id="storeName"
              type="text"
              value={storeName}
              onChange={(e) => setStoreName(e.target.value)}
              placeholder="Enter store name"
            />
          </div>

          <div className="settings-field">
            <label htmlFor="currency">
              Currency
            </label>

            <select
              id="currency"
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <option value="INR">₹ Indian Rupee (INR)</option>
              <option value="USD">$ US Dollar (USD)</option>
              <option value="EUR">€ Euro (EUR)</option>
            </select>
          </div>

          <div className="settings-actions">

            <button
              className="settings-save-btn"
              onClick={handleSave}
            >
              Save Settings
            </button>

            <button
              className="settings-reset-btn"
              onClick={handleReset}
            >
              Reset
            </button>

          </div>

          {saved && (
            <div className="success-message">
              ✓ Settings saved successfully!
            </div>
          )}

        </div>

      </div>

    </main>
  );
}

export default Settings;