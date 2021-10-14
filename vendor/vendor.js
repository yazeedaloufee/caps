const event = require('../event.js');
const faker = require('faker');

setInterval(()=>{

    const order = {
        storeName:faker.company.companyName(), orderId:faker.datatype.number(), customerName:faker.name.findName(), address:faker.address.streetName(),state:'',
    }
    event.emit('pickup',order)

},2000)

event.on('delivered',(payload)=>{
    console.log(`thank you for delivering ${payload.orderId} `)
})