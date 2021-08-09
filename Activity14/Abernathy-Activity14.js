$(document).ready(function() {
    $("#nav_list li").click(function() {
        
        //Read Title of person selected
        var title = $(this).children("a").attr("title");
        
        //Pull the json file associated with the selected person by searching in
        //the json_files folder for there file
        $.get("./json_files/" + title + ".json", function(data, status) {
            
            //Pull associated data and replace esisting html date with pulled data
            data = data["speakers"][0];
            $("main h1").html(data['title']);
            $("main h2").html(data['month']+"<br />"+data['speaker']);
            $("main img").attr("src", data.image);
            $("main p").html(data.text);
        });
    });
}); // end ready