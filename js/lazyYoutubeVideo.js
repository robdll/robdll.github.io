function loadVideo(id) {
  var videos = [];
  var videoContainer = document.getElementById('thumbnail');
  console.log(videoContainer)/*
  list.removeChild(list.childNodes[0]);*/
  var iframe = document.createElement('iframe');
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.width = "300%";
  iframe.height = "200%";
  iframe.src = 'http://www.youtube.com/embed/pUZIxpSm8Jw?html5=1';
  videoContainer.appendChild(iframe);
}