import { useRef } from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../Cart/Cart";
import { useCartStore } from "../../store/store";
import "./navBar.scss";

export const Navbar = () => {
  const totalItems = useCartStore((state) => state.cartTotalItems());
  const [menuOpened, setMenuOpened] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const navRef = useRef(null);
  const shoppingBagRef = useRef(null);
  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia("(max-width: 667px)");
    setIsNarrowScreen(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
      setMenuOpened(false);
      // Set top for navbar
    }
    mediaWatcher.addEventListener("change", updateIsNarrowScreen);
    // Set top for navbar

    function handleNavigation(e) {
      if (window.scrollY < 50) {
        navRef.current.style.top = "50px";
      } else {
        navRef.current.style.top = "10px";
      }
    }
    window.addEventListener("scroll", handleNavigation);
    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
      window.removeEventListener("scroll", handleNavigation);
    };
  });
  useEffect(() => {
    if (totalItems > 0) {
      shoppingBagRef.current.style.color = `#ff5b19`;
    } else {
      shoppingBagRef.current.style.color = `#fff`;
    }
  }, [totalItems]);
  return (
    <>
      <nav ref={navRef}>
        <div className="nav-left">
          <div className="logo"></div>
          <a href="#marquee">
            <h3>Dass Coffee</h3>
          </a>
        </div>
        <div className="nav-main">
          {(menuOpened || !isNarrowScreen) && (
            <div className="nav-main-menu">
              <Link to="/shop">Shop</Link>
              <Link to="about">About Us</Link>
              <Link to="contactus">Contact</Link>
              <Link to="location">Location</Link>
            </div>
          )}
          <div className="nav-main-responsive">
            <button onClick={() => setMenuOpened(!menuOpened)}>
              {menuOpened ? (
                <span className="material-symbols-outlined">close</span>
              ) : (
                <span className="material-symbols-outlined">menu</span>
              )}
            </button>
            <a href="#marquee">
              <h3>Dass Coffee</h3>
            </a>
            <button
              className="nav-main-responsive-shoppingBag"
              onClick={() => setCartOpen(!cartOpen)}
            >
              <span className="material-symbols-outlined" ref={shoppingBagRef}>
                shopping_bag
              </span>
              <div>{totalItems > 0 && totalItems}</div>
            </button>
          </div>
        </div>
        <div className="nav-right">
          <span className="material-symbols-outlined">search</span>
          <span className="material-symbols-outlined">person</span>
          <button
            className="nav-right-shoppingBag"
            onClick={() => setCartOpen(!cartOpen)}
          >
            <span className="material-symbols-outlined" ref={shoppingBagRef}>
              shopping_bag
            </span>
            <div>{totalItems > 0 && totalItems}</div>
          </button>
        </div>
        {cartOpen && <Cart onClick={setCartOpen} />}
      </nav>
    </>
  );
};
