import React, { Component } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { UserSignIn } from '../../actions';


class   UserLogin extends Component {
  state = {
    email: '',
    password: '',
    // errors: {}
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    this.props.UserSignIn(this.state, this.props.history)
  }

  render() {
    return (
      <div className="userform">
      <Nav />

        <form className="form-signin" onSubmit={this.submitHandler} >
          <h1 className="h3 mb-3 font-weight-normal">Login</h1>

          <input type="email" name="email" className="form-control"  value={this.state.email} onChange={this.inputHandler} placeholder="Email address" required/>

          <input type="password" name="password" className="form-control"  value={this.state.password} onChange={this.inputHandler} placeholder="Password" required/>

          <button className="btn btn-lg btn-primary btn-block" type="submit">GO</button>

        </form>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});


export default connect(mapStateToProps, { UserSignIn })(UserLogin)
