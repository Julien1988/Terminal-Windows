const title = document.getElementById("title");

function blinkTitle() {

    const titleOriginalColor = title.style.color;

    setInterval(() => {
        title.style.color = title.style.color == titleOriginalColor ? "#cdd6f4" : titleOriginalColor;
    }, 1000)
}
blinkTitle();

const checks = document.getElementsByTagName("td");

function blinkChecks() {

    const originalColor = checks.item(0).style.color;

    for (let i = 0; i < checks.length; i++) {
        const element = checks.item(i);
        if (element.textContent != "x") {
            continue;
        }

        // console.log("element: ", element);
        setInterval(() => {
            element.style.color = element.style.color == originalColor ? "black" : originalColor;
        }, 1000)
    }
}
blinkChecks();