$(document).ready(function() {
    $(".button-toggler").click(function() {
        $(".menu-block").slideToggle();
        $(".toggle-menu").toggleClass("open")
    });

    /***menu as dropdown on small screens ***/
    // DOM ready
    $(function() {

        // Create the dropdown base
        $('<div class="dropdown" />').appendTo('.left-menu');
        // Create default option 'Go to...'
        $('<a />', {
            'class': 'btn btn-secondary dropdown-toggle',
            'herf': '#',
            'text': 'Go to...',
            'data-toggle': 'dropdown',
            'aria-haspopup': "true",
            'aria-expanded': "false",
            'role': "button",
            'id': "dropdownMenuLink"
        }).appendTo('.left-menu .dropdown');

        $('<div class="dropdown-menu" class="dropdown-menu" aria-labelledby="dropdownMenuLink"/>').appendTo('.dropdown');

        // Populate dropdown with menu items
        $('.left-menu a').each(function() {
            var el = $(this);
            $('<a />', {
                'href': el.attr('href'),
                'text': el.text(),
                'class': "dropdown-item " + el.parent().attr('class')
            }).appendTo('.left-menu .dropdown-menu');
        });

        // To make dropdown actually work
        // To make more unobtrusive: https://css-tricks.com/4064-unobtrusive-page-changer/
        $('.left-menu div a').change(function() {
            window.location = $(this).find('a:focus').attr('href');
        });
        var text1 = $('.left-menu li.active').text();
        $(".left-menu .dropdown-toggle").text(text1);
    });
})