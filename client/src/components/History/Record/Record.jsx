import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../../redux/reducer/Cart/cartActions.js";
import { useStyles } from "./Record.styles.js";

export default function Record({ recordId, state }) {
  const s = useStyles();
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const handleHistory = () => {
    dispatch(cartActions.updateCart(recordId));
    if (cart && cart.length) {
      dispatch(cartActions.updateCart(id));
    } else {
      dispatch(cartActions.deleteCart(id));
    }
    alert("OK");
    navigate("/home");
  };

  return (
    <div className={s.contentWrapper}>
      <div className={s.cartWrapper}>
        <div className={s.cartInfo}>
          <h2 className={s.recordState}>Cart</h2>
          <h2 className={s.recordState}>{recordId}</h2>
        </div>
        <button
          className={s.editCartButton}
          name="edit"
          onClick={handleHistory}
        >
          <i class="material-icons">create</i>
        </button>
      </div>
    </div>
  );
}
