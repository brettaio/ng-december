import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index';
import { ErrorComponent } from './error';
import { PortfolioDetailComponent } from './portfolio-detail';
import { ServicesComponent } from './services';
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
import { CryptoComponent } from './crypto';
import { RealEstateComponent } from './real-estate';
import { ModernSaasComponent } from './modern-saas';
import { HealthcareComponent } from './healthcare';
import { HotelResortComponent } from './hotel-resort';
import { MarketingComponent } from './marketing';
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
import { LandingPageExperiencesComponent } from './landing-page-experiences';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        title: 'Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'landing-page-experiences',
        component: LandingPageExperiencesComponent,
        title: 'Portfolio | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'portfolio-detail',
        component: PortfolioDetailComponent,
        title: 'Portfolio Detail | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'services',
        component: ServicesComponent,
        title: 'Services | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'services-detail',
        component: ServicesDetailComponent,
        title: 'Services Detail | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'team',
        component: TeamComponent,
        title: 'Team | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'career',
        component: CareerComponent,
        title: 'Career | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'contact-us',
        component: ContactUsComponent,
        title: 'Contact Us | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'terms-conditions',
        component: TermsConditionsComponent,
        title: 'Terms Conditions | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
        title: 'Privacy Policy | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'faq',
        component: FaqComponent,
        title: 'FAQs | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'blog',
        component: BlogComponent,
        title: 'Blog | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'blog-details',
        component: BlogDetailsComponent,
        title: 'Blog Details | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'crypto',
        component: CryptoComponent,
        title: 'Crypto | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'real-estate',
        component: RealEstateComponent,
        title: 'Real Estate | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'modern-saas',
        component: ModernSaasComponent,
        title: 'Modern SAAS | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'healthcare',
        component: HealthcareComponent,
        title: 'Health Care | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'hotel-resort',
        component: HotelResortComponent,
        title: 'Hotel & Resort | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'marketing',
        component: MarketingComponent,
        title: 'Marketing | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'application',
        component: ApplicationComponent,
        title: 'Application | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'nft',
        component: NftComponent,
        title: 'Nft | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'blog-landing',
        component: BlogLandingComponent,
        title: 'Blog | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'construction',
        component: ConstructionComponent,
        title: 'Construction | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'consulting',
        component: ConsultingComponent,
        title: 'Consulting | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'creative-agency',
        component: CreativeComponent,
        title: 'Creative Agency | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'event-concert',
        component: EventComponent,
        title: 'Event Concert | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'gym',
        component: GymComponent,
        title: 'GYM | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'insurance',
        component: InsuranceComponent,
        title: 'Insurance | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'job-placement',
        component: JobPlacementComponent,
        title: 'Job Placement | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'online-courses',
        component: OnlineCoursesComponent,
        title: 'Online Courses | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'online-payments',
        component: OnlinePaymentsComponent,
        title: 'Online Payments | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'personal-portfolio',
        component: PersonalPortfolioComponent,
        title: 'Personal Portfolio | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'restaurant',
        component: RestaurantComponent,
        title: 'Restaurant | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'portfolio-landing',
        component: PortfolioLandingComponent,
        title: 'Portfolio Landing | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'photography',
        component: PhotographyComponent,
        title: 'Photography | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    { path: '**', component: ErrorComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {}
