import { useCallback, useEffect } from "react";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { useStore } from "./store/useStore";
import About from "./features/about/About";
import Contact from "./features/contact/Contact";
import { Home } from "./features/home/Home";
import Location from "./features/location/Location";
import Shop from "./features/shop/Shop";
import Layout from "./features/layout/Layout";
import CartPage from "./features/cartPage/CartPage";
import { NoPageFound } from "./features/noPageFound/NoPageFound";
import { ProtectedRoutes } from "./features/authentication/ProtectedRoutes";
import AdminPanel from "./features/adminPanel/AdminPanel";
import LoginPage from "./features/authentication/LoginPage";
import SignupPage from "./features/authentication/SignupPage";
import User from "./features/authentication/User";
import AddProduct from "./features/adminPanel/AddProduct";
import EditProduct from "./features/adminPanel/EditProduct";
import StoreProducts from "./features/adminPanel/StoreProducts";
import AllUsers from "./features/adminPanel/AllUsers";
import EditUser from "./features/adminPanel/EditUser";

function App() {
  const getProducts = useStore((state) => state.getProducts);
  const authenticate = useStore((state) => state.authenticate);
  
  const fetchProducts = useCallback(async () => {
    try {
      const fetchedProducts = await getProducts();
      if(fetchedProducts){
        console.log("Products Fetched Successfully " + fetchedProducts);
      }
    } catch (err) {
      console.log("Error Fetching Products");
    }
});
  
  useEffect(() => {
    
    fetchProducts();
  }, [getProducts]);



  useEffect(()=>{
    authenticate()
  },[])

  const syncLogout = useCallback(event => {
    if (event.key === "logout") {
      // If using react-router-dom, you may call history.push("/")
      window.location.reload()
    }
  }, [])

  useEffect(() => {
    window.addEventListener("storage", syncLogout)
    return () => {
      window.removeEventListener("storage", syncLogout)
    }
  }, [syncLogout])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Layout />}>
          <Route path="dass-coffee/" element={<Home />} />
          <Route path="dass-coffee/shop" element={<Shop />} />
          <Route path="dass-coffee/about" element={<About />} />
          <Route path="dass-coffee/contactus" element={<Contact />} />
          <Route path="dass-coffee/location" element={<Location />} />
          <Route path="dass-coffee/cart" element={<CartPage />} />
          <Route path="dass-coffee/login" element={<LoginPage />} />
          <Route path="dass-coffee/signup" element={<SignupPage />} />
          <Route path="dass-coffee/users/:userId/profile" element={<EditUser />} />
          <Route
            element={
               <ProtectedRoutes>
              <AdminPanel />
              </ProtectedRoutes>
            }
          >
            <Route
              path="dass-coffee/adminpanel/products/storeProducts"
              element={<StoreProducts />}
            />
            <Route
              path="dass-coffee/adminpanel/products/add"
              element={<AddProduct />}
            />
            <Route
              path="dass-coffee/adminpanel/products/:productId/edit"
              element={<EditProduct />}
            />
            <Route path="dass-coffee/adminpanel/allusers" element={<AllUsers />} />
          </Route>
          <Route path="*" element={<NoPageFound />} />
        </Route>
      </>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
