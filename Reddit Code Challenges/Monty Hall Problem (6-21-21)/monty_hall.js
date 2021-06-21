$(document).ready(function() {
    
    $("#alice").click(function() {
        var aliceChoice = 1;
        var aliceWinCount = 0;
 
        //Alice's choice remains the same, so we only have to test if it matches prizeDoor
        for (i=1; i <= 1000; i++)
        {
            //generate random value for which door will have the prize and which will open
            var prizeDoor = Math.floor((Math.random() * 3));
            var openDoor = Math.floor((Math.random() * 3));
            //check if open and prize door are the same, change open door if they are
            if (openDoor == prizeDoor)
            {
                openDoor = Math.floor((Math.random() * 3));
            }

            //tally number of correct guesses
            if (aliceChoice == prizeDoor)
            {
                aliceWinCount++;
            }
        }
        $("#aliceWins").html(aliceWinCount);
        });
        
    //note: did not solve bob, issue with openDoor var
    $("#bob").click(function() {
        var bobChoice = 1;
        var bobWinCount = 0;

        for (i=1; i<=1000; i++)
        {
            var prizeDoor = Math.floor((Math.random() * 3));
            var openDoor = Math.floor((Math.random() * 3));

            if (openDoor == prizeDoor)
            {
                openDoor = Math.floor((Math.random() * 3));
            }

            bobChoice = (bobChoice + openDoor) * 2 % 3;
            if (bobChoice == prizeDoor)
            {
                bobWinCount++;
            }
        }

        $("#bobWins").html(bobWinCount);
        });
});