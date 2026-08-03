// Select the form
const form = document.querySelector("form");

// Listen for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh

    // Get input values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation
    if (name === "" || email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }

    // Success
    alert("Account created successfully!");

    // Print data in console
    console.log({
        name,
        email,
        password,
    });

    // Reset form
    form.reset();
});
