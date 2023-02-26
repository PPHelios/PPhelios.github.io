import { Link, Outlet } from "react-router-dom";
import "./adminPanel.scss";
import { useStore } from "../../store/useStore";
export default function AdminPanel() {
  const user = useStore((state) => state.user);
  return (
    <main className="adminPanel--main">
      <h1>Admin Panel</h1>
      {user && (
        <h2>
          Hi {user.firstName} {user.lastName}
        </h2>
      )}
      <Link to="dass-coffee/products/add">Add Product</Link>
      <Link to="dass-coffee/products/storeProducts">Store Products</Link>
      <Link to="dass-coffee/allusers">All Users</Link>
      <Outlet />
    </main>
  );
}
