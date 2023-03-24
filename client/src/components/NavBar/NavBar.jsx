import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
  header: {
    background: "rgba(255, 255, 255, 0.27)",
  },
  hamburgerBtn: {
    display: "none",
  },
  mainContainer: {
    zIndex: 1,
    position: "absolute",
  },
  listItem: {
    color: "#3A3333",
    marginBottom: 10,
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 25,
  },
  menuClosed: {
    display: "none",
  },
  listItems: {
    height: "55vw",
    width: "55vw",
    zIndex: 2,
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
      background: "rgba(255, 255, 255, 0.27)",
      cursor: "pointer",
    },
  },
  "@media (min-width: 768px)": {
    mainContainer: {
      position: "relative",
    },
    header: {
      backgroundColor: "#FDFDFC",
    },
    listItem: {
      color: "#9F9B93",
      textDecoration: "none",
      fontWeight: 400,
      fontSize: 22,
      padding: 10,
      "&:hover": {
        fontSize: 23,
        fontWeight: 600,
      },
    },
    listItems: {
      paddingBottom: "30px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height: "4vw",
      top: 0,
      left: 0,
      right: 0,
      width: "100%",
      margin: "0 auto",
      flexWrap: "wrap",
    },
  },
}));

export default function NavBar() {
  const s = useStyles();
  const { activeCart } = useSelector((state) => state.cartReducer);
  const [id, setId] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const mq = window.matchMedia(`(min-width: 600px)`);
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
              viewportWidth < 768 ? (menuOpen ? s.menuOpen : s.menuClosed) : " "
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
