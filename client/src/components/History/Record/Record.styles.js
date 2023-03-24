import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
  contentWrapper: {
    padding: "0px 30px",
    fontFamily: "Nunito Sans",
  },
  cartWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: 30,
    marginBottom: 40,
    boxShadow: "0px 0px 20px 3px rgba(131, 158, 127, 0.25)",
    padding: 15,
    minHeight: 50,
    position: "relative",
  },
  cartInfo: {
    display: "flex",
    flexDirection: "row",
  },
  recordState: {
    margin: 0,
    marginRight: 10,
  },
  editCartButton: {
    position: "absolute",
    top: 15,
    right: 15,
    border: "none",
    background: "none",
  },
});
