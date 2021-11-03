const btn = document.querySelector("#btn");
const text = document.querySelector("#text");
const textDiv = document.getElementById("clr-div");


btn.addEventListener("click", function() {
    let first = Math.floor(Math.random() * 255 + 1);
    let second = Math.floor(Math.random() * 255 + 1);
    let third = Math.floor(Math.random() * 255 + 1);
    let colorNumber = `${first},${second},${third}`;
    text.innerHTML = `Background Color : rgb(${colorNumber})`;
    document.body.style.backgroundColor = `rgb(${colorNumber})`;
    textDiv.classList.toggle("border");
});