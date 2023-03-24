import React from "react";
import Products from "../Products/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/reducer/Cart/cartActions.js";
import { useStyles } from "./Home.styles";

export default function Home() {
  const s = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.createCart());
  }, [dispatch]);

  return (
    <div className={s.contentWrapper}>
      <div>
        <h1 className={s.heroTitle}>Scroll to browse</h1>
        <h1 className={s.heroDescription}>
          Discover the most modern furniture by swiping from one product to
          another
        </h1>
      </div>
      <Products />
    </div>
  );
}
