$(document).ready(function() {

    $("button").click(function() {
        var passwordLength = $("#length").val();
        var randomPassword = "";
        var charList = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

        for (i = 0; i < passwordLength; i++)
        {
            var randomIndex = Math.floor((Math.random() * 60));
            //note: concat worked here instead of jquery's append
            //different usages
            randomPassword += charList[randomIndex];
        }

        $("#outputText").html(randomPassword);
    });
});