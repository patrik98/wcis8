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
            "lines": [
                "Mixed Reality,",
                "Intelligent & Adaptive Systems"
            ],
            "description": "Some text",
            "backgroundColor": "#49853c",
            "icon": "./vr-glasses.png",
            "pos": [446.5, 78]
        },
        {
            "id": 2,
            "lines": [
                "E-Business,",
                "Content &",
                "Collaboration"
            ],
            "description": "Some text",
            "backgroundColor": "#549bd4",
            "icon": "./macbook-money.png",
            "pos": [565, 185]
        },
        {
            "id": 3,
            "lines": [
                "Cloud Foundation &",
                "Technologies"
            ],
            "description": "Some text",
            "backgroundColor": "#9babb2",
            "icon": "./cloud-solid.svg",
            "pos": [446.5, 320]
        },
        {
            "id": 4,
            "lines": [
                "Software Development",
                "Web/Mobile/Embedded"
            ],
            "description": "Some text",
            "backgroundColor": "#3e73b7",
            "icon": "./terminal-solid.svg",
            "pos": [203.5, 78]
        },
        {
            "id": 5,
            "lines": [
                "Development",
                "Processes &",
                "Operation Support"
            ],
            "description": "Some text",
            "backgroundColor": "#f1813b",
            "icon": "./cogs-solid.svg",
            "pos": [81, 185]
        },
        {
            "id": 6,
            "lines": [
                "Advanced Software Engineering &",
                "Architecture"
            ],
            "description": "Some text",
            "backgroundColor": "#fabd22",
            "icon": "./sweg.png",
            "pos": [203.5, 320]
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

    // wait for specific section"s initial fade in animation to end
    // before displaying 
    sectionElement.addEventListener("animationend", () => {
        // hardcoded positions for now
        renderTextAndIcon(sectionElement, section, false);
    });
});

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
});

/**
 * Rendering of generic text and icon given the section object
 * 
 * @param {HTMLElement} element html element
 * @param {Object} section section json content
 * @param {boolean} debug whether bounding box and center should be displayed for debugging
 * 
 * @example
 *       const section = {
            "id": 5,
            "lines": [
                "Development",
                "Processes &",
                "Operation Support"
            ],
            "description": "Some text",
            "backgroundColor": "#f1813b",
            "icon": "./cogs-solid.svg",
            "pos": [81, 185]
        }

 *      renderTextandIcon(sectionElement, section, false)
 * 
 */
function renderTextAndIcon(element, section, debug=false) {
    if (!element) {
        throw new Error("no element provided.");
    }

    if (!section) {
        throw new Error("no section provided.");
    }

    // TODO: bounding box center is not center of actual wcis 8 section
    //       find fitting center coords per section
    let posX = section.pos[0];
    let posY = section.pos[1];
    const tf = element.getAttribute("transform");
    const bb = element.getBBox();

    if (!posX && !posY) {
        posX = bb.x + bb.width / 2;
        posY = bb.y + bb.height / 2;
    }

    const wcis8 = document.getElementById("wcis8");

    if (section.lines && section.lines.length > 0) {
        // TODO: handle too long titles (https://stackoverflow.com/questions/16701522/how-to-linebreak-an-svg-text-within-javascript)
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", posX);
        text.setAttribute("y", posY);
        // text.setAttribute("transform", tf); // possible cleaner solution for transform: https://stackoverflow.com/questions/16810948/svg-transformations-in-javascript
        text.setAttribute("text-anchor", "middle");
        text.classList.add("section-title");

        section.lines.map((line, index) => {
            const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            tspan.setAttribute("x", posX);
            tspan.setAttribute("dy", 15)
            tspan.textContent = line;
            text.appendChild(tspan);
        });

        wcis8.appendChild(text);
    }

    if (section.icon) {
        const dim = 28;
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "image");
        icon.setAttribute("x", posX - dim / 2);
        icon.setAttribute("y", posY - dim);
        icon.setAttribute("width", dim);
        icon.setAttribute("height", dim);
        // icon.setAttribute("transform", tf);
        icon.setAttribute("href", section.icon);

        wcis8.appendChild(icon);
    }

    if (debug) { // bounding box rectangle and center dot for debugging
        console.log(tf);
        console.log(bb);
    
        const center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        center.setAttribute("cx", posX);
        center.setAttribute("cy", posY);
        // center.setAttribute("transform", tf);
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

        element.addEventListener("click", e => {
            const pt = wcis8.createSVGPoint();
            pt.x = e.clientX;
            pt.y = e.clientY;
        
            const svgP = pt.matrixTransform(wcis8.getScreenCTM().inverse());
            const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
            circle.setAttribute("cx", svgP.x);
            circle.setAttribute("cy", svgP.y);
            circle.setAttribute("r", 2);
            circle.setAttribute("fill", "white");
        
            console.log([svgP.x, svgP.y]);
          
            wcis8.appendChild(circle);
        });
    }
}