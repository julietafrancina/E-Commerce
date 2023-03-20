import React from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div>
      <div>
        <section>
          <h1>Welcome to the Tubesoft Project!</h1>
          <h2>Let's help you find the perfect product for you!</h2>
          <Link to="/home">
            <button>Get Started</button>
          </Link>
        </section>
      </div>
    </div>
  );
}
