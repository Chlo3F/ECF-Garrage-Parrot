// Filtre voiture d'occasion
document.addEventListener("DOMContentLoaded", function() {
    // Écoute les changements dans les filtres
    document.getElementById("filters").addEventListener("input", function() {
        // Collecte les valeurs des filtres
        const priceMin = document.getElementById("priceMin").value;
        const priceMax = document.getElementById("priceMax").value;
        const mileageMin = document.getElementById("mileageMin").value;
        const mileageMax = document.getElementById("mileageMax").value;
        const yearMin = document.getElementById("yearMin").value;
        const yearMax = document.getElementById("yearMax").value;
        const category = document.querySelector('input[name="category"]:checked').value;

        // Effectue une requête AJAX vers le serveur avec les valeurs des filtres
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `url_du_serveur?priceMin=${priceMin}&priceMax=${priceMax}&mileageMin=${mileageMin}&mileageMax=${mileageMax}&yearMin=${yearMin}&yearMax=${yearMax}&category=${category}`, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status == 200) {
                // changer url_du_serveur par valeur réelle
                // Met à jour la partie de la page avec les résultats filtrés
                document.getElementById("results").innerHTML = xhr.responseText;
            }
        };
        xhr.send();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Efface les valeurs des champs et affiche les placeholders
    document.querySelectorAll('input[type="number"]').forEach(function(input) {
        input.value = ""; // Efface la valeur
        input.placeholder = input.getAttribute("placeholder"); // Affiche le placeholder
    });
});
// Fonction pour effacer la valeur si elle est vide et afficher le placeholder
function clearIfEmpty(input) {
    if (input.value === "") {
        input.value = null; // Efface la valeur si elle est vide
        console.log("La fonction clearIfEmpty a été appelée avec succès !");
    }
}

// Tableau avec toutes les propriétés des voitures
const cars = [
    { make: "Opel", year: 2018, price: 15000, category: "SUV", mileage: 70000 },
    { make: "BMW", year: 2018, price: 29000, category: "Berline", mileage: 80000 },
    { make: "Dacia", year: 2017, price: 11000, category: "4x4", mileage: 21000 },
    { make: "Renault", year: 2021, price: 22000, category: "Monospace", mileage: 47000 },
    { make: "Peugeot", year: 2020, price: 20000, category: "Citadine", mileage: 30000 },
    { make: "Mercedes", year: 2008, price: 25000, category: "Break", mileage: 85000 },
];


