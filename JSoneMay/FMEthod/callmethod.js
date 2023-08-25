// Call method ham used kerte hai Two function ke beech ko intract krne ke lia //

// for example//
function employ(id,name,age){
    this.id=id;
    this.name=name;
    this.age=age

}

function PermanentsEmp(id,name,age){
    employ.call(this,id,name,age);

}
const reult=(new PermanentsEmp(1,"Afrozalam",20));
console.log(reult);