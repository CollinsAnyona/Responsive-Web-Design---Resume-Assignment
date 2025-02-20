document.addEventListener("DOMContentLoaded", function () {
    // Mobile Navigation Toggle
    const navToggle = document.createElement("button");
    navToggle.innerText = "☰";
    navToggle.classList.add("nav-toggle");
    document.querySelector(".navbar").appendChild(navToggle);
    
    const navLinks = document.querySelector(".nav-links");
    navToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // Form Validation
    document.getElementById("contactForm").addEventListener("submit", function (event) {
        event.preventDefault();
        
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let message = document.getElementById("message").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
            return;
        }
        
        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        alert("Message sent successfully!");
        document.getElementById("contactForm").reset();
    });

    function validateEmail(email) {
        let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
