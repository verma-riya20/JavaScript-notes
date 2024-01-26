//js errors and its handling
"use strict";
/*varaible="rrr"
console.log(varaible)
const name="tom";
name="jerry";
console.log(varaible);
*/
const makeError = ()=>{
    let i=1;
    while(i<5){
    try{
        if(i%2!==0){
          throw new Error("odd no");
        }
        console.log("even number");
    }catch(err){
        console.error(err.stack);
    }finally{
        console.log("...finally");
    i++;
    }
}
}

makeError();
