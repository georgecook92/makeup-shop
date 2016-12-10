import React, {Component} from 'react';
import {connect} from 'react-redux';
import {loginRequest} from './authActions';

class LoginComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {
        submitting: false,
        formValues: {
          email: "",
          password: ""
        },
        errorValues: {}
      };
  }

  _handleSubmit(event) {
      event.preventDefault();

      const {email, password} = this.state.formValues;
      let error = false;
      let errorValues = {};

      if (!email || email.trim() === "") {
        error = true;
        errorValues.email = true;
      }
      if (!password || password.trim() === "") {
        error = true;
        errorValues.password = true;
      }


      // if no errors - submit the form
      if ( !error ) {
        this.setState({submitting: true});
        const data = {
          email,
          password
        };
        this.props.loginRequest(data);
      } else {
        this.setState({errorValues});
      }

  }

  handleChange(property, event) {
      const formValues = this.state.formValues;
      const errorValues = this.state.errorValues;
      formValues[property] = event.target.value;
      if (event.target.value !== null && event.target.value.trim() !== "" ) {
        errorValues[property] = null;
      }
      this.setState({formValues});
  }

  //fieldName comes from the bind method
  handleBlur(fieldName, event) {
    let errorValues = this.state.errorValues;
    // if
    if (event.target.value.trim() === "" ) {
      errorValues[fieldName] = true;
    } else {
      errorValues[fieldName] = false;
    }
    this.setState({errorValues});
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this._handleSubmit.bind(this)}>
          <div>
            <input
            placeholder="email"
            type="email"
            value={this.state.formValues.email}
            onChange={this.handleChange.bind(this, "email")}
            onBlur={this.handleBlur.bind(this, "email")}
            />
            {this.state.errorValues.email && <div>Required</div>}
          </div>

          <div>
            <input
            placeholder="password"
            type="password"
            value={this.state.formValues.password}
            onChange={this.handleChange.bind(this, "password")}
            onBlur={this.handleBlur.bind(this, "password")}
            />
            {this.state.errorValues.password && <div>Required</div>}
          </div>
          <button disabled={this.props.loading}>Submit</button>
        </form>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  loginRequest: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (data) => dispatch(loginRequest(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);
