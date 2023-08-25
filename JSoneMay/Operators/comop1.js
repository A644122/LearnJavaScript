// Equality (==)
// Two operands are equal
// 
// The equality (==) operator checks whether its two operands are equal//
console.log(1==1);//true
console.log(1=="1");//true
console.log("1"=="1");//true
console.log(null==null);//true
console.log(undefined==undefined);//true
console.log(0==false);//true
console.log(0==undefined);//false
console.log(undefined==null);//true
console.log(undefined=="null")//false
// Strict equality (===)


console.log(1===1);//true
console.log(1==="1");//false
console.log("1"==="1");//true
console.log(null===undefined);//false
console.log(null===null);//true
console.log(undefined===undefined);//true
console.log(0===false);//false
console.log(0===true);//false
console.log("100"==="200")//true
console.log("hellow" ==="hellow");//true
console.log(undefined===true);//false

//Inequality (!=)
// The inequality (!=) operator checks whether its two operands are not equal
console.log(1!="11");//true
console.log(1!="1");//false
console.log(undefined!=null);//false
console.log(null!=null)//false
console.log(null!=0);//true
console.log(null!=1);//true
console.log(undefined!=0);//true
console.log(0!=0);//false

// Strict inequality (!==)
// The strict inequality (!==) operator checks whether its two operands are not equal
console.log(0!==1);//true
console.log(0!==0);//false
console.log(undefined!==undefined);//false
console.log(null!==null);//false
console.log(true!==false);//true
console.log(true!==true);//false
console.log("1" !==1);//true;;
console.log(0!== false);//true