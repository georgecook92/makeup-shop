import React, {Component} from 'react';
import {connect} from 'react-redux';
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
  cartLoading: React.PropTypes.bool.isRequired,
  user: React.PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    productsLoading: state.products.loading,
    cartLoading: state.cartState.loading,
    user: state.auth.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts()),
    fetchCart: (cart) => dispatch(fetchCart(cart))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootComponent);
