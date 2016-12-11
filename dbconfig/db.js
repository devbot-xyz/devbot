var Sequelize = require('sequelize')

module.exports = function (cb) {
  //  global.sequelize = new Sequelize('devdb', 'postgres', 'mysecretpassword', {
    global.sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER , process.env.DB_PASS, {
      host: '172.17.0.2',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      },
      logging: console.log.bind(null, 'Sequelize:')
    });

  var Users = require('../api/users/model.js');

  sequelize.sync().then(
    cb
  );
};
