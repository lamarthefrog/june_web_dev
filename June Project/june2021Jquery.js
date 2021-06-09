
//beginning of ready function
$(document).ready(function() {
//Mouse Enter and Leave jquery

    //nested these functions so that the image returns to its original opacity when the mouseleave event happens
    //note: this applies to card-img-top class so it will affect merch and location pages
    $(".card-img-top").mouseenter(function() {
        $(this).css("opacity", "0.5");
        //use css to change the cursor to pointer
        $(this).css("cursor", "pointer");

        $(this).mouseleave(function() {
            $(this).css("opacity", "1");
        })
    });

    $(".merch").mouseenter(function() {
        //use css to change the cursor to pointer
        $(this).css("cursor", "pointer");

        $(this).click(function() {
            alert("you just bought one of these");
        });
    });

    $(".location").mouseenter(function() {
        $(this).css("cursor", "pointer");

        $(this).click(function() {
            alert("pretend this opened a new tab with directions");
        })
    });
});  //end of ready function