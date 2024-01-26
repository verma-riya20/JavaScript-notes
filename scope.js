/scope
//let,var,const
var x=1;
var x=2;

console.log(x);
let y=1;
console.log(y);
y=3;
console.log(y)
//let do not allow reassignment
const z=2;
console.log(z);
console.log(z); // not possible


//globle scope
let a=1;
var b=3;     //function scope
const c=4;  //block scope


//local scope
{
    let y=4;
}
function myFun(){
    const d=3;
    console.log(d+a)
}
myFun()
console.log(b);

