import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>VastraLedger</h2>

      <nav>

        <NavLink to="/" className="sidebar-button">
        🏠 Dashboard
        </NavLink>
        <NavLink to="/customers" className="sidebar-button">
        👥 Customers
        </NavLink>

        <NavLink to="/products" className="sidebar-button">
          📦 Products
        </NavLink>

        <NavLink to="/billing" className="sidebar-button">
        🧾 Billing
        </NavLink>
        <NavLink to="/sales" className="sidebar-button">
        💰 Sales
        </NavLink>
        <NavLink to="/reports" className="sidebar-button">
        📊 Reports
        </NavLink>
        <NavLink to="/settings" className="sidebar-button">
        ⚙️ Settings
        </NavLink>

      </nav>

    </aside>
  );
}

export default Sidebar;