document.addEventListener("DOMContentLoaded", function(){
  var professions = [ "back-end developer ", 
    "front-end developer ", 
    "game developer ", 
    "software engineer ", 
    "nerd" 
  ];
  
  var whoAmIparagraph = document.getElementById('whoAmI');
  var professionIndex  = 0;

    addProfession() 


  setInterval(function(){
    professionIndex = -1;
    deleteProfession();
  },25000) 
  
  function addProfession(){
    var word = ' '+professions[professionIndex];
    var index = 0;
    var adder = setInterval(function(){ 
      whoAmIparagraph.innerHTML = whoAmIparagraph.innerHTML + word[index];
      index++;
      if(index === word.length) { 
        clearInterval(adder);
        if(professionIndex !== professions.length-1) {
          deleteProfession();  
        }
        else {
        }
      }
    }, 150);
  }
  

  function deleteProfession() {  
    var backSpacer = setInterval(function(){ 
      whoAmIparagraph.innerHTML = whoAmIparagraph.innerHTML.substring(0, whoAmIparagraph.innerHTML.length-1);
      if(!whoAmIparagraph.innerHTML.length) {         
        professionIndex++;
        clearInterval(backSpacer);
        addProfession();
      }
    }, 80);
  }
 
});