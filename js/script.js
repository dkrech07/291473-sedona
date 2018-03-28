var button = document.querySelector(".open-form");
var form = document.querySelector(".search-hotel-form");

button.addEventListener("click", function(event) {
  event.preventDefault();
  if (!form.classList.contains("open")) {
    form.classList.add("open");
    form.classList.remove("hide");
  } else {
    form.classList.add("hide");
    form.classList.remove("open");
  }
});
