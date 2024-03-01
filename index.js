// show menu when clicked on mobile view
document
.getElementById("mobile-menu-toggle")
.addEventListener("click", function() {
    document.getElementById("mobile-menu").classList.toggle("hidden");
})

// show the registration form when sign up is clicked
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form container and the "Sign Up" button
    let formContainer = document.getElementById('registration-form-container');
    let signUpButton = document.getElementById('show-registration-form');
    let backButton = document.getElementById('backButton');
    let FormContainer = document.getElementById('login-form-container');
    let logInButton = document.getElementById('show-login-form-container');
    let BackButton = document.getElementById('BackButton');
  
    // Add click event listener to the "Sign Up" button
    signUpButton.addEventListener('click', function () {
      // Toggle the visibility of the registration form container
      formContainer.classList.toggle('hidden');
    });
    backButton.addEventListener('click', function () {
      // Toggle the visibility of the registration form container
      formContainer.classList.toggle('hidden');
    });
    logInButton.addEventListener('click', function () {
      FormContainer.classList.toggle('hidden');
    })
    BackButton.addEventListener('click', function () {
      FormContainer.classList.toggle('hidden');
    })

  
    // Adding submit event listener to the registration form
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function (event) {
      // Preventing the default form submission
      event.preventDefault();
    });
  });
