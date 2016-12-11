import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchAllProducts} from './products/productActions';

class RootComponent extends Component {

  componentDidMount() {
    console.log("MOUNT");
    this.props.fetchAllProducts();
  }

  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}

RootComponent.propTypes = {
  children: React.PropTypes.node,
  fetchAllProducts: React.PropTypes.func.isRequired
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllProducts: () => dispatch(fetchAllProducts())
  };
};

export default connect(null, mapDispatchToProps)(RootComponent);
