import { React, useState } from "react";
import { useDispatch } from "react-redux";
import * as itemActions from "../../../redux/reducer/Item/itemActions.js";

import { useStyles } from "./Item.styles.js";

export default function Item({ idItem, id, name, quantity, total }) {
  const s = useStyles();
  const dispatch = useDispatch();
  const maxValue = 10;
  const minValue = 1;
  const [item, setItem] = useState({ idItem, id, name, quantity, total });
  const [input, setInput] = useState(quantity);
  const [amount, setAmout] = useState({ input });
  const unitPrice = total / quantity;
  const [value, setValue] = useState(total);

  const handleClick = (e) => {
    if (e.target.name === "+") {
      let newValue = input + 1;
      if (newValue <= maxValue) {
        setInput(newValue);
        setValue((newValue * unitPrice).toFixed(2));
        setAmout({ newValue });
      }
    } else if (e.target.name === "-") {
      let newValue = input - 1;
      if (newValue >= minValue) {
        setInput(newValue);
        setValue((newValue * unitPrice).toFixed(2));
        setAmout({ newValue });
      }
    } else {
      dispatch(itemActions.deleteItem(idItem));
      setItem(null);
    }
  };

  const handleUpdateCart = () => {
    dispatch(itemActions.updateItem(idItem, amount));
  };

  if (!item) {
    return null;
  }

  return (
    <div className={s.cardItemContainer}>
      <div className={s.productData}>
        <h2 className={s.itemTitle}>{name}</h2>
        <span className={s.itemPrice}>{value}</span>
      </div>
      <div className={s.productFooter}>
        <button
          className={s.productInc}
          name="-"
          onClick={handleClick}
          disabled={input <= minValue}
        >
          -
        </button>
        <input className={s.productQuantity} type="text" value={input} />
        <button
          className={s.productInc}
          name="+"
          onClick={handleClick}
          disabled={input >= maxValue}
        >
          +
        </button>
        <button className={s.deleteButton} name="x" onClick={handleClick}>
          <i class="material-icons">delete</i>
        </button>
      </div>

      <button
        className={s.addToCartButton}
        name="add"
        onClick={handleUpdateCart}
      >
        Update Item
      </button>
    </div>
  );
}
