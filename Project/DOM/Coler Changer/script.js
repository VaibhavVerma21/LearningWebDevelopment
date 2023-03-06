let button = document.querySelector(".color");

const randomColor =() => Math.floor(Math.random()*225);

const changeColor = () => {
    document.body.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
}

button.addEventListener("click", changeColor);