
//Mouseenter and mouseevent hover///
let button=document.querySelector('button');
let h1=document.querySelector('h1');


button.addEventListener('click',()=>{
    console.log("This is Shout!!!!!!!!!!!!!!");
})

// button.addEventListener('click',()=>{
//     console.log("This is Screeemmm!!!!!");
// })
// button.addEventListener('click',()=>{
//     console.log("This is heloo dear................!!");
// })

button.addEventListener('click',()=>{
    // console.log("This is Shout!!!!!!!!!!!!!!");
   
})


// h1.addEventListener('mouseenter',function(){
// // console.log(this);
// this.style.color='green';
// this.style.textAlign='center'

   
// })
// h1.addEventListener('mouseleave',function(){
//     // console.log(this);
//     this.style.color='blue';
// this.style.textAlign=''

   

       
//     })
    


//adding style for event ke thought/////

h1.addEventListener('mouseenter',function(){
  this.classList.add('heading');
    
       
    })
    h1.addEventListener('mouseleave',function(){
  this.classList.remove('heading');
     
       
    
           
        })


