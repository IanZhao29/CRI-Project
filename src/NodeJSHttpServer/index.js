const amqp = require('amqplib/callback_api');
let msgStack = [];
let boolSwitch = 1;
let url = {
    protocol: 'amqp',
    hostname: '8.141.56.170',
    port: 5672,
    username: 'lzz',
    password: '123456',
    vhost: '/'
}
async function do_consume() {
    /**
     * 1.连接mq
     * 2.创建通道
     * 3.声明队列
     * 4.创建回调函数，等待消息
     */
    // 1.
    amqp.connect(url, function(error0, connection) {
        if (error0) {
            console.log(error0);
            return;
        }
        //2
        connection.createChannel(function(error1, channel) {
            if (error1) {
                console.log(error0);
                return;
            }
            const queue = 'climate_dataTest_frontend_queue';

            channel.assertQueue(queue, {
                durable: true
            })
            //关闭自动回执
            const opt = {
                noArk: true
            }
            //每次消费一个消息
            channel.prefetch(1)
            //消费队列
            channel.consume(
                queue,
                msg => {
                    msgStack = JSON.parse(msg.content.toString())
                    msgStack.dateTime = new Date().toLocaleTimeString()
                    msgStack.humidity = parseInt(msgStack.humidity);
                    msgStack.ppm = parseFloat(msgStack.ppm.toFixed(1));
                    msgStack.temperature = parseFloat(msgStack.temperature.toFixed(1));
                    console.log("收到消息：", msgStack)
                },
                opt
            )
        })
    })
}
setInterval(do_consume, 1500);
//导入模块
const express = require('express');
const app = express();

var cors = require("cors");

app.use(cors());

// eslint-disable-next-line no-unused-vars
app.get('/amqp',(req,res,next)=>{
    res.send(msgStack)
    setTimeout(()=>{}, 3000)
});

app.get('/switch', (req, res) => {
    res.send(boolSwitch);
    setTimeout(() => {}, 3000);
})

app.listen(3000,()=>{
    console.log('node server is running on 3000');
})