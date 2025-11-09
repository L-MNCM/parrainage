const parrainages = {
  "claire abi chedid": { photos: ["images/célia.jpg", "images/louise.jpg"] }, //Célia
  "abbygaelle antonjuko": { photos: ["images/salomé.jpg"] }, //Salomé
  "maxence baumelou": { photos: ["images/romane.jpeg"] },
  "kheyra bosse": { photos: ["images/samah.jpg", "images/melwenn.jpeg"] },
  "marie nicole bouchen": { photos : ["images/clément.jpeg"] },
  "marie-nicole bouchen": { photos : ["images/clément.jpeg"] },
  "marie bouchen": { photos : ["images/clément.jpeg"] },
  "mathilde cazenave": { photos: ["images/raphael.jpg"] }, //raphael
  "margot chambon": { photos: ["images/clothilde.jpg"] },
  "louis chen": { photos: ["images/mila.jpeg"] },
  "louïs chen": { photos: ["images/mila.jpeg"] },
  "emma despres": { photos: ["images/margot.jpg"] },
  "kiara diguimbaye": { photos: ["images/agathe.jpg"] },
  "kiara madinan": { photos: ["images/agathe.jpg"] },
  "ethan favier": { photos: ["images/olivier.png"] },
  "matthieu fernandez": { photos: ["images/victor.jpg"] },
  "laurent hertz": { photos: ["images/priyanka.png", "images/noah.jpeg"] },
  "vitali israel": { photos: ["images/mathéo.jpeg"] },
  "cyprien jacquet": { photos: ["images/fannyhuot.jpeg"] },
  "louise lhermenier": { photos: ["images/camille.jpg"] }, // camille
  "paul morin": { photos: ["images/justine.jpeg"] },
  "vitalina portnoi": { photos: ["images/fannyhuang.jpeg"] },
  "pauline praquin": { photos: ["images/fannyhuot.jpeg"] },
  "alexis praud": { photos: ["images/priyanka.png", "images/noah.jpeg"] },
  "hana-lisa raphael": { photos: ["images/rashindi.jpg", "images/gabrielle.jpg"] },
  "hana lisa raphael": { photos: ["images/rashindi.jpg", "images/gabrielle.jpg"] },
  "hana-lisa raphaël": { photos: ["images/rashindi.jpg", "images/gabrielle.jpg"] },
  "hana lisa raphaël": { photos: ["images/rashindi.jpg", "images/gabrielle.jpg"] },
  "claire serre": { photos: ["images/benoît.jpg"] },
  "elie szulman": { photos: ["images/rashindi.jpg", "images/gabrielle.jpg"] },
  "amaury tonnot": { photos: ["images/clément.jpeg"] },
  "natacha tutin": { photos: ["images/samah.jpg", "images/melwenn.jpeg"] },
  "adriano zambon": { photos: ["images/milayda.jpg"] },
  "qoudsi zurob": { photos: ["images/edgar.jpeg"] },
};

document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const prenom = document.getElementById("prenom").value.trim().toLowerCase();
  const nom = document.getElementById("nom").value.trim().toLowerCase();
  const cle = `${prenom} ${nom}`;

  const resultatDiv = document.getElementById("resultat");
  const photoContainer = document.getElementById("photoParrainContainer");

  // Vider le conteneur avant chaque recherche
  photoContainer.innerHTML = "";

  if (parrainages[cle]) {
    const photos = parrainages[cle].photos;

    photos.forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.alt = "Photo du parrain ou de la marraine";
      img.classList.add("photo-parrain");
      photoContainer.appendChild(img);
    });

    resultatDiv.classList.remove("hidden");
  } else {
    resultatDiv.classList.add("hidden");
    alert("Aucun parrain trouvé 😓, réessaie !");
  }
});