document.addEventListener("DOMContentLoaded", function(){
  var professions = [ "back-end developer ", 
    "front-end developer ", 
    "game developer ", 
    "software engineer ", 
    "nerd" 
  ];
  var color = [ "white", 
    "orange", 
    "purple", 
    "gray", 
    "#1ec503" 
  ];
  var whoAmI = document.getElementById('whoAmI');

  var professionIndex  = 0;
  addProfession() 
  setInterval(function(){ whoAmI.innerHTML = 'nerd'; },25000);
  
  function addProfession(){
    var word = ' '+professions[professionIndex];
    var index = 0;
    whoAmI.style.color = color[professionIndex];
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