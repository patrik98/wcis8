const data = {
  "leftCircle": {
    "title": "Development & Engineering",
    "sections": [
      {
        "title": "Advanced Software Engineering & Architecture",
        "background": "yellow",
        "courses": [
          {
            "title": "Spezielle Themen des Software Engineerings",
            "ects": 6,
            "semester": 1
          },
          {
            "title": "Moderne Softwarearchitektur",
            "ects": 3,
            "semester": 2
          }
        ],
        "persons": [
          {
            "firstname": "Georg",
            "name": "Hagel"
          }
        ]
      },
      {
        "title": "Development Processes & Operation Support",
        "background": "orange"
      },
      {
        "title": "Development Processes & Operation Support",
        "background": "green"
      },
      {
        "title": "Development Processes & Operation Support",
        "background": "blue" +
          ""
      },
      {
        "title": "Development Processes & Operation Support",
        "background": "red" +
          ""
      },
      {
        "title": "Development Processes & Operation Support",
        "background": "violet" +
          ""
      }
    ]
  }
}

const graph = document.getElementById("graph");
function generate() {
  while (graph.firstChild) {
    graph.firstChild.remove()
  }
  let circleCenter = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circleCenter.setAttribute("class", "donut-hole");
  circleCenter.setAttribute("cx","21");
  circleCenter.setAttribute("cy","21");
  circleCenter.setAttribute("r", "15.91549430918954");
  circleCenter.setAttribute("fill", "#fff");
  graph.appendChild(circleCenter);

  const connectingCirclePercentage = 25;
  const connectingCircleOffset = 12;
  let connectingCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  connectingCircle.setAttribute("id", "section-left-connection")
  connectingCircle.setAttribute("cx","21");
  connectingCircle.setAttribute("cy","21");
  connectingCircle.setAttribute("r","15.91549430918954");
  connectingCircle.setAttribute("fill", "rgba(100,100,100,0.0)");
  connectingCircle.setAttribute("stroke", "gray");
  connectingCircle.setAttribute("stroke-width", "3");
  connectingCircle.setAttribute("stroke-dasharray", `${connectingCirclePercentage} ${100-connectingCirclePercentage}`);
  connectingCircle.setAttribute("stroke-dashoffset", `${connectingCircleOffset}`);
  graph.appendChild(connectingCircle);

  const partsCount = data.leftCircle.sections.length;
  for (i=0;i<partsCount;i++) {
    const section = data.leftCircle.sections[i];
    const percentage = (1-connectingCirclePercentage/100)/partsCount*100;
    const offset = (i*percentage)+connectingCirclePercentage*(3/(partsCount))+connectingCircleOffset;

    let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("id", `section-left-${i}`)
    circle.setAttribute("cx","21");
    circle.setAttribute("cy","21");
    circle.setAttribute("r","15.91549430918954");
    circle.setAttribute("fill", "rgba(100,100,100,0.0)");
    circle.setAttribute("stroke", `${section.background}`);
    circle.setAttribute("stroke-width", "3");
    circle.setAttribute("stroke-dasharray", `${percentage} ${100-percentage}`);
    circle.setAttribute("stroke-dashoffset", `${offset}`);

    graph.appendChild(circle);
  }
}

generate();
