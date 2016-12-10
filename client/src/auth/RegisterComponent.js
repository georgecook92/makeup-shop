import React, {Component} from 'react';
import {connect} from 'react-redux';
import {registerRequest} from './authActions';

class RegisterComponent extends Component {

  constructor(props) {
      super(props);
      this.state = {
        submitting: false,
        formValues: {
          email: "",
          password: "",
          confPassword: "",
          firstName: "",
          lastName: "",
          phone: "",
          selected: false
        },
        errorValues: {}
      };
  }

  _handleSubmit(event) {
      event.preventDefault();

      const {email, password, phone, firstName, lastName} = this.state.formValues;
      let error = false;
      let errorValues = {};

      if (!email || email.trim() === "") {
        error = true;
        errorValues.email = true;
      }
      if (!firstName || firstName.trim() === "") {
        error = true;
        errorValues.email = true;
      }
      if (!lastName || lastName.trim() === "") {
        error = true;
        errorValues.email = true;
      }
      if (!phone || phone.trim() === "") {
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
          password,
          firstName,
          lastName,
          phone
        };
        this.props.registerRequest(data);
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

  _changeSelection() {
    this.setState( { formValues: {
      ...this.state.formValues,
      selected: !this.state.formValues.selected
    } } );
  }

  render() {
    return (
      <div>
        <h1>Register</h1>
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
              placeholder="first name"
              type="text"
              value={this.state.formValues.firstName}
              onChange={this.handleChange.bind(this, "firstName")}
              onBlur={this.handleBlur.bind(this, "firstName")}
            />
            {this.state.errorValues.firstName && <div>Required</div>}
          </div>

          <div>
            <input
              placeholder="last name"
              type="text"
              value={this.state.formValues.lastName}
              onChange={this.handleChange.bind(this, "lastName")}
              onBlur={this.handleBlur.bind(this, "lastName")}
            />
          {this.state.errorValues.lastName && <div>Required</div>}
          </div>

          <div>
            <input
              placeholder="phone number"
              type="text"
              value={this.state.formValues.phone}
              onChange={this.handleChange.bind(this, "phone")}
              onBlur={this.handleBlur.bind(this, "phone")}
              />
            {this.state.errorValues.phone && <div>Required</div>}
          </div>

          <div>
            <input
              placeholder="password"
              type={ this.state.formValues.selected ? "text" : "password" }
              value={this.state.formValues.password}
              onChange={this.handleChange.bind(this, "password")}
              onBlur={this.handleBlur.bind(this, "password")}
            />
            {this.state.errorValues.password && <div>Required</div>}
          </div>
          <div>
            Visible <input type="checkbox" checked={this.state.formValues.selected} onChange={this._changeSelection.bind(this)} />
          </div>

          <button disabled={this.props.loading}>Submit</button>
        </form>
      </div>
    );
  }
}

RegisterComponent.propTypes = {
  loading: React.PropTypes.bool.isRequired,
  registerRequest: React.PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    registerRequest: (data) => dispatch(registerRequest(data))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent);
