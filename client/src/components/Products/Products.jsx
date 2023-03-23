import React from "react";
import Product from "./Product/Product";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as productActions from "../../redux/reducer/Product/productActions.js";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  productsWrapper: {
    fontFamily: "Nunito Sans",
  },
  heroTitle: {
    textAlign: "center",
    marginTop: 30,
    fontWeight: 300,
    fontSize: 35,
    lineHeight: 1,
    color: "#3A3333",
  },
});

export default function Products() {
  const s = useStyles();
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(productActions.getProducts());
  }, [dispatch]);

  return (
    <div className={s.productsWrapper}>
      {products && products.length ? (
        products.map((product) => {
          return (
            <div key={product.id}>
              <Product
                id={product.id}
                name={product.name}
                image={product.image}
                description={product.description}
                price={product.price}
              />
            </div>
          );
        })
      ) : (
        <h2> No Products Yet</h2>
      )}
    </div>
  );
}
