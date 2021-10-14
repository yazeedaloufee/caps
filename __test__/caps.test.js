'use strict';
const event = require('../event.js')




describe( 'event', ()=>{

    let consoleSpy;
    beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'log')//.mockImplementation();
    });

    afterEach(()=>{
        consoleSpy.mockRestore();
    })

    let payload = {
        storeName: 'Stroman - Kling',
        orderId: 23531,
        customerName: 'Lucille Romaguera',
        address: 'Funk Dale',
        state: ''
      }

    it('should be log out pickup',async()=>{
         event.emit('pickup',payload);
        await consoleSpy();
        console.log(consoleSpy);
        expect(consoleSpy).toHaveBeenCalled();
    })

    it('should be log out in transit',async()=>{
        event.emit('in transit',payload);
       await consoleSpy();
       expect(consoleSpy).toHaveBeenCalled();
   })

   it('should be log out delivered ',async()=>{
    event.emit('delivered',payload);
   await consoleSpy();
   expect(consoleSpy).toHaveBeenCalled();
})
})