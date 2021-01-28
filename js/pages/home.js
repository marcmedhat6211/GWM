(function ($) {

    /**SLIDER USING SWIPER**/
    var cardSlider = new Swiper('.card-slider', {
        loop: true,
        navigation: {
			nextEl: '.swiper-btn-next',
			prevEl: '.swiper-btn-prev'
		},
        slidesPerView: 1.85,
        spaceBetween: 60,
        centeredSlides: true,
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 200,
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 1.7,
                spaceBetween: 30,
            },
        }
    });
    
    var count = 1;
    window.onload = function() {
        document.getElementById("counter").innerHTML = `${count}/3`;
    }

    cardSlider.on('slideNextTransitionStart', function () {
        count++;
        if(count <=3 ) {
            document.getElementById("counter").innerHTML = `${count}/3`;
        } else {
            count = 1;
            document.getElementById("counter").innerHTML = `${count}/3`;
        }
    });
    
    cardSlider.on('slidePrevTransitionStart', function () {
        count -= 1;
        if(count >= 1) {
            document.getElementById("counter").innerHTML = `${count}/3`;
        } else {
            count = 3;
            document.getElementById("counter").innerHTML = `${count}/3`;
        }
    });

})(jQuery);

function toggle() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

function openNav() {
    document.getElementById("menu").style.height = "100vh";
}

function closeNav() {
    document.getElementById("menu").style.height = "0vh";
}

// var count = 2;
// function increment() {
//     if(count <= 3) {
//         document.getElementById("counter").innerHTML = `${count++}/3`;
//     }
// }

// function decrement() {
//     if(count > 1) {
//         document.getElementById("counter").innerHTML = `${--count}/3`;
//     }
// }