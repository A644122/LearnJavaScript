// // // callback concept//
// // const calculate=(a,b,maiCallback)=>{
// //     return maiCallback(a,b);
// // }
// // // Addition of two number//
// // // sumab-> ye ek callback hai//
// // //................... FirstMethod...............//
// //  const sumab=function  Addition(a,b){
// //     return a+b;
// // }



// // const result = calculate(10,30,sumab);
// // console.log(result);

// // // 2-method .............///
// // const subtruct=(a,b)=>a-b;

// // const sbresult=calculate(10,50,subtruct);
// // console.log(sbresult);

// // // third -method////////

// // function multiply(a,b){
// //     return a*b;
// // }
// // const multiresult=calculate(20,30,multiply);
// // console.log(multiresult);


// // //fname-lname-age-//

// // // CALLBACK HELL//
// // function firstname(maiChu){
// //     setTimeout(()=>{
// //         const Fname="Afroz✌🏾💖💻🔜👍"
// //         console.log("My firstname is:" , Fname);
// //         maiChu(Fname);
// //     },2000);
// // }
// // function Secondname(Fname,callback){
// //     setTimeout(() => {
// //         const Lname= Fname + "Alam🔜💖";
// //         console.log("My lastname is:" ,Lname);
// //         callback(Lname);
        
// //     }, 2000);
// // }

// // firstname((Fname)=>{
// //     // console.log("Firstname is" ,Fname)
// //     Secondname(Fname,(Lname)=>{
// //         console.log("Lastname is:" + Lname);
// //     })
// // })
// console.log("hellow world")/////ye mera synchronouse chal rah hai code //

// // settimeout()// ye ek Asynchronouse hai//
// // callback Hell////

// function getchees(maiCallback){
//     setTimeout(()=>{
//         const chees='🍕';
//         console.log("Bhai mera chees leke anaha galdi" , chees);
//         maiCallback(chees);

//     },2000);
// }

// function makeDhoosa( chees,MaiSecondCbackhu){
//     setTimeout(() => {
//         const mixedfood = chees + '🍇🍈🍉';
//         console.log("Bhai mixedfood leke aoo market se" ,mixedfood);
//         MaiSecondCbackhu(mixedfood);
// ;
        
//     }, 1000);
// }
// getchees((chees)=>{
//     // console.log("I got my ..Chess finally thanks dost💖💖💖💖" ,chees);
//     makeDhoosa(chees,(mixedfood)=>{
//         console.log("Thank bhai mere mixedfood lane ke lia:" ,mixedfood);

//     }

//     )

// });
// // console.log(getchees())

// Callback//

const calculate= function(a,b,maicallbackhu){
     return maicallbackhu(a,b);
}

const addition=function (a,b){
    return a+b;
}
const result=calculate(10,20,addition);

console.log(result);
 const subtraction=(a,b)=>a-b;
const result1= calculate(40,50,subtraction);
console.log(result1);


function multiple(a,b){
    return a*b
}

const result2=calculate(10,2,multiple);
console.log(result2);


function Fathername(maiCallbackk){
    setTimeout(()=>{
        const fname= "SakukatReza";
        // console.log("Father Name:",fname )
        maiCallbackk(fname);


    },2000);

}

function Mothername( fname,maiCallbackk){
    setTimeout(() => {
        const Mname=  "Afsari Begume" + fname 
        // console.log("This is a Mother name:",Mname);
        maiCallbackk(Mname);
        
    }, 2000);

}
function Childname(Mname,callabakcs){
    setTimeout(() => {
        const Cname="Ani Fahteh "  +  Mname;
        // console.log("This is  a childname:",Cname);
        callabakcs(Cname);
        
    }, 2000);
  
    
}
Fathername((fname)=>{
    console.log("Father Name:",fname );
    Mothername(fname,(Mname)=>{
        console.log("My  Mother name Is:"  + " " , Mname);
        Childname(Mname,(Cname)=>{
        console.log("This is  a childname: "   ,Cname);


        })


    })

    

});
// console.log(Fathername());


