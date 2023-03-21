import { React, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar() {
  const { activeCart } = useSelector((state) => state.cartReducer);
  const [id, setId] = useState();

  useEffect(() => {
    if (activeCart) {
      setId(activeCart.id);
    }
  }, [activeCart]);

  return (
    <div>
      <header>
        {/* <img
          className="s.logo"
          src=""
        /> */}
        <nav>
          <Link to="/home">
            <a>Home</a>
          </Link>
          <Link to={`/cart/${id}`}>
            <a>Cart</a>
          </Link>
          <Link to={`/history`}>
            <a>Purchase History</a>
          </Link>
          <Link to="/about">
            <a>About Tubesoft Project</a>
          </Link>
        </nav>
      </header>
    </div>
  );
}
