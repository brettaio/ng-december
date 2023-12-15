import { NgModule, isDevMode, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

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

import { AboutUsComponent } from './about-us';
import { ContactUsComponent } from './contact-us';
import { TermsConditionsComponent } from './terms-conditions';
import { PrivacyPolicyComponent } from './privacy-policy';
import { FaqComponent } from './faq';

import { ServiceWorkerModule } from '@angular/service-worker';
import { SharedModule } from './shared/shared.module';

//pipe

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        ErrorComponent,
        IndexComponent,
        AboutUsComponent,
        ContactUsComponent,
        TermsConditionsComponent,
        PrivacyPolicyComponent,
        FaqComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CommonModule,
        AppRoutingModule,
        StoreModule.forRoot({ index: indexReducer }),
        ServiceWorkerModule.register('ngsw-worker.js', {
            enabled: !isDevMode(),
            // Register the ServiceWorker as soon as the application is stable
            // or after 30 seconds (whichever comes first).
            registrationStrategy: 'registerWhenStable:30000'
        }),
        SharedModule
    ],
    providers: [AppService, Title],
    schemas: [NO_ERRORS_SCHEMA],
    bootstrap: [AppComponent]
})
export class AppModule {}
