import React from "react";
import Products from "../Products/Products";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Find the best product for you</h1>
      <Link to="/create">
        <button>Create new product +</button>
      </Link>
      <Products />
    </div>
  );
}
