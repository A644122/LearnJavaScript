// To decleared the Variable and accessed the scope and function//
let a=10;

function outer(){
    let b=20;
console.log(b)

function inner(){
        console.log(a)
        let c=30;
        console.log(c)



    }
    return inner();
}
outer()
