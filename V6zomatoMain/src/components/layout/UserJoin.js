import React, { Component } from 'react'
import { connect } from 'react-redux';
import Nav from './Nav'


import { createUser } from '../../actions';


class UserJoin extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    passwordTwo: '',
    errors: {}
  }

  inputHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitHandler = (e) => {
    e.preventDefault()
    console.log(this.state)

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      passwordTwo: this.state.passwordTwo
    }
    this.props.createUser(newUser, this.props.history)
    e.target.reset()
  }


  render() {

    const { errors } = this.state

    return (
      <div className="userform">
        <Nav />
        <form className="form-signin" onSubmit={this.submitHandler}>
          <h1 className="h3 mb-3 font-weight-normal">Join</h1>

          <input type="text" name="name" value={this.state.name} onChange={this.inputHandler} className="form-control" error={errors.name}  placeholder="Name" required autoFocus/>

          <input type="email" name="email" className="form-control" error={errors.email} value={this.state.email} onChange={this.inputHandler} placeholder="Email address" required/>

          <input type="password" name="password" className="form-control" error={errors.password} value={this.state.password} onChange={this.inputHandler} placeholder="Password" required/>

          <input type="password" name="passwordTwo" className="form-control" error={errors.confirmPassword} value={this.state.conformPassword} onChange={this.inputHandler} placeholder="Confirm Password" required/>

          <button className="btn btn-lg btn-primary btn-block" type="submit">GO</button>

        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  user: state.user
})

export default connect(mapStateToProps, { createUser })(UserJoin);

