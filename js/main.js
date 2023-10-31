jQuery(window).scroll(function () {
    if (jQuery(this).scrollTop() > 80) {
        jQuery("header").addClass("fixed-header");
    } else {
        jQuery("header").removeClass("fixed-header");
    }
});