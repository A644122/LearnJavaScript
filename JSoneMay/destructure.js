//Destructure it is used ....array and object//

// Destructure in Array//
//  Destructure ka matlab har ek elements aur object ke property ko alag ...alag variable me store kana its call destructure//
// split karna ya exdents karna or copy one arr to another arrry//

 let arr=["BMW","Audi","Farari","Brezaa","i20"];
 arr.push('Creeta');
 let [car1,car2,car3,car4,car5,car6]=arr;
 console.log(arr);
 console.log(car1);
 console.log(car2);
 console.log(car3);
 console.log(car4);
 console.log(car5);
 console.log(car6);

//  Destructure in object//
let persone={
    id:'1',
    FirstName:"Rahul",
    Roll:20,
    language:"Hindi",


}
persone.city="Banglore";

let {id,FirstName,Roll,language,city}=persone;
console.log(id);
console.log(FirstName);
console.log(Roll);
console.log(language);
console.log(city);






