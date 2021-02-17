(function ($) {
    'use strict';

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });


    // Accordions
    $('.collapse').on('shown.bs.collapse', function () {
        $(this).parent().find('.ti-plus').removeClass('ti-plus').addClass('ti-minus');
    }).on('hidden.bs.collapse', function () {
        $(this).parent().find('.ti-minus').removeClass('ti-minus').addClass('ti-plus');
    });

})(jQuery);

var faderInRight = false;
$(".fader-alternate .fader").each(function() {
    if(faderInRight) {

        $(this).addClass("fader-fadeInRight");
    }
    else {
        $(this).addClass("fader-fadeInLeft");
    }
    faderInRight = !faderInRight;
})


var delay = 0;
$(".fader").each(function () {
    if( isOnScreen($(this)) ) {
        $(this).css('animation-delay', delay + "ms");
        delay += 150;
        $(this).addClass("fader-animated");
        setTimeout(function() {
            delay -= 150;
        }, 500);
    }
})

function isOnScreen(elem) {
	// if the element doesn't exist, abort
	if( elem.length == 0 ) {
		return;
	}
	var $window = jQuery(window)
	var viewport_top = $window.scrollTop()
	var viewport_height = $window.height()
	var viewport_bottom = viewport_top + viewport_height
	var $elem = jQuery(elem)
	var top = $elem.offset().top
	var height = $elem.height()
	var bottom = top + height

	return (top >= viewport_top && top < viewport_bottom) ||
	(bottom > viewport_top && bottom <= viewport_bottom) ||
	(height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
}

$(document).ready( function() {
	window.addEventListener('scroll', function(e) {
        $(".fader:not(.fader-animated)").each(function () {
            if( isOnScreen($(this)) ) {
                $(this).css('animation-delay', delay + "ms");
                delay += 150;
                $(this).addClass("fader-animated");
                setTimeout(function() {
                    delay -= 150;
                }, 500);
            }
        })
	});
});

/*
    $(".fader-animation").each(function () {
        if ($(this).hasClass("delay")) {
            $(this).css('animation-delay', delay + "ms");
            delay += 150;
        }
        else if ($(this).hasClass("delay-init-landing")) {
            delay = 300;
            $(this).css('animation-delay', delay + "ms");
        }
        else if ($(this).hasClass("delay-background")) {
            delay = 600;
            $(this).css('animation-delay', delay + "ms");
            delay += 400;
        }
        else if ($(this).hasClass("delay-repeat")) {
            $(this).css('animation-delay', delay + "ms");
        }
        $(this).addClass("fader-animated");
    })
*/