import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/reducer/Cart/cartActions.js";
import Item from "../Cart/Item/Item";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 30px",
    fontFamily: "Nunito Sans",
    height: "100%",
  },
  cartTitle: {
    textAlign: "center",
    marginTop: 0,
    fontWeight: 700,
    fontSize: 35,
    lineHeight: 1,
    color: "#3A3333",
  },
  itemWrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
  },
  checkoutButton: {
    backgroundColor: "#646E5A",
    border: "none",
    color: "#F5FBFB",
    padding: "15px 50px",
    borderRadius: 50,
    boxShadow: "0px 0px 10px rgba(100, 110, 90, 0.5)",
    fontWeight: 600,
    fontSize: "17px",
    fontFamily: "Nunito Sans",
    width: "100%",
    maxWidth: 450,
    marginBottom: 30,
    margin: "0 auto",
  },
});

export default function Cart() {
  const s = useStyles();
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducer);
  console.log(cart);

  useEffect(() => {
    dispatch(cartActions.getCartByItem(id));
  }, [dispatch, id]);

  const handleCheckout = () => {
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
      <h1 className={s.cartTitle}>Your cart</h1>
      <div className={s.itemWrapper}>
        {cart && cart.length ? (
          cart.map((cart) => {
            return (
              <div key={cart.id}>
                <Item
                  idItem={cart.id}
                  id={cart.productId}
                  name={cart.name}
                  quantity={cart.quantity}
                  total={cart.total}
                />
              </div>
            );
          })
        ) : (
          <h3></h3>
        )}
      </div>
      <button
        style={{ display: cart && cart.length ? "block" : "none" }}
        className={s.checkoutButton}
        onClick={handleCheckout}
      >
        Save
      </button>
    </div>
  );
}
