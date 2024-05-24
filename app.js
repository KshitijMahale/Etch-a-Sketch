let container = document.querySelector(".container");
let clearBtn = document.querySelector("#clear-btn"); 
for (let i = 0; i < 16 * 16; i++) {
    const item = document.createElement("div");
    item.classList.add('grid-item');
    container.appendChild(item);

    item.addEventListener("mouseover", () => {
        if (!item.classList.contains('colorChanged')) {
            let color = randomColor();
            item.style.backgroundColor = color;
            item.classList.add('colorChanged');
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