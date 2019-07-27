const sec = document.querySelector(".small-12.large-4.columns");
const iframe = document.createElement("iframe");
iframe.src="https://clock.thebrucecweb.com";
// iframe.setAttribute("sandbox", "allow-scripts");
if(sec && window.location.pathname === "/") sec.insertBefore(iframe, sec.childNodes[0]);