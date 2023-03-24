import React from "react";
import { useStyles } from "./About.styles";

export default function About() {
  const s = useStyles();

  return (
    <div className={s.mainWrapper}>
      <div className={s.contentWrapper}>
        <p className={s.title}>More than just an e-commerce.</p>
        <p className={s.about}>
          Welcome to our online furniture store.
          <br />
          We offer a wide selection of stylish and functional furniture for your
          home.
          <br />
          Shop with confidence knowing our commitment to quality and customer
          care is always here for you. Thanks for choosing our online furniture
          store!
        </p>
      </div>
    </div>
  );
}
