import React from "react";
// import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../../redux/reducer/Cart/cartActions.js";
// import * as itemActions from "../../../redux/reducer/Item/itemActions.js";

export default function Record({ recordId, state }) {
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleHistory = () => {
    console.log(recordId);
    dispatch(cartActions.updateCart(recordId, recordId));
    dispatch(cartActions.updateCart(id));
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
