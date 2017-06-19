document.addEventListener("DOMContentLoaded", function(){
  var professions = [ "front-end", "back-end", "web", "full-stack", "game", "software", "NERD!" ];
  var spanContainer = document.getElementById('word');
  var professionIndex = 0;
  
  addProfession();
  
  function addProfession(){
    var word = ' '+professions[professionIndex];
    if(professionIndex !== professions.length-1){
      word+= ' developer ';
    }
    var index = 0;
    var adder = setInterval(function(){ 
      var span = document.createElement("span");
      span.innerHTML = word[index];
      spanContainer.appendChild(span)
      index++;
      if(index === word.length) { 
        clearInterval(adder);
        if(professionIndex !== professions.length-1){
          removeSpans();  
        }
      }
    }, 150);
  }
  
  function removeSpans(){  
    var remover = setInterval(function(){ 
      spanContainer.removeChild(spanContainer.lastChild);
      if(!spanContainer.children.length) { 
        clearInterval(remover);
        professionIndex++;
        addProfession();
      }
    }, 80);
  }
 
});