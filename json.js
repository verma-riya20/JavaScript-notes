//JSON javascript object notations
//used to send and receive text 
//it is alanguage independent
//used to send and receive data in many languages
const obj={
    name:"jerry",
    hobbie:["eat","sleep","play"],
    hello:function(){
        console.log("hello");
    }

} 
console.log(obj);
console.log(obj.name);
obj.hello();
console.log(typeof obj);
//convert to json
const sendJSON=JSON.stringify(obj); //lost the method
console.log(sendJSON);

const receiveJSON=JSON.parse(sendJSON);
console.log(receiveJSON);
console.log(typeof receiveJSON);


