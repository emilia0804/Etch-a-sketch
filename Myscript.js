let sizeBtn = document.querySelector("#SizeBtn");
let container = document.querySelector("#container");

sizeBtn.addEventListener("click",()=>{
    let grid =parseInt(prompt("Enter number of squares per side for the new grid: "));
    if(grid > 0 && grid < 100){
        createGrid(grid);
    }
    else{
        prompt("Enter a valid grid number between 1 and 99");
    }
});

const defaultGrid = 16;
createGrid(defaultGrid);

function createGrid(grid){   
    container.innerHTML = "";
    let boxSize = 700 / grid;

    for(let i=0;i<grid;i++){
    for(let j=0;j<grid;j++){
        let box = document.createElement("div");
        box.classList.add("box");
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
      
        box.addEventListener("mouseover",()=>{
            // box.classList.add("newBox");
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            box.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        });

        container.appendChild(box);
    }
}
}



