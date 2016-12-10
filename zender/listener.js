var amqp = require('amqplib/callback_api');

amqp.connect('amqp://devbotuser:devbotpass@172.17.0.1:5672/',
  function(err, conn) {
    conn.createChannel(function(err, ch) {
      var q = 'zender';
      ch.assertQueue(q, {durable: false});

      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
      ch.consume(q, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());

      }, {noAck: true});
    });
  }
);
