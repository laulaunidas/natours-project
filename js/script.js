// navigation
const links = document.getElementsByClassName("navigation__link");
const naviToggle = document.getElementById("navi-toggle");
const linksTable = [...links];

// pour lien de la nav, on ajoute un listener de click
// une fois cliqué on met l'état de la checkbox à false pour fermer la feneter de navigation
linksTable.forEach(link => {
  link.addEventListener("click", () => {
    naviToggle.checked = false;
  });
});

//fermer la modal du booking
const modalBooking = document.getElementById("popup");
window.onclick = event => {
  if (event.target == modalBooking) {
    modalBooking.style.display = "none";
  } else {
    modalBooking.style.display = "block";
  }
};
