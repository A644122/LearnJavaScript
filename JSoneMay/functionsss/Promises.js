// promises Basic........//
// promise ko phaile create karna hota hai aur uske baad fir promises ko use karna hotna hain/
// promises ek accha hai javascript ke ander jo ke handle karta hai Asynchronouses operation.Aur promise me ye v dekhta hai bahut acchse ke Asynchronouse completely sucessfully hai ki ya fir nahi hai//
// promises me 3state hota hai...a->Pending b.fullfilled c.Rejected//
// fullfing me .then() chalne wala hai// and reject me Catch() chalne wala hain///
// promise created///
const Ticket =new Promise(function(resolve,reject){
    const LogIn=true;
    if(LogIn){
        resolve("You are visited in my website");

    }else(LogIn)
        reject("You are not! visited in my website")

});
// promises Used//

Ticket.then((data)=>{
    console.log("Woh You are successfully...logIn Congratulation:" + data);
}).catch((data)=>{
    console.log("Woh No! you are not Enter my website Beacuse Y are not  signUp then" + " " + data)
}).finally(()=>{
    console.log("I will finally executed...")
})


