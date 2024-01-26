//objects
//key-value pairs in curly braces
const myObject={
    name:"cat",
    friend:["tom","jerry"],
    alive:true,
   
    beverage:{
        morning:"tea",
        evening:"coffee"
    },
    action:function(){
        return "hello world";
    }}
    console.log(myObject)
    console.log(myObject.beverage);
    console.log(myObject.beverage.evening);
    console.log(myObject.action());
const vehicle={
    wheels:4,
    engine:function(){
        return "booommm";

    }
}
const truck=Object.create(vehicle);
truck.door=2;
console.log(truck);
console.log(truck.wheels);
console.log(truck.engine());

const fruits={
    mango:"yellow",
    orange:"orange",
    grapes:"green",
    apple:"red"
} 
// delete
delete fruits.orange;
console.log(fruits.hasOwnProperty("orange"));

console.log(Object.values(fruits));
for(let i in fruits){
   
    console.log(`on plate ${fruits[i]} color ${i} `);
}
 //destructuring objects
 const {mango,orange,grapes,apples}=fruits;
console.log(mango);
function sweet({mango}){
    return `${mango}`
}console.log(sweet(fruits))
