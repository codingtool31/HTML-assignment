
const elementRef = document.querySelector(".toggle_site");
function toggletheme() {

    let currentTheme = elementRef.style.backgroundColor;
    if (currentTheme === "white") {
        elementRef.style.backgroundColor = "pink";
        elementRef.style.color = "yellow";
    }

    else {
        elementRef.style.backgroundColor = "white";
        elementRef.style.color = "black";
    }
}
