'use strict';
const event = require('./event.js');
// require the driver and the vendor
require('./vendor/vendor.js');
require('./driver/driver.js');


event.on('pickup',(payload)=>{
    let output= {
        event:'pickup',
        time:new Date(),
        payload:payload
    }
    console.log("Event ",output);
    
})

event.on('delivered',(payload)=>{
    let output= {
        event:'delivered',
        time:new Date(),
        payload:payload
    }
    console.log("Event ",output);
})

event.on('in transit',(payload)=>{
    let output= {
        event:'in transit',
        time:new Date(),
        payload:payload
    }
    console.log("Event ",output);
})


//