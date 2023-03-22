import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../../redux/reducer/Cart/cartActions.js";

export default function Record({ recordId, state }) {
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
    setTimeout(() => {
      navigate("/home");
    }, 3000);
  };

  return (
    <div className="s.cardRecordContainer">
      <div>
        <h2 className="s.recordTitle">{recordId}</h2>
        <h2 className="s.recordState">{state}</h2>
      </div>
      <button className="s.addToCartButton" name="add" onClick={handleHistory}>
        Edit Cart
      </button>
    </div>
  );
}
