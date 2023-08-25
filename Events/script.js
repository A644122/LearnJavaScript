let btn=document.querySelector('#btn');

function shout(){
    console.log("I am shout!!!!!");
}
function heloo(){
    console.log("I am Helooo!!!!!");
}
btn.onclick =()=>{
    console.log("I am click!!!!!");
}
// btn.onclick=shout;
// btn.onclick=heloo;

btn.onclick =()=>{
    shout();
    heloo();
   
}


let x=1;
btn.onclick=()=>{
    if(x%2==0)
    shout();
    else{
        heloo();
        x++;
    }

}




