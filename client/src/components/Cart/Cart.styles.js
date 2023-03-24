import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: "0px 30px",
    fontFamily: "Nunito Sans",
    height: "100%",
  },
  cartTitle: {
    textAlign: "center",
    marginTop: 0,
    fontWeight: 700,
    fontSize: 35,
    lineHeight: 1,
    color: "#3A3333",
  },
  itemWrapper: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    justifyContent: "center",
  },
  checkoutButton: {
    backgroundColor: "#646E5A",
    border: "none",
    color: "#F5FBFB",
    padding: "15px 50px",
    borderRadius: 50,
    boxShadow: "0px 0px 10px rgba(100, 110, 90, 0.5)",
    fontWeight: 600,
    fontSize: "17px",
    fontFamily: "Nunito Sans",
    width: "100%",
    maxWidth: 450,
    marginBottom: 30,
    margin: "0 auto",
  },
});
