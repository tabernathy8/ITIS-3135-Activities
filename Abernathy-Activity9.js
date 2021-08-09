$(document).ready(function() {

        // get the image URL and caption for each image
        $("a").each(function (index, value)
        {
            $(value).click(function(event){
                //Pulling image link and caption from existing elements
                var image = $(this).attr("href");
                var caption = $(this).attr("title");

                //Updating current caption with pulled caption
                $("#caption").html(caption);

                //Updating current image link with pulled image link
                $("#gallery").html(`<img src=` + image + ` alt="Image Gallery area" id="image">`)

                //Preventing default event from occuring
                event.preventDefault();

                //Focusing on first element
                $("a:first").focus();
            })
        })

}); // end ready