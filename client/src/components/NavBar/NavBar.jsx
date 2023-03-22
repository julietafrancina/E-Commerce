import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  link: {
    display: "none",
  },
  hamburgerBtn: {
    display: "none",
  },

  "@media (min-width: 768px)": {
    link: {
      display: "flex",
    },
    menuOpen: {
      display: "none",
    },
  },
  menuOpen: {
    backgroundColor: "red",
  },
  menuClosed: {
    display: "none",
  },

  "@media (max-width: 768px)": {
    hamburgerBtn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      border: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
    },
  },
}));

export default function NavBar() {
  const s = useStyles();
  const { activeCart } = useSelector((state) => state.cartReducer);
  const [id, setId] = useState();
  const [menuOpen, setMenuOpen] = useState(false);

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
      <header>
        <div className={s.hamburgerBtn} onClick={setMenu}>
          <i class="material-icons">view_headline</i>
        </div>

        {/* <img
          className="s.logo"
          src=""
        /> */}
        <div>
          <nav className={menuOpen ? s.menuOpen : s.menuClosed}>
            <Link to="/home" className={s.menuOpen}>
              <a>Home</a>
            </Link>
            <Link to={`/cart/${id}`} className={s.menuOpen}>
              <a>Cart</a>
            </Link>
            <Link to={`/history/${id}`} className={s.menuOpen}>
              <a>Purchase History</a>
            </Link>
            <Link to="/about" className={s.menuOpen}>
              <a>About Tubesoft Project</a>
            </Link>
            <Link to="/create" className={s.menuOpen}>
              <a>Create new product +</a>
            </Link>
          </nav>
        </div>
        <nav>
          <Link to="/home" className={s.link}>
            <a>Home</a>
          </Link>
          <Link to={`/cart/${id}`} className={s.link}>
            <a>Cart</a>
          </Link>
          <Link to={`/history/${id}`} className={s.link}>
            <a>Purchase History</a>
          </Link>
          <Link to="/about" className={s.link}>
            <a>About Tubesoft Project</a>
          </Link>
          <Link to="/create" className={s.link}>
            <a>Create new product +</a>
          </Link>
        </nav>
      </header>
    </div>
  );
}
