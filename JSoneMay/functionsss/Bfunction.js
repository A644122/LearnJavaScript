// Basic function//
sum(10,20);
function sum(a,b){
    const sum=a+b
    console.log("The Sum of two number:" + sum );
}
// function in javascript//
// function namekuchbhi(parameter1,parameterN){
    //code to be executed//
    // return something//
// }
// Function Expression///
// function expression me hoisting nahi kar sakte ho but normal function me hoisting kar sakte hai//
// Anonymouse function jiska function ka name nahi hota jaise //
// const sum= function(parameter1,parameter2,parameterN){
    // code to be executed//
    // return something
// }
 const squar=function(num){
    return num*num;
}
console.log(squar(1010));
// Nested................ function............///
function AddSquare(a,b){

    const sa=squar1(a)
    const sb=squar1(b)

    function squar1(num){
        return num*num;

    }
    return sa + sb;
}
console.log(AddSquare(1,2));