import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    templateUrl: './landing-page-experiences.html'
})
export class LandingPageExperiencesComponent {
    storeData: any;
    activeTab = 'all';
    heroH6 = `Fast Websites Expedite Paid Advertising Success`;

    /* Hero Text */
    heroFirstSentence = `Ready To Launch`;
    heroSecondSentence = `Landing Page Experiences`;
    heroThirdSentence = `Break Neck Speeds`;
    heroForthSentence = `Key Word Relevant For Ad Success`;

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
