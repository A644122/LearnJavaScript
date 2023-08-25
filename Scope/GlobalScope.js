// global variable Scope can  accessed from anywhere in the program.
//outside ob the block variables,decleared using Var,cont,Let are very simmilar.//
 let myCar="Bmw"

 console.log(myCar);

 function myname(){
    console.log(myCar);
    var mynewCar="odi"
    console.log(mynewCar);
 }
 myname()