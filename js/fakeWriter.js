document.addEventListener("DOMContentLoaded", function(){
  var professions = [ 
    "Frontend developer?   ", 
    "Backend developer?   ", 
    "Fullstack developer?   ", 
    "Game developer?   ", 
    "Software engineer?   "
  ];
  var whoAmI = document.getElementById('whoAmI');

  var professionIndex  = 0;
  addProfession() 
  
  function addProfession(){
    var word = ' '+professions[professionIndex];
    var index = 0;
    var adder = setInterval(function(){ 
      whoAmI.innerHTML = whoAmI.innerHTML + word[index];
      index++;
      if(index === word.length) { 
        clearInterval(adder);
        if(professionIndex !== professions.length-1) {
          deleteProfession();  
        }
      }
    }, 150);
  }
  

  function deleteProfession() {  
    var backSpacer = setInterval(function(){  
      whoAmI.innerHTML = whoAmI.innerHTML.substring(0, whoAmI.innerHTML.length-1);
      if(!whoAmI.innerHTML.length) {         
        professionIndex++;
        clearInterval(backSpacer);
        addProfession();
      }
    }, 80);
  }

});