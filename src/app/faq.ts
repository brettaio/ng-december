import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    templateUrl: './faq.html'
})
export class FaqComponent {
    storeData: any;
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
