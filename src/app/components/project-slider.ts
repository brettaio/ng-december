import { Component, Input } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Autoplay } from 'swiper/modules';

// install Swiper modules
Swiper.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    selector: 'project-slider',
    templateUrl: './project-slider.html',
})
export class ProjectSliderComponent {
    @Input() mainClass: string = '';
    @Input() showTitle: boolean = true;
    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.project-slider-button-next',
            prevEl: '.project-slider-button-prev',
        },
        modules: [Navigation, Autoplay],
        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
            1000: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 5,
            },
        },
    };
    constructor() {}
}
