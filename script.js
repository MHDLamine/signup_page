//option voir le mot de passe
// Récupérez les éléments du formulaire, y compris le bouton de bascule
const motDePasseInput = document.getElementById('mot-de-passe');
const confirmerMotDePasseInput = document.getElementById('confirmer-mot-de-passe');

const btn_cacher = document.getElementById('eyes_not');
const btn_afficher = document.getElementById('eyes');
const btn_cacher2 = document.getElementById('eyes_not2');
const btn_afficher2 = document.getElementById('eyes2');

// Écoutez les événements de clic sur le bouton de bascule
btn_cacher.addEventListener('click', togglePasswordVisibility);
btn_afficher.addEventListener('click', togglePasswordVisibility);
btn_cacher2.addEventListener('click', togglePasswordVisibility2);
btn_afficher2.addEventListener('click', togglePasswordVisibility2);

// Fonction pour basculer l'affichage du mot de passe
function togglePasswordVisibility() {
  if (motDePasseInput.type === 'password') {
    motDePasseInput.type = 'text'; // Afficher le texte du mot de passe
    btn_afficher.classList.add('d-none');//cacher l'icone option voir
    btn_cacher.classList.remove('d-none');// afficher l'icone option cacher
  } else {
    motDePasseInput.type = 'password'; 
    btn_afficher.classList.remove('d-none');
    btn_cacher.classList.add('d-none');
  }
}

function togglePasswordVisibility2() {
    if (confirmerMotDePasseInput.type === 'password') {
      confirmerMotDePasseInput.type = 'text'; // Afficher le texte du mot de passe
      btn_afficher2.classList.add('d-none');//cacher l'icone option voir
      btn_cacher2.classList.remove('d-none');// afficher l'icone option cacher
    } else {
      confirmerMotDePasseInput.type = 'password'; 
      btn_afficher2.classList.remove('d-none');
      btn_cacher2.classList.add('d-none');
    }
  }

/******************************************************************************************
 *************************************FORMULAIRE*****************************************************
 ******************************************************************************************
 */
const form = document.getElementById('inscription-form');
const nomCompletInput = document.getElementById('nom-complet');
const adresseEmailInput = document.getElementById('adresse-email');
const submitButton = document.querySelector('.btn-submit'); // Sélectionnez le bouton de soumission

// Écoutez les événements de saisie sur les champs du formulaire
nomCompletInput.addEventListener('input', validateNomComplet);
adresseEmailInput.addEventListener('input', validateAdresseEmail);
motDePasseInput.addEventListener('input', validateMotDePasse);
confirmerMotDePasseInput.addEventListener('input', validateConfirmerMotDePasse);



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


function validateMotDePasse() {
    const motDePasseValue = motDePasseInput.value;
  if( (motDePasseValue === '') || (motDePasseValue.length < 10) || (!/[!@#$%^&*]/.test(motDePasseValue)) ){
    displayErrorMessage(motDePasseInput, 'saisie invalide');
    motDePasseInput.classList.add("is-invalid_");
    return false;
  } else {
    clearErrorMessage(motDePasseInput);
    motDePasseInput.classList.remove("is-invalid_");
    return true;
  }
}


function validateConfirmerMotDePasse() {
  const confirmPasswordValue = confirmerMotDePasseInput.value.trim();
  if (confirmPasswordValue === '') {
    displayErrorMessage(confirmerMotDePasseInput, 'Ce champ est requis');
    confirmerMotDePasseInput.classList.add("is-invalid_");
    return false;
  } else if (confirmPasswordValue !== motDePasseInput.value) {
    displayErrorMessage(confirmerMotDePasseInput, 'Les mots de passe ne correspondent pas');
    confirmerMotDePasseInput.classList.add("is-invalid_");
    return false;
  } else {
    clearErrorMessage(confirmerMotDePasseInput);
     confirmerMotDePasseInput.classList.remove("is-invalid_");
    return true;
  }
}


// Fonction pour valider L'adresse e-mail
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

//le gestionnaire de soumission du formulaire pour une validation globale
form.addEventListener('submit', function (event) {

  if (!validateForm()) {
    event.preventDefault(); 
  }
  else{
    alert('ok')
  }
});
