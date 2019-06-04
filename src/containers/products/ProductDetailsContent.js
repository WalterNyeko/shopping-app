import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import ProductDetailsContentComponent from "../../components/products/ProductDetailsContent";
import { getProductAttributes } from "../../store/actions/Attributes";
import { addToShoppingCart } from "../../store/actions/Orders";

class ProductDetailsContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      color: "",
      size: "",
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

  handleChange = event => {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState({ [name]: value });
    console.log(this.state);
  };

  handleCloseColor = () => {
    this.setState({
      openColor: false
    });
  };

  handleCloseSize = () => {
    this.setState({
      openSize: false
    });
  };

  handleOpenColor = () => {
    this.setState({
      openColor: true
    });
  };

  handleOpenSize = () => {
    this.setState({
      openSize: true
    });
  };

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
  { getProductAttributes, addToShoppingCart }
)(ProductDetailsContent);
