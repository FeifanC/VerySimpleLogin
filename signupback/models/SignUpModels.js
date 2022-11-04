const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
    fullName: {type: String, require: true},
    username: {type: String, require: true},
    email: {type: String, reqire: true},
    password: {type: String, reqire: true},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('mytable', signUpTemplate)