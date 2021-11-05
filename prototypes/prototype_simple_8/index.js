document.getElementsByClassName("cls-1")[0].addEventListener("mouseenter", () => changeText("Gewechselt in Bereich cls-1"));
document.getElementsByClassName("cls-2")[0].addEventListener("mouseenter", () => changeText("Gewechselt in Bereich cls-2"));
document.getElementsByClassName("cls-3")[0].addEventListener("mouseenter", () => changeText("Gewechselt in Bereich cls-3"));
document.getElementsByClassName("cls-4")[0].addEventListener("mouseenter", () => changeText("Gewechselt in Bereich cls-4"));
document.getElementsByClassName("cls-5")[0].addEventListener("mouseenter", () => changeText("Gewechselt in Bereich cls-5"));
document.getElementsByClassName("cls-6")[0].addEventListener("mouseenter", () => changeText("Gewechselt in Bereich cls-6"));
document.getElementsByClassName("cls-7")[0].addEventListener("mouseenter", () => changeText("Gewechselt in Bereich cls-7"));
document.getElementsByClassName("cls-8")[0].addEventListener("mouseenter", () => changeText("Gewechselt in Bereich cls-8"));
document.getElementsByClassName("cls-9")[0].addEventListener("mouseenter", () => changeText("Gewechselt in Bereich cls-9"));

function changeText(text) {
    document.getElementById("selectedText").innerText = text;
}