$(document).ready(function() {
    var flandersWord = "";

    $("#okily").click(function() {
        flandersWord += "Okily ";
    });

    $("#dokily").click(function() {
        flandersWord += "Dokily ";
    });

    $("#ding").click(function() {
        flandersWord += "Ding ";
    });

    $("#dong").click(function() {
        flandersWord += "Dong ";
    });

    $("#diddly").click(function() {
        flandersWord += "Diddly ";
    });

    $("#doodly").click(function() {
        flandersWord += "Doodly ";
    });

    $("#submit").click(function() {
        //run logic test to see if flandersWord ends with -
        //if it does, then replace it with an exclamation point

        //you're in js so you have to use lastIndexOf
        //do not have the convenience of python's string[-1]
        if (flandersWord == "" ) {
            $("#output").html("");
        }   else if (flandersWord.lastIndexOf(" ")) {
                //needed to overwrite variable w/ trimmed version
                //.trim() alone doesn't change the variable
                flandersWord = flandersWord.trim();

                //append ! and send to html
                flandersWord += "!";
                $("#output").html(flandersWord);
        };
    });

    $("#reset").click(function() {
        //clears variable and the html onscreen
        flandersWord = "";
        $("#output").html(flandersWord);
    });
});