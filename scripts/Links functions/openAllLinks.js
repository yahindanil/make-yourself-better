const open_all_links_btn = document.getElementById("open-all-links");
open_all_links_btn.addEventListener("click", openAllLinks);

function openAllLinks() {
  let locs = [
    "https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl",
    "https://learn.javascript.ru/",
    "https://docs.google.com/document/d/1feWvbbsMW4zLiFgQLqTqNR1UU4IEevh4XN-0fDk1qFY/edit",
  ];

  for (let i = 0; i < locs.length; i++) {
    window.open(locs[i]);
  }
}
