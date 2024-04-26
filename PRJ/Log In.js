// Function to handle sign up
function signUp(event) {
    event.preventDefault(); // Prevent form submission

    // Get user input
    var email = document.getElementById('email').value;
    var password = document.getElementById('signupPassword').value;

    // Here you would typically send this data to your server for storing
    // and further processing. For this example, let's just log the data.
    console.log("Sign Up Email:", email);
    console.log("Sign Up Password:", password);

    // You can redirect the user to a new page after successful sign up
    // window.location.href = "welcome.html";
}

// Add event listeners to forms

document.getElementById('signupForm').addEventListener('submit', signUp);