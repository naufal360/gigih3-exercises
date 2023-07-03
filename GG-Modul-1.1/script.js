function validateForm() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Check if email is empty
    if (email === "") {
        alert("Email field cannot be empty");
        return false;
    }

    // Check if email is in valid format
    var emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email.match(emailPattern)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Check if password is empty
    if (password === "") {
        alert("Password field cannot be empty");
        return false;
    }

    // Check if password is less than 6 characters
    if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Add more validation rules if necessary
    // SQL Injection prevention and prevent insert html tag
    var invalidChars = /[\-\;\'\"\*\ \>\<\/]/;
    if (email.match(invalidChars) || password.match(invalidChars)) {
        alert("Invalid characters detected");
        return false;
    }

    // If all validation rules pass, return true
    return true;
}