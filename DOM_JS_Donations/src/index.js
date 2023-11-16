// votre code JS
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.querySelector(".btn-primary");
  const inputField = document.getElementById("montant");
  const donationsList = document.getElementById("donations");
  const totalDisplay = document.querySelector(".display-5");
  let total = 0;

  // On ajoute un évènement lors d'un clic sur le bouton
  addButton.addEventListener("click", () => {
    // On récupère la valeur de l'utilisateur
    const montant = parseFloat(inputField.value);

    // Vérifier si le montant est un nombre
    if (!isNaN(montant) && montant > 0) {
      // Ajouter le montant à la liste
      const newItem = document.createElement("li");
      newItem.classList.add("list-group-item");
      newItem.textContent = montant;
      donationsList.appendChild(newItem);

      // Mettre à jour et afficher le total
      total += montant;
      totalDisplay.textContent = `Total: ${total}`;

      // Réinitialiser le champ de saisie
      inputField.value = "";
    }
  });
});
