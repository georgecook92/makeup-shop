import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" component="input" type="email"/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field name="password" component="input" type="password"/>
        </div>
        <button type="submit">Login</button>
      </form>

    );
  }
}

// Decorate the form component
ContactForm = reduxForm({
  form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;
