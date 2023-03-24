import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../redux/reducer/Cart/cartActions.js";
import Item from "../Cart/Item/Item";
import { useStyles } from "./Cart.styles.js";

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
