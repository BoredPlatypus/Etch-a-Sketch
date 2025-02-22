const parentDiv = document.querySelector("#container");

const containerHeight = parentDiv.clientHeight;
const containerWidth = parentDiv.clientWidth;

const blackColor = document.querySelector(".blackcolor");
const eraseColor = document.querySelector(".erase");

function colorBackground(){
    return "#000000";
}

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function defaultGridSize(gridSize){
    let childHeight = (containerHeight / gridSize);
    let childWidth =  (containerWidth / gridSize);


    for(let j = 1;j <= gridSize * gridSize; j++){
        const childDivs = document.createElement("div");
        childDivs.classList.add("childrendivs");
        childDivs.setAttribute("style", `height: ${childHeight}px; width: ${childWidth}px; border: 1px solid grey;`);
        childDivs.addEventListener("mouseover" ,()=>{
            if(childDivs.style.backgroundColor === ""){
                childDivs.style.backgroundColor = getRandomColor();                
            }
            childDivs.style.opacity = (parseFloat(childDivs.style.opacity) || 0) + 0.1;
        
        });
        blackColor.addEventListener("click",()=>{
            childDivs.addEventListener("mouseover",()=>{
                childDivs.style.backgroundColor = "black";
                childDivs.style.opacity = (parseFloat(childDivs.style.opacity) || 0) + 0.1;
            })
        });
        eraseColor.addEventListener("click",()=>{
            childDivs.addEventListener("mouseover",()=>{
                childDivs.style.backgroundColor= "inherit";
                childDivs.style.opacity = 1;
            })
        });

        parentDiv.appendChild(childDivs);
                
    }

 }

function changeGridSize(){
    let gridSize = Number(prompt("Enter your desired grid size(Max value: 100): "));
    if(gridSize > 100){
        return;
    }
    else{
        parentDiv.replaceChildren();
        defaultGridSize(gridSize);
    }
}
defaultGridSize(16);


