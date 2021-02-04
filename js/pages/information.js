// $(document).ready(function() {
//     $(window).resize(function() {
//         if ($(window).width() <= 991.98) {
//             $("#car-details").addClass("order-2");
//             $(".car-image").addClass("d-flex justify-content-center");
//         }
//     });
// });

$(document).ready(function() {
    // $("#safety").click(function(e) {
    //     $(".safety").toggleClass("show-image");
    // });

    // $("#engine").click(function(e) {
    //     $(".engine").toggleClass("show-image");
    // });

    // $("#transmission").click(function(e) {
    //     $(".transmission").toggleClass("show-image");
    // });


    /**SLIDER USING SWIPER**/
    var informationSlider = new Swiper('.exterior-interior-slider', {
        loop: false,
        slidesPerView: 2.5,
        spaceBetween: 10,
        breakpoints: {
            640: {
                slidesPerView: 1.5,
                spaceBetween: 5,
            },
            768: {
                slidesPerView: 1.5,
                spaceBetween: 5,
            },
            1024: {
                slidesPerView: 1.5,
                spaceBetween: 5,
            },
        }
    });




    $("#highlights button").click(function() {
        let elementId = $(this).attr("id");
        $(".highlights-image.show-image").removeClass("show-image");
        $(".highlights-image." + elementId).addClass("show-image");
    });

});