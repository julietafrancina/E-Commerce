import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  main: {
    position: "relative",
  },
  mainWrapper: {
    backgroundImage: `url(https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
    height: "100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  blur: {
    position: "absolute",
    height: "100vh",
    width: "50%",
    background: "rgba(255, 255, 255, 0.27)",
    backdropFilter: "blur(11px)",
  },
  contentWrapper: {
    fontFamily: "Nunito Sans",
  },
  hero: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    padding: "20px 20px 20px 20px",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  },
  heroTitle: {
    padding: 15,
    marginBottom: 300,
    fontWeight: 700,
    fontSize: 40,
    lineHeight: 1.2,
    color: "#F5FBFB",
  },

  shopNow: {
    textDecoration: "none",
    backgroundColor: "#646E5A",
    color: "#F5FBFB",
    fontWeight: 300,
    padding: "15px 50px",
    borderRadius: 50,
    position: "absolute",
    right: 60,
    left: 60,
    top: 580,
    boxShadow: "0px 0px 10px rgba(100, 110, 90, 0.5)",
  },
  shopButton: {
    fontWeight: 600,
    fontSize: "17px",
  },
  heroImage: {
    marginTop: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Landing() {
  const s = useStyles();

  return (
    <div className={s.main}>
      <div className={s.blur} />
      <div className={s.mainWrapper}>
        <div className={s.contentWrapper}>
          <section className={s.hero}>
            <div>
              <h1 className={s.heroTitle}>Make your days feel comfy.</h1>
              {/* <h3 className={s.heroDescription}>
              Lorem Ipsum es simplemente el texto de relleno
            </h3> */}
              <Link to="/home" className={s.shopNow}>
                <a className={s.shopButton}>
                  Shop now
                  <i class="material-icons">arrow_forward</i>
                  {/* <i class="material-icons"> Shop now arrow_forward</i> */}
                </a>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
