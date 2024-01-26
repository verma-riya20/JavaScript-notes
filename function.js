//functions
const getName=function(email){
    return email.slice(0,email.indexOf("@"));
}
console.log(getName("riyaverma@gamil.com"));
const toProperCase=(name)=>{
    return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase();

}
console.log(toProperCase("rRYIGJNBbhfvb"));
//function provide reusable code
