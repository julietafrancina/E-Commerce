import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles(() => ({
  header: {
    background: "rgba(255, 255, 255, 0.27)",
  },
  hamburgerBtn: {
    display: "none",
  },
  mainContainer: {
    zIndex: 1,
    position: "absolute",
  },
  listItem: {
    color: "#3A3333",
    marginBottom: 10,
    textDecoration: "none",
    fontWeight: 500,
    fontSize: 25,
  },
  menuClosed: {
    display: "none",
  },
  listItems: {
    height: "55vw",
    width: "55vw",
    zIndex: 2,
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    padding: 15,
    background: "rgba(255, 255, 255, 0.27)",
    backdropFilter: "blur(30px)",
  },
  "@media (max-width: 850px)": {
    hamburgerBtn: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: 50,
      height: 50,
      border: "none",
      background: "rgba(255, 255, 255, 0.27)",
      cursor: "pointer",
    },
  },
  "@media (min-width: 850px)": {
    mainContainer: {
      position: "relative",
    },
    header: {
      width: "100vw",
      backgroundColor: "#FDFDFC",
    },
    listItem: {
      color: "#9F9B93",
      textDecoration: "none",
      fontWeight: 400,
      fontSize: 22,
      padding: 10,
      "&:hover": {
        fontSize: 23,
        fontWeight: 600,
      },
    },
    listItems: {
      paddingBottom: "30px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      height: "4vw",
      top: 0,
      left: 0,
      right: 0,
      margin: "0 auto",
      flexWrap: "wrap",
    },
  },
}));
