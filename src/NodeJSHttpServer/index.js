const amqp = require('amqplib/callback_api');
let message = '';
let url = {
    protocol: 'amqp',
    hostname: '8.141.56.170',
    port: 5672,
    username: 'lzz',
    password: '123456',
    vhost: '/'
}

amqp.connect(url, (connError, connection) => {
    console.log("正在监听队列...")
    if (connError) {
        throw connError;
    }
    connection.createChannel((channelError, channel) => {
        if (channelError) {
            throw channelError;
        }
        const QUEUE = 'climate_dataTest_frontend_queue';
        channel.assertQueue(QUEUE);
        channel.consume(QUEUE, (msg) => {
            message = msg.content
        }, {
            noAck: true
        })

    })
});
//导入模块
const express = require('express');
const app = express();

var cors = require("cors");

app.use(cors());

// eslint-disable-next-line no-unused-vars
app.get('/amqp',(req,res,next)=>{
    res.send(message)
    console.log(message.toString())
});

app.listen(3000,()=>{
    console.log('node server is running on 3000');
})