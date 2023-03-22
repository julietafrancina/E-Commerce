import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import * as productActions from "../../redux/reducer/Product/productActions.js";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  contentWrapper: {
    padding: "0px 30px",
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

export default function Search() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const s = useStyles();

  function handleChange(e) {
    setName(e.target.value);
    console.log(name);
  }
  function handleSubmit(e) {
    dispatch(productActions.getProductByName(name));
    setName("");
  }

  return (
    <div>
      <form className={s.formWrapper}>
        <input
          className={s.searchInput}
          type="text"
          id="name"
          autoComplete="off"
          placeholder="Search product by name"
          value={name}
          onChange={(e) => handleChange(e)}
        />
        <button
          className={s.searchButton}
          type="submit"
          onClick={(e) => handleSubmit(e)}
        >
          Search
        </button>
      </form>
    </div>
  );
}
