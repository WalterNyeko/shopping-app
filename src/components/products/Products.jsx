import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from "../../styles/Products";
import LinearProgress from "@material-ui/core/LinearProgress";
import EachProduct from "../../containers/products/EachProduct";

const Products = ({ products, departmentId, categoryId, afterSearch }) => {
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
              departmentId={departmentId}
              categoryId={categoryId}
              afterSearch={afterSearch}
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
