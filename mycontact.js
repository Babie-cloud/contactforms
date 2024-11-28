// Configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC8CgDfOKgsC_uEyfdMkcyzQ12TAIgRt0I",
  authDomain: "contactform-b11da-45287.firebaseapp.com",
  databaseURL: "https://contactform-b11da-45287-default-rtdb.firebaseio.com",
  projectId: "contactform-b11da-45287",
  storageBucket: "contactform-b11da-45287.firebasestorage.app",
  messagingSenderId: "461755627900",
  appId: "1:461755627900:web:e20c010dc21cc79ac3ccf9"
};

// Initialiser Firebase
firebase.initializeApp(firebaseConfig);

// Référence à votre base de données
var contactFormDB = firebase.database().ref("contactFormsb");

// Écouteur d'événement pour la soumission du formulaire
document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault(); // Empêche le rechargement de la page

  // Récupérer les valeurs du formulaire
  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  // Enregistrer les messages dans Firebase
  saveMessages(name, email, message);

  // Afficher l'alerte de succès
  document.getElementById("alertSuccess").style.display = "block";
  
  // Masquer l'alerte après 3 secondes
  setTimeout(() => {
      document.getElementById("alertSuccess").style.display = "none";
  }, 3000);

  // Réinitialiser le formulaire
  document.getElementById("contactForm").reset();
}

// Fonction pour sauvegarder les messages dans Firebase
const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push(); // Créer une nouvelle entrée

  newContactForm.set({
      fullname: name,
      email: email,
      message: message
  });
};

// Fonction pour obtenir la valeur des éléments de formulaire
const getElementVal = (id) => {
  return document.getElementById(id).value; // Récupérer la valeur de l'élément par son ID
};