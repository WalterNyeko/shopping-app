import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ProductDetailsContentComponent from "../../components/products/ProductDetailsContent";
import { getProductAttributes } from "../../store/actions/Attributes";
import { addToShoppingCart } from "../../store/actions/Orders";
import { leaveReview } from "../../store/actions/Products";

class ProductDetailsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      color: "",
      size: "",
      review: "",
      openColor: false,
      openSize: false
    };
    this.changeRating = this.changeRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseSize = this.handleCloseSize.bind(this);
    this.handleCloseColor = this.handleCloseColor.bind(this);
    this.handleOpenSize = this.handleOpenSize.bind(this);
    this.handleOpenColor = this.handleOpenColor.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleAddReviews = this.handleAddReviews.bind(this);
  }

  componentWillMount = () => {
    const { getProductAttributes, product } = this.props;
    if (product && product.product_id) {
      const {
        product: { product_id }
      } = this.props;
      getProductAttributes(product_id);
    }
  };

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.theAttributes.attributes.length !==
      this.props.theAttributes.attributes.length
    ) {
      const { getProductAttributes } = this.props;
      const {
        product: { product_id }
      } = this.props;
      getProductAttributes(product_id);
    }
  }

  /**
   * ensures the most recent value for each jsx input element is stored in the state
   * sets the state value of the input basing on its name attribute
   *
   * @param {Object} event
   *
   * @returns {void}
   */
  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  /**
   * ensures that the dropdown for selecting color
   * closes upon dropdown item selection, or outside click
   *
   * @returns {void}
   */
  handleCloseColor = () => {
    this.setState({
      openColor: false
    });
  };

  /**
   * ensures that the dropdown for selecting size
   * closes upon dropdown item selection, or outside click
   *
   * @returns {void}
   */
  handleCloseSize = () => {
    this.setState({
      openSize: false
    });
  };

  /**
   * ensures that the dropdown for selecting color
   * opens upon dropdown selection
   *
   * @returns {void}
   */
  handleOpenColor = () => {
    this.setState({
      openColor: true
    });
  };

  /**
   * ensures that the dropdown for selecting size
   * opens upon dropdown selection
   *
   * @returns {void}
   */
  handleOpenSize = () => {
    this.setState({
      openSize: true
    });
  };

  /**
   * ensures that a user can add an item to the shopping cart
   *
   * @returns {void}
   */
  handleSubmit = () => {
    const { color, size } = this.state;
    const attributes = `${color}: ${size}`;
    const {
      product: { product_id },
      addToShoppingCart
    } = this.props;
    const cartId = localStorage.getItem("cartId");
    const data = {
      cart_id: cartId,
      product_id: product_id,
      attributes: attributes
    };
    addToShoppingCart(data);
  };

  /**
   * ensures that a user can leave a review for a product
   *
   * @returns {void}
   */
  handleAddReviews = () => {
    const { leaveReview, productId } = this.props;
    const name = localStorage.getItem("user");
    const { rating, review } = this.state;
    const data = {
      name,
      review,
      rating
    };
    leaveReview(productId, data);
  };

  /**
   * ensures that the state value for rating changes accordingly,
   * this function is responsible for handling state change for the rating component
   *
   * @param {Integer} newRating
   * @param {String} name
   *
   * @returns {void}
   */
  changeRating = (newRating, name) => {
    this.setState({
      rating: newRating
    });
  };
  render() {
    const {
      product,
      productReviews,
      theAttributes: { attributes }
    } = this.props;
    const { rating } = this.state;
    let colors, sizes;
    if (attributes && attributes.length) {
      colors = attributes.filter(element => element.attribute_name === "Color");
      sizes = attributes.filter(element => element.attribute_name === "Size");
    }

    return (
      <Fragment>
        <ProductDetailsContentComponent
          product={product}
          rating={rating}
          onStarClick={this.changeRating}
          productReviews={productReviews}
          handleSubmit={this.handleSubmit}
          colorsData={colors}
          sizesData={sizes}
          color={this.state.color}
          size={this.state.size}
          colorOpen={this.state.openColor}
          sizeOpen={this.state.openSize}
          handleCloseColor={this.handleCloseColor}
          handleCloseSize={this.handleCloseSize}
          handleOpenColor={this.handleOpenColor}
          handleOpenSize={this.handleOpenSize}
          handleChange={this.handleChange}
          handleAddReviews={this.handleAddReviews}
          review={this.state.review}
        />
      </Fragment>
    );
  }
}
const mapStateToProps = state => ({
  theAttributes: state.attributes
});
export default connect(
  mapStateToProps,
  { getProductAttributes, addToShoppingCart, leaveReview }
)(ProductDetailsContent);
