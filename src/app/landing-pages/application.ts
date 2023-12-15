import { Component } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Autoplay } from 'swiper/modules';

// install Swiper modules
Swiper.use([Navigation, Autoplay]);
@Component({
    templateUrl: './application.html'
})
export class ApplicationComponent {
    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 2500,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        modules: [Autoplay],
        breakpoints: {
            320: {
                slidesPerView: 2
            },
            600: {
                slidesPerView: 4
            },
            1000: {
                slidesPerView: 5
            },
            1600: {
                slidesPerView: 7
            }
        }
    };
    constructor() {}
}
