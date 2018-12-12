const mongoose = require("mongoose")
const moment = require("moment")
const time = moment()

const RegisterSchema = new mongoose.Schema({
  email: {type: String, default: ""},
  name: {type: String, default: ""},
  password: {type: String, default: ""},
  time: {type: String, default: time.format("dddd, MMMM Do YYYY, h:mm:ss a")}
})
module.exports = mongoose.model("register", RegisterSchema)