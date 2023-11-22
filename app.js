function shareButtonClick() {
    // Obtiene el elemento share-menu
    let shareMenu = document.getElementById("share-menu");
  
    // Toggle the class "hidden" on the share-menu element
    shareMenu.classList.toggle("hidden");
  }
  // Agrega el evento click al botón
  document.querySelector(".share-button").addEventListener("click", shareButtonClick);
  