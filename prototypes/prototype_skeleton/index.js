const data = {
    "rightCircle": {
        "title": "Development & Engineering",
        "sections": [
            {
                "id": "section-1",
                "title": "Advanced Software Engineering & Architecture",
                "background": "yellow",
            },
            {
                "id": "section-2",
                "title": "Advanced Software Engineering & Architecture",
                "background": "yellow",
            },
            {
                "id": "section-3",
                "title": "Advanced Software Engineering & Architecture",
                "background": "yellow",
            },

        ]
    },
    "leftCircle": {
        "title": "Development & Engineering",
        "sections": [
            {
                "id": "section-5",
                "title": "Advanced Software Engineering & Architecture",
                "background": "yellow",
            },
            {
                "id": "section-5",
                "title": "Advanced Software Engineering & Architecture",
                "background": "yellow",
            },
            {
                "id": "section-7",
                "title": "Advanced Software Engineering & Architecture",
                "background": "yellow",
            },
        ]
    }
}


document.getElementById("section-1").addEventListener("mouseenter", () => changeText("Gewechselt in Bereich sec-1"));
document.getElementById("section-2").addEventListener("mouseenter", () => changeText("Gewechselt in Bereich sec-2"));
document.getElementById("section-3").addEventListener("mouseenter", () => changeText("Gewechselt in Bereich sec-3"));
document.getElementById("section-4").addEventListener("mouseenter", () => changeText("Gewechselt in Bereich sec-4"));
document.getElementById("section-5").addEventListener("mouseenter", () => changeText("Gewechselt in Bereich sec-5"));
document.getElementById("section-6").addEventListener("mouseenter", () => changeText("Gewechselt in Bereich sec-6"));

function changeText(text) {
    document.getElementById("selectedText").innerText = text;
}