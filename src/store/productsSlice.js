import produce from "immer";

export const productsSlice = (set, get) => ({
  products: [],
  getProducts: async () => {
    try {
      const response = await fetch("http://localhost:8000/products");
      if (!response.ok) {
        console.log("error");
      } else {
        const products = await response.json();
        console.log(products);
        set((state) => ({ products }));
      }
    } catch (e) {
      console.log(e);
    }
  },
});
