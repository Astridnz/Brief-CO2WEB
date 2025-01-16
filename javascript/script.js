

// --------------COMPTE A REBOURS---------------------------------------------------

// POur actualiser le compte à rebours chaque seconde
setInterval(() => {
  // Correspond à la date d'aujourd'hui
  const today = new Date().getTime();

  //Correspond à l'évenement du compte à rebours ici le 1er sept 2025 à minuit
  const event = new Date("2025-09-01 00:00:00").getTime();

  //Calcule la différence entre aujourd'hui et l'évènement
  const difference = event - today;

  //Transforme le résultat en jours heures minutes secondes
  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const secondes = Math.floor((difference % (1000 * 60)) / 1000);

  //Pour afficher ces valeurs dans la page html
  document.getElementById("jours").innerText = days;
  document.getElementById("heures").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("secondes").innerText = secondes;
}, 1000);



// -----------------------POP-UP-----------------------------------------------------

const trigger = document.getElementById('trigger');
const popup = document.getElementById('popup');

//affiche le popup au clic sur le "trigger"
trigger.addEventListener('click', function(event) {
  event.stopPropagation();
  popup.style.display = 'block';
});

//ferme le popup au deuxième clic
document.addEventListener('click', function(event) {
  if (event.target !== trigger) {
    popup.style.display = 'none';
  }
});



