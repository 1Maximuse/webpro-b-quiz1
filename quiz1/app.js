function resize() {
    if (window.innerWidth < window.innerHeight) {
        $("#ho-ornament").hide();
        $("#navbar-mobile").show();
        $("#navbar").hide();
        $("#sidebar").css({'right': 'auto', 'left': 0, 'justify-content': 'left', 'top': '30em'});
    } else {
        $("#navbar-mobile").hide();
        $("#navbar").show();
        $("#sidebar").css({'right': '0', 'left': 'auto', 'justify-content': 'center', 'top': 0});
    }

    $(".nav-mobile").hide();
}

resize();

$("#navbar-mobile img").click(function() {
    $(".nav-mobile").toggle("show");
});

$(".to-places").each(function(i, element) {
    $(element).hide();
});

var tourism = 0;

$(".to-places").eq(tourism).show();

$("#to-left").click(function() {
    $(".to-places").eq(tourism).hide();
    tourism--;
    if (tourism < 0) tourism = 2;
    $(".to-places").eq(tourism).show();
});

$("#to-right").click(function() {
    $(".to-places").eq(tourism).hide();
    tourism++;
    if (tourism > 2) tourism = 0;
    $(".to-places").eq(tourism).show();
});