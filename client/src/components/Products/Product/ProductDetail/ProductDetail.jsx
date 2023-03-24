import { React, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Product from "../Product.jsx";
import { useStyles } from "../Product.styles";
import * as productActions from "../../../../redux/reducer/Product/productActions";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams();
  const s = useStyles();
  const { currentProduct } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productActions.getProductById(id));
  }, [dispatch]);

  console.log(currentProduct);

  return (
    <div className={s.detailWrapper}>
      <div key={currentProduct.id}>
        <Product
          id={currentProduct.id}
          name={currentProduct.name}
          image={currentProduct.image}
          description={currentProduct.description}
          price={currentProduct.price}
        />
      </div>
    </div>
  );
}
