import { React, useState } from "react";
import { useDispatch } from "react-redux";
import * as itemActions from "../../../redux/reducer/Item/itemActions.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  cardItemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 30,
    marginBottom: 40,
    boxShadow: "0px 0px 20px 3px rgba(131, 158, 127, 0.25)",
    padding: 15,
    minHeight: 125,
    position: "relative",
  },
  productData: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  itemTitle: {
    marginTop: 0,
    marginBottom: 0,
    marginRight: 15,
  },
  itemPrice: {
    color: "#646E5A",
    fontWeight: 800,
    fontSize: 25,
  },
  productInc: {
    height: "100%",
    width: 30,
    border: "none",
    backgroundColor: "#F3F3F3",
    borderRadius: 10,
    fontWeight: 600,
    fontSize: 20,
    color: "#848386",
  },
  deleteButton: {
    background: "none",
    border: "none",
  },
  productQuantity: {
    height: "100%",
    width: 30,
    textAlign: "center",
    border: "none",
    fontFamily: "Nunito Sans",
    fontWeight: 600,
    fontSize: 20,
  },
  productFooter: {
    display: "flex",
  },
  addToCartButton: {
    position: "absolute",
    bottom: 15,
    right: 15,
    border: "none",
    backgroundColor: "#21252A",
    color: "#F5FBFB",
    fontFamily: "Nunito Sans",
    fontWeight: 400,
    padding: "10px 30px",
    borderRadius: 30,
    fontSize: 15,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

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
