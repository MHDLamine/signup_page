// Récupérez les éléments du formulaire
const form = document.getElementById('inscription-form');
const nomCompletInput = document.getElementById('nom-complet');
const adresseEmailInput = document.getElementById('adresse-email');
const motDePasseInput = document.getElementById('mot-de-passe');
const confirmerMotDePasseInput = document.getElementById('confirmer-mot-de-passe');
const submitButton = document.querySelector('.btn-submit'); // Sélectionnez le bouton de soumission

// Écoutez les événements de saisie sur les champs du formulaire
nomCompletInput.addEventListener('input', validateNomComplet);
adresseEmailInput.addEventListener('input', validateAdresseEmail);
motDePasseInput.addEventListener('input', validateMotDePasse);
confirmerMotDePasseInput.addEventListener('input', validateConfirmerMotDePasse);


// Fonction pour valider le champ "Nom complet"
function validateNomComplet() {
  if (nomCompletInput.value.trim() === '') {
    displayErrorMessage(nomCompletInput, 'Ce champ est requis');
    nomCompletInput.classList.add("is-invalid");
    return false;
  } else {
    clearErrorMessage(nomCompletInput);
    nomCompletInput.classList.remove("is-invalid");
    return true;
  }
}

// Fonction pour valider le champ "Adresse e-mail"
function validateAdresseEmail() {
  const emailValue = adresseEmailInput.value.trim();
  if (emailValue === '') {
    displayErrorMessage(adresseEmailInput, 'Ce champ est requis');
    adresseEmailInput.classList.add("is-invalid");
    return false;
  } else if (!isValidEmail(emailValue)) {
    displayErrorMessage(adresseEmailInput, 'Adresse e-mail invalide');
    adresseEmailInput.classList.add("is-invalid");
    return false;
  } else {
    clearErrorMessage(adresseEmailInput);
     adresseEmailInput.classList.remove("is-invalid");
    return true;
  }
}

// Fonction pour valider le champ "Mot de passe"
function validateMotDePasse() {
  if (motDePasseInput.value.trim() === '') {
    displayErrorMessage(motDePasseInput, 'Ce champ est requis');
    motDePasseInput.classList.add("is-invalid");
    return false;
  } else {
    clearErrorMessage(motDePasseInput);
     motDePasseInput.classList.remove("is-invalid");
    return true;
  }
}

// Fonction pour valider le champ "Confirmer mot de passe"
function validateConfirmerMotDePasse() {
  const confirmPasswordValue = confirmerMotDePasseInput.value.trim();
  if (confirmPasswordValue === '') {
    displayErrorMessage(confirmerMotDePasseInput, 'Ce champ est requis');
    confirmerMotDePasseInput.classList.add("is-invalid");
    return false;
  } else if (confirmPasswordValue !== motDePasseInput.value) {
    displayErrorMessage(confirmerMotDePasseInput, 'Les mots de passe ne correspondent pas');
    confirmerMotDePasseInput.classList.add("is-invalid");
    return false;
  } else {
    clearErrorMessage(confirmerMotDePasseInput);
     confirmerMotDePasseInput.classList.remove("is-invalid");
    return true;
  }
}


// Fonction pour valider une adresse e-mail
function isValidEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

// Fonction pour valider le formulaire en entier
function validateForm() {
    validateNomComplet();
    validateAdresseEmail();
    validateMotDePasse();
    validateConfirmerMotDePasse();
    isValid = validateNomComplet() && validateAdresseEmail() && validateMotDePasse() && validateConfirmerMotDePasse();
    return isValid;
  }

// Fonction pour afficher le message d'erreur
function displayErrorMessage(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
}

// Fonction pour effacer le message d'erreur en temps réel
function clearErrorMessage(input) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = '';
}

// Vous pouvez également appeler ces fonctions dans le gestionnaire de soumission du formulaire pour une validation globale
form.addEventListener('submit', function (event) {
  // Validez le formulaire une dernière fois avant la soumission
  if (!validateForm()) {
    event.preventDefault(); // Empêchez la soumission si des erreurs sont présentes
  }
  else{
    alert('ok')
  }
});
