$(document).ready(function() {
    var totalClicks = 0;

    $("#click1").click(function() {
        totalClicks += 1;
        $("#clickNumber").html(totalClicks);

        if (totalClicks <= 99)
        {
            $("#textOutput").html("Keep clicking!");
        }
        else
        {
            $("#textOutput").html("You've successfully clicked 100 times");
        }
    });

    $("#click10").click(function() {
        totalClicks += 10;
        $("#clickNumber").html(totalClicks);

        if (totalClicks <= 99)
        {
            $("#textOutput").html("Keep clicking!");
        }
        else
        {
            $("#textOutput").html("You've successfully clicked 100 times");
        }
    });

    $("#click100").click(function() {
        totalClicks += 100;
        $("#clickNumber").html(totalClicks);

        if (totalClicks <= 99)
        {
            $("#textOutput").html("Keep clicking!");
        }
        else
        {
            $("#textOutput").html("You've successfully clicked 100 times");
        }
    });

    $("#end").click(function() {
        $("*").css("background-color", "black");
        $("*").css("color", "black");
    });    
});