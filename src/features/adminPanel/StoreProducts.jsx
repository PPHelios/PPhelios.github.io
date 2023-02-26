import { useState } from "react";
import { Link } from "react-router-dom";
import { useStore } from "../../store/useStore";
export default function StoreProducts() {
  const products = useStore((state) => state.products);

  const deleteProduct = useStore((state) => state.deleteProduct);
  const [error, setError] = useState("");

  const handleDeleteProduct = async (deletedProductID) => {
    try {
      setError("");
      const res = await deleteProduct(deletedProductID);
      console.log("deleted");
    } catch (err) {
      setError(err.message);
    }
  };
  console.log(products);

  const ProductsList = () => {
    if (products) {
      return products.map((product) => {
        return (
          <div key={product._id}>
            <h4>{product.name}</h4>
            <button onClick={() => handleDeleteProduct({ id: product._id })}>
              delete
            </button>
            <Link to={`/dass-coffee/products/${product._id}/edit`}>Edit</Link>
          </div>
        );
      });
    }
  };
  return (
    <section>
      <h2>Store Products</h2>
      {<ProductsList />}
      {error && <h3>{error}</h3>}
    </section>
  );
}
