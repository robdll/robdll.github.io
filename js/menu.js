document.addEventListener("DOMContentLoaded", function () {

  // Hamburger menu toggle listener
  document
    .getElementById("hamburger")
    .addEventListener("click", function() {
      this.classList.toggle("open");
      document.getElementById("navbar").classList.toggle("open")
    });

  // Close navbar when clicking on a link
  const navLinks = document.querySelectorAll('.nav--link');
  const navbar = document.querySelector('#navbar');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navbar.classList.remove('open');
    });
  });
  
});