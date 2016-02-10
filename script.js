

$('.search').click(function () {
    var search = $('#userInput').val();
   
    $('.search').addClass('is-loading');

    $.ajax({
        type: "GET",
        url: "http://www.reddit.com/r/aww/search.json?q=" + search + "&limit=100&restrict_sr=true",
        success: function (response) {
            $('.text').html('');
            for (var i = 0; i < response.data.children.length; i++) {
               response.data.children.thumbnail
                
                var img = "<img  class='majicImg' src='" + 
                response.data.children[i].data.thumbnail + "'/>";
                $(".main-body").append(img);                
            }
        }
    });
});