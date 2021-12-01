// document.getElementByClassName("hide").style.display = "none";

// document.getElementByClassName("marker-russia").click(function () {
// document.getElementByClassName("hide").style.display = "none";
// document.getElementByClassName("russia-txt").fadeIn(300);
// });

// document.getElementByClassName("marker-usa").click(function () {
// document.getElementByClassName("hide").style.display = "none";
// document.getElementByClassName("usa-txt").fadeIn(300);
// });

// document.getElementByClassName("marker-uk").click(function () {
// document.getElementByClassName("hide").style.display = "none";
// document.getElementByClassName("uk-txt").fadeIn(300);
// });

// document.getElementByClassName("marker-brazil").click(function () {
// document.getElementByClassName("hide").style.display = "none";
// document.getElementByClassName("brazil-txt").fadeIn(300);
// });

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