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
    marginTop: 20,
    fontWeight: 700,
    fontSize: 35,
    lineHeight: 1,
    color: "#3A3333",
  },
  heroDescription: {
    textAlign: "center",
    marginBottom: 40,
    fontWeight: 300,
    fontSize: 23,
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
        <h1 className={s.heroTitle}>Swipe to browse</h1>
        <h1 className={s.heroDescription}>
          Shop the most modern furniture by swiping from one product to another
        </h1>
      </div>

      <Products />
    </div>
  );
}
