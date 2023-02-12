import { useEffect } from "react";
import { useStore } from "../../store/useStore";

export default function StoreProducts() {
  const products = useStore((state) => state.products);
  const getProducts = useStore((state) => state.getProducts);

  useEffect(() => {
    getProducts();
  }, []);
  const ProductsList = () =>
    products.map((product) => {
      return (
        <div key={product._id}>
          <h4>{product.name}</h4>
        </div>
      );
    });
  return (
    <section>
      <h2>Store Products</h2>
      {<ProductsList />}
    </section>
  );
}
