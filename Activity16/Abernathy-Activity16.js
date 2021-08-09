$(document).ready(function(){
    var feedLink = "https://www.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&jsoncallback=?&tags=vectacorpbuilding&format=json";

    $.getJSON(feedLink, function(data){
        var html = "";
        $.each(data.items, function(i, item) {
            html += "<a href='" + item.media.m + "' data-lightbox='roadtrip' data-title='" + item.title + "' src ='" + item.media.m + "'>"
            html += "<img src='" + item.media.m + "'/>"
        });
        $("#new_building").html(html);
    });
    
});