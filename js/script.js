// navigation
const links = document.querySelectorAll(".navigation__link");
const naviToggle = document.getElementById("navi-toggle");

// pour lien de la nav, on ajoute un listener de click
// une fois cliqué on met l'état de la checkbox à false pour fermer la feneter de navigation
links.forEach(link => {
  link.addEventListener("click", () => {
    naviToggle.checked = false;
  });
});

//fermer la modal du booking
const modalBooking = document.getElementById("popup");
window.onclick = event => event.target === modalBooking ? modalBooking.style.display = "none" : modalBooking.style.display = "block" ;

