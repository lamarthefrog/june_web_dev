$(document).ready(function() {
    $("button").click(function() {
        var firstName = $("#firstName").val();
        var age = $("#age").val();
        var username = $("#username").val();

        
        var outputString = "Hello! Your name is " + firstName + ". ";
        outputString += "Your age is " + age + ". ";
        outputString += "Your username is " + username + ".";

        $("#outputText").html(outputString);
    });
});