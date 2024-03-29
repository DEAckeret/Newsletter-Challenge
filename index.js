


$(document).ready(function() {
    console.log("ready!");
});



$(document).ready(function() {
    $(window).resize(function() {
        if ($(window).width() > 574) {
            $('#news-image').attr('src', './assets/images/illustration-sign-up-desktop.svg');
        } else {
            $('#news-image').attr('src', './assets/images/illustration-sign-up-mobile.svg');
        }
    }).resize(); // Trigger the resize event immediately
});



$(document).ready(function() {
    function isValidEmail(email) {
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    $('#email-submit').on('click', function(event) {
        event.preventDefault();

        var email = $('#email').val(); 
        if (isValidEmail(email)) {
            console.log('Valid email');
            $('#email').removeAttr('aria-describedby');

            $('.default-menu').hide();
            $('.default-menu:eq(1)').removeClass('d-flex');

            $('#success-menu').removeClass('d-none');
            $('#success-menu').addClass('d-flex');

            $('#user-email').text(email);
            $('#content-row').removeClass('align-items-start').addClass('align-items-center');
        } else {
            console.log('Invalid email');
            $('#email').attr('aria-describedby', 'error-message');

            $('#error-message').removeClass('d-none');
            $('.form-control').addClass('error');
            
        }
    });
});





$(document).ready(function() {
    $('#dismiss-button').on('click', function(event) {
        event.preventDefault();

        $('.default-menu').show();
        $('.default-menu:eq(1)').addClass('d-flex');

        $('#success-menu').removeClass('d-flex');
        $('#success-menu').addClass('d-none');

        $('#error-message').addClass('d-none');
        $('.form-control').removeClass('error');

        $('#user-email').text('');
        $('#email').val('');
        $('#email').removeAttr('aria-describedby');
        $('#content-row').addClass('align-items-start').removeClass('align-items-center');
    });
});
