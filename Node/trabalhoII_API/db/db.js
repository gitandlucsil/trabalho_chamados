const mongoose = require('mongoose')

exports.connect = () => {
    mongoose.connect('mongodb://localhost:27017/trabalhoII')
}

exports.disconnect = () => {
    mongoose.disconnect()
}