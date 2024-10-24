$(document).ready(function () {
    $('#form').submit(function (event) {
        event.preventDefault();

        $('.error').text('');

        let isValid = true;
        let name = $('#inputName').val().trim();
        let num = $('#inputNumber').val();
        let email = $('#inputEmail').val().trim();
        let dob = $('#inputDOB').val();
        let age = $('#inputAge').val();
        let gender = $('input[name="gender"]:checked').val();
        let pass = $('#inputPass').val();
        let cpass = $('#inputCPass').val();

        let namePattern = /^[a-zA-Z]+$/;
        if (name === "" || !namePattern.test(name)) {
            $("#name-error").text("Name is not valid");
            $('#inputName').css({
                "border-color": "red",
                "background-color": "white"
            });
            isValid = false;
        } else {
            $("#name-error").text("");
            $('#inputName').css({
                "border-color": "green",
                "background-color": "palegreen"
            });
        }

        let numPattern = /^\d{10}$/;
        if (num === "" || !numPattern.test(num)) {
            $("#number-error").text("Invalid number");
            $('#inputNumber').css({
                "border-color": "red",
                "background-color": "white"
            });
            isValid = false;
        } else {
            $("#number-error").text("");
            $('#inputNumber').css({
                "border-color": "green",
                "background-color": "palegreen"
            });
        }

        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (email === "" || !emailPattern.test(email)) {
            $("#email-error").text("Mail id should contain '@', '.', and a valid domain (e.g., .com, .in)");
            $('#inputEmail').css({
                "border-color": "red",
                "background-color": "white"
            });
            isValid = false;
        } else {
            $("#email-error").text("");
            $('#inputEmail').css({
                "border-color": "green",
                "background-color": "palegreen"
            });
        }

        if (dob === "") {
            $("#date-error").text("Invalid date");
            $('#inputDOB').css({
                "border-color": "red",
                "background-color": "white"
            });
            isValid = false;
        } else {
            $("#date-error").text("");
            $('#inputDOB').css({
                "border-color": "green",
                "background-color": "palegreen"
            });
        }

        if (age === "" || age > 100 || age < 18) {
            $("#age-error").text("Age should be between 18 to 100");
            $('#inputAge').css({
                "border-color": "red",
                "background-color": "white"
            });
            isValid = false;
        } else {
            $("#age-error").text("");
            $('#inputAge').css({
                "border-color": "green",
                "background-color": "palegreen"
            });
        }

        if (!gender) {
            $("#gender-error").text("*Select any one");
            isValid = false;
        } else {
            $("#gender-error").text("");
        }

        let passPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (pass === "" || !passPattern.test(pass)) {
            $("#pass-error").text("Password must be at least 8 characters and include uppercase, lowercase, and a number.");
            $('#inputPass').css({
                "border-color": "red",
                "background-color": "white"
            });
            isValid = false;
        } else {
            $("#pass-error").text("");
            $('#inputPass').css({
                "border-color": "green",
                "background-color": "palegreen"
            });
        }

        if (cpass === "" || cpass !== pass) {
            $("#c-pass-error").text("Passwords don't match");
            $('#inputCPass').css({
                "border-color": "red",
                "background-color": "white"
            });
            isValid = false;
        } else {
            $("#c-pass-error").text("");
            $('#inputCPass').css({
                "border-color": "green",
                "background-color": "palegreen"
            });
        }

        if (isValid) {
            alert("Submitted");
        }
    });
});