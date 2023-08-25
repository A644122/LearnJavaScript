// PRIMITIVE DATATYPE/

// pass by value//
let number=10;
let number_1=number;
number= 20;
console.log(number)
console.log(number_1);

// REFERENCE DATATYPE//
let obj={
    number:100
}
// pass by reference//
let obj2=obj;
let obj3=obj;

obj.number=200;   
console.log(obj)        
console.log(obj2)
console.log(obj3)




