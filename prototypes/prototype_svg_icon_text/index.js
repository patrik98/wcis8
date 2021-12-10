const wcisContent = {
    "rightCircle": {
        "lines": [
            "Web-based",
            "Systems"
        ],
        "pos": [446.5, 185]
    },
    "leftCircle": {
        "lines": [
            "Development &",
            "Engineering"
        ],
        "pos": [203.5, 185]
    },
    "sections": [
        {
            "id": 1,
            "lines": [
                "VR & AR"
            ],
            "description": "Some text",
            "backgroundColor": "#49853c",
            "icon": "./icons/VRAR.svg",
            "pos": [446.5, 90]
        },
        {
            "id": 2,
            "lines": [
                "E-Biz"
            ],
            "description": "Some text",
            "backgroundColor": "#549bd4",
            "icon": "./icons/E-Biz.svg",
            "pos": [565, 200]
        },
        {
            "id": 3,
            "lines": [
                "Cloud"
            ],
            "description": "Some text",
            "backgroundColor": "#9babb2",
            "icon": "./icons/Cloud.svg",
            "pos": [446.5, 325]
        },
        {
            "id": 4,
            "lines": [
                "Coding"
            ],
            "description": "Some text",
            "backgroundColor": "#3e73b7",
            "icon": "./icons/Coding.svg",
            "pos": [203.5, 90]
        },
        {
            "id": 5,
            "lines": [
                "DevOps"
            ],
            "description": "Some text",
            "backgroundColor": "#f1813b",
            "icon": "./icons/DevOps.svg",
            "pos": [81, 200]
        },
        {
            "id": 6,
            "lines": [
                "SWEG"
            ],
            "description": "Some text",
            "backgroundColor": "#fabd22",
            "icon": "./icons/AdvancedSE.svg",
            "pos": [203.5, 325]
        }
    ]
};

/*initializiation sections*/
let counter = 0.5;

wcisContent.sections.forEach((section) => {
    const sectionElement = document.getElementById("section-" + section.id);
    sectionElement.addEventListener("mouseenter", () => changeText(section.lines));
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

const rings = document.getElementsByClassName("gray-rings");
rings[0].addEventListener("animationend", () => {
    renderTextAndIcon(rings[0], wcisContent.leftCircle, false);
});
rings[0].addEventListener("animationend", () => {
    renderTextAndIcon(rings[1], wcisContent.rightCircle, false);
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
 * @param {Object} wcis8_object wcis8 content object such as leftCircle, rightCircle or section
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

 *      renderTextandIcon(element, wcis8_object, false)
 * 
 */
function renderTextAndIcon(element, wcis8_object, debug=false) {
    if (!element) {
        throw new Error("no element provided.");
    }

    if (!wcis8_object) {
        throw new Error("no section provided.");
    }

    let posX = wcis8_object.pos[0];
    let posY = wcis8_object.pos[1];
    const tf = element.getAttribute("transform");
    const bb = element.getBBox();

    if (!posX && !posY) {
        posX = bb.x + bb.width / 2;
        posY = bb.y + bb.height / 2;
    }

    const wcis8 = document.getElementById("wcis8");

    if (wcis8_object.lines && wcis8_object.lines.length > 0) {
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", posX);
        text.setAttribute("y", posY);
        // text.setAttribute("transform", tf);
        text.setAttribute("text-anchor", "middle");
        text.classList.add("section-title");

        wcis8_object.lines.map((line, index) => {
            const tspan = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
            tspan.setAttribute("x", posX);
            tspan.setAttribute("dy", 15)
            tspan.textContent = line;
            text.appendChild(tspan);
        });

        wcis8.appendChild(text);
    }

    if (wcis8_object.icon) {
        const dim = 28;
        const icon = document.createElementNS("http://www.w3.org/2000/svg", "image");
        icon.setAttribute("x", posX - dim / 2);
        icon.setAttribute("y", posY - dim);
        icon.setAttribute("width", dim);
        icon.setAttribute("height", dim);
        // icon.setAttribute("transform", tf);
        icon.setAttribute("href", wcis8_object.icon);

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