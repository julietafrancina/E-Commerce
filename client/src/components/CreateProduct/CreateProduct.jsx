import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as productActions from "../../redux/reducer/Product/productActions.js";
import { useStyles } from "./CreateProduct.styles.js";

export function validate(state) {
  let errors = {};
  if (!state.name) {
    errors.name = "* Your product must have a name";
  } else if (
    !state.price ||
    state.price == 0 ||
    typeof Number(state.price) !== "number"
  ) {
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
    price: "",
    image: "",
    description: "",
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
      price: "",
      image: "",
      description: "",
    });
    alert("Product created!");
  }

  return (
    <div className={s.mainWrapper}>
      <div className={s.blur}>
        <section className={s.contentWrapper}>
          <h1 className={s.title}>Let's post a new product</h1>
          <form className={s.formWrapper} onSubmit={(e) => handleSubmit(e)}>
            <div className={s.boxWrapper}>
              <label className={s.label}>Name</label>
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

            {state.name && state.price && state.image ? (
              <button className={s.submitButton} type="submit">
                Create product <i class="material-icons">add</i>
              </button>
            ) : null}
          </form>
        </section>
      </div>
    </div>
  );
}
