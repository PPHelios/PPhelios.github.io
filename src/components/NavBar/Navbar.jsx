import { useRef } from "react";
import { useState, useEffect } from "react";
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
    if (totalItems !== 0) {
      shoppingBagRef.current.style.color = `#ff5b19`;
    } else {
      shoppingBagRef.current.style.color = `#fff`;
    }
  }, [totalItems]);
  return (
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
            <a href="#">Shop</a>
            <a href="#">About Us</a>
            <a href="#">Icon</a>
            <a href="#">Contact</a>
            <a href="#">Location</a>
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
          <div className="nav-main-responsive-shoppingBag">
            <span
              className="material-symbols-outlined"
              onClick={() => setCartOpen(!cartOpen)}
              ref={shoppingBagRef}
            >
              shopping_bag
            </span>
            <div>{totalItems > 0 && totalItems}</div>
          </div>
        </div>
      </div>
      <div className="nav-right">
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">person</span>
        <div className="nav-right-shoppingBag">
          <span
            className="material-symbols-outlined"
            onClick={() => setCartOpen(!cartOpen)}
            ref={shoppingBagRef}
          >
            shopping_bag
          </span>
          <div>{totalItems > 0 && totalItems}</div>
        </div>
      </div>
      {cartOpen && <Cart onClick={setCartOpen} />}
    </nav>
  );
};
