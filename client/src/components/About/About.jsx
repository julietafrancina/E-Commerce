import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  mainWrapper: {
    height: "100vh",
    fontFamily: "Nunito Sans",
    backgroundImage:
      "url(https://images.unsplash.com/photo-1578500467296-441a11d5d55a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80)",
    backgroundPosition: "center",
    backgroundSize: "cover",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  contentWrapper: {
    padding: 20,
    background: "rgba(255, 255, 255, 0.27)",
    backdropFilter: "blur(10px)",
    borderRadius: 40,
    margin: 20,
  },
  title: {
    fontFamily: "Nunito Sans",
    fontWeight: 600,
    fontSize: 35,
    marginBottom: 0,
  },
  about: {
    padding: 5,
    lineHeight: 2,
    fontFamily: "Nunito Sans",
    fontWeight: 300,
    fontSize: 23,
    marginBottom: 25,
  },

  "@media (min-width: 768px)": {
    contentWrapper: {
      padding: 20,
      background: "rgba(255, 255, 255, 0.27)",
      backdropFilter: "blur(10px)",
      borderRadius: 40,
      margin: 50,
    },
    title: {
      fontFamily: "Nunito Sans",
      fontWeight: 600,
      fontSize: 40,
      marginBottom: 0,
    },
    about: {
      padding: 5,
      lineHeight: 2,
      fontFamily: "Nunito Sans",
      fontWeight: 300,
      fontSize: 28,
      margin: 25,
    },
  },
});

export default function About() {
  const s = useStyles();

  return (
    <div className={s.mainWrapper}>
      <div className={s.contentWrapper}>
        <p className={s.title}>More than just an e commerce.</p>
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
