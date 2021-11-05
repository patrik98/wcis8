const wcisContent = {
    "rightCircle": {
        "title": "Development & Engineering",
        "section-1": {
            "title": "Advanced Software Engineering & Architecture 1",
            "backgroundColor": "#49853c"
        },
        "section-2": {
            "title": "Advanced Software Engineering & Architecture 2",
            "backgroundColor": "#549bd4"
        },
        "section-3": {
            "title": "Advanced Software Engineering & Architecture 3",
            "backgroundColor": "#9babb2"
        }
    },
    "leftCircle": {
        "title": "Development & Engineering",
        "section-4": {
            "title": "Advanced Software Engineering & Architecture 4",
            "backgroundColor": "#3e73b7"
        },
        "section-5": {
            "title": "Advanced Software Engineering & Architecture 5",
            "backgroundColor": "#f1813b"
        },
        "section-6": {
            "title": "Advanced Software Engineering & Architecture 6",
            "backgroundColor": "#fabd22"
        }
    },
}
/*Section*/
document.getElementById("section-1").addEventListener("mouseenter", () => changeText(wcisContent.rightCircle["section-1"].title));
document.getElementById("section-2").addEventListener("mouseenter", () => changeText(wcisContent.rightCircle["section-2"].title));
document.getElementById("section-3").addEventListener("mouseenter", () => changeText(wcisContent.rightCircle["section-3"].title));

document.getElementById("section-4").addEventListener("mouseenter", () => changeText(wcisContent.leftCircle["section-4"].title));
document.getElementById("section-5").addEventListener("mouseenter", () => changeText(wcisContent.leftCircle["section-5"].title));
document.getElementById("section-6").addEventListener("mouseenter", () => changeText(wcisContent.leftCircle["section-6"].title));

function changeText(text) {
    document.getElementById("selectedText").innerText = text;
}

/*colors*/
document.getElementById("section-1").style.fill = wcisContent.rightCircle["section-1"].backgroundColor;
document.getElementById("section-2").style.fill = wcisContent.rightCircle["section-2"].backgroundColor;
document.getElementById("section-3").style.fill = wcisContent.rightCircle["section-3"].backgroundColor;

document.getElementById("section-4").style.fill = wcisContent.leftCircle["section-4"].backgroundColor;
document.getElementById("section-5").style.fill = wcisContent.leftCircle["section-5"].backgroundColor;
document.getElementById("section-6").style.fill = wcisContent.leftCircle["section-6"].backgroundColor;