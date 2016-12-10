var Sequelize = require('sequelize')

module.exports = global.sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  userid: {
    type: Sequelize.STRING,
    allowsNull: false,
    unique: true
  },
  cloudProvider: {
    type: Sequelize.STRING,
    allowsNull: false
  },
  token: {
    type: Sequelize.STRING,
    allowsNull: false
  }
}, {
  freezeTableName: true // Model tableName will be the same as the model name
})
