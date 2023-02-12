import produce from "immer";
import { apiRequest } from "./apiRequest";
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
        set(produce((state) => (state.products = products)));
      }
    } catch (e) {
      console.log(e);
    }
  },
  addProduct: async (newProduct) => {
    const data = await apiRequest(
      "http://localhost:8000/addProduct",
      "POST",
      newProduct
    );
    console.log(data.message);
  },
  deleteProduct: async (id) => {
    const data = await apiRequest(
      "http://localhost:8000/deleteProduct",
      "POST",
      id
    );
    data.message
      ? console.log(data.message)
      : console.log("Error Happened No Response");
  },
});

//set(produce((state) => (state.cart[index].q = newq)));
