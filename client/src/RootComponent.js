import React, {Component} from 'react';

class RootComponent extends Component {
  render() {
    return (
      <div>
      {this.props.children}
      </div>
    );
  }
}

RootComponent.propTypes = {
  children: React.PropTypes.node
}

export default RootComponent;
