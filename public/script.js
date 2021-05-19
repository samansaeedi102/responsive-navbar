const toggle = document.querySelector(".toggle");
const items = document.querySelectorAll(".item");

function toggleMenu() {
  console.log(items);
  Array.from(items).filter(function (item) {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
}
toggle.addEventListener("click", toggleMenu);
