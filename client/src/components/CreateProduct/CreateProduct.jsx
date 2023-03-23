import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import * as productActions from "../../redux/reducer/Product/productActions.js";

const useStyles = makeStyles({
  mainWrapper: {
    minHeight: "30vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Nunito Sans",
    fontWeight: 500,
  },
  contentWrapper: {
    marginTop: "10px",
    marginBottom: "10px",
    display: "flex",
    backgroundColor: "#fafcfe",
    height: "100%",
    backgroundSize: "cover",
    borderRadius: 1,
    flexDirection: "column",
    position: "relative",
    padding: "0px 30px",
    fontFamily: "Nunito Sans",
  },
  title: {
    textAlign: "center",
    marginTop: 20,
    fontWeight: 700,
    fontSize: 35,
    lineHeight: 1,
    color: "#3A3333",
  },
});

export function validate(state) {
  let errors = {};
  if (!state.name) {
    errors.name = "* Your product must have a name";
  } else if (!state.description) {
    errors.description = "* Describe your product";
  } else if (!state.price || state.price == 0) {
    errors.price = "Please, enter a valid price";
  } else if (!state.image) {
    errors.image = "* Add an image to your product";
  }
  return errors;
}

export default function CreateProduct() {
  const s = useStyles();

  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});
  const [state, setState] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  function handleInputChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
    setErrors(validate(state));
  }

  function handleSubmit(e) {
    dispatch(productActions.createProduct(state));
    setState({
      name: "",
      description: "",
      price: "",
      image: "",
    });
    alert("Product created!");
  }

  return (
    <div className={s.mainWrapper}>
      <div className={s.blur}>
        <section className={s.contentWrapper}>
          <br />
          <h1 className={s.title}>Let's post a new product!</h1>
          <form className={s.formWrapper} onSubmit={(e) => handleSubmit(e)}>
            <div className={s.boxWrapper}>
              <label className={s.label}>Name:</label>
              <input
                className={s.nameInput}
                type="text"
                name="name"
                value={state.name}
                placeholder="Write a name for your product..."
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            {errors.name && <h5 className="errorMessage">{errors.name}</h5>}
            <div className={s.boxWrapper}>
              <label className={s.label}>Description</label>
              <input
                className={s.nameInput}
                type="text"
                name="description"
                value={state.description}
                placeholder="Description"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            {errors.description && (
              <h5 className="errorMessage">{errors.description}</h5>
            )}
            <div className={s.boxWrapper}>
              <label className={s.label}>Price</label>
              <input
                className={s.nameInput}
                type="text"
                name="price"
                value={state.price}
                placeholder="Price"
                onChange={(e) => handleInputChange(e)}
              />
            </div>
            {errors.price && <h5 className="errorMessage">{errors.price}</h5>}
            <div className={s.boxWrapper}>
              <label className={s.label}>Image</label>
              <input
                className={s.nameInput}
                type="url"
                name="image"
                value={state.image}
                placeholder="image url"
                onChange={handleInputChange}
              />
            </div>
            {errors.image && <h5 className="errorMessage">{errors.image}</h5>}

            {state.name && state.price ? (
              <button className={s.submitButton} type="submit">
                Create product!
              </button>
            ) : null}
          </form>
        </section>
      </div>
    </div>
  );
}
