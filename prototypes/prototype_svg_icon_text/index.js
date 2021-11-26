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
            "icon": "\u{f0e4}"
        },
        {
            "id": 2,
            "title": "Advanced Software Engineering & Architecture 2",
            "description": "Some text",
            "backgroundColor": "#549bd4",
            "icon": "\u{f0c2}"
        },
        {
            "id": 3,
            "title": "Advanced Software Engineering & Architecture 3",
            "description": "Some text",
            "backgroundColor": "#9babb2",
            "icon": "\u{f013}"
        },
        {
            "id": 4,
            "title": "Advanced Software Engineering & Architecture 4",
            "description": "Some text",
            "backgroundColor": "#3e73b7",
            "icon": "https://cdn-icons-png.flaticon.com/512/1377/1377790.png"
        },
        {
            "id": 5,
            "title": "Advanced Software Engineering & Architecture 5",
            "description": "Some text",
            "backgroundColor": "#f1813b",
            "icon": "\u{f1c9}"
        },
        {
            "id": 6,
            "title": "Advanced Software Engineering & Architecture 6",
            "description": "Some text",
            "backgroundColor": "#fabd22",
            "icon": "./cloud-service.png"
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
        renderTextAndIcon(sectionElement, section, false);
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

/**
 * Rendering of generic text and FontAwesome Icon given the corresponding unicode char
 * 
 * @param {HTMLElement} element html element
 * @param {Object} section section json content
 * @param {boolean} debug whether bounding box and center should be displayed for debugging
 * 
 * @example
 *       const section = {
            "id": 1,
            "title": "Some title",
            "description": "Some text",
            "backgroundColor": "#49853c",
            "icon": "\u{f0e4}" or "icon": "../icon.png" // can be FontAwesome unicode char or link
        };

 *      renderTextandIcon(sectionElement, section, false)
 * 
 */
function renderTextAndIcon(element, section, debug=true) {
    if (!element) {
        throw new Error("no element provided.");
    }

    if (!section) {
        throw new Error("no section provided.");
    }

    // TODO: bounding box center is not center of actual wcis 8 section
    const bb = element.getBBox();
    const tf = element.getAttribute("transform");

    const posX = bb.x + bb.width / 2;
    const posY = bb.y + bb.height / 2;

    const wcis8 = document.getElementById("wcis8");

    if (section.title) {
        // TODO: handle too long titles (https://stackoverflow.com/questions/16701522/how-to-linebreak-an-svg-text-within-javascript)
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", posX);
        text.setAttribute("y", posY);
        text.setAttribute("transform", tf); // possible cleaner solution for transform: https://stackoverflow.com/questions/16810948/svg-transformations-in-javascript
        text.setAttribute("text-anchor", "middle");
        text.classList.add("section-title");
        text.textContent = section.title;

        wcis8.appendChild(text);
    }

    if (section.icon) {
        let icon;

        if (/[^\u0000-\u00ff]/.test(section.icon)) { // check whether section.icon contains unicode, is FontAwesome unicode char
            icon = document.createElementNS("http://www.w3.org/2000/svg", "text");
            icon.setAttribute("x", posX);
            icon.setAttribute("y", posY - 15);
            icon.setAttribute("transform", tf);
            icon.setAttribute("text-anchor", "middle");
            icon.setAttribute("font-family", "FontAwesome");
            icon.classList.add("fa", "fa-2x")
            icon.textContent = section.icon;
        }
        else { // assume section.icon is link
            const dim = 32;
            icon = document.createElementNS("http://www.w3.org/2000/svg", "image");
            icon.setAttribute("x", posX - dim / 2);
            icon.setAttribute("y", posY - dim - 15);
            icon.setAttribute("width", dim);
            icon.setAttribute("height", dim);
            icon.setAttribute("href", section.icon);
        }

        icon.setAttribute("transform", tf);
        wcis8.appendChild(icon);
    }

    if (debug) { // bounding box rectangle and center dot for debugging
        console.log(tf);
        console.log(bb);
    
        const center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        center.setAttribute("cx", posX);
        center.setAttribute("cy", posY);
        center.setAttribute("transform", tf);
        center.setAttribute("r", "1");
        center.setAttribute("fill", "red");

    
        const bbox = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        bbox.setAttribute("x", bb.x);
        bbox.setAttribute("y", bb.y);
        bbox.setAttribute("width", bb.width);
        bbox.setAttribute("height", bb.height);
        bbox.setAttribute("transform", tf);
        bbox.setAttribute("stroke", "#00ff00");
        bbox.setAttribute("stroke-width", "1");
        bbox.setAttribute("fill", "none");

        wcis8.appendChild(center);
        wcis8.appendChild(bbox);
    }
}

function containsNonLatinCodepoints(s) {
    return /[^\u0000-\u00ff]/.test(s);
}