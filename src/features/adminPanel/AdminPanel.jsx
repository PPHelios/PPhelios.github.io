import { Link, Outlet } from "react-router-dom";
import "./adminPanel.scss";

export default function AdminPanel() {
  return (
    <main className="adminPanel--main">
      <h1>Admin Panel</h1>
      <Link to="dass-coffee/adminpanel/products/add">Add Product</Link>
      <Link to="dass-coffee/adminpanel/products/storeProducts">
        Store Products
      </Link>
      <Outlet />
    </main>
  );
}
