//higher order functions 
//it does at least one of the following 
//** takes one or more functions as an argument
//** returns as a result

//for each()
import { posts }from "./posts.js";

posts.forEach((posts)=> {
    console.log(posts);
});
console.clear();
const filter=posts.filter((posts)=>{
    return posts.userId===1;
})
console.log(filter)
const map=filter.map((posts)=>{
    return posts.id =10;
})
console.log(map)

const reduce=map.reduce((sum,posts)=>{
    return sum+posts;
})
console.log(reduce);




export const posts=[
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed":false
      },
      {
        "userId": 1,
        "id": 2,
        "title":"delectus aut autem",
        "completed":true
      },
      {
        "userId": 1,
        "id": 3,
        "title": "delectus aut autem",
        "completed": false
      }

    ]   
