import { Component, Input } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Autoplay } from 'swiper/modules';

// install Swiper modules
Swiper.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    selector: 'office-swiper',
    templateUrl: './office-swiper.html',
})
export class OfficeSwiperComponent {
    @Input() mainClass: string = '';
    @Input() showTitle: boolean = true;
    config: SwiperOptions = {
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.ofc-slider-button-next',
            prevEl: '.ofc-slider-button-prev',
        },
        modules: [Navigation, Autoplay],
    };
    constructor() {}
}
