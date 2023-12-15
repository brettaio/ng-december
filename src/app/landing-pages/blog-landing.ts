import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import Swiper from 'swiper';
import { SwiperOptions } from 'swiper/types';
import { Navigation, Autoplay } from 'swiper/modules';

// install Swiper modules
Swiper.use([Navigation, Autoplay]);

@Component({
    templateUrl: './blog-landing.html'
})
export class BlogLandingComponent {
    storeData: any;
    activeTab = 'all';
    config: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.Stories-slider-button-next',
            prevEl: '.Stories-slider-button-prev'
        },
        modules: [Navigation, Autoplay],
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1000: {
                slidesPerView: 3
            }
        }
    };

    config1: SwiperOptions = {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 30,
        speed: 1000,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.feedback-slider-button-next',
            prevEl: '.feedback-slider-button-prev'
        },
        modules: [Navigation, Autoplay],
        breakpoints: {
            320: {
                slidesPerView: 1
            },
            600: {
                slidesPerView: 2
            },
            1000: {
                slidesPerView: 3
            }
        }
    };
    constructor(public store: Store<any>) {
        this.initStore();
    }
    async initStore() {
        this.store
            .select((d) => d.index)
            .subscribe((d) => {
                this.storeData = d;
            });
    }
}
