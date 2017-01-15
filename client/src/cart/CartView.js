import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { Record } from 'immutable';

import { deleteFromCart } from './cartActions';
import CartItem from './CartItem';

class CartView extends Component {

  constructor(props) {
    super(props);
    let newState = {};
    props.cart.cart.forEach((c) => {
        newState = { ...newState , [c.product_id]: c.quantity};
    });
    this.state = newState;
  }

  handleFormSubmit() {

  }

  renderSubtotal() {
    const { cart } = this.props;
    let subTotal = 0;
    cart.cart.forEach((c) => {
      subTotal += (c.price * c.quantity);
    });
    return <div> Subtotal: £{subTotal} </div>;
  }

  handleChange(id, event) {
      const stateCopy = {...this.state};
      stateCopy[id] = parseInt(event.target.value, 10);
      this.setState(stateCopy);
  }

  renderCart() {
    const { cart } = this.props;
    return cart.cart.map( (c) => {
        return <CartItem key={c.product_id} cart={cart} item={c} />;
    } );

  }

  render() {
    return (
      <div>
          <h2>My cart</h2>
          {this.renderCart()}
          {this.renderSubtotal()}
      </div>
    );
  }
}

CartView.propTypes = {
  cart: PropTypes.instanceOf(Record).isRequired,
  deleteFromCart: PropTypes.func.isRequired
};

export default connect(
  (state) => {
    return {
      cart: state.cartState
    };
  },
  (dispatch) => {
    return {
      deleteFromCart: (cartId, productId) => dispatch(deleteFromCart(cartId, productId))
    };
  }
)(CartView);
