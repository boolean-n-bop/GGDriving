// select element function
const selectElement = function (element) {
    return document.querySelector(element);
};
// assign variables
let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');
let navItem = document.querySelector('nav-list');
// whenever menu is clicked toggle open 
menuToggler.addEventListener('click', function () {
    body.classList.toggle('open');
});

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyAMa5h8yGVFMWlxTBevGsRxOnQrDSiAwSY",
    authDomain: "gg-driving-contact-form.firebaseapp.com",
    databaseURL: "https://gg-driving-contact-form.firebaseio.com",
    projectId: "gg-driving-contact-form",
    storageBucket: "gg-driving-contact-form.appspot.com",
    messagingSenderId: "522144495032",
    appId: "1:522144495032:web:1b6f283fc72d57f2b58b4d",
    measurementId: "G-9N42FHG4S3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit Form
function submitForm(e) {
    e.preventDefault();

    //  Get values 
    var name = getInputVal('name');
    var number = getInputVal('number');
    var email = getInputVal('email');
    var message = getInputVal('message');

    // Save message
    saveMessage(name, number, email, message);

    // Show alert
    document.querySelector('.alert').style.display = 'block';

    // Hide alert after 3 seconds
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 4000);

    // Clear form
    document.getElementById('contactForm').reset();

}

// Function to get form values
function getInputVal(id) {
    return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, number, email, message) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        number: number,
        email: email,
        message: message
    });
}

// Scroll reveal 
window.sr = ScrollReveal();

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 2000,
    distance: '25rem',
    delay: 600
})

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 4000,
    distance: '25rem',
    delay: 700
})

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 5000,
    distance: '25rem',
    delay: 800
})

// Navbar collapse
