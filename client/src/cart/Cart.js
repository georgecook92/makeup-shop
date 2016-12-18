import React from 'react';
import {connect} from 'react-redux';

class Cart extends React.Component {
  render() {
    return <div>Cart {this.props.numberInCart.size}</div>;
  }
}

Cart.propTypes = {
  numberInCart: React.PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
  return {
    numberInCart: state.cartState.cart
  };
};

export default connect(mapStateToProps, null)(Cart);
