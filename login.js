document.addEventListener("DOMContentLoaded", function() {
    const Loginform = document.getElementById("LoginForm");

    Loginform.addEventListener("submit", function(event) {
        event.preventDefault();

        const Password = document.getElementById("Password").value;
        const Email = document.getElementById("Email").value;
        const existingUsers = JSON.parse(localStorage.getItem("userList")) || [];

        console.log("exist",existingUsers);

        const matchUser = existingUsers.find(user => user.email === Email && user.password === Password);

        console.log("match",matchUser);

        if (matchUser) {
            localStorage.setItem("loginUser", JSON.stringify(matchUser));
            window.location.href="mainpage.html"
        }
        else {
            alert("Login failed. Invalid Email or Password!");
        }
    
    
    });
});

