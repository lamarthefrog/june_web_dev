$(document).ready(function() {
    
    $("button").click(function() {
    var mass = $("#mass").val();
    var acceleration = $("#acceleration").val();

    var force = mass * acceleration;

    $("#outputText").html(force);
    });
});