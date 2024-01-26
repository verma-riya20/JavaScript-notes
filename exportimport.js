//modules
/*import playGuitar from "./guitar.js";
import { shredding as shred,plucking } from "./guitar.js";*/
import * as guitar from "./guitar.js";
import user from "./user.js";
const me  =new user("email@email.com","tom");
console.log(me);
console.log(me.greeting());

console.log(guitar.playGuitar())
console.log(guitar.shredding())
console.log(guitar.plucking())



export function playGuitar(){
    return "playing guitar";

};

export const shredding=() =>{
    return "shredding some licks";
};
export  const plucking=()=>{
    return "plucking the strings...";
};



export default class user{
    constructor(email,name){
        this.id=email;
        this._name=name;

    }
    greeting(){
        return `hi,my name is ${this._name}`;
    }
}
