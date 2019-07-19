let sec = document.querySelector("#component33181")
const iframe = document.createElement("iframe");
iframe.src="https://cc-clock.herokuapp.com";
// iframe.setAttribute("sandbox", "allow-scripts");
if(sec) sec.insertBefore(iframe, sec.childNodes[0]);