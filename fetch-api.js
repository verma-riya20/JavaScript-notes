//fetch api requires a discussion of...
//call backs ,promises,thenables and async/awaits

//callbacks
/*function first(parameter,callbacks){
    callbacks();

}
//aka "callback hell"
*/
//promises
//3 states : pending,fulfilled ,rejected

//promise
/*const myPromise= new Promise((resolve,reject)=>{
    const error=false;
    if(!error){
        resolve("yes resolved")
    }
else{
    reject("rejected the promise");}
}
)
console.log(myPromise)
myPromise.then(value=>{
    return value+1;
})
.then(newValue=>{
    console.log(newValue)
})
const nextpromise=new Promise((resolve,reject)=>{
    setTimeout(function(){
        resolve("my next promise resolved")
    },3000)

})

nextpromise.then(value=>{
    console.log(value)
})
myPromise.then(value=>{
    console.log(value)
})*/

//fetch and pending
/*const users=fetch("https://jsonplaceholder.typicode.com/users");
console.log(users);
fetch("https://jsonplaceholder.typicode.com/users")
.then(response=>{
     return response.json();
})
.then(data=>{
        data.forEach(user=> {
         console.log(user)   
        });
    })
*/    
//async/await

/*const myuser={
    userlist:{}
}
const myfunc=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
  const jsondata=await response.json();
  return jsondata;
}
myfunc();
const anotherfunc=async()=>{
    const data=await myfunc();
    console.log(data);
}
anotherfunc();*/
/*const getemail=async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
  const jsondata=await response.json();
  const email=jsondata.map(user=>{
    return user.email;})
    console.log(email);
  
}
getemail();
*/
/*const getjoke=async()=>{
    const response=await fetch("https://icanhazdadjoke.com",{
        method:"GET",
        headers:{
            accept:"application/json"
        }
    });
const joke=await response.json();
console.log(joke);
    }
 getjoke();
 */
const getdata=()=>{
    const request={
        firstname:"tom",
        lastname:"jerry",
        categories:["nerdy"]
    }
    return request;
}

const request=(requestdata)=>{
    return `http://api.icndb.com/jokes/random?firstname${requestdata.firstname}&lastanme${requestdata.lastname}&limitTo=[nerdy]`;
}
const requestjoke=async(url)=>{
const response=await fetch(url);
const jsonresponse=await response.json();
const joke=jsonresponse.value.joke;
postJokeToPage(joke);
}
const postJokeToPage=(joke)=>{
    console.log(joke);
}
//procedural workflow function
const processjoke=async()=>{
    const requestData=getdata();
    const requesturl=request();
    await requestjoke(requesturl);
    console.log("finished")

}
processjoke();
