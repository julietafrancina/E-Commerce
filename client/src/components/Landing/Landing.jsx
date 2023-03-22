import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentWrapper: {
    padding: "0px 30px",
    fontFamily: "Nunito Sans",
  },
  hero: {
    borderRadius: 10,
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    backgroundImage: `url(https://images.unsplash.com/photo-1585845786337-2b2b17c55fb0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)`,
    padding: "20px 20px 20px 20px",
    backgroundSize: "cover",
    minHeight: 500,
    backgroundPosition: "center",
    position: "relative",
  },
  heroTitle: {
    marginTop: 10,
    marginBottom: 300,
    fontWeight: 600,
    fontSize: 40,
    lineHeight: 1,
    color: "#3A3333",
  },
  heroDescription: {
    marginBottom: 60,
    fontWeight: 300,
    fontSize: 20,
    lineHeight: 1.2,
    color: "#828282",
  },
  shopNow: {
    textDecoration: "none",
    backgroundColor: "#839E7F",
    color: "#F5FBFB",
    fontWeight: 300,
    padding: "15px 50px",
    borderRadius: 50,
    position: "absolute",
    right: 60,
    left: 60,
    top: 512.9,
    boxShadow: "0px 0px 20px 3px rgba(131, 158, 127, 0.5)",
  },
  shopButton: {
    fontWeight: 600,
    fontSize: "17px",
  },
  heroImage: {
    marginTop: 60,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function Landing() {
  const s = useStyles();

  return (
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
              {/* <i class="material-icons"> Shop now arrow_forward</i> */}
            </a>
          </Link>
        </div>
        {/* <div>
          <img
            className={s.heroImage}
            src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_600/https://valenziana.com/wp-content/uploads/2020/07/pampa-tiza-natural-1-copia-600x600.jpg"
          />
        </div> */}
      </section>
    </div>
  );
}
