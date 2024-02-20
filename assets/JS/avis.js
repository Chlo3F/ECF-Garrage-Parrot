//Page avis notation étoiles
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".rating input");
    const reviewTextarea = document.getElementById("review"); 
  
    stars.forEach(star => {
      star.addEventListener("change", function() {
        resetStars();
        highlightStars(this);
      });
    });
  
    function resetStars() {
      stars.forEach(star => {
        star.nextElementSibling.style.backgroundColor = "#ccc";
      });
    }
  
    function highlightStars(selectedStar) {
      selectedStar.nextElementSibling.style.backgroundColor = "#ffcc00";
    }
  
    document.getElementById("ratingForm").addEventListener("submit", function(event) {
      event.preventDefault();
      const rating = document.querySelector(".rating input:checked").value;
      const review = reviewTextarea.value;
      
      // Envoyer la note et l'avis au serveur ou faire autre chose avec les données
      console.log("Note :", rating);
      console.log("Avis :", review);
  
      // Réinitialiser le formulaire
      this.reset();
      resetStars();
    });
  });
  