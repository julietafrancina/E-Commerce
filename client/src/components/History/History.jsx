import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/reducer/Cart/cartActions.js";
import Record from "../History/Record/Record.jsx";
import { useStyles } from "./History.styles.js";

export default function History() {
  const dispatch = useDispatch();
  const { totalCarts } = useSelector((state) => state.cartReducer);
  const s = useStyles();
  useEffect(() => {
    dispatch(cartActions.getAllCarts());
  }, [dispatch]);

  return (
    <div>
      <h1 className={s.title}>Your purchase history</h1>
      {totalCarts && totalCarts.length ? (
        totalCarts.map((cart) => {
          return (
            <div key={cart.id}>
              <Record recordId={cart.id} state={cart.available} />
            </div>
          );
        })
      ) : (
        <h3> Go get some products!</h3>
      )}
    </div>
  );
}
