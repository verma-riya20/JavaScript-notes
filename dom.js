//dom-document object model
const view1=document.getElementById("view");
console.log(view1);
view1.style.display="flex";
const view2=document.querySelector("#view2");
console.log(view2);
view1.style.display="none";
view.style.display="flex";

const  views=document.getElementsByClassName("box");
console.log(view)
const  sameviews=document.querySelectorAll(".view");
console.log(sameviews)
const divs=view1.querySelectorAll("div");
console.log(divs)
const samedivs=view1.getElementsByTagName("div");
console.log(samedivs)
/* evenDiv=view.querySelectorAll("div:nth.of.type(2n)");
console.log(evenDiv);
for (let i=0; i<evenDiv.length; i++){
    evenDiv[i].style.backgroundcolor="dark blue";
}*/
const nav=document.querySelector("nav ");
console.log(nav);
nav.textContent="hello world";
console.log(nav);
const navbar=document.querySelector("nav");
navbar.innerHTML=`<h1>hello</h1><p> this should align right</p>`;
console.log(navbar);
navbar.style.justifyContent="space.between";
evenDiv=view.querySelectorAll("div");
console.log(evenDiv);
console.log(evenDiv[0].parentElement.childNodes);
console.log(evenDiv[0].nextSibling);
view.style.display="none";
view1.style.display="flex";
view1.style.flexDirection="row";
view1.style.flexWrap="wrap";
const createDivs=(parent,iter)=>{
    const newDiv=document.createElement("div");
    newDiv.textContent=iter;
    newDiv.style.backgroundColor="black";
    newDiv.style.width="100px";
    newDiv.style.height="100px";
    newDiv.style.margin="10px";
    newDiv.style.display="flex";
    newDiv.style.justifyContent="center";
    newDiv.style.alignItems="center";
    parent.append(newDiv);   
}
for(let i=1;i<=12;i++){
    createDivs(view1,i)

}

