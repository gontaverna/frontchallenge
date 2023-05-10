function updateTab(tab) {
  var x = document.getElementsByClassName("tab");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  document.getElementById(tab).style.display = "flex";
  document.getElementById(tab).style.flexDirection = "column";
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".faq-card-header").forEach(function (header) {
    header.addEventListener("click", function () {
      this.parentNode.classList.toggle("open");
    });
  });

  const menuButton = document.querySelector(".menu-button");
  const menuContainer = document.querySelector(".menu-container");
  const btnClose = document.querySelector(".btn-close");

  menuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
    document.body.style.overflow = "hidden";
  });

  btnClose.addEventListener("click", () => {
    menuContainer.classList.toggle("active");
    document.body.style.overflow = "auto";
  });
});
