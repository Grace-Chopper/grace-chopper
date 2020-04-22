const Sequelize = require('sequelize')
const db = require('../db')

const Order = db.define('order', {
  status: {
    type: Sequelize.ENUM('in cart', 'shipping', 'completed'),
    defaultValue: true
  }
})

module.exports = Order
