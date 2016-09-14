$(function() {
    var colorSwitch = true;

    $("h1").click(function() {
        if (colorSwitch)
            $("h1").css('color', 'red');
        else {
            $("h1").css('color', 'black');
        }
        colorSwitch = !colorSwitch;
    });

    $("h5:odd").hide();

    $("p").not("aside p").text().replace("Bacon", "LASER VISION");

    $(".post:last-of-type").remove();
    $(".post:last-of-type").remove();

    $("aside img").remove();

})
