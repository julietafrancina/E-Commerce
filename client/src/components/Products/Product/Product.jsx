import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as itemActions from "../../../redux/reducer/Item/itemActions.js";
import * as productActions from "../../../redux/reducer/Product/productActions.js";

import { useStyles } from "./Product.styles.js";

export default function Product({ id, name, price, image }) {
  const s = useStyles();
  const dispatch = useDispatch();
  const [input, setInput] = useState(1);
  const maxValue = 10;
  const minValue = 1;
  const finalPrice = (price * input).toFixed(2);
  const { activeCart } = useSelector((state) => state.cartReducer);
  const [product, setProduct] = useState({ id, name, price, image });

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
  const handleDelete = () => {
    dispatch(productActions.deleteProduct(id));
    setProduct(null);
  };
  if (!product) {
    return null;
  }
  return (
    <div className={s.productCard}>
      <div>
        <img
          alt={"product description"}
          src={image}
          className={s.productImage}
        />
        <button className={s.deleteProduct} onClick={handleDelete}>
          x
        </button>
      </div>
      <div className={s.productInfo}>
        <div className={s.productData}>
          <h2 className={s.name}>{name}</h2>
          <p className={s.price}>{finalPrice ? finalPrice : price}</p>
        </div>
        <div className={s.productControllers}>
          <button
            className={s.productInc}
            name="-"
            onClick={handleClick}
            disabled={input <= minValue}
          >
            -
          </button>
          <input
            readOnly
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

          <button
            className={s.addToCartButton}
            name="add"
            onClick={handleAddToCart}
          >
            Add to Cart <i class="material-icons">add</i>
          </button>
        </div>
      </div>
    </div>
  );
}
