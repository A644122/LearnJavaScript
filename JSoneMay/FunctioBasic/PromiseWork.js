// Concept Promise//
function Getchees(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const Chees="🌭";
            // console.log("Here is my Chees",Chees);
            resolve(Chees);
            
        }, 2000);

    });
}


function MakesDho(Chees){
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            const Dhoo= Chees + "🍠"
            // console.log("Here is my Dhoo"+ Dhoo);
            resolve(Dhoo);
            
         }, 2000);
    })
}

function BackPizza(Dhoo){
    return new Promise((resolve,reject)=>{
         setTimeout(() => {
            const Pizza= Dhoo + "🍕🍕🍕"
            // console.log("Here is my Pizza"+ Pizza);
            resolve(Pizza);
            
         }, 2000);
    })
}
// console.log(Getchees());//
// Getchees()
// .then((Chees)=>{
//     console.log("Here Is My Chees ",Chees);
//      return MakesDho(Chees)
// })
// .then((Dhoo)=>{
//     console.log("Here is My Dhoo",Dhoo);
//     return BackPizza(Dhoo);

// })
// .then((Pizza)=>{
//     console.log("Here is My Pizza",Pizza);

// })


 async function OrderPizza(){
    const Chees=await Getchees();
    console.log("Here is My Chees",Chees)

    const Dhoo=await MakesDho(Chees);
    console.log("Here is My Chees",Dhoo);
    const Pizza=await BackPizza(Dhoo);
    console.log("Here is My Pizza",Pizza)


}
OrderPizza();