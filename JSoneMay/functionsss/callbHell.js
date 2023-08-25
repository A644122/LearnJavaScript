// Making chicken biryani
// Add oil to a pot or pressure cooker and heat it. ...
// Add onions and fry till they turn golden. ...
// Next add chicken and fry till the color slightly changes to pale.
// Add chopped tomatoes, yogurt, red chili powder, corinader leaves and mint.
// Cook till the mixture turns thick and dry.

console.log("Making chicken Biryani");
function getStarted(chickenB){
    setTimeout(() => {
// Add oil to a pot or pressure cooker and heat it. ...
        const StepOne='oil to a pot or pressure cooker and heat it. ...';
        console.log(" firstStep start:" ,StepOne);
        chickenB(StepOne);
        

        
    }, 2000);
}

function OnionStart(StepOne,callback1){
    setTimeout(()=>{

        const StepTwo= StepOne + " Add onions and fry till they turn golden";
        console.log("Start Second :",StepTwo);
        callback1(StepTwo);
    },4000);
}

getStarted((StepOne)=>{
    console.log("Successfullay firstStep completed:" ,StepOne);
    OnionStart(StepOne,(StepTwo)=>{
        console.log("Finall completed StepTwo:" ,StepTwo);


    })

})