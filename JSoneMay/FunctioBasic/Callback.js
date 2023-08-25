// const SumeOperation = (a, b, callback) => {///Function Expression//
//   return callback(a, b);
// };
// // First method///

// const Addition = SumeOperation(10, 20, function (a, b) {
//   return a + b;
// });

// console.log(Addition);
// // Second method//

// const subtraction = (a, b) => a - b; //Arrow function ka syntex//
// const Result = SumeOperation(10, 8, subtraction);
// console.log(Result);

// // Multiple//

// function Multiple(a, b) {
//   return a * b;
// }
// const MultipleResult = SumeOperation(3, 4, Multiple);
// console.log(MultipleResult);

// CALLBACK HELL//
/*
console.log("This is  A Callback Hell");

function Getchees(callback){
    setTimeout(() => {
        const Chees="🌭🌭🌭🌭";
        console.log("Here is my Chees" + Chees);
       callback(Chees);
        
    }, 2000);

}

function MakesDho(Chees,callback){
    setTimeout(() => {
        const Dhoo=Chees + "🍠🍠";
        console.log("Here is Dhoo:" + Dhoo);
        callback(Dhoo);
        
        
    }, 2000);
}

function GetPizza(Dhoo,callback){
    setTimeout(()=>{
        const Pizza=Dhoo + "🍕🍕";
        console.log("Here my Pizaa"+ Pizza);
        callback(Pizza);

    },2000)

}

Getchees((Chees)=>{
    // console.log("I got it Chees" + Chees);
    MakesDho(Chees,(Dhoo)=>{
    //  console.log("Got is Dhoo" + Dhoo);
    GetPizza(Dhoo,(Pizza)=>{
        console.log("I got My Pizza",Pizza);

    })
    
    
    
});

});
*/

// PROMISE//
// Promise ko ham Ccreating karte hai Aaise ///

/*

const Tickets = new Promise(function (resolve, reject) {
  const logIn = true;
  if (logIn) {
    resolve("You are Successfully LogIn LearnTube website");
  } else {
    reject("You are not LogIn LearnTube website");
  }
});

// Promise ko used ham Aiase karte hai//
Tickets.then((data) => {
  console.log("Hey! Usere " + "" + data);
}).catch((data) => {
  console.log("Error! occure");
});
*/

