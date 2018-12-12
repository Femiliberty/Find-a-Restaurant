var express = require('express');
var router = express.Router();
const mongoose = require ('mongoose');
const bcrypt = require ('bcryptjs')

const join = require('../utils/validation/join')
const login = require('../utils/validation/login')
var registerController = require('../controllers/registerController')

router.post('/register', function(req, res) {
  const signUp = req.body
  const { errors, isValid} = join(signUp)

  if(!isValid) {
    return res.status(400).json(errors)
  }

  registerController.join(signUp)
    .then(user => {
      res.status(200).json({
        data: user
       
      })
    })
    .catch(err => {
      const status = err.status
      const message = err.message
      res.status(status).json({
        message: message
      })
    })
})

router.post('/login', function(req, res) {

  const {errors, isValid } = login(req.body)
  console.log(errors)
  if (!isValid) {
    console.log('39------')
    return res.status(400).json(errors);
  }

  registerController
    .login(req.body)
    .then(user => {
      console.log(user)
      res.json(user)
    })
    .catch(err => {
      console.log(err)
      res.json(err)
    })
})
module.exports = router