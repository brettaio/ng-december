import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IndexComponent } from './index';
import { ErrorComponent } from './error';
import { ContactUsComponent } from './contact-us';
import { TermsConditionsComponent } from './terms-conditions';
import { PrivacyPolicyComponent } from './privacy-policy';
import { FaqComponent } from './faq';
import { AboutUsComponent } from './about-us';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        title: 'Bretta Etc Ltd. Google Ad Management & Licensed Templates'
    },
    {
        path: 'about-us',
        component: AboutUsComponent,
        title: 'About Us | Bretta Etc Ltd. Google Ad Management & Licensed Templates'
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
        path: 'landing-pages',
        loadChildren: () =>
            import('./landing-pages/landing-pages.module').then(
                (m) => m.LandingPagesModule
            )
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
