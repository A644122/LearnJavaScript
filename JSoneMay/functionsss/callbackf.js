// callback//

// const calculate =(a,b,callbackhumai)=>{
//      return callbackhumai(a,b);

// }
// function addtion(a,b){
//     return a+ b;
// }

// const subtraction =(a,b)=>a-b;
// const subreult=calculate(19,30,subtraction);

// const reslut= calculate(10,30,addtion);
// console.log(reslut);
// console.log(subreult);

// callback Hell//

function getHello(callback){
    setTimeout(()=>{
       const Fname="Afroz"
        console.log("My name is: " + Fname);
        callback(Fname);

    },2000);

}
function FullName(Fname,callback){
    setTimeout(() => {
        const Lname= Fname + 'Alam';
        console.log("My lastname here:" ,Lname);
        callback(Lname);
        
    }, 3000);

}

function MyAge(Lname,Callback){
    setTimeout(()=>{
    const rollno= Lname+  " " + 20;
    console.log("My age is:" ,rollno);
    Callback(rollno);


    },4000)


}



getHello((Fname)=>{
    // console.log("finallay i got it my name :" + Fname);
    FullName(Fname,(Lname) =>{
        // console.log("Finally My fullName is:" , Lname);
        MyAge(Lname,(rollno)=>{
            console.log("My rollno: " ,rollno);

        })

        


    }) 

});


