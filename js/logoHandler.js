document.addEventListener('DOMContentLoaded', function() {
  const videoSrc = './resources/videos/RobLogoAnimation.webm';
  const modal = document.getElementById("gifModal");
  const video = document.getElementById("animatedGif"); // This now targets the video element
  const logo = document.querySelector(".nav--logo");
  let modalCloseTimeoutId = null;
  
  // Open the modal on page load
  openModal();

  // Close the modal with reverse animation
  function closeModal(isClick) {
    if (modalCloseTimeoutId !== null) {
      clearTimeout(modalCloseTimeoutId);
      modalCloseTimeoutId = null;
    }
    modal.style.animation = "animateModalReverse 0.5s forwards";
    setTimeout(() => {
        modal.style.display = "none";
        video.pause(); 
      }, 500);
  }

  // Function to reopen the modal from the logo
  function openModal() {
    modal.style.animation = '';
    modal.style.display = "flex";
    void modal.offsetWidth;
    modal.style.animation = "animateModal 0.5s forwards";
    video.setAttribute('src', videoSrc);
    video.style.display = "block";
    video.play();
    video.classList.remove("minimized-gif");
    video.removeEventListener('click', closeAndStopPropagation);
    video.addEventListener('click', closeAndStopPropagation);
    // Close the modal after full animation
    modalCloseTimeoutId = setTimeout(() => {
      closeModal();
    }, 8000); // Delay to allow display to update
  }

  modal.addEventListener('click', function(event) {
    closeModal();
  });

  function closeAndStopPropagation(event) {
    closeModal();
    event.stopPropagation(); // Prevent click from reaching the modal
  }

  // Reopen modal if logo is clicked
  logo.addEventListener('click', openModal);
});
