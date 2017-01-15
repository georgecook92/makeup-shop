import React from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

class Cart extends React.Component {
  render() {
    return <div onClick={() => hashHistory.push('/cart')} >Cart {this.props.numberInCart.size}</div>;
  }
}

Cart.propTypes = {
  numberInCart: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    numberInCart: state.cartState.cart
  };
};

export default connect(mapStateToProps, null)(Cart);
