
// Basic Function//
const a=10;
const b=20;
// console.log("The sum a and b:", a+b);
Sum(a,b);


const c=10;
const d=20;
// console.log("The sum c and d:", c+d);
Sum(c,d);


const e=10;
const f=20;
// console.log("The sum e and f:", e+f);
Sum(e,f);

function Sum(a,b){
    const TotalSum=a+b;
    console.log("Total Sum result",TotalSum);
    return TotalSum;
}

const ResultTotal=Sum(a,b);
console.log("TotalResult",ResultTotal);

// Anonumouse function// const SumTwo=(()=>{})
// FUNCTION EXPRESSION/// poora function ko ek variables me store karna is called function expression//
const fun=function foo(){
    console.log("This is Expression function To assignthe const varialble");
}
fun();

// example function expression//
 const  Square =function squar(num){
    return num*num;



}
console.log(Square(10));
// Nested function in javascript///

function outer(a,b){
    const as=inner(a);
    const ab=inner(b);


    function inner(num){
        return num*num;

    }
    return as+ab;
    

}
console.log(outer(2,3));
// outer(100,20);