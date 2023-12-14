import { NgModule, isDevMode, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

// counter
import { CountUpModule } from 'ngx-countup';

// lightbox
import { LightboxModule } from 'ngx-lightbox';

// apexchart
import { NgApexchartsModule } from 'ng-apexcharts';

// store
import { StoreModule } from '@ngrx/store';
import { indexReducer } from './store/index.reducer';

// service
import { AppService } from './service/app.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Layout
import { HeaderComponent } from './layout/header';
import { FooterComponent } from './layout/footer';
import { ErrorComponent } from './error';

//components
import { IndexComponent } from './index';
import { LandingPageExperiencesComponent } from './landing-page-experiences';
import { PortfolioDetailComponent } from './portfolio-detail';
import { ContactusComponent } from './components/contactus-component';
import { ServicesComponent } from './services';
import { ModalDialog } from './components/modal-dialog';
import { ServicesDetailComponent } from './services-detail';
import { TeamComponent } from './team';
import { AboutUsComponent } from './about-us';
import { CareerComponent } from './career';
import { ContactUsComponent } from './contact-us';
import { TermsConditionsComponent } from './terms-conditions';
import { PrivacyPolicyComponent } from './privacy-policy';
import { FaqComponent } from './faq';
import { BlogComponent } from './blog';
import { BlogDetailsComponent } from './blog-details';
import { TestimonialComponent } from './components/testimonial';
import { BlogSliderComponent } from './components/blog-slider';
import { OfficeSwiperComponent } from './components/office-swiper';
import { ProjectSliderComponent } from './components/project-slider';
import { CounterComponent } from './components/counter';
import { FaqAccordionComponent } from './components/faq-component';
import { CryptoComponent } from './crypto';
import { RealEstateComponent } from './real-estate';
import { ModernSaasComponent } from './modern-saas';
import { LogoSliderComponent } from './components/logo-slider';
import { HealthcareComponent } from './healthcare';
import { HotelResortComponent } from './hotel-resort';
import { MarketingComponent } from './marketing';
import { ClientSliderComponent } from './components/client-slider';
import { ApplicationComponent } from './application';
import { NftComponent } from './nft';
import { BlogLandingComponent } from './blog-landing';
import { ConstructionComponent } from './construction';
import { ConsultingComponent } from './consulting';
import { CreativeComponent } from './creative-agency';
import { EventComponent } from './event-concert';
import { GymComponent } from './gym';
import { InsuranceComponent } from './insurance';
import { JobPlacementComponent } from './job-placement';
import { OnlineCoursesComponent } from './online-courses';
import { OnlinePaymentsComponent } from './online-payments';
import { PersonalPortfolioComponent } from './personal-portfolio';
import { RestaurantComponent } from './restaurant';
import { PortfolioLandingComponent } from './portfolio-landing';
import { PhotographyComponent } from './photography';
import { ServiceWorkerModule } from '@angular/service-worker';

//pipe

@NgModule({
    declarations: [
        ModalDialog,
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ErrorComponent,
        IndexComponent,
        LandingPageExperiencesComponent,
        PortfolioDetailComponent,
        ContactusComponent,
        ServicesComponent,
        ServicesDetailComponent,
        TeamComponent,
        AboutUsComponent,
        CareerComponent,
        ContactUsComponent,
        TermsConditionsComponent,
        PrivacyPolicyComponent,
        FaqComponent,
        BlogComponent,
        BlogDetailsComponent,
        TestimonialComponent,
        BlogSliderComponent,
        OfficeSwiperComponent,
        ProjectSliderComponent,
        CounterComponent,
        FaqAccordionComponent,
        CryptoComponent,
        RealEstateComponent,
        ModernSaasComponent,
        LogoSliderComponent,
        HealthcareComponent,
        HotelResortComponent,
        MarketingComponent,
        ClientSliderComponent,
        ApplicationComponent,
        NftComponent,
        BlogLandingComponent,
        ConstructionComponent,
        ConsultingComponent,
        CreativeComponent,
        EventComponent,
        GymComponent,
        InsuranceComponent,
        JobPlacementComponent,
        OnlineCoursesComponent,
        OnlinePaymentsComponent,
        PersonalPortfolioComponent,
        RestaurantComponent,
        PortfolioLandingComponent,
        PhotographyComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        CountUpModule,
        LightboxModule,
        NgApexchartsModule,
        StoreModule.forRoot({ index: indexReducer }),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        })
    ],
    providers: [AppService, Title],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}
