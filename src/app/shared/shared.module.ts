import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalDialog } from './modal-dialog';
import { TestimonialComponent } from './testimonial';
import { BlogSliderComponent } from './blog-slider';
import { OfficeSwiperComponent } from './office-swiper';
import { ProjectSliderComponent } from './project-slider';
import { CounterComponent } from './counter';
import { FaqAccordionComponent } from './faq-component';
import { ClientSliderComponent } from './client-slider';
import { ContactusComponent } from './contactus-component';
import { LogoSliderComponent } from './logo-slider';

@NgModule({
    declarations: [
        ModalDialog,
        ContactusComponent,
        TestimonialComponent,
        BlogSliderComponent,
        OfficeSwiperComponent,
        ProjectSliderComponent,
        CounterComponent,
        FaqAccordionComponent,
        ClientSliderComponent,
        LogoSliderComponent
    ],
    imports: [CommonModule],
    exports: [
        ModalDialog,
        ContactusComponent,
        TestimonialComponent,
        BlogSliderComponent,
        OfficeSwiperComponent,
        ProjectSliderComponent,
        CounterComponent,
        FaqAccordionComponent,
        ClientSliderComponent,
        LogoSliderComponent
    ],

    schemas: [NO_ERRORS_SCHEMA]
})
export class SharedModule {}
