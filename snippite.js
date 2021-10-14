'use strict'
const Event =require('events');
const event = new Event;
setInterval(() => {
    event.emit('test',{test:'testing'});
    
}, 10000);

event.on('test',(test)=>{
    console.log('test success',`${event}`,'isdeleviered ',test)
})

console.log('this')