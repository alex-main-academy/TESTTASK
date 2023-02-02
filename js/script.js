const burgerMenuOpenElement = document.querySelector(".burger__menu--open");
const navigationMenuElement = document.querySelector(".navigation");

const handleMenuOpen = () => {
  navigationMenuElement.classList.toggle("active");

  if (navigationMenuElement.classList.contains("active")) {
    navigationMenuElement.style.transform = "translate(0)";
  } else {
    navigationMenuElement.style.transform = "translate(-100%)";
  }
};

const handleResizeMenu = () => {
  if (document.body.offsetWidth >= 1024) {
    navigationMenuElement.style.transform = "translate(0)";
  } else {
    navigationMenuElement.style.transform = "translate(-100%)";
  }
};

burgerMenuOpenElement.addEventListener("click", handleMenuOpen);
window.addEventListener("resize", handleResizeMenu);
