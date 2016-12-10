var amqp = require('amqplib/callback_api');
var SlackBot = require('slackbots')

var bot = new SlackBot({
    token: process.env.token, // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'devbot'
});
var ampqUser = process.env."AMQP_USER"
var amqpPassword = process.env."AMQP_PASS"
var amqpHost = process.env."AMQP_HOST"
var amqpConnectionStr := "amqp://"+ ampqUser +":"+ amqpPassword +"@"+ amqpHost +":5672/"
// 'amqp://devbotuser:devbotpass@172.17.0.2:5672/'
amqp.connect(amqpConnectionStr,
  function(err, conn) {
    conn.createChannel(function(err, ch) {
      var q = 'zender';
      ch.assertQueue(q, {durable: true});

      console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
      ch.consume(q, function(msg) {
        console.log(" [x] Received %s", msg.content.toString());
        var resJson = JSON.parse(msg.content)

        if(resJson.error) {
          bot.postMessage(resJson.userId, resJson.error);
        }
        if(resJson.response) {
          bot.postMessage(resJson.userId, resJson.response);
        }

      }, {noAck: true});
    });
  }
);
