#!/usr/bin/env node

var amqp = require('amqplib/callback_api');

var pushToqueue = function (q, data, cb) {
  console.log('AShjashjkhaskjdhkashkdhk'+JSON.stringify(data))
  amqp.connect('amqp://devbotuser:devbotpass@172.17.0.2:5672/', function(err, conn) {
    if (err) {
      console.log('ss')
      cb(err)
      return
    }

    conn.createChannel(function(err, ch) {
      if(err){
        cb(err)
        return
      }

      ch.sendToQueue(q, new Buffer(JSON.stringify(data)));
      console.log(" [x] Sent %s", data);
      cb(err)
    });
  });
}

module.exports = pushToqueue;
