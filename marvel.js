$(document).ready(function () {

    $.ajax({
        type: "GET",
        url: "https://en.wikipedia.org/wiki/Astonishing_Spider-Man_%26_Wolverine#Reception",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {

            var markup = data.parse.text["*"];
            var blurb = $('<div></div>').html(markup);
            $('#article').html($(blurb).find('p'));

        },
        error: function (errorMessage) {
        }
    });
});