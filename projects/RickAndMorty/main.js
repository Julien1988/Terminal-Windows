const headerBtn = document.getElementById("header-button");
const headerNav = document.getElementById('header-nav');

headerBtn.addEventListener('click', (e) => {
    console.log("button clicked", e);
    headerNav.classList.toggle("hidden")
})