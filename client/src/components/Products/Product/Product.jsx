import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as itemActions from "../../../redux/reducer/Item/itemActions.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  productCard: {
    borderRadius: 30,
    marginBottom: 40,
    boxShadow: "0px 0px 20px 3px rgba(131, 158, 127, 0.25)",
  },
  productImage: {
    objectFit: "cover",
    borderRadius: "30px 30px 0 0 ",
    width: "100%",
    height: 350,
  },
  productInfo: {
    padding: 15,
  },
  name: {
    marginRight: 15,
  },
  price: {
    color: "#646E5A",
    fontWeight: 800,
    fontSize: 25,
  },
  productData: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    display: "flex",
    alignItems: "center",
    marginBottom: 5,
  },
  productControllers: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
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
  productInc: {
    height: "100%",
    width: 30,
    border: "none",
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    fontWeight: 600,
    fontSize: 20,
    color: "#848386",
  },
  addToCartButton: {
    position: "absolute",
    bottom: 0,
    right: 0,
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
    minWidth: 175,
  },
  quantityControllers: {
    height: 30,
    paddingBottom: 5,
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
          <h2 className={s.name}>{name}</h2>
          <p className={s.price}>{finalPrice ? finalPrice : price}</p>
        </div>
        <div className={s.productControllers}>
          <div className={s.quantityControllers}>
            <button
              className={s.productInc}
              name="-"
              onClick={handleClick}
              disabled={input <= minValue}
            >
              -
            </button>
            <input
              className={s.productQuantity}
              type="text"
              value={input}
              onChange={(e) => setInput(parseInt(e.target.value) || 1)}
            />
            <button
              className={s.productInc}
              name="+"
              onClick={handleClick}
              disabled={input >= maxValue}
            >
              +
            </button>
          </div>

          <button
            className={s.addToCartButton}
            name="add"
            onClick={handleAddToCart}
          >
            Add to Cart <i class="material-icons">shopping_cart</i>
          </button>
        </div>
      </div>
    </div>
  );
}
