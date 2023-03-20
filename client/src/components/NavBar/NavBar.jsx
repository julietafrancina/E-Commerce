import { React } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div>
      <Link to="/home">Home</Link>
      <br />
      <Link to={`/cart/${id}`}>Cart</Link>
      <br />
      <Link to="/about">About Tubesoft Project</Link>
    </div>
  );
}
