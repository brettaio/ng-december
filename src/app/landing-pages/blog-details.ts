import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
    templateUrl: './blog-details.html'
})
export class BlogDetailsComponent {
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
