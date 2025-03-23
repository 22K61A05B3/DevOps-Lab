function myfunction() {
    let fullname = document.getElementById("fullname").value.trim();
    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let number = document.getElementById("number").value.trim();
    let password = document.getElementById("password").value;
    let cpassword = document.getElementById("cpassword").value;
    let genderRadios = document.getElementsByName("gender");
  
    // Validate Full Name
    if (fullname === "") {
        alert("Enter your full name.");
        document.getElementById("fullname").focus();
        return false;
    }
  
    // Validate Username
    if (username === "") {
        alert("Enter your username.");
        document.getElementById("username").focus();
        return false;
    }
  
    // Validate Email
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        document.getElementById("email").focus();
        return false;
    }
  
    // Validate Phone Number
    if (!validatePhone(number)) {
        alert("Please enter a valid phone number (10 digits).");
        document.getElementById("number").focus();
        return false;
    }
  
    // Validate Password
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        document.getElementById("password").focus();
        return false;
    }
  
    // Validate Confirm Password
    if (password !== cpassword) {
        alert("Passwords do not match.");
        document.getElementById("cpassword").focus();
        return false;
    }
  
    // Validate Gender Selection
    let genderSelected = false;
    for (let radio of genderRadios) {
        if (radio.checked) {
            genderSelected = true;
            break;
        }
    }
  
    if (!genderSelected) {
        alert("Please select a gender.");
        return false;
    }
  
    // If everything is valid
    alert("Registration Successful!");
    return true;
  }
  
  // Helper Functions
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function validatePhone(number) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(number);
  }
  