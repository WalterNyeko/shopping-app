import React, { Fragment } from "react";
import StarRatingComponent from "react-star-rating-component";
import StarRatings from "react-star-ratings";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const ProductDetailsContent = ({
  product,
  onStarClick,
  rating,
  productReviews,
  sizeOpen,
  colorOpen,
  handleChange,
  handleSubmit,
  handleCloseColor,
  handleOpenColor,
  handleCloseSize,
  handleOpenSize,
  color,
  size,
  colorsData,
  sizesData,
  handleAddReviews,
  review,
  errors
}) => {
  const useStyles = makeStyles(theme => ({
    root: {
      padding: theme.spacing(3, 2)
    },
    button: {
      display: "block",
      marginTop: theme.spacing(2)
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120
    }
  }));
  const classes = useStyles();
  return (
    <Fragment>
      {product && product.thumbnail && (
        <div className="container-fluid product-body">
          <div className="row">
            <div className="col-md-5 col-sm-12 text-center">
              <img
                src={require(`../../images/${product.thumbnail}`)}
                alt=""
                width="180px"
              />
            </div>
            <div className="col-md-7">
              {product.discounted_price > 0 ? (
                <>
                  <h3>{product.name}</h3>
                  <h5 className="text-danger">
                    <strike>${product.price}</strike>
                  </h5>
                  <h3 className="text-danger ml-5">${product.discounted_price}</h3>
                </>
              ) : (
                <>
                  <h3>{product.name}</h3>
                  <h3 className="text-danger ml-5">${product.price}</h3>
                </>
              )}

              <p>{product.description}</p>
              <h5>Color</h5>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">
                  Select Color
                </InputLabel>
                <Select
                  open={colorOpen}
                  value={color}
                  onChange={handleChange}
                  onClose={handleCloseColor}
                  onOpen={handleOpenColor}
                  inputProps={{
                    name: "color",
                    id: "demo-controlled-open-select"
                  }}
                >
                  {colorsData &&
                    colorsData.length &&
                    colorsData.map(
                      ({ attribute_value_id, attribute_value }) => (
                        <MenuItem
                          value={attribute_value}
                          key={attribute_value_id}
                        >
                          {attribute_value}
                        </MenuItem>
                      )
                    )}
                </Select>
              </FormControl>
              {errors.color && (
                <span className="span-error">
                  <br />
                  {errors.color}
                </span>
              )}
              <h5>Size</h5>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="demo-controlled-open-select">
                  Select Size
                </InputLabel>
                <Select
                  open={sizeOpen}
                  value={size}
                  onChange={handleChange}
                  onClose={handleCloseSize}
                  onOpen={handleOpenSize}
                  inputProps={{
                    name: "size",
                    id: "demo-controlled-open-select1"
                  }}
                >
                  {sizesData &&
                    sizesData.length &&
                    sizesData.map(({ attribute_value_id, attribute_value }) => (
                      <MenuItem
                        value={attribute_value}
                        key={attribute_value_id}
                      >
                        {attribute_value}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
              {errors.size && (
                <span className="span-error">
                  <br />
                  {errors.size}
                </span>
              )}
              <button
                className="btn btn-danger text-center ml-5 mt-3"
                onClick={handleSubmit}
              >
                Add To Cart
              </button>
            </div>
          </div>
          <h3 className="text-center mt-5">Leave a Review</h3>
          <div className="row mb-4">
            <div className="col-md-8 mx-auto">
              <form className="mb-2">
                <textarea
                  type="text"
                  className="form-control"
                  name="review"
                  onChange={handleChange}
                >
                  {review}
                </textarea>
              </form>
              <div className="text-center">
                <div className="m-2">
                  <StarRatings
                    rating={rating}
                    starRatedColor="green"
                    changeRating={onStarClick}
                    numberOfStars={5}
                    name="rating"
                  />
                </div>
                <br />
                <button
                  className="btn btn-danger text-center"
                  onClick={handleAddReviews}
                >
                  Leave a Review
                </button>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-3" />
            <div className="col-md-6">
              {productReviews &&
                productReviews.map(({ name, review, rating, created_on }) => (
                  <Paper className={`${classes.root} m-4`}>
                    <Typography variant="h5" component="h3">
                      {name}
                    </Typography>
                    <Typography component="p">{review}</Typography>
                    <StarRatingComponent
                      name="rate1"
                      starCount={5}
                      value={rating}
                      starColor="green"
                      className="mt-2"
                    />
                    <Typography component="p">
                      Reviewed on {created_on}
                    </Typography>
                  </Paper>
                ))}
            </div>
            <div className="col-md-3" />
          </div>
        </div>
      )}
    </Fragment>
  );
};
export default ProductDetailsContent;
