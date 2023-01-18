import { useRef } from "react";
import { useState, useEffect } from "react";
import "./navBar.scss";

export const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [isNarrowScreen, setIsNarrowScreen] = useState(false);
  const navRef = useRef(null);
  useEffect(() => {
    // set initial value
    const mediaWatcher = window.matchMedia("(max-width: 667px)");
    setIsNarrowScreen(mediaWatcher.matches);

    //watch for updates
    function updateIsNarrowScreen(e) {
      setIsNarrowScreen(e.matches);
      setMenuOpened(false);
      // Set top for navbar
      const top = isNarrowScreen ? "48px" : "39px";
      if (window.scrollY < 50) {
        navRef.current.style.top = top;
      } else {
        navRef.current.style.top = "0";
      }
    }
    mediaWatcher.addEventListener("change", updateIsNarrowScreen);
    // Set top for navbar

    function handleNavigation(e) {
      console.log(window.scrollY);
      const top = isNarrowScreen ? "48px" : "39px";
      if (window.scrollY < 50) {
        console.log(navRef.current);
        navRef.current.style.top = top;
      } else {
        navRef.current.style.top = "0";
      }
    }
    window.addEventListener("scroll", handleNavigation);
    // clean up after ourselves
    return function cleanup() {
      mediaWatcher.removeEventListener("change", updateIsNarrowScreen);
      window.removeEventListener("scroll", handleNavigation);
    };
  });

  return (
    <nav ref={navRef}>
      <div className="nav-left">
        <div className="logo"></div>
        <h3>Dass Coffee</h3>
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

          <h3>Dass Coffee</h3>
          <span className="material-symbols-outlined">shopping_bag</span>
        </div>
      </div>
      <div className="nav-right">
        <span className="material-symbols-outlined">search</span>
        <span className="material-symbols-outlined">person</span>
        <span className="material-symbols-outlined">shopping_bag</span>
      </div>
    </nav>
  );
};
