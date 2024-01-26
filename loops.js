//if statements
//syntax
let soup="";
let reply;
let customer=false;
if(soup){
    reply='here is your $(soup)';
}
else if(customer){
      reply="sorry"
}
else{
    reply="no soup";
}
console.log(reply);


//switch case
//syntax
switch(Math.floor(Math.random()*5)){
case 1:
    console.log(1);
    break;
case 2:
    console.log(2);
    break;
case 3:
    console.log(3);
    break;
default:
    console.log("no match");
    break;

    
}
//code 2
//rock and paper game
let player="paper";
let computer="scissors";
switch(player){
    case computer:
        console.log("tie game");
        break;
    case "rock":
        if (computer=="paper"){
            console.log("computer wins");
            break;
        }

        else{
            console.log("player wins");
            break;
        }
    case "scissors":
            if (computer=="rock"){
                console.log("computer wins");
                break;
            }
            else{
                console.log("player wins");
                break;
            }
    default:
                if (computer=="scissors"){
                    console.log("computer wins");
                    break;
                }
                else{
                    console.log("player wins");
                    break;
                }
               
        }    




let name = prompt("enter your name");
if(name){
     console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
}
else{
    console.log("did not enter name");
}

//loop
let myNumber=0;
/*while(myNumber<50){
    console.log(myNumber);
    myNumber=myNumber+1;
}
do{
    console.log(myNumber);
    myNumber+=2;
}
while(myNumber<50);
for(let i=0; i<=20;i++){
    console.log(i);
    console.log("hello");
}*/
let name="riya";
let letter;
while(true){
    letter=name[myNumber];
    console.log(letter)
    if(myNumber==="a")
    break;
    myNumber++
}







