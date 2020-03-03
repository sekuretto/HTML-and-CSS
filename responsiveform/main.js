// Initialize Firebase (ADD YOUR OWN DATA)
var config = {
    apiKey: "AIzaSyB2curTYP6RqVbQYk3hhNro-FcW6Twup1g",
    authDomain: "contactform-75105.firebaseapp.com",
    databaseURL: "https://contactform-75105.firebaseio.com",
    projectId: "contactform-75105",
    storageBucket: "contactform-75105.appspot.com",
    messagingSenderId: "1060838895289",
    appId: "1:1060838895289:web:b43d01db42b7673f573568",
    measurementId: "G-MM2PQJS4RH"
  };
  firebase.initializeApp(config);
  
  // Reference messages collection
  var messagesRef = firebase.database().ref('messages');
  
  // Listen for form submit
  document.getElementById('contactForm').addEventListener('submit', submitForm);
  
  // Submit form
  function submitForm(e){
    e.preventDefault();
  
    // Get values
    var name = getInputVal('name');
    var company = getInputVal('company');
    var email = getInputVal('email');
    var phone = getInputVal('phone');
    var message = getInputVal('message');
  
    // Save message
    saveMessage(name, company, email, phone, message);
  
    // Show alert
    document.querySelector('.alert').style.display = 'block';
  
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);
  
    // Clear form
    document.getElementById('contactForm').reset();
  }
  
  // Function to get get form values
  function getInputVal(id){
    return document.getElementById(id).value;
  }
  
  // Save message to firebase
  function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }
