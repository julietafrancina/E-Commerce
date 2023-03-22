import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as itemActions from "../../../redux/reducer/Item/itemActions.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  productCard: {
    borderRadius: 10,
    marginBottom: 40,
    boxShadow: "0px 0px 20px 3px rgba(131, 158, 127, 0.2)",
  },
  productImage: {
    borderRadius: "10px 10px 0 0 ",
    width: "100%",
    height: 350,
  },
  productInfo: {
    padding: 15,
  },
  productData: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    display: "flex",
    alignItems: "stretch",
  },
});

export default function Product({ id, name, price, description, image }) {
  const s = useStyles();
  const dispatch = useDispatch();
  const [input, setInput] = useState(1);
  const maxValue = 10;
  const minValue = 1;
  const finalPrice = (price * input).toFixed(2);
  const { activeCart } = useSelector((state) => state.cartReducer);

  let cartId;

  const [item, setItem] = useState({
    productId: id,
    quantity: input,
    name,
    cartId,
  });

  useEffect(() => {
    if (activeCart && activeCart.id) {
      setItem({ ...item, cartId: activeCart.id });
    }
  }, [activeCart]);

  const handleClick = (e) => {
    if (e.target.name === "+") {
      let newValue = input + 1;
      if (newValue <= maxValue) {
        setInput(newValue);
        setItem({ ...item, quantity: newValue });
      }
    } else {
      let newValue = input - 1;
      if (newValue >= minValue) {
        setInput(newValue);
        setItem({ ...item, quantity: newValue });
      }
    }
  };

  const handleAddToCart = () => {
    dispatch(itemActions.createItem(item));
  };

  return (
    <div className={s.productCard}>
      <div>
        <img
          alt={"product description"}
          src={image}
          className={s.productImage}
        />
      </div>
      <div className={s.productInfo}>
        <div className={s.productData}>
          <h2>{name}</h2>
          <p>{finalPrice ? finalPrice : price}</p>
        </div>
        <div className="s.productControllers">
          <button
            className="s.productInc"
            name="-"
            onClick={handleClick}
            disabled={input <= minValue}
          >
            -
          </button>
          <input
            className="s.productQuantity"
            type="text"
            value={input}
            onChange={(e) => setInput(parseInt(e.target.value) || 1)}
          />
          <button
            className="s.productInc"
            name="+"
            onClick={handleClick}
            disabled={input >= maxValue}
          >
            +
          </button>
          <button
            className="s.addToCartButton"
            name="add"
            onClick={handleAddToCart}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
