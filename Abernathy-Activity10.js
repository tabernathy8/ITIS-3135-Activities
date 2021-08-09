$(document).ready(function() {

    //Hiding and fading in original image and caption
    $("#image").hide().fadeIn(3000);
    $("#caption").hide().fadeIn(3000);


    $("main a").each(function (index, value)
    {
        $("a:first").focus();
        $(value).click(function(event){

            //Pulling image link and caption from existing elements
            var image = $(this).attr("href");
            var caption = $(this).attr("title");


            //Preventing default action
            event.preventDefault();

            //Fade out function for elements with callback
            $("#image").add("#caption").fadeOut(3000, function() {
                $("#image").attr("src", image).fadeIn(3000);
                $("#caption").html(caption).fadeIn(3000);
            });


            //Focusing on first element
            $("a:first").focus();
        })

    })


}); // end ready