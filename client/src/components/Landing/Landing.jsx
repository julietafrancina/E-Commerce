import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="s.contentWrapper">
      <section className="s.hero">
        <div className="s.sideContent">
          <h1 className="s.heroTitle">Hello! What would you like to buy?</h1>
          <h3 className="s.heroDescription">Texto que nadie lee</h3>
          <Link to="/home">
            <a>Shop now!</a>
          </Link>
        </div>
        <div className="s.heroImage">
          <img src="https://sp-ao.shortpixel.ai/client/q_glossy,ret_img,w_600/https://valenziana.com/wp-content/uploads/2020/07/pampa-tiza-natural-1-copia-600x600.jpg" />
        </div>
      </section>
    </div>
  );
}
