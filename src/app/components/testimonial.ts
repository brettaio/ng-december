import { Component, Input } from '@angular/core';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Autoplay } from 'swiper/modules';

// install Swiper modules
Swiper.use([Navigation, Autoplay]);

@Component({
    moduleId: module.id,
    selector: 'testimonial',
    templateUrl: './testimonial.html',
})
export class TestimonialComponent {
    @Input() mainClass: string = '';
    @Input() showTitle: boolean = true;
    @Input() type: string = 'common';
    @Input() feedbacks: any = [
        {
            id: 1,
            name: 'Allan Branch',
            role: 'CEO of Lifted',
            thumbnail: '/assets/images/testimonial.png',
            message:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
        },
    ];
    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.testimonial-swiper-button-next',
            prevEl: '.testimonial-swiper-button-prev',
        },
        modules: [Navigation, Autoplay],
    };
    constructor() {}
}
