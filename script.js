// Hardcoded password (you can change this to any string)
const correctPassword = "bigSteele123";

function authenticate() {
  // Get the password input by the user
  const passwordInput = document.getElementById("password");
  const inputPassword = passwordInput.value;

  // Check if the input matches the correct password
  if (inputPassword === correctPassword) {
    // Hide the login screen and show the welcome message
    document.getElementById("login").style.display = "none";
    document.getElementById("welcome").style.display = "block";
  } else {
    // Clear the input field for the next attempt
    passwordInput.value = "";

    // Set focus back to the input field
    passwordInput.focus();

    // Show an error alert
    alert("Incorrect password. Please try again.");
  }
}

// Listen for the Enter key
function checkEnter(event) {
  if (event.key === "Enter") {
    authenticate();
  }
}
