document.addEventListener("DOMContentLoaded", function () {
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
        professionIdx = professionIdx === 4 ? 1 : professionIdx + 1;
        clearInterval(deleter);
        addProfession();
      }
    }, 60);
  }
});
