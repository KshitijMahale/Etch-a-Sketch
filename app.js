let container = document.querySelector(".container");
let colorPicker = document.querySelector("#colorPicker");
let colorBtn = document.querySelector("#color");
let randomBtn = document.querySelector("#random");
let eraserBtn = document.querySelector("#eraser");
let clearBtn = document.querySelector("#clear-btn"); 

let isRandom = false;
let eraserActive = false;
randomBtn.addEventListener("click", ()=>{
    isRandom = true;
    eraserActive = false;
    randomBtn.classList.add('color-active');
    colorBtn.classList.remove('color-active');
    eraserBtn.classList.remove('color-active');
})
colorBtn.addEventListener("click", ()=>{
    isRandom = false;
    eraserActive = false;
    colorBtn.classList.add('color-active');
    randomBtn.classList.remove('color-active');
    eraserBtn.classList.remove('color-active');
})
eraserBtn.addEventListener("click",()=>{
    eraserActive = true;
    eraserBtn.classList.add('color-active');
    randomBtn.classList.remove('color-active');
    colorBtn.classList.remove('color-active');
})

for (let i = 0; i < 16 * 16; i++) {
    const item = document.createElement("div");
    item.classList.add('grid-item');
    container.appendChild(item);

    item.addEventListener("mouseover", () => {
        if (!item.classList.contains('colorChanged')) {
            if (isRandom) {
                let color = randomColor();
                item.style.backgroundColor = color;
            } else {
                item.style.backgroundColor = colorPicker.value;
            }
            item.classList.add('colorChanged');
        }
        if (eraserActive){
            item.style.backgroundColor = "rgb(255, 255, 255)";
            item.classList.remove('colorChanged');
        }
    });
}

function randomColor() {
    let r = Math.floor(Math.random() * 255) + 1;
    let g = Math.floor(Math.random() * 255) + 1;
    let b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

clearBtn.addEventListener("click", ()=>{
    let divs = document.querySelectorAll(".colorChanged");
    divs.forEach(div => {
        div.style.backgroundColor = "rgb(255, 255, 255)";
        div.classList.remove('colorChanged');
    });
});