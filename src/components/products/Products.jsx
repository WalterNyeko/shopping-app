import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../styles/Products";
import Footer from "../commons/Footer";
import LinearProgress from "@material-ui/core/LinearProgress";
import EachProduct from "../../containers/products/EachProduct";

const Products = ({ products }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid}>
          <Grid container spacing={3}>
            <EachProduct
              products={products}
              modalTitle="Test"
              modalContent=""
              modalWidth="600px"
              visible
            />
          </Grid>
        </Container>
      </main>
      {products && products.rows ? (
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
export default Products;
