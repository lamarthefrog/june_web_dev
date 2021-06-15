$(document).ready(function() {
    $("#messUpBtn").click(function() {
        //alert("The button works!");

        //remember js loops use semicolons to delineate confines
        for (i=1; i<=16; i++)
        {
            //loop appends i value to "#tableCell" string to get targetID
            //uses Math.random() to generate a randomNum value
            //does a logic statement to change CSS values based on randomNum
            //applies randomNum to targetID using .html()
            //applies css to targetID using .css()

            //note: str(i) didn't work here, but regular i does
            //I think this was a matter of data type converting
            var targetID = "#tableCell" + i;

            //Math.random() generates a random decimal, we multiply by 10000 to get a whole number
            //Math.floor() rounds the number for us
            //because of how it's nested, Math.floor() is used on Math.random()
            var randomNum = Math.floor(Math.random() * 10000); //generates a random 4 digit number

            //note: else if is written as two words in js, I don't know why, it's stupid
            if (randomNum < 2500) {
                $(targetID).css("background-color", "red");
            } else if (randomNum >= 2500 && randomNum < 5000) {
                $(targetID).css("background-color", "orange");
            } else if (randomNum >= 5000 && randomNum < 7500) {
                $(targetID).css("background-color", "yellow");
            } else {
                $(targetID).css("background-color", "green");
            }

            $(targetID).css("color", "white");
            $(targetID).css("text-shadow", "2px 2px 5px black");
            $(targetID).html(randomNum);
        };
    });
});