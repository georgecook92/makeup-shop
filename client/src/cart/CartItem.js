import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { deleteFromCart, addToCart } from './cartActions';

class CartItem extends Component {

    handleChange(event) {
        const { cart, item } = this.props;
        const data = {
          cartId: cart.id,
          productId: item.product_id,
          quantity: event.target.value
        };
        this.props.addToCart(data);
    }

    render() {
      const { item, cart } = this.props;
      return (
        <div>
                  <h4>{`${item.quantity} X ${item.product_name} - £${item.price}`} </h4>
                      Quantity
                      <select value={item.quantity} onChange={this.handleChange.bind(this)}>
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                          <option value={6}>6</option>
                          <option value={7}>7</option>
                          <option value={8}>8</option>
                          <option value={9}>9</option>
                      </select>
                  <button onClick={() => this.props.deleteFromCart(cart.id, item.product_id)} >Delete me from cart</button>
              </div>
      );
    }
}

CartItem.propTypes = {
  deleteFromCart: PropTypes.func.isRequired,
  addToCart: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired,
  cart: PropTypes.object.isRequired
};

export default connect(
  null,
  (dispatch) => {
    return {
      deleteFromCart: (cartId, productId) => dispatch(deleteFromCart(cartId, productId)),
      addToCart: (data) => dispatch(addToCart(data))
    };
  }
)(CartItem);
