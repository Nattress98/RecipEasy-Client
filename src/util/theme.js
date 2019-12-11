import pink from "@material-ui/core/colors/pink";
export default {
  palette: {
    primary: pink,
    secondary: pink
  },
  typography: {
    useNextVariants: true
  },
  spread: {
    form: {
      textAlign: "center"
    },
    image: {
      margin: "20px auto 20px auto",
      maxWidth: 180
    },
    pageTitle: {
      margin: "10px auto 10px auto"
    },
    textField: {
      margin: "10px auto 10px auto"
    },
    button: {
      marginTop: 20
    },
    customError: {
      color: "red",
      fontSize: "0.8rem",
      marginTop: 10
    }
  }
};
