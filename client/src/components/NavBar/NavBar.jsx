import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useStyles } from "./NavBar.styles";

export default function NavBar() {
  const s = useStyles();
  const { activeCart } = useSelector((state) => state.cartReducer);
  const [id, setId] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const mq = window.matchMedia(`(min-width: 850px)`);
      setViewportWidth(mq.matches ? window.innerWidth : 0);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (activeCart) {
      setId(activeCart.id);
    }
  }, [activeCart]);

  function setMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div>
      <header className={s.header}>
        <div className={s.hamburgerBtn} onClick={setMenu}>
          <i class="material-icons">dehaze</i>
        </div>
        <div className={s.mainContainer}>
          <nav
            className={
              viewportWidth < 850
                ? menuOpen
                  ? s.menuOpen
                  : s.menuClosed
                : s.mainContainer
            }
          >
            <div className={s.listItems} onClick={setMenu}>
              <Link to="/home" className={s.listItem}>
                <a>Home</a>
              </Link>
              <Link to={`/cart/${id}`} className={s.listItem}>
                <a>Cart</a>
              </Link>
              <Link to={`/history/${id}`} className={s.listItem}>
                <a> History</a>
              </Link>
              <Link to="/about" className={s.listItem}>
                <a>About </a>
              </Link>
              <Link to="/create" className={s.listItem}>
                <a>Post product </a>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
