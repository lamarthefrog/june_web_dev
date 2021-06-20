$(document).ready(function() {

    function getRandomColor() {
        var letters = "0123456789ABCDEF";  //all characters used in hex colors
        var color = "#"; //# to append to and create color value
    
        //loop iterates six times to get the correct char count
        for (var i = 0; i < 6; i++) {
            //Math.floor rounds
            //Math.random picks a random value
            //multiplying by 16 to get positive values
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    /*$("h1").hover(function() {
        $(this).css("background-color", getRandomColor());
        $(this).css("color", getRandomColor());
    });*/

    $("body").hover(function() {
        $(this).css("background-color", getRandomColor());
        $(this).css("color", getRandomColor());
    });

/*    $("h2").hover(function() {
        $(this).css("background-color", getRandomColor());
        $(this).css("color", getRandomColor());
    });*/

    $(".nav").hover(function() {
        $(this).css("background-color", getRandomColor());
        $(this).css("color", getRandomColor());
    });

    $(".jumbotron").hover(function() {
        $(this).css("background-color", getRandomColor());
        $(this).css("color", getRandomColor());
    });

});
