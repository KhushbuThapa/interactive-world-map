
function showTooltip(evt, id) {
  let tooltip = document.getElementById(id);
  // tooltip.innerHTML = text;
  tooltip.style.display = "block";
  tooltip.style.left = evt.pageX + 10 + 'px';
  tooltip.style.top = evt.pageY + 10 + 'px';
}

function hideTooltip(id) {
  var tooltip = document.getElementById(id);
  tooltip.style.display = "none";
}

// Create a dictionary with pointer for Nepal, Japan, Indonesia, California, USA, UK, Russia and Brazil

countryMapping= {
  // 'Nepal': {"cx": "", "cy": "", "r": ""},
  // 'Japan': {"cx": "", "cy": "", "r": ""},
  // 'Indonesia': {"cx": "", "cy": "", "r": ""},
  // 'California': {"cx": "", "cy": "", "r": ""},
  'USA': {"cx": "436", "cy": "248", "r": "17.5"},
  'UK': {"cx": "970", "cy": "140", "r": "9.5"},
  'Russia': {"cx": "1398", "cy": "100.2", "r": "17.5"},
  'Brazil': {"cx": "700", "cy": "589.28", "r": "17.5"},
}

// <circle className="cls-2 marker-russia" cx="1398" cy="100.02 " r="17.5" onMouseMove="showTooltip(evt, 'russia-txt');"
//         onMouseOut="hideTooltip('russia-txt');"/>
// <circle className="cls-2 marker-uk" cx="970" cy="140" r="9.5" onMouseMove="showTooltip(evt, 'uk-txt');"
//         onMouseOut="hideTooltip('uk-txt');"/>
// <circle className="cls-2 marker-usa" cx="436" cy="248" r="17.5" onMouseMove="showTooltip(evt, 'usa-txt');"
//         onMouseOut="hideTooltip('usa-txt');"/>
// <circle className="cls-2 marker-brazil" cx="700" cy="589.28" r="17.5" onMouseMove="showTooltip(evt, 'brazil-txt');"
//         onMouseOut="hideTooltip('brazil-txt');"/>

// Create circle and respective div tag for mentioned countries
document.addEventListener("DOMContentLoaded", function(event) {
   for (const [key, value] of Object.entries(countryMapping)) {
     let countryName= key;

      let div = document.createElement('circle');
      // div.textContent = countryName;
      div.setAttribute("class", "cls-2")

      for(const[k,v] of Object.entries(value)) {
          div.setAttribute(k, v);
      }
      div.style.css = 'fill:#ed1c24';
      // document.styleSheets[0].cssText = "";
      //  document.querySelectorAll('circle').sheet.cssRules[0].style.fill = 'red'

      const currentDiv = document.getElementById('world_map');
      currentDiv.appendChild(div, currentDiv);

  }

});

// function addElement () {



  // create a new div element
  // const newDiv = document.createElement("div");
  //
  // // and give it some content
  // const newContent = document.createTextNode("Hi there and greetings!");
  //
  // // add the text node to the newly created div
  // newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  // const currentDiv = document.getElementById("marker-russia");
  // document.body.insertBefore(newDiv, currentDiv);
// }