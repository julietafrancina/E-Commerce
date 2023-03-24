import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
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
