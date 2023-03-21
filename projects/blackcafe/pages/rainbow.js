
const colors = [
    "white",
    "blue",
    "red",
    "green",
    "pink",
    "yellow",
    "black"
]

let index = 0;
setInterval(() => {
    document.body.style.backgroundColor = colors[index];
    if (index >= colors.length)
        index = 0;
    else
        index++;
}, 500)