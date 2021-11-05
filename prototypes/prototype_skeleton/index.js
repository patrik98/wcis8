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

/* opacity */
document.getElementsByClassName("gray-rings")[0].style.opacity = "0";
document.getElementsByClassName("gray-rings")[1].style.opacity = "0";
document.getElementById("section-1").style.opacity = "0";
document.getElementById("section-2").style.opacity = "0";
document.getElementById("section-3").style.opacity = "0";
document.getElementById("section-4").style.opacity = "0";
document.getElementById("section-5").style.opacity = "0";
document.getElementById("section-6").style.opacity = "0";
document.getElementById("section-center").style.opacity = "0";

/* animation */
document.getElementById("section-1").style.animation = "hideshow 1s forwards";
document.getElementById("section-1").style.animationDelay = "0.5s";

document.getElementById("section-2").style.animation = "hideshow 1s forwards";
document.getElementById("section-2").style.animationDelay = "1s";

document.getElementById("section-3").style.animation = "hideshow 1s forwards";
document.getElementById("section-3").style.animationDelay = "1.5s";

document.getElementById("section-center").style.animation = "hideshow 1s forwards";
document.getElementById("section-center").style.animationDelay = "2s";

document.getElementById("section-4").style.animation = "hideshow 1s forwards";
document.getElementById("section-4").style.animationDelay = "2.5s";

document.getElementById("section-5").style.animation = "hideshow 1s forwards";
document.getElementById("section-5").style.animationDelay = "3s";

document.getElementById("section-6").style.animation = "hideshow 1s forwards";
document.getElementById("section-6").style.animationDelay = "3.5s";

document.getElementsByClassName("gray-rings")[0].style.animation = "hideshow_rings 1s forwards";
document.getElementsByClassName("gray-rings")[0].style.animationDelay = "4s";

document.getElementsByClassName("gray-rings")[1].style.animation = "hideshow_rings 1s forwards";
document.getElementsByClassName("gray-rings")[1].style.animationDelay = "4s";

/*colors*/
document.getElementById("section-1").style.fill = wcisContent.rightCircle["section-1"].backgroundColor;
document.getElementById("section-2").style.fill = wcisContent.rightCircle["section-2"].backgroundColor;
document.getElementById("section-3").style.fill = wcisContent.rightCircle["section-3"].backgroundColor;

document.getElementById("section-4").style.fill = wcisContent.leftCircle["section-4"].backgroundColor;
document.getElementById("section-5").style.fill = wcisContent.leftCircle["section-5"].backgroundColor;
document.getElementById("section-6").style.fill = wcisContent.leftCircle["section-6"].backgroundColor;