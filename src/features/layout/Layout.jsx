import { Outlet } from "react-router-dom";
import { LazyLoadComponent } from "react-lazy-load-image-component";
import { Marquee } from "../../components/Marquee/Marquee";
import { Navbar } from "../../components/NavBar/Navbar";
import Footer from "../home/Footer";

export default function Layout() {
  return (
    <>
      <Marquee />
      <Navbar />
      <Outlet />
      <LazyLoadComponent>
        <Footer />
      </LazyLoadComponent>
    </>
  );
}
