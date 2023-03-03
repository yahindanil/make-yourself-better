const open_all_links_btn = document.getElementById("open-all-links");
open_all_links_btn.addEventListener("click", openAllLinks);

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
