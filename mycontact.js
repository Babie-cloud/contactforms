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

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactFormsb");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var email = getElementVal("email");
  var message = getElementVal("message");

  console.log(name, email, message);
  saveMessages(name, email, message);

  // // enable the alert
  // document.querySelector(".alert").style.display = "block";

  // // remove the alert
  // setTimeout(() => {
  //   document.querySelector(".alert").style.display = "none";
  // }, 3000);

  // reset the form
  document.getElementById("contactForm").reset();

}

const saveMessages = (name, email, message) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    fullname: name,
    email: email,
    selectwhere: message
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};