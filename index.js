


$(document).ready(function() {
    console.log("ready!");
});



$(document).ready(function() {
    $(window).resize(function() {
        if ($(window).width() > 574) {
            $('#news-image').attr('src', '/assets/images/illustration-sign-up-desktop.svg');
        } else {
            $('#news-image').attr('src', '/assets/images/illustration-sign-up-mobile.svg');
        }
    }).resize(); // Trigger the resize event immediately
});

