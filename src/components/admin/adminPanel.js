import React, { Component } from 'react';
import {reduxForm} from 'redux-form';

export default class Panel extends Component {
  render() {
    return (
      <div>
        Panel
        {this.props.children} 
      </div>

    );
  }
}
