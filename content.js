const sec = document.querySelector(".small-12.large-4.columns");
// Only displays clock on homepage of School Portal
if (window.location.pathname === "/" && sec) {
    // "Clock" Header
    const h2 = document.createElement("h2");
    h2.classList.add("subheader");
    h2.appendChild(document.createTextNode("Clock"));

    // IFRAME element linking to clock webpage
    const iframe = document.createElement("iframe");
    iframe.src = "https://clock.thebrucecweb.com";
    iframe.height = "250";

    // Insertion
    sec.insertBefore(iframe, sec.childNodes[0]);
    sec.insertBefore(h2, iframe);
}