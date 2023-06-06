// Tout les élements seront affichées dans cette section
let infos = document.querySelector("section");

// Création de la balise "div" pour afficher chaque élements
let countryDiv = document.createElement("div");
let continentDiv = document.createElement("div");
let capitalDiv = document.createElement("div");
let flagDiv = document.createElement("div");

// La function search() est appelé dans la page HTML (onclick)
function search() {
  // Récupération de la valeur saisie dans le input [type="text"]
  let textCountry = document.querySelector(".text").value;
  // Mise à jour du contenu de l'élément "countryDiv" avec la valeur saisie
  countryDiv.innerHTML = `<span>pays</span><br><p>${textCountry}</p>`;
  // URL de l' API + la valeur saisie dans le input [type="text"]
  let url = "https://restcountries.com/v3.1/name/" + textCountry;

  // Récupération de données via l'URL
  // Utilisation de la méthode "fetch" pour récupérer les données à partir de l'URL spécifiée
  fetch(url).then((response) =>
    // Conversion de la réponse en JSON et traitement des données dans une fonction de rappel
    response.json().then((data) => {
      // "data" commence à l'index 0
      const country = data[0];
      // récupération à partir de l'index 0 des .propriétés
      const capital = country.capital;
      const continent = country.continents;
      const flag = country.flags.svg;

      // Mise à jour des éléments HTML (avec les données extraites via les 3 lignes précèdentes)
      capitalDiv.innerHTML = `<span>Ville</span><br><p>${capital}</p>`;
      continentDiv.innerHTML = `<span>Continent</span><br><p>${continent}</p>`;
      flagDiv.innerHTML = `<span>Drapeau</span><br><img src = "${flag}">`;

      // Ajout des éléments HTML mis à jour à l'élément "infos" (balise "section")
      infos.appendChild(countryDiv);
      infos.appendChild(continentDiv);
      infos.appendChild(capitalDiv);
      infos.appendChild(flagDiv);
    })
  );
}
