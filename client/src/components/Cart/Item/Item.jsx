import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as cartActions from "../../../redux/reducer/Cart/cartActions.js";
import * as itemActions from "../../../redux/reducer/Item/itemActions.js";

export default function Item({ idItem, id, name, quantity, total }) {
  const dispatch = useDispatch();
  const maxValue = 10;
  const minValue = 1;
  const [input, setInput] = useState(quantity);
  const [amount, setAmout] = useState({ input });
  const { currentItems } = useSelector((state) => state.cartReducer);

  useEffect(() => {
    console.log(currentItems);
  }, []);

  const handleClick = (e) => {
    if (e.target.name === "+") {
      let newValue = input + 1;
      if (newValue <= maxValue) {
        setInput(newValue);
        setAmout({ newValue });
      }
    } else if (e.target.name === "-") {
      let newValue = input - 1;
      if (newValue >= minValue) {
        setInput(newValue);
        setAmout({ newValue });
      }
    } else {
      dispatch(itemActions.deleteItem(idItem));
    }
  };

  const handleUpdateCart = () => {
    dispatch(itemActions.updateItem(idItem, amount));
  };
  return (
    <div className="s.cardItemContainer">
      <div>
        <h2 className="s.itemTitle">{name}</h2>
        <span className="s.itemData">{quantity}</span>
        <span className="s.itemData">{total}</span>
      </div>
      <div>
        <input className="s.productQuantity" type="text" value={input} />
        <button
          className="s.productInc"
          name="-"
          onClick={handleClick}
          disabled={input <= minValue}
        >
          -
        </button>
        <button
          className="s.productInc"
          name="+"
          onClick={handleClick}
          disabled={input >= maxValue}
        >
          +
        </button>
        <button className="s.productInc" name="x" onClick={handleClick}>
          x
        </button>
      </div>

      <button
        className="s.addToCartButton"
        name="add"
        onClick={handleUpdateCart}
      >
        Update Cart
      </button>
    </div>
  );
}
