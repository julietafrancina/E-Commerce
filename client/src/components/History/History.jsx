import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/reducer/Cart/cartActions.js";
import Record from "../History/Record/Record.jsx";

export default function History() {
  const dispatch = useDispatch();
  const { totalCarts } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    dispatch(cartActions.getAllCarts());
  }, [dispatch]);

  return (
    <div>
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
