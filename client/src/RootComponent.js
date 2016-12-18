import React, {Component} from 'react';
import {connect} from 'react-redux';
import Cart from './cart/Cart';
import {fetchAllProducts} from './products/productActions';
import {fetchCart} from './cart/cartActions';

class RootComponent extends Component {

  componentDidMount() {
    this.props.fetchAllProducts();
    this.props.fetchCart();
  }

  render() {

    if (this.props.productsLoading || this.props.cartLoading) {
      return <div>Loading</div>;
    }

    return (
      <div>
        <Cart />
      {this.props.children}
      </div>
    );
  }
}

RootComponent.propTypes = {
  children: React.PropTypes.node,
  fetchAllProducts: React.PropTypes.func.isRequired,
  productsLoading: React.PropTypes.bool.isRequired,
  fetchCart: React.PropTypes.func.isRequired,
  cartLoading: React.PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    productsLoading: state.products.loading,
    cartLoading: state.cartState.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    fetchCart: () => dispatch(fetchCart())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
