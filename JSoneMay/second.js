// primitive data type//
// Two type
// 1.Number,2.String//

let num=50;
let num1=num;
console.log(num);
num1=100;
console.log(num1);

// Reference data type///
// they are not copy///
// Object v ek reference data type hai//

let persone={
    Name:"Afroz",
    Age:20,
    gender:"Male",
    languages:["javascript","reactjs","c++","c","c#"]
}

// console.log(persone);
// console.log(persone.Name);
// console.log(persone.Age);
// console.log(persone.gender);
// console.log(persone.languages[0][5]);

for(let Key in persone){
    console.log(Key);
}

// for(let Key of persone){
//     console.log(Key)
// }
// console.log(persone);
console.log(persone[persone.languages]);//undefine//why? beacuse they have no key value//
// console.log(persone[Key].languages);errr throw//

// console.log(persone[persone.Key);
console.log(Object.keys(persone));
 for(let key of Object.keys(persone)){
    console.log(persone[key]);
 }




