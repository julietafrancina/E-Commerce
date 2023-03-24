import React from "react";
import { Link } from "react-router-dom";
import { useStyles } from "./Landing.styles";

export default function Landing() {
  const s = useStyles();

  return (
    <div className={s.main}>
      <div className={s.blur} />
      <div className={s.mainWrapper}>
        <div className={s.contentWrapper}>
          <section className={s.hero}>
            <div className={s.landingData}>
              <h1 className={s.heroTitle}>Make your days feel comfy.</h1>
              <Link to="/home" className={s.shopNow}>
                <a className={s.shopButton}>
                  Shop now
                  <i class="material-icons">arrow_forward</i>
                </a>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
