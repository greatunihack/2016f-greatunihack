( function () {
    var faqHidden = true;
    function initialize() {
        var mapCanvas = document.getElementById('map-canvas');
        var locationLatLon = new google.maps.LatLng(53.478896, -2.255116);
        var mapOptions = {
            center: locationLatLon,
            zoom: 18,
            mapTypeControl: true,
            scrollwheel:false,
            navigationControl: false,
            streetViewControl: false,
            disableDefaultUI: true,
            styles: [
                {"stylers":[{"hue":"#660099"}]},
                {"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},
                {"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},
                    {"visibility":"simplified"}]}]
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({
            position: locationLatLon,
            map: map,
            title: 'Great Uni Hack 2015'
        });
        faqHider();
    }
    google.maps.event.addDomListener(window, 'load', initialize);

    jQuery(document).ready( function ($) {
        $('.button-prereg-disabled').click(function (event) {
            event.preventDefault();
        });
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

    var faqHider = function() {
        console.log('running the hider');
        var items = $('.faq-item'),
            button = $('.faq-button')
        if (!faqHidden) {
            console.log('showing');
            for (item in items) {
                if (item > 5) {
                    $(items[item]).show();
                }
            }
            button.text('See less');
        } else {
            console.log('hiding');
            for (item in items) {
                if (item > 5) {
                    $(items[item]).hide();
                }
            }
            button.text('See more')
        }
    }

    $('.faq-button').click( function (event) {
        event.preventDefault();
        faqHidden = !faqHidden;
        faqHider();
    });
})();
