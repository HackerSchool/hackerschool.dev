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
var isOverlayActive = false;
$(document).ready( function() {
	$("body").get(0).addEventListener('scroll', function(e) {
        $(".fader:not(.fader-animated)").each(function () {
            if( isOnScreen($(this))) {
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

$(document).ready(function() {
    const memberCards = document.querySelectorAll('.member-card');
    const overlayContent = document.getElementById('overlay-content');
    memberCards.forEach(card => {
        card.addEventListener('click', () => { //falta disable scroll
            overlay.style.display = 'flex';
            const name = card.querySelector('h3').innerText.split("\n");
            overlayContent.querySelectorAll("h3")[0].innerText = name[0];
            overlayContent.querySelectorAll("img")[0].src = card.querySelector("img").src;
            var texts = card.querySelectorAll("p");
            var quoteText = ""
            for(let i = 0; i< texts.length; i++){
                if (texts[i].classList.contains("quote"))
                   quoteText = texts[i].innerText
            }
            
            overlayContent.querySelectorAll("p")[0].innerText = quoteText
            //memberProjectDiv = overlayContent.querySelector('#overlay-project-holder');
            let memberProjectDiv = overlayContent.querySelector('#overlay-project-holder');
            memberProjectDiv.innerHTML = "";
            let projectsHolder = card.getElementsByClassName("member-card-projects-div")[0];
            Array.from(projectsHolder.children).forEach(project => {             
                var projDiv = document.createElement("div")
                var imgElem = document.createElement('img')
                var pElem = document.createElement('p')
                let linkElem = document.createElement('a');
                imgElem.src = project.dataset.image; 
                pElem.innerText = project.innerText;
                linkElem.href = project.dataset.url;

                linkElem.appendChild(imgElem);
                linkElem.appendChild(pElem);
                projDiv.appendChild(linkElem);
                projDiv.classList.add("overlay-project-content")
                memberProjectDiv.append(projDiv)
            });

            memberSocialDiv = overlayContent.querySelector('#overlay-social-holder'); 
            var socialsHolder = card.getElementsByClassName("member-card-socials-div");
            Array.from(socialsHolder[0].children).forEach(social => {
                var socialDiv = document.createElement("div")
                var imgElem = document.createElement('img')
                let linkElem = document.createElement('a');
                var pElem = document.createElement('p')
                pElem.innerText = social.innerText;
                linkElem.href = social.dataset.link;
                console.log(social)

                linkElem.appendChild(imgElem)
                linkElem.appendChild(pElem)
                socialDiv.append(linkElem)
                socialDiv.classList.add("overlay-social-content")
                memberSocialDiv.append(socialDiv)
            });

            isOverlayActive = true; 
            setTimeout(() => {
                checkClickOutside();
            }, 50);
        });
    });

    function checkClickOutside() {
        if (isOverlayActive) {
            const closeOverlay = (event) => {
                if (event.target !== overlay && !overlay.contains(event.target)) {
                    cleanOverlay();
                    overlay.style.display = "none";
                    isOverlayActive = false;
                    document.removeEventListener('click', closeOverlay); // Remove event listener after closing
                }
            };
            document.addEventListener('click', closeOverlay);
        }
    }

    function cleanOverlay() {
        overlayContent.querySelectorAll("p")[0].innerText = ""

        memberProjectDiv = overlayContent.querySelector('#overlay-project-holder');
        Array.from(memberProjectDiv.children).forEach(child => {
            child.remove();
        });

        memberSocialDiv = overlayContent.querySelector('#overlay-social-holder');
        Array.from(memberSocialDiv.children).forEach(child => {
            child.remove();
        });
    }
});
