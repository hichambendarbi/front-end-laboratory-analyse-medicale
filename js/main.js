var slideIndex = 0;
var slideIndexCurrent = 0;
showSlides();
//showSlidesCurrent(slideIndexCurrent);



function currentSlide(n) {
    showSlidesCurrent(slideIndexCurrent = n);

}


$('.sub-menu ul').hide();
$(".sub-menu a").click(function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
});

/*** CURRENT SLIDE on click ***/
function currentSlide(n) {
    showSlidesCurrent(slideIndexCurrent = n);

}

function showSlidesCurrent(n) {
    //var slideIndex = 1;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndexCurrent = 1
    }

    if (n < 0) {
        slideIndexCurrent = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndexCurrent - 1].style.display = "block";
    dots[slideIndexCurrent - 1].className += " active";
    slideIndexCurrent++;
}


/*** SHOW SLIDE with timer ***/
function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    setTimeout(showSlides, 3000); // Change image every x seconds
}

// Scroll
// $('.js-anchor-link').click(function (e) {
//     e.preventDefault();
//     var target = $($(this).attr('href'));
//     console.log(target)
//     if (target.length) {
//         var scrollTo = target.offset().top;

//         $('body, html').animate({
//             scrollTop: scrollTo + 'px'
//         }, 800);
//     }
// });

// Get the height of the header
var headerHeight = $("header").height();

// Attach the click event
$('a[href*=#]').bind("click", function (e) {
    e.preventDefault();
    var target = $(this).attr("href"); //Get the target
    var scrollToPosition = $(target).offset().top - headerHeight;

    $('html').animate({
        'scrollTop': scrollToPosition
    }, 800, function () {
        window.location.hash = "" + target;
        // This hash change will jump the page to the top of the div with the same id
        // so we need to force the page to back to the end of the animation
        $('html').animate({
            'scrollTop': scrollToPosition
        }, 0);
    });

    $('body').append("called");
});











//  showSlidesCurrent(slideIndexCurrent);