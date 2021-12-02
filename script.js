function showTooltip(event,id) {
    let tooltip = document.getElementById(id);
    tooltip.style.display = "block";
    tooltip.style.left = event.pageX + 10 + 'px';
    tooltip.style.top = event.pageY + 10 + 'px';
}

function hideTooltip(id) {
    var tooltip = document.getElementById(id);
    tooltip.style.display = "none";
}

let radius=10;
let countryMapping = {
    'Nepal': {"cx": "1450", "cy": "322", "r": radius},
    'Japan': {"cx": "1726", "cy": "266", "r": radius},
    'Indonesia': {"cx": "1635", "cy": "511", "r": radius},
    'California': {"cx": "355", "cy": "268", "r": radius},
    'usa': {"cx": "436", "cy": "248", "r": radius},
    'uk': {"cx": "970", "cy": "140", "r": radius},
    'russia': {"cx": "1398", "cy": "100.2", "r": radius},
    'brazil': {"cx": "700", "cy": "589.28", "r": radius},
}

// Create circle and respective div tag for mentioned countries
document.addEventListener("DOMContentLoaded", function (event) {
    var svgns = "http://www.w3.org/2000/svg",
        container = document.getElementById('world_map');

    for (const [key, value] of Object.entries(countryMapping)) {
        let countryName = key;

        // Create circle tag for each of the pointer in map
        let div = document.createElementNS(svgns, 'circle');
        div.setAttributeNS(null, "class", "cls-2")
        div.setAttributeNS(null, "id", countryName)

        for (const [k, v] of Object.entries(value)) {
            div.setAttributeNS(null, k, v);
        }
        container.appendChild(div);

        //Create hover divs
        hoverDivs = document.createElement('div');
        hoverDivs.setAttribute('class', 'hide');
        hoverDivs.setAttribute('id', countryName+'-text');
        header=document.createElement('h1');
        header.textContent="Welcome to " + countryName +"!"

        hoverDivs.appendChild(header)
        document.body.appendChild(hoverDivs);

    }

});

document.addEventListener('mouseover', function (event){
    id=event.target.id;
    if(countryMapping[id]){
        tooltipId=id+"-text";
        showTooltip(event,tooltipId);
    }
});

document.addEventListener('mouseout', function (event){
    id=event.target.id;
    if(countryMapping[id]){
        tooltipId=id+"-text";
        hideTooltip(tooltipId);
    }
});

