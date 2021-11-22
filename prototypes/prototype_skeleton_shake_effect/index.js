const wcisContent = {
    "rightCircle": {
        "title": "Development & Engineering",
    },
    "leftCircle": {
        "title": "Development & Engineering",
    },
    "sections": [
        {
            "id": 1,
            "title": "Advanced Software Engineering & Architecture 1",
            "description": "Some text",
            "backgroundColor": "#49853c",
        },
        {
            "id": 2,
            "title": "Advanced Software Engineering & Architecture 2",
            "description": "Some text",
            "backgroundColor": "#549bd4"
        },
        {
            "id": 3,
            "title": "Advanced Software Engineering & Architecture 3",
            "description": "Some text",
            "backgroundColor": "#9babb2"
        },
        {
            "id": 4,
            "title": "Advanced Software Engineering & Architecture 4",
            "description": "Some text",
            "backgroundColor": "#3e73b7"
        },
        {
            "id": 5,
            "title": "Advanced Software Engineering & Architecture 5",
            "description": "Some text",
            "backgroundColor": "#f1813b"
        },
        {
            "id": 6,
            "title": "Advanced Software Engineering & Architecture 6",
            "description": "Some text",
            "backgroundColor": "#fabd22"
        }
    ]
}


/*initializiation sections*/
let counter = 0.5;

wcisContent.sections.forEach((section) => {
    const sectionElement = document.getElementById("section-" + section.id);
    sectionElement.addEventListener("mouseenter", () => changeText(section.title));
    sectionElement.style.fill = section.backgroundColor;
    sectionElement.style.opacity = "0";
    sectionElement.style.animation = "hideshow 1s forwards";
    sectionElement.style.animationDelay = counter + "s";
    counter += 0.5;
})


function changeText(text) {
    document.getElementById("selectedText").innerText = text;
}

/* extra opacity */
document.getElementsByClassName("gray-rings")[0].style.opacity = "0";
document.getElementsByClassName("gray-rings")[1].style.opacity = "0";
document.getElementById("section-center").style.opacity = "0";

/* extra animation */
document.getElementById("section-center").style.animation = "hideshow 1s forwards";
document.getElementById("section-center").style.animationDelay = "2s";
document.getElementsByClassName("gray-rings")[0].style.animation = "hideshow_rings 1s forwards";
document.getElementsByClassName("gray-rings")[0].style.animationDelay = "4s";
document.getElementsByClassName("gray-rings")[1].style.animation = "hideshow_rings 1s forwards";
document.getElementsByClassName("gray-rings")[1].style.animationDelay = "4s";

/*turn 8 - responsive view*/
window.addEventListener("resize", function () {
    if (window.screen.width >= 500) {
        document.getElementById("wcis8").style.transform = "rotate(0deg)";
        document.getElementById("wcis8").style.margin = "70px";

    } else {
        document.getElementById("wcis8").style.transform = "rotate(90deg)";
    }
})

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

setTimeout(() => {
    setInterval(function () {
        let sectionName = "section-" + randomInteger(1, 6);
        const section = document.getElementById(sectionName);
        section.style.animation = "shake";
        section.style.animationDuration = "0.5s";
        section.style.opacity = "100%";
        section.style.animationIterationCount = "infinite";
        setTimeout(() => {
            section.style.animation = "none";
        }, 1000)
    }, 2000);
}, 2000);