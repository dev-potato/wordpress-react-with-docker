import React, { Component } from "react";
import Logo from "../../Assets/Icons/logo-blue.svg";
import "./contact.scss";
import axios from "axios";
import LinkButton from '../LinkButton/linkButton';

const API_PATH = 'http://localhost:8001/api/contact/index.php';

export default class Contact extends Component {
  constructor(props) {
    super(props);

    
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
      postId: 1,
      emailSent: false,
      httpError: null,
      formError: null,
      formValid: false,
      validationArr: []
    };
}

  componentDidMount = () => {
    window.setTimeout(() => this.props.stopLoader(), 1200);
  }

  handleFormSubmit = (e) => {
    if (this.state.formError) {
      this.setState({
        formError: 'Please make sure the form is filled out properly'
      })
      return;
    } else {
      e.preventDefault();
      axios({
          method: 'POST',
          url: 'http://localhost:8000/wp-json/wp/v2/comments',
          header: { 'content-type': 'application/json' },
          data: this.state
      }).then( res => {
          this.setState({
              emailSent: true
          }, () => this.props.stopLoader() );
      }).catch( err => 
          this.setState({ error: 'Looks like something went wrong. Please try again later.', emailSent: true })
      )
    }
  }

  render() {
    const { firstName, lastName, email, message, emailSent, error, formValid, formError } = this.state;
    return (
      <div className="contact-wrapper">
        <img src={Logo} />
        <section>
        <p>{ error ? 'Oops...' : 'Want to get in touch?' }</p>
            {
                emailSent && !error

                ?
                <div>
                    <span>Thank you.</span>
                </div>

                : 
                
                emailSent && error 
                
                ?

                <div className="error-wrapper">
                 {error}
                 <LinkButton className="back-button" to="/">
                   Home
                 </LinkButton>
                </div>

                :

            <div className="form-wrapper">
              <form action="/action_page.php">
                <div className="name-wrapper">
                  <span>
                    <label for="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstname"
                      placeholder="First Name"
                      value={firstName}
                      // onBlur={ (e) => this.validateForm(e.target) }
                      onChange={ (e) => this.setState({ firstName: e.target.value})}
                    />
                  </span>
                  <span>
                    <label for="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastname"
                      placeholder="Last Name"
                      value={lastName}
                      // onBlur={ (e) => this.validateForm(e.target) }
                      onChange={ (e) => this.setState({ lastName: e.target.value})}
                    />
                  </span>
                </div>
  
                <label for="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  // onBlur={ (e) => this.validateForm(e.target) }
                  onChange={ (e) => this.setState({ email: e.target.value})}
                />
  
                <label for="subject">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={message}
                  // onBlur={ (e) => this.validateForm(e.target) }
                  onChange={ (e) => this.setState({ message: e.target.value})}
                ></textarea>

                <div className="button-wrapper">
                  <input 
                    type="submit" 
                    value="Submit" 
                    className={ formValid ? 'submit-button': 'submit-button disabled' }
                    onClick={ (e) => this.handleFormSubmit(e) }/>
                     <span className={formError ? "form-error" : "form-error hide"}>{formError}</span>
                </div>
              </form>
            </div>
            }
          </section>
        </div>
    );
  }
}
