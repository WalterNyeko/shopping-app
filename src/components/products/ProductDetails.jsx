import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../styles/Products";
import LinearProgress from "@material-ui/core/LinearProgress";

const ProductDetails = ({ product }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} />
      </main>
      {product ? (
        ""
      ) : (
        <LinearProgress
          classes={{
            colorPrimary: classes.linearColorPrimary,
            barColorPrimary: classes.linearBarColorPrimary
          }}
        />
      )}
    </React.Fragment>
  );
};
export default ProductDetails;
