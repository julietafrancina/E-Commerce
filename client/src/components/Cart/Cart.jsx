import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import * as cartActions from "../../redux/reducer/Cart/cartActions.js";
import * as itemActions from "../../redux/reducer/Item/itemActions.js";
import Item from "../Cart/Item/Item";

export default function Cart() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    if (id !== undefined) {
      dispatch(cartActions.getCartByItem(id));
    }
    dispatch(cartActions.createCart());
  }, [dispatch, id]);

  console.log(cart);
  const handleCheckout = () => {
    if (cart && cart.length) {
      dispatch(cartActions.updateCart(id));
    }
  };

  return (
    <div className="s.cartWrapper">
      <h1 className="s.cartTitle">Your cart</h1>
      <div className="s.itemWrapper">
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
          <h3>This cart is empty</h3>
        )}
        <button
          style={{ display: cart && cart.length ? "block" : "none" }}
          className="s.checkoutButton"
          onClick={handleCheckout}
        >
          Save
        </button>
      </div>
    </div>
  );
}
