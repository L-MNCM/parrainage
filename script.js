const parrainages = {
  "claire abi chedid": { photos: ["images/célia.jpg", "images/louise.jpg"] },
  "abbygaelle antonjuko": { photos: ["images/salomé.jpg"] },
  "maxence baumelou": { photos: ["images/romane.jpg"] },
  "kheyra bosse": { photos: ["images/samah.jpg", "images/melwenn.jpg"] },
  "mathilde cazenave": { photos: ["images/raphael.jpg"] },
  "margot chambon": { photos: ["images/clothilde.jpg"] },
  "louis chen": { photos: ["images/mila.jpg"] },
  "emma despres": { photos: ["images/margot.jpg"] },
  "kiara diguimbaye": { photos: ["images/agathe.jpg"] },
  "kiara madinan": { photos: ["images/agathe.jpg"] },
  "ethan favier": { photos: ["images/olivier.png"] },
  "matthieu fernandez": { photos: ["images/victor.jpg"] },
  "laurent hertz": { photos: ["images/priyanka.jpg", "images/noah.jpg"] },
  "vitali israel": { photos: ["images/mathéo.jpg"] },
  "cyprien jacquet": { photos: ["images/fanny.jpg"] },
  "louise lhermenier": { photos: ["images/camille.jpg"] },
  "paul morin": { photos: ["images/justine.jpg"] },
  "vitalina portnoi": { photos: ["images/fannyhuang.jpg"] },
  "pauline praquin": { photos: ["images/fannyhuot.jpg"] },
  "alexis praud": { photos: ["images/priyanka.jpg", "images/noah.jpg"] },
  "hana-lisa raphael": { photos: ["images/rashindi.jpg", "images/gabrielle.jpg"] },
  "hana lisa raphael": { photos: ["images/rashindi.jpg", "images/gabrielle.jpg"] },
  "hana-lisa raphaël": { photos: ["images/rashindi.jpg", "images/gabrielle.jpg"] },
  "hana lisa raphaël": { photos: ["images/rashindi.jpg", "images/gabrielle.jpg"] },
  "claire serre": { photos: ["images/benoît.jpg"] },
  "elie szulman": { photos: ["images/rashindi.jpg", "images/gabrielle.jpg"] },
  "natacha tutin": { photos: ["images/samah.jpg", "images/melwenn.jpg"] },
  "adriano zambon": { photos: ["images/milayda.jpg"] },
  "qoudsi zurob": { photos: ["images/edgar.jpg"] },
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
    alert("Aucun parrain trouvé 😢, réessaie !");
  }
});
