const HideLinksForm = document.getElementById("hide-links-form");
const linksAddContainer = document.querySelector(".links-add-container");

HideLinksForm.addEventListener("click", hideLinksForm);

function hideLinksForm() {
  if (linksAddContainer.style.display !== "none") {
    linksAddContainer.style.display = "none";
  } else {
    linksAddContainer.style.display = "block";
  }
}
