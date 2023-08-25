// let p=document.querySelector('p');
// p.style.color="red";


// let p=document.querySelectorAll('p');
// p.style.color="red";

// let element=document.getElementsByTagName('li');
// console.log(element);

// for( let l of element){
//     l.style.color='red';
// }

// let elements=document.getElementsByClassName('one');
// console.log(elements);

// let li=elements[2];
// for(i=0;i<elements.length; i++){
//     li=elements[i];
// li.style.color='red';
// li.style.fontSize='2rem';
// li.style.textDecoration='underline';
// li.style.textDecoration='';
// li.innerText='afroz';
// li.innerHTML='Hello world'


// }
// ClassList add its not batter way do///
// let ul=document.querySelector('ul');
// console.log(ul);

// const le=document.querySelector('li');
// console.log(le);
// // le.setAttribute('class','list');
// le.setAttribute('class','list','list-1');

// ClassList add its not batter way do///
// const li=document.createElement('li');



//     li.innerText='DataScience'
//     li.classList.add('list-1')
 // console.log(li);


let h3=document.querySelector('h3');
console.log(h3);
let flag=true;

setInterval(()=>{

    if(flag)h3.style.color='green',h3.fontSize='2rem',h3.style.border='1px solid black';
    else h3.style.color='yellow',
    flag=!flag;
},2000)



