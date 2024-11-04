const descriptor = Object.getOwnPropertyDescriptor(Math,'PI');

// console.log(descriptor);
// Object.defineProperty(Math, 'PI', { // cant do this
//     writable: true
// })
// console.log(descriptor);


const chai = {
    name : 'ginger chai',
    price : 250,
    isAvailable : true,
    orderChai : function(){
        console.log(` chai ni bni h`);
    }
}

//console.log(Object.getOwnPropertyDescriptor(chai , 'name'));
console.log(chai.name);

Object.defineProperty(chai , 'name' ,{
    writable:false,
    enumerable: false
})
chai.name = 'namakchai';
// console.log("new");
// console.log(chai.name);
 for( let [key , value] of Object.entries(chai))
    {
        if(typeof value !== 'function')

            {
                console.log(`${key} : ${value}`);
            }
    }
 