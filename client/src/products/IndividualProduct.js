import React, {Component} from 'react';
import {connect} from 'react-redux';

class IndividualProduct extends Component {
  render() {
    if (this.props.loading || !this.props.products) {
      return null;
    }
    const {product} = this.props;

    if (product) {
      return (
        <div>
          <h1>{product.product_name}</h1>
          <h3>{product.product_description}</h3>
          <h4>£{product.price}</h4>
          <h4>Quantity Left {product.quantity}</h4>
        </div>
      );
    } else {
      return <p>Waiting</p>;
    }

  }
}

IndividualProduct.propTypes = {
  params: React.PropTypes.object,
  loading: React.PropTypes.bool.isRequired,
  product: React.PropTypes.object,
  products: React.PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.products.loading,
    product: state.products.products.find( p => (parseInt(p.product_id, 10) === parseInt(ownProps.params.productId, 10)) ),
    products: state.products.products
  };
};

export default connect(mapStateToProps, null)(IndividualProduct);
