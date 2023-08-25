//  rest operater it is used for function//

//  1.
function Myfirst(... all){
    // console.log(all);
    let total=0;
    for(let first of all){
        total+=first
    }
    return total;


}
    // console.log(all);


console.log(Myfirst(1,2,3,4,5,6,7,8));

// 2
function sum(... args){
    console.log(args)
    let Name=0;
    for(let arks of args){
        Name+=args;
    }
    return Name;

}
console.log(sum("afroz"+"age"));

// sum("afroz","age");
