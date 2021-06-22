//goal: generate pi to 30 characters

$(document).ready(function() {
    $("button").click(function() {
        //area = pi * r^2
        //pi = circumference / diameter
        //circumference = 2 * pi * r

        //got a circle of defined values for size
        //will do basic math to generate pi

        var radius = 1.59155;
        var circumference = 10;

        var pi = circumference / 2 /radius;

        $("#outputText").html(pi);

        //there will be rounding issues, but this was more about performing the formula
    });
});