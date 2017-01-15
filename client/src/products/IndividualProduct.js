import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../cart/cartActions';
import Cart from '../cart/Cart';

class IndividualProduct extends Component {

  constructor(props) {
    super(props);
    this.state = {
      quantityToAdd: 1,
      error: ''
    };
  }

  handleChange(e) {
    let val = e.target.value;
    this.setState({
      quantityToAdd: parseInt(val, 10)
    });
  }

  _handleFormSubmit(e) {
    e.preventDefault();
    let error = false;

    if (this.props.user.size === 0) {
      this.setState({error: 'Must be signed in to add to cart'});
      return;
    }

    if (!this.state.quantityToAdd) {
      this.setState({error: 'Please select a quantity to add'});
      error = true;
    }

    if (this.state.quantityToAdd < 0) {
      this.setState({error: 'Please select a positive number'});
      error = true;
    }

    if (!error) {
      const data = {
        cartId: this.props.cartId,
        productId: this.props.product.product_id,
        quantity: this.state.quantityToAdd,
        productName: this.props.product.product_name,
        price: this.props.product.price
      };
      this.props.addToCart(data);
    }
  }

  renderAddToCart() {
      // check if it is in the basket already
      console.log('product', this.props.product.product_id);
      return (
          <form onSubmit={this._handleFormSubmit.bind(this)} >
            <label>Quantity to add</label>
            <input type="number"
                  value={this.state.quantityToAdd}
                  onChange={this.handleChange.bind(this)}
                  />
                {this.state.error && <div>{this.state.error}</div>}
            <button>Add to cart</button>
          </form>
      );
  }

  render() {
    if (this.props.loading || !this.props.products || (localStorage.getItem('token') && !this.props.cartId) ) {
      return <div>Loading</div>;
    }

    const {product} = this.props;

    if (product) {
      return (
        <div>
        <Cart />
          <h1>{product.product_name}</h1>
          <h3>{product.product_description}</h3>
          <h4>£{product.price}</h4>
          <h4>Quantity Left {product.quantity}</h4>
          {this.renderAddToCart()}

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
  products: React.PropTypes.object,
  cartId: React.PropTypes.number,
  addToCart: React.PropTypes.func.isRequired,
  user: React.PropTypes.object.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.auth.user,
    loading: state.products.loading,
    product: state.products.products.find( p => (parseInt(p.product_id, 10) === parseInt(ownProps.params.productId, 10)) ),
    products: state.products.products,
    cartId: state.cartState.id,
    cart: state.cartState.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (data) => dispatch(addToCart(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IndividualProduct);
