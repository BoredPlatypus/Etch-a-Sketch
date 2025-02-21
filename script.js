const parentDiv = document.querySelector("#container");

const containerHeight = parentDiv.clientHeight;
const containerWidth = parentDiv.clientWidth;
let childHeight = (containerHeight / 16);
let childWidth =  (containerWidth / 16);

for(let j = 1;j <= 256; j++){
    const childDivs = document.createElement("div");
    childDivs.classList.add("childrendivs");
    childDivs.setAttribute("style", `height: ${childHeight}px; width: ${childWidth}px; border: 1px solid black;`);
    parentDiv.appendChild(childDivs);
}

function changeGridSize(){
    let gridSize = Number(prompt("Enter your desired grid size(Max value: 100): "));
    if(gridSize > 100){
        return;
    }
    else{
        parentDiv.replaceChildren();
        childHeight = (containerHeight / gridSize);
        childWidth = (containerWidth / gridSize);
        for(let i = 1; i <= (gridSize * gridSize); i++){
            const childDivs = document.createElement("div");
            childDivs.classList.add("childrendivs");
            childDivs.setAttribute("style", `height: ${childHeight}px; width: ${childWidth}px; border: 1px solid black;`);
            parentDiv.appendChild(childDivs);
        }

    }
}
