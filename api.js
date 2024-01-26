// not part of dom
//part of window api
/*window.alert(window.location);
alert(location);*/
const myobj={
    name:"tom",
    hobbies:["eat","code","sleep"],
    logName:function(){
        console.log(this.name)
    }
}
const myarr=["eat","code","sleep"]
localStorage.setItem("mysessionStorage",JSON.stringify(myarr));
const mySessionData=JSON.parse(localStorage.getItem("mysessionStorage"));
localStorage.removeItem("mysessionStorage");
console.log(mySessionData);
