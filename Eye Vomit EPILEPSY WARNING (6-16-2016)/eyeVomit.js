$(document).ready(function() {
    
    function randomNumber(min, max) {
        return Math.random() * (max-min) + min;
    }

    //function generateColor() {
    //    color1 = rgb(randomNumber(0, 255), randomNumber(0, 255), randomNumber(0, 255));
    //    return color1;
    //}

    //essentially this generates a hexcode for our color value
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

    setInterval(function() {
        $("body").css("background-color", getRandomColor());
        $("h1").css("color", getRandomColor());
    },
    80
    );

    $("#die").click(function() {
        close();
    });
});