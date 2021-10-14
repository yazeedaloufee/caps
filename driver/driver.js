'use strict';
const event = require('../event.js');

event.on('pickup', (payload)=>{
    console.log(`DRIVER picked up ${payload.orderId}`)
    setTimeout(()=>{
        event.emit('in transit',payload);
    },1000)

    setTimeout(()=>{
        event.emit('delivered',payload)
        console.log(`DRIVER delivered  ${payload.orderId}`)

    },3000)
})