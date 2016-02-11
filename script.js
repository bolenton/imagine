//Listen for enter button press
$("#userInput").on("keyup", function (e) {
    if (e.keyCode == '13') {
        e.preventDefault();
        $(this).next("a.search").trigger("click");
    }
});

//listens for search button
$('.search').click(function () {
    $(".main-body").empty();
    $('.search').addClass('is-loading');
    var search = $('#userInput').val();
    
    //Gets results fromn reddit and displays it.
    $.ajax({
        type: "GET",
        url: "http://www.reddit.com/r/pics/search.json?q=" + search + "&limit=100&restrict_sr=true",
        success: function (response) {
            
            $('.text').html('');
            
            for (var i = 0; i < response.data.children.length; i++) {
                var img = response.data.children[i].data.thumbnail;
                var defaultImg = "default.jpg"
                
                if (img.length < 10) {
                    img = "<img  class='majicImg' src='" + defaultImg + "'/>";
                }
                else {
                    img = "<img  class='majicImg' src='" + response.data.children[i].data.thumbnail + "'/>";
                }
                
                $(".main-body").append(img);
            }
            $('.search').removeClass('is-loading');
        }
    });
});

