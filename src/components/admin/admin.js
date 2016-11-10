import React, { Component } from 'react';
import { connect } from 'react-redux'
import {Field, reduxForm} from 'redux-form';
import * as actions from '../../actions';
import {Textfield, Spinner} from 'react-mdl';
import AdminForm from './adminForm';

class Admin extends Component {
  renderMessage() {
    if (this.props.message) {
      //console.log(this.props.message);
      return (
        <div className='success-message'>
            {this.props.message}
        </div>
      );
    }
  }
  renderAlert() {
    if (this.props.errorMessage) {

      return (
        <div className='alert-message'>
          <strong>Oops!</strong>
            <div dangerouslySetInnerHTML={{__html: this.props.errorMessage}}>
            </div>
        </div>
      );
    }
  }

  handleSubmit(values) {
    var errors = '';

    if (values.email == undefined || values.email == '') {
      errors = '<div>Please provide your email</div>';
    }

    if(values.password == undefined || values.password == '') {
      errors += '<div>Please provide your password</div>';
    }

    if(errors == '') {
      console.log('attempting signin');
      this.props.signinUser(values.email, values.password);

    }
    else {
      this.props.authError(errors);
    }
  }


  render() {
    const {handleSubmit} = this.props;

    return (
      <div>
        <div className='signin-title-box'>
          <h3 className='signin-title'>Admin Login.</h3>
        </div>
        <AdminForm onSubmit={this.handleSubmit.bind(this)} />
        {this.renderAlert()}
        {this.renderMessage()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
    message: state.auth.message
    };
}


//uses redux form instead of connect
Admin = reduxForm({
  form: 'signin'
})(Admin);

export default connect(mapStateToProps, actions)(Admin);
