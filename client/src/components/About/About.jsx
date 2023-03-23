import React from "react";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  mainWrapper: {
    textAlign: "center",
    padding: 15,
    height: "100vh",
  },
  title: {
    fontFamily: "Nunito Sans",
    fontWeight: 600,
    fontSize: 35,
    marginBottom: 0,
  },
  about: {
    padding: 5,
    fontFamily: "Nunito Sans",
    fontWeight: 300,
    fontSize: 25,
    marginBottom: 25,
  },
});

export default function About() {
  const s = useStyles();

  return (
    <div className={s.mainWrapper}>
      <p className={s.title}>More than just a team.</p>
      <p className={s.about}>
        We are a passionate group of professionals with a shared love for
        technology and a drive to make a positive impact on the world.
      </p>
      <p className={s.about}>
        We are a passionate group of professionals with a shared love for
        technology and a drive to make a positive impact on the world.
      </p>
    </div>
  );
}
