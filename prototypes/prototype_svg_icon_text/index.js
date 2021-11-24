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

    // wait for specific section's initial fade in animation to end
    // before displaying 
    sectionElement.addEventListener("animationend", () => {
        insertTextInSVGSection(sectionElement, "test", true);
        insertIconInSVGSection(sectionElement, "\f024;");
    });
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

function insertTextInSVGSection(element, textContent, debug=false) {
    if (!element) {
        throw new Error('no element provided.');
    }

    const bb = element.getBBox();
    const tf = element.getAttribute("transform");

    // TODO: bounding box center is not center of wcis 8 section

    const textX = bb.x + bb.width / 2;
    const textY = bb.y + bb.height / 2;

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.textContent = textContent;
    text.setAttribute("x", textX);
    text.setAttribute("y", textY);
    text.setAttribute("text-anchor", "middle");

    // possible cleaner solution for transform: https://stackoverflow.com/questions/10281732/js-svg-getctm-and-setctm
    text.setAttribute("transform", tf);

    document.getElementById("wcis8").appendChild(text);

    if (debug) {
        console.log(tf);
        console.log(bb);
    
        const center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        center.setAttribute("cx", textX);
        center.setAttribute("cy", textY);
        center.setAttribute("r", "1");
        center.setAttribute("fill", "red");
        center.setAttribute("transform", tf);
    
        const bbox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bbox.setAttribute("x", bb.x);
        bbox.setAttribute("y", bb.y);
        bbox.setAttribute("width", bb.width);
        bbox.setAttribute("height", bb.height);
        bbox.setAttribute("transform", tf);
        bbox.setAttribute("stroke", "#00ff00");
        bbox.setAttribute("stroke-width", "1");
        bbox.setAttribute("fill", "none");

        document.getElementById("wcis8").appendChild(center);
        document.getElementById("wcis8").appendChild(bbox);
    }
}

function insertIconInSVGSection(element, fa_unicode, debug=false) {
    // see https://stackoverflow.com/questions/14984007/how-do-i-include-a-font-awesome-icon-in-my-svg
    // see https://fontawesome.com/v4.7/cheatsheet/
    if (!element) {
        throw new Error('no element provided.');
    }

    if (!fa_unicode) {
        throw new Error(`no FontAwesome unicode provided.`);
    }

    const bb = element.getBBox();
    const tf = element.getAttribute("transform");

    const iconX = bb.x + bb.width / 2;
    const iconY = bb.y + bb.height / 2;

    // TODO: find way to make FontAwesome icons work within svg

    // const img = document.createElementNS("http://www.w3.org/2000/svg", "image");
    // img.setAttribute("href", "");
    // img.setAttribute("x", iconX);
    // img.setAttribute("y", iconY);
    // img.setAttribute("transform", tf);

    const foreignObject = document.createElementNS("http://www.w3.org/2000/svg", "foreignObject");
    foreignObject.setAttribute("x", iconX);
    foreignObject.setAttribute("y", iconY);
    foreignObject.setAttribute("transform", tf);

    const i = document.createElement("i");
    i.classList.add("fa", "fa-car");

    foreignObject.appendChild(i); 
    document.getElementById("wcis8").appendChild(foreignObject);
}