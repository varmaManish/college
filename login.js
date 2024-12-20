// Predefined credentials
const validId = 12345; // Replace with your desired ID
const validPassword = "admin123"; // Replace with your desired password

function login() {
    const idInput = document.getElementById("idInput").value;
    const passwordInput = document.getElementById("passwordInput").value;
    const errorDiv = document.getElementById("error");

    // Check credentials
    if (idInput == validId && passwordInput === validPassword) {
        // Redirect to admin.html if credentials are valid
        window.location.href = "admin.html";
    } else {
        // Show error message if credentials are invalid
        errorDiv.style.display = "block";
    }
}
