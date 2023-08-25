// Variavle decleared in a function but they have not accessd the outsite the variable called Function scope//
function inner(){
    let a=2000;
    console.log(a);

}
inner();
    // console.log(a);ReferenceError a is not defined//

