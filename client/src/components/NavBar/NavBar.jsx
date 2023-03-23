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
  mainContainer: {
    position: "absolute",
  },
  "@media (min-width: 768px)": {
    link: {
      display: "flex",
    },
    menuOpen: {
      position: "fixed",
      height: "100%",
      width: "100%",
      backgroundColor: "red",
      display: "none",
    },
  },
  listItem: {
    marginBottom: 10,
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 25,
  },
  menuClosed: {
    display: "none",
  },
  listItems: {
    color: "red",
    height: "55vw",
    width: "100vw",
    zIndex: 1,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 15,
    background: "rgba(255, 255, 255, 0.27)",
    backdropFilter: "blur(30px)",
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
          <i class="material-icons">dehaze</i>
        </div>
        {/* <img
          className="s.logo"
          src=""
        /> */}
        <div className={s.mainContainer}>
          <nav className={menuOpen ? s.menuOpen : s.menuClosed}>
            <div className={s.listItems} onClick={setMenu}>
              <Link to="/home" className={s.listItem}>
                <a className={s.listItem}>Home</a>
              </Link>
              <Link to={`/cart/${id}`} className={s.listItem}>
                <a className={s.listItem}>Cart</a>
              </Link>
              <Link to={`/history/${id}`} className={s.listItem}>
                <a className={s.listItem}> History</a>
              </Link>
              <Link to="/about" className={s.listItem}>
                <a className={s.listItem}>About </a>
              </Link>
              <Link to="/create" className={s.listItem}>
                <a className={s.listItem}>Post product </a>
              </Link>
            </div>
          </nav>
        </div>
        <nav>
          <Link to="/home" className={s.link}>
            <a className={s.listItem}>Home</a>
          </Link>
          <Link to={`/cart/${id}`} className={s.link}>
            <a className={s.listItem}>Cart</a>
          </Link>
          <Link to={`/history/${id}`} className={s.link}>
            <a className={s.listItem}>Purchase History</a>
          </Link>
          <Link to="/about" className={s.link}>
            <a className={s.listItem}>About </a>
          </Link>
          <Link to="/create" className={s.link}>
            <a className={s.listItem}>Post product</a>
          </Link>
        </nav>
      </header>
    </div>
  );
}
