var Sequelize = require('sequelize')

module.exports = function (cb) {
  global.sequelize = new Sequelize('devdb', 'XX', 'XXX', {
      host: '172.17.0.29',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      logging: console.log.bind(null, 'Sequelize:')
    })


  var Users = require('../api/users/model.js')

  sequelize.sync().then(
    cb
  )
}
