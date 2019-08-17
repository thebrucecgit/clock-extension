function resizeIFrameOnLoad(e) {
    console.log(e)
    console.log(e.target.contentWindow.document.body.scrollHeight)
}

const sec = document.querySelector(".small-12.large-4.columns");
if (window.location.pathname === "/" && sec) {
    const h2 = document.createElement("h2");
    h2.classList.add("subheader");
    h2.appendChild(document.createTextNode("Clock"));
    const iframe = document.createElement("iframe");
    iframe.src = "https://clock.thebrucecweb.com";
    iframe.height = "200";
    iframe.onload = resizeIFrameOnLoad;
    // iframe.setAttribute("sandbox", "allow-scripts");
    sec.insertBefore(iframe, sec.childNodes[0]);
    sec.insertBefore(h2, iframe);
}