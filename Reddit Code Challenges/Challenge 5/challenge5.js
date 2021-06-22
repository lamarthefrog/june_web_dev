$(document).ready(function() {
    $("button").click(function() {
        trueUsername = "GhostHouse";
        truePassword = "sp00ky";

        inputUsername = $("#username").val();
        inputPassword = $("#password").val();

        if (inputUsername == trueUsername && inputPassword == truePassword)
        {
            $("#outputText").css("color", "green");
            $("#outputText").html("Correct sign-in! Welcome to your account " + trueUsername);
        }
        else 
        {
            $("#outputText").css("color", "red");
            $("#outputText").html("You are a hack fraud! Your username and password are incorrect!");
        }
    });
});