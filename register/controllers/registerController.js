const Register = require('../models/Register')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');


module.exports = {
  join: (params) => {
    return new Promise(( resolve, reject) => {
      Register
        .findOne({email: params.email})
        .then( user => {
          if(user) {
            let errors = {}
            errors.message = 'Email taken! Pick another'
            errors.status = 400
            reject(errors)
          } else {
            const newUser = new Register({name:params.name, email:params.email, password:params.password})

            bcrypt.genSalt(10, (err, salt ) => {
              if(err) {
                reject(err)
              }
              bcrypt.hash(newUser.password, salt, (err, hashedPassword) => {
                if(err) {
                  reject(err)
                } else {
                  newUser.password = hashedPassword

                  newUser
                    .save()
                    .then(user => resolve(user))
                    .catch(err => reject(err))

                }
              })
            })
          }
        })
        .catch(err => {
          console.log(err)
        })
    })
  },

  login: (params) => {
    const email = params.email
    const password = params.password

    return new Promise((resolve, reject) => {
      Register
        .findOne({email})
        .then(user => {
          if(!user) {
            let errors = {}
            errors.email = " Email not found"
            errors.status = 404
            reject(errors)
          }

          bcrypt
            .compare(password, user.password)
            .then( isAuth => {
         
              if(!isAuth) {
                let errors = {}
                errors.password = "check password and email"
                errors.status = 404
                reject(errors)
              } else {
                const payload = {
                  id: user._id,
                  email: user.email,
                  name: user.name
                }
                console.log('payload')
                console.log(payload)
                jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: 4000}, (err, token) => {
                  console.log('78--------')
                  if(err) {
                    console.log(err)
                    reject(err)
                  }
                  let success = {}
                  success.confirmation = "Complete"
                  success.token = "Bearer " + token
                  console.log(success)
                  resolve(success)
                 
                })
              }
            })
        })
    })
  }

}