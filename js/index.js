const updateTab = (tab) => {
  var x = document.getElementsByClassName("tab");

  var y = document.getElementsByClassName("tab-title");

  for (var i = 0; i < y.length; i++) {
    y[i].classList.contains(tab)
      ? y[i].classList.add("tab-selected")
      : y[i].classList.remove("tab-selected");
  }

  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  document.getElementById(tab).style.display = "flex";
  document.getElementById(tab).style.flexDirection = "column";
};

const updateHeader = () => {
  const menuButton = document.querySelector(".menu-button");
  const logoDesktop = document.querySelector(".logo-desktop");
  const menuContainer = document.querySelector(".menu-container");

  menuContainer.classList.toggle("active");
  menuButton.classList.toggle("open-mobile");
  logoDesktop.classList.toggle("open-mobile");
};

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.querySelector(".menu-button");
  const menuContainer = document.querySelector(".menu-container");
  const btnClose = document.querySelector(".btn-close");

  document.querySelectorAll(".faq-card-header").forEach(function (header) {
    header.addEventListener("click", function () {
      this.parentNode.classList.toggle("open");
    });
  });
});
