import { Component, Input } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Autoplay } from 'swiper/modules';

// install Swiper modules
Swiper.use([Autoplay]);

@Component({
    selector: 'logo-slider',
    templateUrl: './logo-slider.html'
})
export class LogoSliderComponent {
    @Input() mainClass: string = '';
    @Input() title: string = '';
    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 2500,
        autoplay: {
            delay: 0,
            disableOnInteraction: false
        },
        breakpoints: {
            320: {
                slidesPerView: 1.7
            },
            600: {
                slidesPerView: 3
            },
            1000: {
                slidesPerView: 5
            },
            1600: {
                slidesPerView: 7
            }
        },
        modules: [Autoplay]
    };
    constructor() {}
}
