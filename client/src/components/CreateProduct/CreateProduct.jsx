import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import * as productActions from "../../redux/reducer/Product/productActions.js";

const useStyles = makeStyles({
  mainWrapper: {
    height: "100vh",
    fontFamily: "Nunito Sans",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1618220179428-22790b461013?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  contentWrapper: {
    padding: 20,
    background: "rgba(255, 255, 255, 0.27)",
    backdropFilter: "blur(5px)",
    borderRadius: 40,
    margin: 20,
  },
  title: {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 35,
    lineHeight: 1,
    color: "#3A3333",
  },
  formWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  boxWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    textAlign: "left",
    color: "#FAFAFA",
    fontWeight: 500,
    fontSize: 15,
    marginBottom: 10,
  },
  nameInput: {
    border: "none",
    padding: "10px 15px",
    fontFamily: "Nunito Sans",
    marginBottom: 20,
    borderRadius: 20,
  },
  submitButton: {
    backgroundColor: "#21252A",
    color: "#F5FBFB",
    fontFamily: "Nunito Sans",
    fontWeight: 600,
    padding: "10px 30px",
    borderRadius: 30,
    fontSize: 18,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minWidth: 175,
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
          <h1 className={s.title}>Let's post a new product!</h1>
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
                Create product <i class="material-icons">add</i>
              </button>
            ) : null}
          </form>
        </section>
      </div>
    </div>
  );
}
