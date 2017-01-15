import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import Cart from './cart/Cart';

class SplashComponent extends Component {

  _renderProducts() {
    return this.props.products.map( (product) => {
      return (
        <Link to={`/products/${product.product_id}`} key={product.product_id}>
          <h3>{product.product_name}</h3>
          <h6>£{product.price}</h6>
        </Link>
      );
    } );
  }

  render() {
    return (
      <div>
        <Cart />
        {this._renderProducts()}
      </div>
    );
  }
}

SplashComponent.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  products: React.PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    loading: state.products.loading,
    products: state.products.products
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     registerRequest: (data) => dispatch(registerRequest(data))
//   };
// };

export default connect(mapStateToProps, null)(SplashComponent);
