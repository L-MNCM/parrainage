const parrainages = {
  "claire abi chedid": { photo: "images/célia-louise.jpg" },
  "abbygaelle antonjuko": { photo: "images/salomé.jpg" },
  "baumelou maxence" : { photo: "images/romane.jpg" },
  "bosse kheyra" : { photo : "images/samah-melwenn.jpg"},
  //"bouchen marie" : { photo: "images/.jpg" }, // pas encore 
  "cazenave mathilde" : { photo: "images/raphael.jpg" },
  "chambon margot" : { photo: "images/clothilde.jpg" },
  "chen louis" : { photo: "images/mila.jpg" },
  "despres emma" : { photo : "images/margot.jpg"}, 
  "diguimbaye kiara" : { photo: "images/agathe.jpg" },
  "favier ethan" : { photo : "images/olivier.jpg" },
  "fernandez mathieu" : { photo : "images/victor.jpg" },
  "hertz laurent" : { photo : "images/priyanka-noah.jpg" },
  "israel vitali" : { photo : "images/mathéo.jpg" },
  "jacquet cyprien" : { photo : "images/fanny.jpg" },
  "lhermenier louise" : { photo :"images/camille.jpg" },
  "morin paul" : { photo : "images/justine.jpg" },
  "portnoi vitalina" : { photo : "images/fannyhuang.jpg" },
  "praquin pauline" : {photo : "images/fannyhuot.jpg" },
  "praud alexis" : { photo : "images/priyanka-noah.jpg" },
  "raphael hana-lisa" : { photo : "images/rashindi-gabrielle.jgp" },
  "saidi gianni" : { photo : "images/louise-celia.jpg" },
  "serre claire" : { photo : "images/benoit.jpg" },
  "szulman elie" : { photo : "images/rashindi-gabrielle.jpg"},
 // "tonnot amaury" : { photo : "images/.jpg"}, //pas encore
  "tutin natacha" : { photo : "images/samah-melwenn.jpg"},
  "zambon adriano" : { photo : "images/milayda.jpg"},
  "zurob qoudsi" : { photo : "images/edgar.jpg"},
  "mila rondeau" : { photo : "images/photo.jpg"} 
};

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const prenom = document.getElementById("prenom").value.trim().toLowerCase();
  const nom = document.getElementById("nom").value.trim().toLowerCase();
  const cle = `${prenom} ${nom}`;

  const resultatDiv = document.getElementById("resultat");
  const photo = document.getElementById("photoParrain");

  if (parrainages[cle]) {
    photo.src = parrainages[cle].photo;
    resultatDiv.classList.remove("hidden");
  } else {
    resultatDiv.classList.remove("hidden");
    alert("Aucun parrain trouvé 😢");
  }
});
