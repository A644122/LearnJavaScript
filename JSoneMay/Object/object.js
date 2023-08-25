// What is Object?
// 
/*
let person={
    FirstName:"Afroz",
    LastName:"Alam",
    Age:23,
    Hobbies:"Cricket"

}
console.log(person);

let person1={
    FirstName:"Rinku",
    LastName:"Sing",
    Age:34,
    Hobbies:"Cricket"
}
console.log(person1);
let person2={
    FirstName:"MS",
    LastName:"Dhoni",
    Age:32
}
console.log(person2);
// console.log(typeof person);
// console.log(typeof person1); 
// console.log(typeof person2);
// How to get persone name in object//1
console.log(person.FirstName);
console.log(person1.FirstName); 
console.log(person2.FirstName); 
*/
let Student={
    FirstName:"Kartik",
    LastName:"Mathur",
    Age:30,
    Hobbies:["Cricket","playfootball","songs","Driving karna","codingSeekhna",]

}
Student.a=20;
Student.fruits=["ornage","papaya"]
// console.log(Student);

// // Thre are two way to Accesed from data//
// // Dot and brackets[]

// console.log(Student.FirstName);
// console.log(Student.LastName);
// console.log(Student.Age);
// console.log(Student.Hobbies);

// console.log(Student.a);
// console.log(Student.fruits);

//  B.brackets
// console.log(Student['FirstName']);
// console.log(Student['LastName']);
// console.log(Student['Age']);
// console.log(Student['Hobbies']);

// console.log(Student['a']);
// console.log(Student['fruits']);

// To iterate the objet two way//
// a. for in loop b.Object.key

// a FOR IN LOOP
// {
//     let c=30;
//     console.log(c)
    
// }
// key-> ham ko jitna v object  ke andar key define kia huwa rhta hai wo lakeh deta hai jaise example->
// // let Student={
//     FirstName:"Kartik",
//     LastName:"Mathur",
//     Age:30,
//     Hobbies:["Cricket","playfootball","songs","Driving karna","codingSeekhna",]

// }

// for(let key in Student){
    // console.log(key);//key lake dega
    // console.log(key.Student) //undefine//
    // console.log(Student[key])//value lake dega
    // console.log(key,Student[key]); key and value dono dega lake object se


   


// }
// output//

// FirstName
// LastName
// Age
// Hobbies
// a
// fruits

// OBJECT. KEY//
// console.log(Object.keys[Student]); undefine dega srif ye krene se
// console.log(Object.keys[Student]);

// for(let key of Object.keys(Student)){
//     console.log(Student[key]);
// }
// FACTORY  FUNCTION IN OBJECT//

// function courseCreate(title){
//     return{
//         title:title,
//         enroll(){
//             console.log("Your are logedIn");
//         }

//     }
    
// }

// function enroll(){
//     console.log("You are logIn sucessfully");
// }

// const course=courseCreate("javascript");
// course.enroll()
// console.log(course);
// CONSTRUCTURE FUNCTION//
// function Course(title){
//     this.title,
//     this.enroll=function(){
//         console.log("You are not LogIn");
//     }

// }
// const course1= new Course("javascript");
// course1.enroll()
// console.log(course1);
// console.log(course1.constructure);


// 




     

