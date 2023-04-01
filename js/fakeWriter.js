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

  
  var professions = [
    "Code mentor?",
    "Frontend developer?",
    "Backend developer?",
    "Game developer?",
    "Software engineer?",
    "Devops engineer?",
    "Fullstack developer?",
  ];
  var whoAmI = document.getElementById("heroWriter");
  var professionIdx = 0;
  waitAMoment();

  function addProfession() {
    let profession = professions[professionIdx];
    let charIdx = 0;
    let writer = setInterval(function () {
      whoAmI.innerHTML = whoAmI.innerHTML + profession[charIdx];
      charIdx++;
      let professionWritten = charIdx === profession.length;
      if (professionWritten) {
        clearInterval(writer);
        waitAMoment();
      }
    }, 120);
  }

  function waitAMoment() {
    let waitALittle = setInterval(() => {
      clearTimeout(waitALittle);
      deleteProfession();
    }, 800);
  }

  function deleteProfession() {
    let deleter = setInterval(function () {
      whoAmI.innerHTML = whoAmI.innerHTML.substring(
        0,
        whoAmI.innerHTML.length - 1
      );
      let professionDeleted = !whoAmI.innerHTML.length;
      if (professionDeleted) {
        professionIdx = professionIdx === 6 ? 0 : professionIdx + 1;
        clearInterval(deleter);
        addProfession();
      }
    }, 60);
  }
});

