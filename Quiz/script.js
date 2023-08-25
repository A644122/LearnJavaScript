let x=[1,2,3,5];

x.forEach((e)=>{
    if(e >2 && e<5)
     return e;
    console.log(e);
});

let a={
    a:1,
    b:2
}
let b={
    b:3,
   
}
// foo();
let z={...a,...b};
console.log(z);