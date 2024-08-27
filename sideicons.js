
document.addEventListener("DOMContentLoaded", function() {
    const sideIcons = document.querySelector(".sideicons");
    const searchIcon = sideIcons.querySelector(".fa-magnifying-glass");
    const inputField = sideIcons.querySelector("input[type='text']");

    searchIcon.addEventListener("click", function() {
      sideIcons.classList.toggle("expanded");
      if (sideIcons.classList.contains("expanded")) {
        inputField.setAttribute("placeholder", "Search here");
        inputField.focus();
      } else {
        inputField.setAttribute("placeholder", "");
      }
    });
  });