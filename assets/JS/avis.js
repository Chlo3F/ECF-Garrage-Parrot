document.addEventListener("DOMContentLoaded", function() {
  const stars = document.querySelectorAll(".rating input");
  const reviewTextarea = document.getElementById("review"); 

  function resetStars() {
    stars.forEach(star => {
      star.nextElementSibling.style.backgroundColor = "#ccc";
    });
  }

  function highlightStars(selectedStar) {
    const starValue = parseInt(selectedStar.value);
    stars.forEach(star => {
      const starLabel = star.nextElementSibling;
      const starLabelIcon = starLabel.querySelector("i");
      const starLabelValue = parseInt(star.value);
      if (starLabelValue <= starValue) {
        starLabelIcon.style.backgroundColor = "#ffcc00"; // Change la couleur de l'icône
      } else {
        starLabelIcon.style.backgroundColor = "#ccc"; // Réinitialise la couleur de l'icône
      }
    });
  }

  stars.forEach(star => {
    star.addEventListener("change", function() {
      resetStars();
      highlightStars(this);
    });
  });

  document.getElementById("ratingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const rating = document.querySelector(".rating input:checked").value;
    const review = reviewTextarea.value;
    
    // Envoyer la note et l'avis au serveur ou faire autre chose avec les données
    console.log("Note :", rating);
    console.log("Avis :", review);

    // Réinitialiser le formulaire
    this.reset();
  });
});