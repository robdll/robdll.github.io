document.addEventListener('DOMContentLoaded', function() {
  const gifSrc = './resources/RobLogoAnimation.gif';
  const modal = document.getElementById("gifModal");
  const gif = document.getElementById("animatedGif");
  const logo = document.querySelector(".nav--logo");

  // Open the modal on page load
  openModal();

  // Close the modal after full animation
  setTimeout(() => {
    closeModal();
  }, 8500); // Delay to allow display to update

  // Close the modal with reverse animation
  function closeModal() {
    modal.style.animation = "animateModalReverse 0.5s forwards";
    setTimeout(() => {
        modal.style.display = "none";
        gif.classList.add("minimized-gif");
        gif.setAttribute('src', ''); // Clear the src
    }, 500); // This timeout should match the duration of the animation
  }

  // Function to reopen the modal from the logo
  function openModal() {
    modal.style.animation = '';
    modal.style.display = "flex";
    void modal.offsetWidth;
    modal.style.animation = "animateModal 0.5s forwards";
    gif.offsetWidth; // Force browser reflow/repaint
    gif.setAttribute('src', gifSrc); // Reset the src to its original
    gif.style.display = "block"; // Show the GIF if it was hidden
    gif.classList.remove("minimized-gif"); // Remove minimized class if applied
    gif.removeEventListener('click', closeAndStopPropagation); // Remove any existing listener to avoid duplicates
    gif.addEventListener('click', closeAndStopPropagation); // Attach a new listener
  }

     // Event listener to close modal when clicking anywhere on it
  modal.addEventListener('click', function(event) {
    closeModal();
  });

  function closeAndStopPropagation(event) {
    console.log('GIF clicked');
    closeModal();
    event.stopPropagation(); // Prevent click from reaching the modal
  }

  // Reopen modal if logo is clicked
  logo.addEventListener('click', openModal);
  
});
