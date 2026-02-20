document.addEventListener("DOMContentLoaded", function () {


    const speakersSwiper = new Swiper(".speakers__slider", {
        slidesPerView: "auto",
        spaceBetween: 20,
        centeredSlides: false,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },

        simulateTouch: true,
        grabCursor: true,

        touchRatio: 0.6,
        touchAngle: 45,

        freeMode: {
            enabled: true,
            momentum: true,
            momentumRatio: 2,
            momentumBounce: true,
            momentumBounceRatio: 1,
            momentumVelocityRatio: 2,
            sticky: true,
        },

        speed: 600,
        resistanceRatio: 0.6,

        breakpoints: {
            320: {
                slidesPerView: 1.05,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 3,
                    sticky: true,
                },
                speed: 800,
            },
            1024: {
                slidesPerView: 2,
                freeMode: {
                    enabled: true,
                    momentum: true,
                    momentumRatio: 2,
                },
            },
            
        },
    });


    const scheduleTableSwiper = new Swiper(".schedule__table-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 600,


        navigation: {
            nextEl: '.schedule__table-slider .navigation__nav-next',
            prevEl: '.schedule__table-slider .navigation__nav-prev',
        },


        effect: 'slide',


        simulateTouch: true,
        grabCursor: true,
        touchRatio: 1,
        touchAngle: 45,
        allowTouchMove: true,


        resistance: true,
        resistanceRatio: 0.6,

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },


        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 20,

            }
        },


        on: {
            init: function () {
                console.log("Schedule slider initialized");
            },
            slideChange: function () {
                console.log("Schedule slider changed to slide:", this.realIndex);
            }
        }
    });


    const scheduleTableSliderElement = document.querySelector('.schedule__table-slider');
    if (scheduleTableSliderElement) {
        scheduleTableSliderElement.addEventListener('mouseenter', function () {
            if (scheduleTableSwiper.autoplay && scheduleTableSwiper.autoplay.running) {
                scheduleTableSwiper.autoplay.stop();
                console.log("Schedule slider autoplay stopped");
            }
        });

        scheduleTableSliderElement.addEventListener('mouseleave', function () {
            if (scheduleTableSwiper.autoplay && !scheduleTableSwiper.autoplay.running) {
                scheduleTableSwiper.autoplay.start();
                console.log("Schedule slider autoplay started");
            }
        });
    }

    const moreSwiper1 = new Swiper(".more__swiper--1", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 600,

        effect: 'slide',

        simulateTouch: true,
        grabCursor: true,
        touchRatio: 1,
        touchAngle: 45,
        allowTouchMove: true,


        resistance: true,
        resistanceRatio: 0.6,

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },


        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 20,

            }
        },


        on: {
            init: function () {
                console.log("Schedule slider initialized");
            },
            slideChange: function () {
                console.log("Schedule slider changed to slide:", this.realIndex);
            }
        }
    });


    const moreSlider1Element = document.querySelector('.more__swiper--1');
    if (moreSlider1Element) {
        moreSlider1Element.addEventListener('mouseenter', function () {
            if (moreSwiper1.autoplay && moreSwiper.autoplay.running) {
                moreSwiper1.autoplay.stop();
                console.log("Schedule slider autoplay stopped");
            }
        });

        moreSlider1Element.addEventListener('mouseleave', function () {
            if (moreSwiper1.autoplay && !moreSwiper1.autoplay.running) {
                moreSwiper1.autoplay.start();
                console.log("Schedule slider autoplay started");
            }
        });
    }

     const moreSwiper2 = new Swiper(".more__swiper--2", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        speed: 600,

        effect: 'slide',

        simulateTouch: true,
        grabCursor: true,
        touchRatio: 1,
        touchAngle: 45,
        allowTouchMove: true,


        resistance: true,
        resistanceRatio: 0.6,

        autoplay: {
            delay: 5000,
            disableOnInteraction: true,
        },


        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            768: {
                slidesPerView: 1,
                spaceBetween: 20,

            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 20,

            }
        },


        on: {
            init: function () {
                console.log("Schedule slider initialized");
            },
            slideChange: function () {
                console.log("Schedule slider changed to slide:", this.realIndex);
            }
        }
    });


    const moreSlider2Element = document.querySelector('.more__swiper--2');
    if (moreSlider2Element) {
        moreSlider2Element.addEventListener('mouseenter', function () {
            if (moreSwiper2.autoplay && moreSwiper2.autoplay.running) {
                moreSwiper2.autoplay.stop();
                console.log("Schedule slider autoplay stopped");
            }
        });

        moreSlider2Element.addEventListener('mouseleave', function () {
            if (moreSwiper2.autoplay && !moreSwiper2.autoplay.running) {
                moreSwiper2.autoplay.start();
                console.log("Schedule slider autoplay started");
            }
        });
    }
});
