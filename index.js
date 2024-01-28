


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



$(document).ready(function() {
    function isValidEmail(email) {
        var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }

    $('#email-submit').on('click', function(event) {
        event.preventDefault();

        var email = $('#email').val(); // assuming the id of your email input field is 'email'
        if (isValidEmail(email)) {
            console.log('Valid email');

            $('.default-menu').hide();
            $('.default-menu:eq(1)').removeClass('d-flex');
            $('#success-menu').show();
            $('#user-email').text(email);
        } else {
            console.log('Invalid email');

            $('#error-message').removeClass('d-none');
            
        }
    });
});





$(document).ready(function() {
    $('#dismiss-button').on('click', function(event) {
        event.preventDefault();

        $('.default-menu').show();
        $('.default-menu:eq(1)').addClass('d-flex');
        $('#error-message').addClass('d-none');
        $('#success-menu').hide();
        $('#user-email').text('');
        $('#email').val('');
    });
});
