import React from "react";
import Products from "../Products/Products";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import * as cartActions from "../../redux/reducer/Cart/cartActions.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentWrapper: {
    padding: "0px 30px",
    fontFamily: "Nunito Sans",
  },
  heroTitle: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: 300,
    fontSize: 35,
    lineHeight: 1,
    color: "#3A3333",
  },
});

export default function Home() {
  const s = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartActions.createCart());
  }, [dispatch]);

  return (
    <div className={s.contentWrapper}>
      <div>
        <h1 className={s.heroTitle}>Find the best product for you</h1>
      </div>
      <Products />
    </div>
  );
}
