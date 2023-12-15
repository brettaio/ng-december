import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

//landing pages

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
import { CryptoComponent } from './crypto';
import { RealEstateComponent } from './real-estate';
import { ModernSaasComponent } from './modern-saas';
import { HealthcareComponent } from './healthcare';
import { HotelResortComponent } from './hotel-resort';
import { MarketingComponent } from './marketing';
import { BlogComponent } from './blog';
import { BlogDetailsComponent } from './blog-details';
import { LandingPageExperiencesComponent } from './landing-page-experiences';
import { PortfolioDetailComponent } from './portfolio-detail';

import { ServicesComponent } from './services';
import { ServicesDetailComponent } from './services-detail';
import { TeamComponent } from './team';
import { CareerComponent } from './career';

import { LandingPagesRoutingModule } from './landing-pages-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
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
        PhotographyComponent,
        CryptoComponent,
        RealEstateComponent,
        ModernSaasComponent,
        HealthcareComponent,
        HotelResortComponent,
        MarketingComponent,
        BlogComponent,
        BlogDetailsComponent,
        LandingPageExperiencesComponent,
        PortfolioDetailComponent,
        ServicesComponent,
        ServicesDetailComponent,
        TeamComponent,
        CareerComponent
    ],
    imports: [CommonModule, LandingPagesRoutingModule, SharedModule],
    schemas: [NO_ERRORS_SCHEMA]
})
export class LandingPagesModule {}
