const Validator = require('validator')
const isEmpty = require('./isEmpty')

const validateNewUser = (data) => {
  let errors = {}

  data.name = !isEmpty(data.name) ? data.name : ''
  data.email = !isEmpty(data.email) ? data.email: ''
  data.password = !isEmpty(data.password) ? data.password: ''
  data.passwordTwo = !isEmpty(data.passwordTwo) ? data.passwordTwo: ''

  if(!Validator.isLength(data.name, {min: 5, max: 100})) {
    errors.name = "name must be atleast 5 character"
  }

  if(Validator.isEmpty(data.name)) {
    errors.name = "name is required"
  }

  if(Validator.isEmpty(data.email)) {
    errors.email = "email is required"
  }

  if(!Validator.isEmail(data.email)) {
    errors.email = "check your email"
  }

  if(Validator.isEmpty(data.password)) {
    errors.password = "password required"
  }

  if(!Validator.isLength(data.password, {min: 5, max: 100 })) {
    errors.password = "Password must be ateast 5 characters"
  }

  if(Validator.isEmpty(data.passwordTwo)) {
    errors.password = "password Two required"
  }

  if(!Validator.isLength(data.passwordTwo, {min: 5, max: 100 })) {
    errors.password = "Password two must be atleast 5 characters"
  }

  return {
    errors,
    isValid: isEmpty(errors)
  }


}

module.exports = validateNewUser
