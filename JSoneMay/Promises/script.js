// // Promises//
// // Promises me three way state hota hain//
// // 1.fullfilled 2.rejected ,3.catch
// // fullfiled me dot then function and Rejected me dot catch function//
// // Agar resolve huw to dot then() method chalne wla hai it means Sucessfullay huwa to promise////
// // Agar reject  huwa to catch()Method chalne wala hai it means condition false huwa to//
// // Howm to promises created//
// Promises sucessfully huw to resolve() called hoga IT MEANS chalega aur agar promise reject huwa to reject()   called hoga chalega
// SYNCHRONOUSE CODE RUN  START //


// const FirstPromises= new Promise(function(resolve,reject){
//     const logIn=false;
//     if(logIn){
//         resolve("You are successfullay logIn Website");

//     }else(logIn)
//         reject("'You are not! logIn in Website...")
    
// });

// FirstPromises.then((data)=>{
//     console.log("Congratulation :" + data);

// }).catch((data)=>{
//     console.log("Not! Sucessfullay:" + data);

// })
// SYNCHRONOUSE CODE RUN END //

// function gethello(a,b,callback){
//     setTimeout(()=>{
//         //  const a=10;
//         // const b=30
//         const sums= a+b;
//         console.log("The Sum of two number is:"+ sums )
//         callback(a,b);
//     })
// }
// gethello(10,20,(sums)=>{
//     console.log("The sum of Two numberssss" ,sums)

// })


function foo() {
    // console.log( this.bar );
    console.log(bar);
    }
    var bar = "global";
    foo();