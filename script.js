window.addEventListener("scroll", function() {
    var header = document.getElementById("header");
    if (window.pageYOffset > 0) {
      header.style.backgroundColor = "#555"; // Change background color on scroll
    } else {
      header.style.backgroundColor = "#333"; // Reset background color
    }
  });
  
  document.addEventListener("DOMContentLoaded", function () {
    const menuFrame = document.getElementById("menu-frame");
    if (menuFrame) {
      fetch("menu.html")
        .then((response) => response.text())
        .then((data) => {
          menuFrame.innerHTML = data;
        })
        .catch((error) => {
          console.error("Error fetching menu content:", error);
        });
    }
  });
  