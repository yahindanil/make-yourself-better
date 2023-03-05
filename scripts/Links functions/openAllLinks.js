const OpenAllLinksBtn = document.getElementById("open-all-links");
OpenAllLinksBtn.addEventListener("click", openAllLinks);

function openAllLinks() {
  let links;
  if (localStorage.getItem("links") === null) {
    return;
  } else {
    links = JSON.parse(localStorage.getItem("links"));
  }

  for (let link of links) {
    window.open(link.link);
  }
}

if (JSON.parse(localStorage.getItem("links")).length >= 2) {
  OpenAllLinksBtn.classList.remove("hidden");
}

export function hideRevealOpenAllLinks(element) {
  if (JSON.parse(localStorage.getItem("links")).length < 2) {
    OpenAllLinksBtn.classList.add("hidden");
  } else {
    OpenAllLinksBtn.classList.remove("hidden");
  }
}
