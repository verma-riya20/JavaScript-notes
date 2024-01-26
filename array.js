//arrays
const myArray=[];
myArray[0]="riya";
myArray[1]=45;
myArray[2]=true;
myArray[3]=false;
myArray.push("school");
console.log(myArray)
//length
console.log(myArray.length);
//last element
console.log(myArray[myArray.length-1]);
//removr last item
myArray.pop();
console.log(myArray);
//remove from starting
console.log(myArray.shift());
console.log(myArray);
//add in begginning
console.log(myArray.unshift("verma"));
console.log(myArray);
//methoda to delete
delete myArray[1];
console.log(myArray);   //leaves undefined empty space
//instead use splice to delete
myArray.splice(2,3);
console.log(myArray);
//splice to replace
myArray.splice(0,0,23);
console.log(myArray);;
//to slice
myArr=["a","b","c","d"];
myNew=myArr.slice(2,4);
console.log(myNew);
//to reverse
console.log(myArray.reverse());
//to join
myArr=["a","b","c","d"];
const myStr=myArr.join();
const myString=myStr.split(",");
console.log(myString);
//add to array
myArrayA=[1,2,3,4,5];
myArrayB=["a","b","c"];
console.log(myArrayA.concat(myArrayB));
console.log([...myArrayA,...myArrayB,]);

//2d array
const shelf1=["football","basketball","volleyball"];
const shelf2=["cricket","tennis","kabbadi"];
const game1=["ball","bat","court"];
const game2=["ground","basket","racket"]
const arr1=[shelf1,shelf2];
const arr2=[game1,game2];
console.log(arr1[0][2]);
//3d array
const newArray=[arr1,arr2];
console.log(newArray[0][1][2]);
console.log(newArray);
console.log(newArray[0]
    );
