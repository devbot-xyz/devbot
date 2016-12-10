var UserModel = require('./model.js');

module.exports = function(input, cb) {
  UserModel.findAll({
    where: {
      userid: input
    }
  }).then(function (user) {
        console.log(user);
        if(user.length === 0 && user)
          cb(null)
        else {
            // Spin up the server
            cb(user)
          }
    });

}
