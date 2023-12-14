import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    moduleId: module.id,
    templateUrl: './landing-page-experiences.html'
})
export class LandingPageExperiencesComponent {
    storeData: any;
    activeTab = 'all';
    heroH6 = `Fast Websites Expedite paid Advertising Success`;

    /* Hero Text */
    heroFirstSentence = `Here's What We Can Launch`;
    heroSecondSentence = `Maximise Ad Conversions`;
    heroThirdSentence = `Break Neck Speed PWA's`;
    heroForthSentence = `Articulated Key Word Relevance = Success`;

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
