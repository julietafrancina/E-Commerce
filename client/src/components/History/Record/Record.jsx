import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../../redux/reducer/Cart/cartActions.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentWrapper: {
    padding: "0px 30px",
    fontFamily: "Nunito Sans",
  },
  cartWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 30,
    marginBottom: 40,
    boxShadow: "0px 0px 20px 3px rgba(131, 158, 127, 0.25)",
    padding: 15,
    minHeight: 50,
    position: "relative",
  },
  cartInfo: {
    display: "flex",
    flexDirection: "row",
  },
  recordState: {
    margin: 0,
    marginRight: 10,
  },
  editCartButton: {
    position: "absolute",
    top: 15,
    right: 15,
    border: "none",
    background: "none",
  },
});

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
